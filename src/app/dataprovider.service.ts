import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataproviderService {

  constructor() {
    this.changingdata.next(this.itemList);
   }

  public itemList=[];
  public changingdata:BehaviorSubject<Array<any>>=new BehaviorSubject([]);
  public item={
    id:0,
    title:"",
    description:""
  }
  private id=this.itemList.length;

  pushitem(title, description)
  {
    this.item.id=this.id
    this.item.title=title;
    this.item.description=description
    this.itemList.push({id:this.id,title:this.item.title,description:this.item.description});
    this.id++;
    
    console.log(this.itemList)
    this.changingdata.next(this.itemList)
    return "Successfully saved";
  }
  getdescription(id)
  {
    return this.itemList[id].description+"";
  }
  removeitem(item)
  {
   this.itemList.splice(this.itemList.indexOf(item),1)
   this.id--;
   this.changingdata.next(this.itemList)
  return this.itemList;
  }
  
}
