import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-addModal',
  templateUrl: './addModal.component.html',
  styleUrls: ['./addModal.component.scss'],
})

export class AddModalComponent {

  isAddModalOpen = false;
  inputValue = '';
  list = { id: Math.round(Math.random() * 100), title: '', isComplete: false, isEditTitleOpen: false };

  @Input() storeIndexTheme = '';
  @Output() openModal = new EventEmitter<any>();
  @Output() addList = new EventEmitter<any>();

  openAddModal() {
    this.openModal.emit();
  }

  addTodoItem() {
    this.list.title = this.inputValue;
    this.addList.emit(this.list);
    this.inputValue = '';
  }

}
