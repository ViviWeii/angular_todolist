import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-addModal',
  templateUrl: './addModal.component.html',
  styleUrls: ['./addModal.component.scss'],
})

export class AddModalComponent {

  isAddModalOpen = false;
  inputValue = '';
  list = { id: Math.round(Math.random() * 1000), title: '', isComplete: false, isEditTitleOpen: false };

  @Input() storeIndexTheme = '';
  @Output() openModal = new EventEmitter<any>();
  @Output() biClose = new EventEmitter<any>();

  openAddModal():void {
    this.openModal.emit();
  }

  addTodoItem():void {
    this.list.title = this.inputValue;
    this.biClose.emit(this.list);
    this.inputValue = '';
  }

}
