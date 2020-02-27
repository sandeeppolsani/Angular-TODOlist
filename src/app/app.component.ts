import { Component, Input } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project1';
  // @Input() changevent=new EventEmitter();
  isaddopen=false;
  openadd()
  {
    this.isaddopen=true;
  }
  closeadd()
  {
    this.isaddopen=false;
  }
  changed()
  {
    
  }
}

