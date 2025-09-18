import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  imports: [],
  templateUrl: './clock.html',
  styleUrl: './clock.css'
})
export class Clock  implements OnInit, OnDestroy {

  curretnttime:string='';
  private internalid:any;
  ngOnInit(): void {
    this.updateTime();
      clearInterval(this.internalid);
      console.log(this.curretnttime);
    }
  ngOnDestroy(): void {
    if(this.internalid){
      clearInterval(this.internalid);
      console.log("Clock detected");
    }
  }
  private updateTime(){
    this.curretnttime=new Date().toLocaleTimeString();
  }


}
