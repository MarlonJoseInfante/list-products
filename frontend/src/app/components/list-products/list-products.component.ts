import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent implements OnInit{

  listProducts: Product[]=[
    {name: "Coca cola", description: "Bedida con azucar", price:4, stock:200},
    {name: "Corona", description: "Bedida con alcohol", price:5, stock:300},

  ]
  constructor(){}

 ngOnInit(): void {
     
 }

}
