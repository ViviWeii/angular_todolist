import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colorModal',
  templateUrl: './colorModal.component.html',
  styleUrls: ['./colorModal.component.scss'],
})

export class ColorModalComponent {

  isColorModalOpen = false;

  @Output() openModal = new EventEmitter<any>();
  @Output() changeThemeColor = new EventEmitter<any>();

  openColorModal() {
    this.openModal.emit();
  }
    
  changeColor(themeColor: string) {
    this.changeThemeColor.emit({color: themeColor});
  }
  
}
