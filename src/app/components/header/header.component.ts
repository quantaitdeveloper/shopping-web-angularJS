import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public fixedClass = "";



  @HostListener('window:scroll', ['$event']) onScroll(event: any) {
  }
  constructor() {


  }



  ngOnInit(): void {
  }

}
