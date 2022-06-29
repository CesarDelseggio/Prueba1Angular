import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'hola-mundo',
  templateUrl: './hola-mundo.component.html',
  styleUrls: ['./hola-mundo.component.scss']
})
export class HolaMundoComponent implements OnInit {

  myBook: Book
  myBooks: Book[]

  constructor() { 
    this.myBook = {
      Id: 1,
      Title: "Primero"
    }

    this.myBooks = [
      this.myBook,
      {
        Id:2,
        Title: "Segundo"
      }
    ]
  }

  ngOnInit(): void {
  }

}
