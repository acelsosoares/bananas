import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-main',
  templateUrl: './parent-main.component.html',
  styleUrls: ['./parent-main.component.scss']
})
export class ParentMainComponent implements OnInit {
  public menuStatusClass = 'hidden';
  public isOpen = true;

  constructor() { }

  ngOnInit() {
  }

  toggleMobileMainMenu() {
    if(this.menuStatusClass=='visible')
      this.menuStatusClass = 'hidden';
    else
      this.menuStatusClass = 'visible';
  }
  hideMobileMainMenu() {
    this.menuStatusClass = 'hidden';
  }

}
