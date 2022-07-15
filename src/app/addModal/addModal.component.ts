import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../interface';

@Component({
  selector: 'app-addModal',
  templateUrl: './addModal.component.html',
  styleUrls: ['./addModal.component.scss'],
})

export class AddModalComponent {

  addModalOpened = false;
  inputValue = "";
  item: Todo = { id: 1, title: "", completed: false, editTitleOpened: false };

  @Input() storeTodoList: Todo[] = [];
  @Input() storeIndexTheme = "";
  @Output() openModal = new EventEmitter<boolean>();
  @Output() closeModal = new EventEmitter<Todo>();

  colseAddModal():void {
    this.openModal.emit();
  }

  addTodoItem():void {
    this.item.title = this.inputValue;
    this.storeTodoList.forEach( i => {
      this.item.id = Math.max(i.id) + 1;
    });
    this.closeModal.emit(this.item);
    this.inputValue = "";
  }

}
