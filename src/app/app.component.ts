import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem, TodoList, TodolistService } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'l3m-tpX-todolist-angular-y2022';
  readonly todoListObs : Observable<TodoList>;
  constructor(private tds : TodolistService){
    this.todoListObs = tds.observable;
  }

  create(...labels : readonly string[]){
    this.tds.create(...labels)
  }

  update(event : boolean[]){
    console.log(event);
  }

  delete(item : TodoItem){
    this.tds.delete(item);
  }


  deleteAll(items : readonly TodoItem[]){
    let l={label:"",isDone:true,id:0};
    this.tds.delete(l,...items);
  }
}





