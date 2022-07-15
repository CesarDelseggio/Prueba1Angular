import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { ListaLibrosComponent } from './lista-libros/lista-libros.component';
import { LibroComponent } from './libro/libro.component';
import { SwitchComponent } from './switch/switch.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HolaMundoComponent,
    ListaLibrosComponent,
    LibroComponent,
    SwitchComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
