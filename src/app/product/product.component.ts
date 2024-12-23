import { Component } from '@angular/core';
import { CommonService } from '../core/services/common.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
//   class="sae2";
//   subject="Angular";
//   color="";

//  onClick(){
//   return alert("Vous avez cliquer!!!!!");
//  }

constructor(private cs:CommonService){}

title: string = 'ProductList';
  color = 'red';
  productList = [
    { id: 1, pName: 'PC', price: '300', img: '../assets/images/pc.jpg' },
    { id: 2, pName: 'souris', price: '50', img: '../assets/images/souris.png' },
    { id: 3, pName: 'clavier', price: '60', img: '../assets/images/download.jpg' },
  ];

  ngOnInit(){
    console.log(this.cs.getSameValueOf(this.productList,'price',20));

  }
  clickMe() {
    return alert('vous avez cliquer');
  }
}
