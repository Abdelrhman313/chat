import { Component, Input } from '@angular/core';
import { popup } from '../../animations/animations';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  animations: [popup],
})
export class PopupComponent {
  constructor() { }
  @Input() width: any = 250;
  @Input() height: any;
  @Input() extraClass: any = "";
  @Input() outsideClick: boolean = true;
  protected isOpen = false;
  close() {
    this.isOpen = false;
  }
  open() {
    this.isOpen = true;
  }
  overlayOutsideClick(event: any) {
    let isBackDrop = event.target.classList.contains("popup-backdrop-class");
    if (this.outsideClick && isBackDrop) {
      this.isOpen = false;
    }
  }
}
