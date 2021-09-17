import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks:Task[] = [
    {
      id: 0 , 
      description: "take out the trash",
      completed: true,
    },
    {
      id: 1, 
      description: "do homework", 
      completed: false
    }
  ] ; 
  private subject = new Subject<any>();

  constructor() { }


  getTask(): Task[] {
    return this.tasks;
  }
  addTask(task: any):void{
    this.tasks.push({
      id:this.tasks[this.tasks.length-1].id+1,
      description: task.description, 
      completed: task.completed,
    })
    this.subject.next(this.tasks)
  }

  removeTask(task : Task ) : void{
    this.tasks = this.tasks.filter((tk)=> tk.id!== task.id)
    this.subject.next(this.tasks)
  }

  onChange(): Observable<any>{
    return this.subject.asObservable();
  }
}
