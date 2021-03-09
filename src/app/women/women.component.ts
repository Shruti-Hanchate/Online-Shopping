import { Component, OnInit } from '@angular/core'; 
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './Product';
@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  type: string="women";
  arrProduct: Product[] = [];
  constructor(
    private _data: ServicesService,
    private _actroute: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.type)
    this._data.getAll().subscribe((data: Product[]) => {
      console.log(this.type)
      this.arrProduct = data;
      console.log('gfhgj',this.arrProduct)
    });
  }

}
