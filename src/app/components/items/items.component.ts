import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[] = [];
  total:number = 0;

  constructor() { }

  ngOnInit(): void {

    this.items = [
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
    this.getTotal();
  }
  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id); 
    this.getTotal();
  }

  toggleItem(item:Item){
    this.getTotal();
  }
  getTotal(){
    this.total = this.items
    .filter (item => !item.completo)
    .map(item => item.cantidad * item.precio)
    .reduce((acc, item) => acc += item, 0);
      console.log(this.total);
  }
}
