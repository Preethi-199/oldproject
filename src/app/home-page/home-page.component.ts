import { SrcDestService } from './../src-dest.service';
import { Component, OnInit } from '@angular/core';
import { Search } from "../search";
import { BusServiceService } from "../bus-service.service";
import { BusOutput } from "../busoutput";
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
search:Search=new Search();
searcha:BusOutput[];
doj:any;
  constructor(private service:BusServiceService, private obj1:SrcDestService) { }

  ngOnInit(): void {
  }

  Chennai: boolean= false;
  Madurai: boolean= false;
  Trichy: boolean= false;
  Vellore: boolean= false;
  showf=true;


  selectedsrc: any;

  handleEvent(event){
    this.selectedsrc= event.target.value;
    this.setFalse();

  }

  setFalse(){
    switch (this.selectedsrc) {
      case 'Chennai': this.Chennai = true;
        break;
      case 'Madurai': this.Madurai = true;
        break;
      case 'Trichy': this.Trichy = true;
        break;
      case 'Vellore': this.Vellore = true;
        break;
    }
  }


  handleClick(){   
    switch (this.selectedsrc) {
      case 'Chennai': this.Chennai = false;
        break;
      case 'Madurai': this.Madurai = false;
        break;
      case 'Trichy': this.Trichy = false;
        break;
      case 'Vellore': this.Vellore = false;
        break;
    }
  }
  busNumber:Number;
  checkUser:boolean=false;
  show(){
   this.showf=false;
   sessionStorage.setItem('doj', this.doj)
   sessionStorage.setItem('src',this.search.src)
   sessionStorage.setItem('dest',this.search.dest)
   
  }
  searchBus(){
   this.checkUser=true;
  this.search.typeOfUser="authorized";
  //alert(JSON.stringify(this.search))
  this.service.display(this.search).subscribe((searcha:BusOutput[])=>{
    this.searcha=searcha;
  })
  }
  searchBus1(){
    this.checkUser=true;
    this.search.typeOfUser="unauthorized";
    //alert(JSON.stringify(this.search))
    this.service.display(this.search).subscribe((searcha:BusOutput[])=>{
      this.searcha=searcha;
    })
    }
    

    busObj:BusOutput;
    showFun(c:BusOutput){
      this.busObj=c;
      sessionStorage.setItem("busNo",""+c.busNo);
      sessionStorage.setItem('pathNo',""+c.pathNo);
      sessionStorage.setItem('arrival',""+c.startTime);
      sessionStorage.setItem('depart',""+c.reachTime);
      sessionStorage.setItem('fare',""+c.fare);
    }

}
