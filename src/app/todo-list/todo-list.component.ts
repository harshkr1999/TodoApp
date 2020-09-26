import { Component, OnInit } from '@angular/core';
//import { DataService } from '../data.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor() { }


  count = 3

  lists = ['Grocery', 'Shoes', 'Coffee', 'KFC!'];

 

  datas = [];

  add(data) {
    this.datas.push(data.value);
    this.count++;
    data.value = '';
    
  }

  delete(data) {
    this.datas =this.datas.filter(
      el => {
        return el !== data;
      }
    ); 
    this.count--;
    data.value = '';
  }

  delete1(list) {
    this.lists = this.lists.filter(
      el => {
        return el !== list;
      }
    );
    this.count--;
    list.value = '';
  }

    

    /*
      count(data,list){
        this.countTodo = this.datas.length + this.lists.length;
        return this.countTodo;
      }
      
    */
  ngOnInit(): void {
  }

}
