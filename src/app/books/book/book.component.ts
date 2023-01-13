import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../interface/Book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() book: Book = {} as Book

  isInCart = false

  addToCart(){
    this.isInCart=true
    this.cartService.add(this.book)
  }
  removeFromCart(){
    this.isInCart=false
    this.cartService.remove(this.book)
  }

  constructor(private cartService:CartService) { }

}
