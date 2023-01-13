import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../interface/Book';
import { BooksService } from './books.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(private booksService:BooksService) {
    this.books= this.booksService.getBooks()
   }
   ngOnInit(): void {}
   
   
   IsShown =true
  books:Book[] = []
  
}
