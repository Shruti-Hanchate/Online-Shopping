import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  url1: string = 'http://localhost:3000/product/';

  constructor(private _http: HttpClient) { }





  getAllProduct(val1: any) {
    return this._http.get(`http://localhost:3000/product/${val1}`);
  }
  deleteProduct(id: any) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    return this._http.delete(this.url1 + id, { headers: head });
  }
  addProduct(item) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    let body = JSON.stringify(item);
    return this._http.post(this.url1, body, { headers: head });
  }
//   getAllRegisterByName(mobile1: any, name1: any, std1: any) {
//     return this._http.get(
//       `http://localhost:3000/register/${mobile1}/${name1}/${std1}`
//     );
//   }
  getAll() {
    return this._http.get(`http://localhost:3000/product/`);
  }
  editProduct(item) {
    let head = new HttpHeaders().set('Content-Type', 'application/JSON');
    let body = JSON.stringify(item);
    return this._http.put(this.url1 + item.id, body, { headers: head });
  }
}
