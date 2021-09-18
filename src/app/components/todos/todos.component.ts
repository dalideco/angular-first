import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import {  Subscription } from 'rxjs';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {


  tasks: Task[] = [];
  subscription : Subscription |null = null ; 

  constructor(private taskService: TaskService) { 
    this.tasks = [...this.taskService.getTask()]
    this.subscription = this.taskService.onChange().subscribe(value=>{
      this.tasks = [...value]
    })
  }

  ngOnInit(): void {
  }

  remove(task: Task) {
    this.taskService.removeTask(task)
  }
}