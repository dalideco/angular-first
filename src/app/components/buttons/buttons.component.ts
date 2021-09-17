import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Output() increment = new EventEmitter<number>() ; 
  @Output() decrement = new EventEmitter<number>() ; 

  constructor() { }

  ngOnInit(): void {
  }

  incrementEmit(): void {
    this.increment.emit(5);
  }
  decrementEmit() : void {
    this.decrement.emit(2) ; 
  }

}
