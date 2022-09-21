import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.scss']
})
export class UnoComponent implements OnInit, OnChanges, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{
  title = 'segunda-claseB';

  constructor(){
    console.log("constructor");
  }

  ngOnInit():void{
    console.log("onInit");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Onchanges");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }

  nameInput(input: any){
    console.log('hola' + input);
  }

}
