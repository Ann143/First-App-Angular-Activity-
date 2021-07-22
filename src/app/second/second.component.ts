import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-second',
    template: `<p>second works</p> `,
    styles:['p {color:red}']
})

export class SecondComponent{

//    @Input() secondMessage = "";
//    second works! <br><br> {{secondMessage ? secondMessage : '________' }}
}