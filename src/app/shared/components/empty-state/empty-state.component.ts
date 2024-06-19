import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empty-state',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.css']
})
export class EmptyStateComponent implements OnInit {
  @Output() reset = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

  filterReset() {
    this.reset.emit();
  }
}
