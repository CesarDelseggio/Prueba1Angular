import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.scss']
})
export class ListaLibrosComponent implements OnInit {

  myBooks: Book[];
  active: boolean = false;

  constructor() { 
    this.myBooks = [
      {
        Id: 1,
        Title: "Primero 1"
      },
      {
        Id: 2,
        Title: "Segundo"
      },
      {
        Id: 3,
        Title: "Tercero"
      },
      {
        Id: 4,
        Title: "Cuarto"
      },
      {
        Id: 5,
        Title: "Quinto"
      }
    ]
  }

  ngOnInit(): void {
  }

}
