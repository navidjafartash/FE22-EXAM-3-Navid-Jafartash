import { IProducts } from './../iproducts';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: IProducts[]=[];
  formData!: string;

  constructor() { }


  addToCart(item: IProducts){
    if(this.cartItems.includes(item)){
      item.quantity++
    }else{
      this.cartItems.push(item)
    }
  }

  increaseQtty(item:IProducts){
    item.quantity ++
  }

  decreaseQtty(item: IProducts) {
    if (item.quantity > 1) {
      item.quantity--;
    } else {
      this.deleteItem(item);
    }
  }

  deleteItem(item: IProducts) {
    item.quantity = 1;
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  getData(){
    return this.cartItems
  }

  addData(data: string){
    this.formData = data
  }

  getTotal(): number{
    let total = 0;
    this.cartItems.forEach(item => total+= item.price * item.quantity )
    return total;
  }
}
