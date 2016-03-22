import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task';
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
      <h3>Blank Template</h3>
      <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
      <button (click)="addTask(newDescription)" class="btn btn-info add-button">Add</button>
    </div>
  `
})
export class NewTaskComponent{
  public onSubmitNewTask = EventEmitter<Task>;
  constructor (){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement){
    this.onSubmitNewTask.emit(userDescription.value);
    userDescription.value = "";
  }
}
