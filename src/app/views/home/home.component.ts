import { Component, OnInit } from '@angular/core';
import { DataproviderService } from 'src/app/dataprovider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
private data:any;
private activeindex:number;
private description:String="";
private title:String="";
  constructor(private servicedata:DataproviderService) {
      this.data=servicedata.itemList;
   }
   hidedescription()
   {
     this.activeindex=null;
     this.description="";
   }
   showdescription(id)
   {
     this.title=this.data[id].title;
     this.activeindex=id;
    this.description=this.servicedata.getdescription(id)
   }
   delete(item)
   {
     this.hidedescription()
     this.data=this.servicedata.removeitem(item);
   }
  
  ngOnInit() {

    this.servicedata.changingdata.subscribe(data=>{
      this.data=data
    })
  }



}
