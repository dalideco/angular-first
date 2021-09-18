import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
 

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    
  }

  // addTodo(task: any):void{
  //   this.taskService.addTask(task);
  // }
  // removeTask(task: Task) : void{
  //   this.taskService.removeTask(task)
  // }

}
