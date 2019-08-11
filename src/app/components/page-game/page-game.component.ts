import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { IGame } from 'src/interfaces';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute } from '@angular/router';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss'],
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
    ]),
  ]
})
export class PageGameComponent implements OnInit, OnDestroy {
  readonly subs: Subscription[] = [];
  public headerTransitionState: string = 'start';
  public isLoadingData: boolean = true;
  public gameId: string;
  public gameData: IGame;

  constructor(private gamesService: GamesService, 
              private route: ActivatedRoute,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.subs.push(this.route.params.subscribe(params => {
      //get param1 = game/:gameId
      this.gameId = params['gameId'];

      this.initRequests();
      this.getData();
    }));
  }

  /////////
  // Data & Requests
  //-----------------------------------------------
  initRequests() {

    // Get Game - Answer
    this.subs.push(this.gamesService.dataGame$.subscribe(response => {
      this.isLoadingData = false;
      this.headerTransitionState = 'end';
      this.gameData = response;
    }));
  }

  getData() {
    this.gamesService.getGame(this.gameId);
  }

  /////////
  // Extras
  //-----------------------------------------------
  buildSafeUrl(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  /////////
  // Destroy
  //-----------------------------------------------
  ngOnDestroy(): void {
    this.subs.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
}
