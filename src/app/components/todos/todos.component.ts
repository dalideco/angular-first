import { Component, OnInit , Input, EventEmitter, Output} from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  @Output() removeTask = new EventEmitter<Task>();
  @Input() tasks: Task[]= [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }


  remove(task: Task){
    this.taskService.removeTask(task)
  }
}
