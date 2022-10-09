import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
id: number=0;
title: string = "";
price:number = 0;
cantidad: number =0;
  constructor(private itemservice: ItemService, private router:Router) { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    const item = new Item();
    item.id = this.id;
    item.title = this.title;
    item.precio = this.price;
    item.cantidad = this.cantidad;
    item.completo = false;

    this.itemservice.addItem(item);
    this.router.navigate(['/']);
  }
}
