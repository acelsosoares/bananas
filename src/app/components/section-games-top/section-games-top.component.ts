import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { Subscription } from 'rxjs';
import { IGame } from 'src/interfaces';

@Component({
  selector: 'app-section-games-top',
  templateUrl: './section-games-top.component.html',
  styleUrls: ['./section-games-top.component.scss']
})
export class SectionGamesTopComponent implements OnInit, OnDestroy {
  readonly subs: Subscription[] = [];
  public isLoadingData: boolean = true;
  public gamesData: IGame[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.initRequests();
    this.getData();
  }


  /////////
  // Data & Requests
  //-----------------------------------------------
  initRequests() {
    
    //Get Games - Answer
    this.subs.push(this.gamesService.dataGames$.subscribe(response => {
      this.isLoadingData = false;
      this.gamesData = response;
    }));
  }

  getData() {
    this.gamesService.getGames();
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
