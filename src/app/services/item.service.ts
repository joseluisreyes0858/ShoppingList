import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Item } from '../models/item';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService { 

  url:string = 'http://localhost:3000/items';

  httpOptions = {
     Headers:{
    'Content-Type': 'application/json'
  }
 };

  items:Item[]=[
    {
    id: 0,
    title: 'manzana',
    precio:  1000,
    cantidad:  4,
    completo: false,

    },
    {
    id:  1,
    title:  "Pan",
    precio:  500,
    cantidad:  2,
    completo: true,
    }
    ,
    {
    id:  2,
    title:  "Camisa",
    precio:  50000,
    cantidad:  2,
    completo: true,
    }
  ];
  constructor(private http:HttpClient) { }


  getItems():Observable<Item[]>{
    return this.http.get<Item[]>(this.url);
  }

  addItem(item:Item):Observable<Item>{
    return this.http.post<Item>(this.url, item, this.httpOptions);
  }
}
