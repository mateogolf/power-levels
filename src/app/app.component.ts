import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  level = 1;
  @Output() appEmitter = new EventEmitter();
  setLevel(eventData){
    this.level = eventData;
    console.log(this.level)
  }

}
