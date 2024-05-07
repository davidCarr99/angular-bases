import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
        <h3>Counter: {{ counter }}</h3>
        <button (click)="incrementar(1)">+1</button>
        <button (click)="incrementar(-1)">-1</button>
        <button (click)="reset(0)">Reset</button>
    `
})

export class CounterComponent {
    counter = 0;
    
    incrementar(value: number): void {
        this.counter += value;
    }
    // decrementar(value: number): void{
    //   this.counter -= value;
    // }
    reset(value: number) {
        this.counter = value;
    }
}