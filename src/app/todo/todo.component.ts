import { TodoService } from './../todo.service';
import { Component, OnInit } from '@angular/core';
import { TodoInterface } from '../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos: TodoInterface[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos = this.todoService.todos;
  }

  onChangeStatus(index: number) {
    this.todoService.updateStatus(index)
  }

  OnRemove(index: number) {
    this.todoService.removeTodo(index)
  }

}
