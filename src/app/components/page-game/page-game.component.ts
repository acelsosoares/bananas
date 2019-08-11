import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGame } from 'src/interfaces';
import { GamesService } from 'src/app/services/games.service';
import { ActivatedRoute } from '@angular/router';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-page-game',
  templateUrl: './page-game.component.html',
  styleUrls: ['./page-game.component.scss']
})
export class PageGameComponent implements OnInit, OnDestroy {
  readonly subs: Subscription[] = [];
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
