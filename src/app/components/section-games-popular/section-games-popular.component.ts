import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IGame } from 'src/interfaces';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-section-games-popular',
  templateUrl: './section-games-popular.component.html',
  styleUrls: ['./section-games-popular.component.scss']
})
export class SectionGamesPopularComponent implements OnInit {
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
    this.subs.push(this.gamesService.dataGamesPopular$.subscribe(response => {
      this.isLoadingData = false;
      this.gamesData = response;
    }));
  }

  getData() {
    this.gamesService.getGamesPopular();
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

