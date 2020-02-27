import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DataproviderService } from 'src/app/dataprovider.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Output() closevent=new EventEmitter();
  private data:any;
  @Input() public title="";
  @Input() public description="";
  constructor(private servicedata:DataproviderService) {
    this.data=servicedata;

   }
    additem()
   {
   
    this.servicedata.pushitem(this.title,this.description);
    this.title="";
    this.description="";
    this.closevent.emit()
   }




  ngOnInit() {
  }

}
