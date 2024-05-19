import { Component } from '@angular/core';
import { Terminal1Component } from '../terminal1/terminal1.component';
import { Terminal2Component } from '../terminal2/terminal2.component';
//import { products } from '../products';

@Component({
  selector: 'lahtealumine-component',
  templateUrl: './lahtealumine.component.html',
  styleUrls: ['./lahtealumine.component.scss']
})
export class LahtealumineComponent {

  callFun() {
    let myCompOneObj = new Terminal1Component();
    myCompOneObj.efektiivsusTekst();
    let makseComp = new Terminal2Component();
    makseComp.maksevoimeTekst();
    //myCompOneObj.myFunctionOne()
  }

  key: string = 'efektTekst';
  efText: string;
 
  getEfektText() {
    this.efText = localStorage.getItem(this.key);
    return this.efText;
  }

  key2: string = 'makseTekst';
  mkText: string;
 
  getMakseText() {
    this.mkText = localStorage.getItem(this.key2);
    return this.mkText;
  }
  
}