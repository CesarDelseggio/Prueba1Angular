import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/Book';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.scss']
})
export class LibroComponent implements OnInit {

  @Input() book:Book;

  constructor() {
    this.book = {
      Id: 1,
      Title: 'Nuevo'
    };
   }

  ngOnInit(): void {
  }

  GenerateRandomColor():string{
    return '#' + this.GenerateRandomHexa() + this.GenerateRandomHexa() + this.GenerateRandomHexa(); 
  }

  GenerateRandomHexa():string{
    return Math.floor(Math.random() * 255).toString(16);
  }
}
