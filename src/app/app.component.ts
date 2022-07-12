import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  isEditModeOpen = false;
  isAddModalOpen = false;
  isColorModalOpen = false;
  indexTheme = '';

  todoList = [
    { id: 1, title: '運動', isComplete: false },
    { id: 2, title: '買花', isComplete: true },
    { id: 3, title: '繳錢', isComplete: false },
  ];

  changeEditMode() {
    this.isEditModeOpen = !this.isEditModeOpen;
  }

  openAddModal() {
    this.isAddModalOpen = !this.isAddModalOpen;
  }

  openColorModal() {
    this.isColorModalOpen = !this.isColorModalOpen;
  }

  changeComplete(item: any) {
    this.todoList.forEach((i) => {
      if (i.id == item.target.id) {
        i.isComplete = item.target.checked;
      }
    });
  }

  changeColor(themeColor: any) {
    this.indexTheme = themeColor.color;
  }

  addTodoItem(item: any) {
    this.todoList.push(item);
    this.isAddModalOpen = !this.isAddModalOpen;
  }
  
  deleteTodoItem(item: any) {
    this.todoList = this.todoList.filter((e) => e.id !== item);
  }
}
