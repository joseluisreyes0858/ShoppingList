import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items:Item[] = [];
  total:number = 0;

  constructor(private itemservice:ItemService) { }

  ngOnInit(): void {

    //this.items = [];
    //this.items = this.itemservice.getItems();
    this.itemservice.getItems().subscribe(data => {
      this.items = data;
    })
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
