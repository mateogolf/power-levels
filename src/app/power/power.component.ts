import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  saiyan={power:0};
  @Output() emitter = new EventEmitter();
  constructor() { }
  onSubmit(){
    console.log("Power on submit",this.saiyan.power)
    this.emitter.emit(this.saiyan.power);
  }
  ngOnInit() {
  }

}
