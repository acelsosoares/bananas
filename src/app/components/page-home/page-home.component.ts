import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss'],
  animations: [
    trigger('headerTransition', [
      state('end', style({
        backgroundColor: environment.themeColor
      })),
      state('start', style({
        backgroundColor: '#fff'
      })),
      transition('start => end', [
        animate('1s')
      ]),
    ])
  ]
})
export class PageHomeComponent implements OnInit {
  public headerTransitionState: string = 'start';
  public welcomeTitle = 'Welcome to Crazy Bananas';

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.headerTransitionState = 'end';
    }, 1);
  }

  goToGamesPage() {
    this.router.navigate(['games']);
  }

}
