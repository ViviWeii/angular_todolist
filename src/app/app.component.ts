import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Todo } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  STORAGE_LIST = "代辦事項";
  STORAGE_THEME = "主題顏色";
  editModeOpened = false;
  addModalOpened = false;
  colorModalOpened = false;
  dragOpened = false;
  changeTitle = "";
  storeIndexTheme = "";
  storeTodoList: Todo[] = [];

  ngOnInit():void {
    const list = localStorage.getItem(this.STORAGE_LIST);
    if (list) {
      this.storeTodoList = JSON.parse(list);
    }
    const theme = localStorage.getItem(this.STORAGE_THEME);
    if (theme) {
      this.storeIndexTheme = theme;
    }
  }

  private save() {
    localStorage.setItem(this.STORAGE_LIST,JSON.stringify(this.storeTodoList));
  }

  changeEditMode():void {
    this.editModeOpened = !this.editModeOpened;
    this.storeTodoList.forEach( i => {
      i.editTitleOpened = false;
    });
  }

  openAddModal():void {
    this.addModalOpened = !this.addModalOpened;
  }

  openColorModal():void {
    this.colorModalOpened = !this.colorModalOpened;
  }

  changeComplete(item: Todo):void {
    item.completed = !item.completed;
    this.save();
  }

  changeColor(themeColor: any):void {
    this.storeIndexTheme = themeColor;
    localStorage.setItem(this.STORAGE_THEME,this.storeIndexTheme);
  }

  openOrCloseEdit(item: Todo):void {
    this.storeTodoList.forEach( i => {
      if(i.editTitleOpened){
        i.editTitleOpened = false;
        this.changeTitle = "";
      }
      if (i.id == item.id) {
        i.editTitleOpened = !i.editTitleOpened;
      }
    });
    this.save();
  }

  closeEdit(id: number){
    this.storeTodoList.forEach( i => {
      if (i.id == id) {
        i.editTitleOpened = false;
      }
    });
  }

  addTodoItem(item: Todo):void {
    this.addModalOpened = !this.addModalOpened;
    this.storeTodoList.push(item);
    this.save();
  }

  editTodoTitleComplete():void {
    this.storeTodoList.forEach( i => {
        if(!this.changeTitle){
          i.editTitleOpened = false;
        }
      }
    );
    this.save();
  }
  
  deleteTodoItem(index: any):void {
    // this.storeTodoList = this.storeTodoList.filter( e => e.id !== item);
    this.storeTodoList.splice(index,1);
    this.save();
  }

  judgeDragOpen():void {
    this.dragOpened = true;
  }

  judgeDragClose():void {
    this.dragOpened = false;
  }

  drop(event: CdkDragDrop<string[]>):void {
    moveItemInArray(this.storeTodoList, event.previousIndex, event.currentIndex);
    this.save();
  }

}
