import { Component, OnInit } from '@angular/core';
import{Todo} from './addcart';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  arrTodos: Todo[] = [
    new Todo(1, 'heelo hi', 'done'),
    new Todo(2, 'hey hiii', 'pending'),
    new Todo(3, 'hey hiii', 'pending'),
    new Todo(4, 'hey hiii', 'pending'),
    new Todo(5, 'hey hiii', 'pending'),
    new Todo(6, 'hey hiii', 'pending'),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  delete(item: Todo): void {
    this.arrTodos.splice(this.arrTodos.indexOf(item), 1);
  }
}
