import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public name:string = 'Iron-man';
  public age: number = 34;
  
  get CapitalaizeName(): string{
    return this.name.toUpperCase();
  }

  getHeroeDesc():string{
    return `${this.name} - ${this.age}`
  }

  changeName():void{
    this.name = 'Spider Man';
  }

  changeAge():void{
    this.age = 17;
  }

  reset():void{
    this.name = 'Iron-Man'
    this.age = 34
  }
}
