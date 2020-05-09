import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  public title: string;
  public description: string;
  @Input() public pageTile: string;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onSubmit() {
    let title = this.title;
    let description = this.description;
    this.todoService.addNewTodo(title, description);
  }
}
