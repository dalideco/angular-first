import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  @Output() addTodo  = new EventEmitter<any>();
  description: string = "";
  completed:boolean = false ; 

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  add() : void {
    this.taskService.addTask({
      description: this.description,
      completed: this.completed
    })
  }

}
