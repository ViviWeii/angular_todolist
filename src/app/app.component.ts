import { Component, OnInit } from '@angular/core';

interface todo {
  id: number,
  isComplete: boolean,
  title: string,
  isEditTitleOpen: boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {

  isEditModeOpen = false;
  isAddModalOpen = false;
  isColorModalOpen = false;
  changeTitle = "";
  editTitle = "";
  
  storeIndexTheme = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("主題顏色"))));
  storeTodoList = JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem("代辦事項"))));

  todoList = [
    { id: 1, title: '運動', isComplete: false, isEditTitleOpen: false },
    { id: 2, title: '買花', isComplete: true, isEditTitleOpen: false },
    { id: 3, title: '繳錢', isComplete: false, isEditTitleOpen: false },
  ];

  ngOnInit(){
    if(this.storeTodoList == ""){
      this.storeTodoList = this.todoList;
    }
    localStorage.setItem("代辦事項",JSON.stringify(this.storeTodoList));
    localStorage.setItem("主題顏色",JSON.stringify(this.storeIndexTheme));
  }

  changeEditMode():void {
    this.isEditModeOpen = !this.isEditModeOpen;
  }

  openAddModal():void {
    this.isAddModalOpen = !this.isAddModalOpen;
  }

  openColorModal():void {
    this.isColorModalOpen = !this.isColorModalOpen;
  }

  changeComplete(item: any):void {
    this.storeTodoList.forEach(
      (i: todo) => {
      if (i.id == item.target.id) {
        i.isComplete = item.target.checked;
      }
    });
    localStorage.setItem("代辦事項",JSON.stringify(this.storeTodoList));
  }

  openOrCloseEdit(item: any):void {
    this.storeTodoList.forEach(
      (i: todo) => {
      if(i.isEditTitleOpen == true){
        i.isEditTitleOpen = false;
        this.changeTitle = "";
      }
      if (i.id == item.target.id) {
        i.isEditTitleOpen = item.target.checked;
      }
    });
    localStorage.setItem("代辦事項",JSON.stringify(this.storeTodoList));
  }

  changeColor(themeColor: any):void {
    this.storeIndexTheme = themeColor.color;
    localStorage.setItem("主題顏色",JSON.stringify(this.storeIndexTheme));
  }

  addTodoItem(item: any) {
    this.storeTodoList.push(item);
    this.isAddModalOpen = !this.isAddModalOpen;
    localStorage.setItem("代辦事項",JSON.stringify(this.storeTodoList));
  }

  editTodoTitleComplete(title: string){
    this.storeTodoList.forEach(
      (i: todo) => {
        if(this.changeTitle == ""){
          i.isEditTitleOpen = false;
          return;
        }
        if(title == i.title){
          i.title = this.changeTitle;
          i.isEditTitleOpen = false;
          this.changeTitle = "";
          return;
        }
      }
    );
    localStorage.setItem("代辦事項",JSON.stringify(this.storeTodoList));
  }
  
  deleteTodoItem(item: any):void {
    this.storeTodoList = this.storeTodoList.filter((e: todo) => e.id !== item);
    localStorage.setItem("代辦事項",JSON.stringify(this.storeTodoList));
  }

}
