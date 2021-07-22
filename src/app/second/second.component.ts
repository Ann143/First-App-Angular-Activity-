import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `<p>second works!</p> `,
    //This is for activity number 3:
    // template: `<p>second works!  second works! <br><br> {{secondMessage ? secondMessage : '________' }}</p> `,
    styles:['p {color:red}']
})

export class SecondComponent{

//This is for activity number 3
   @Input() secondMessage = "";

}