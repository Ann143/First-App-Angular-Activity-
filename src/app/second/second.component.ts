import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `<p>second works!</p> {{secondMessage ? secondMessage:'________' }}`,
    styles:['p {color:red}']
})

export class SecondComponent{

   @Input() secondMessage = "";
    
}