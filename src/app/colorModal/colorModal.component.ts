import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-colorModal',
  templateUrl: './colorModal.component.html',
  styleUrls: ['./colorModal.component.scss'],
})

export class ColorModalComponent {

  colorModalOpened = false;

  @Output() openModal = new EventEmitter<boolean>();
  @Output() changeThemeColor = new EventEmitter<string>();

  closeColorModal():void {
    this.openModal.emit();
  }
    
  changeColor(themeColor: string):void {
    this.changeThemeColor.emit(themeColor);
  }
  
}
