import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public deletedHeroe?: string;

  public heroesName: string[] = [
    'Cap America',
    'Thor',
    'Hawkeye',
    'Iron Man',
    'Hulk',
    'Black Widow'
  ]

  deleteHeroe():void{
    this.deletedHeroe = this.heroesName.pop();
  }
}
