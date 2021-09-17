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

  tasks: Task[] = [] ; 
  subscription : Subscription | null = null ; 

  constructor(private taskService: TaskService) {
    this.tasks = [...this.taskService.getTask()]
    this.subscription = this.taskService.onChange().subscribe(value=>{
      this.tasks = [...value]
    })
  }

  ngOnInit(): void {
    
  }

  // addTodo(task: any):void{
  //   this.taskService.addTask(task);
  // }
  // removeTask(task: Task) : void{
  //   this.taskService.removeTask(task)
  // }

}
