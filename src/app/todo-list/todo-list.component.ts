import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  nam='';
  list:any[]=[];
  newlist:any[]=[];
  addTaskValue(value:string){
    this.list.push({id:this.list.length,name:value})

    ;
    this.list=this.newlist
  }


  getlength():number{
    return this.list.length}

    filterResults(searchText:string){
      // if(!searchText)return this.list
     searchText=searchText.toLowerCase();
     this.list=this.list.filter(it=>{return it.name.toLowerCase().includes(searchText)})}

     retur(valu:string){
      if(valu=='')
      this.list=this.newlist
     }

  removeTask(id:number){
    this.list=this.list.filter(todo=>todo.id!==id)

  }
  constructor() { }

  ngOnInit(): void {
  }

}
