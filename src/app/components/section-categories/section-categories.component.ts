import { Component, OnInit, OnDestroy } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { ICategory } from 'src/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section-categories',
  templateUrl: './section-categories.component.html',
  styleUrls: ['./section-categories.component.scss']
})
export class SectionCategoriesComponent implements OnInit, OnDestroy {
  readonly subs: Subscription[] = [];
  public isLoadingData: boolean = true;
  public categoriesData: ICategory[] = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit() {
    this.initRequests();
    this.getData();
  }


  /////////
  // Data & Requests
  //-----------------------------------------------
  initRequests() {
    
    //Get Categories - Answer
    this.subs.push(this.gamesService.dataCategories$.subscribe(response => {
      this.isLoadingData = false;
      this.categoriesData = response;
    }));
  }

  getData() {
    this.gamesService.getCategories();
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

