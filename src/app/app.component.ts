import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  title : string ="whatever";
  number: number =0;

  ngOnInit(): void {
  
  }

  increment(change: number): void{  
    this.number=this.number+ change ;
  }
  decrement(change: number) : void{
    this.number = this.number -change ; 
  }
  
}
