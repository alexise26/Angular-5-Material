import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    loader:number=0;

  constructor(){
     for (let i = 0; i < 100; i++) {
        setTimeout(()=>{
              this.loader= i +1;
         },2000);
     }
  }
}
