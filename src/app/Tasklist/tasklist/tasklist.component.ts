import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  newTodo: string;
  id:number;
  todos: any;
  local: any;
  todoObj: any;
  disableC : boolean;
  constructor() { 
    this.id=0;
    this.newTodo = '';
    this.todos = [];
    this.cargarArreglo();
  }
 

  ngOnInit(): void {
  }

 

  addTodo(event) {
    this.todoObj = {
      id:this.id,
      newTodo: this.newTodo,
      completed: false
    }
    if(this.todos.lenght>0){
      let obj=this.todos[this.todos.lenght-1];
      this.todoObj.id=obj.id+1;
    }
      
    this.todos.push(this.todoObj);
    this.guardarArreglo();
    this.newTodo = '';
    event.preventDefault();
  }

  guardarArreglo(){
  localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  cargarArreglo(){
    if (localStorage.getItem('todos') ){
      this.todos = JSON.parse(localStorage.getItem('todos'));
    }else{
      this.todos = [];
    }
  }


  is_valid(control:string): boolean{
    return false;
  }

  deleteAll(){
    this.todos=[];
    this.guardarArreglo();
    this.disableC=false;
  }

}
