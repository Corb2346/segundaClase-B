import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  
  ngOnInit(): void {
    this.ocultar();
  }

  constructor(){

  }
  title = 'segunda-claseB';
  public flag: boolean = true;
 
  ocultar(){
    let ocultarBtn = document.getElementById("btnOcultar");
    
    ocultarBtn?.addEventListener("click",() => {
      this.flag = !this.flag;
    });
  }

}
