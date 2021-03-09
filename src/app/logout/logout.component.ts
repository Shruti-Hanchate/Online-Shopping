import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
// all(){
//   window.localStorage.setItem('mobile','123');
//   window.localStorage.setItem('password','abc');
//   console.log(localStorage)
// }
}
