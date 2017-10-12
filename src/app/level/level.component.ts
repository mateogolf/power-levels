import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit,OnChanges {
  @Input() powerLevel;
  forms=[
    {name:'Human',mult:1},
    { name: 'Saiyan', mult: 10 },
    { name: 'SuperSaiyan', mult: 90 },
    { name: 'SuperSaiyanTwo', mult: 150 },
    { name: 'SuperSaiyanThree', mult: 250 },
    { name: 'SuperSaiyanFour', mult: 500 }
  ]
  constructor() { }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    this.powerLevel = changes.powerLevel.currentValue;
  }
  // over9000(power){
  //   if(power>9000 && power < 20000){
  //     return true;
  //   }
  //   return false;
  // }
  // superlative(power) {
  //   if (power > 20000 && power !=50000) {
  //     return true;
  //   }
  //   return false;
  // }
  // theOne(power) {
  //   if(power == 50000){
  //     return true;
  //   }
  //   return false;
  // }
  ngOnInit() {
  }

}
