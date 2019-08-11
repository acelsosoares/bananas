import { Component, OnInit } from '@angular/core';
import { IGame, ICategory } from 'src/interfaces';
import { GamesService } from 'src/app/services/games.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-games',
  templateUrl: './page-games.component.html',
  styleUrls: ['./page-games.component.scss']
})
export class PageGamesComponent implements OnInit {
  readonly subs: Subscription[] = [];
  public isLoadingData: boolean = true;
  public isLoadingGamesData: boolean = true;
  public categoriesData: ICategory[] = [];
  public gamesData: IGame[] = [];
  public gamesFilterCacheData: IGame[] = [];
  public searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private gamesService: GamesService) { }

  ngOnInit() {
    this.initForm();
    this.initRequests();
    this.getData();
  }


  /////////
  // Data & Requests
  //-----------------------------------------------
  initRequests() {
    
    //Get Games - Answer
    this.subs.push(this.gamesService.dataGames$.subscribe(response => {
      this.isLoadingGamesData = false;
      this.gamesData = this.gamesFilterCacheData = response;
    }));

    //Get Games By Category - Answer
    this.subs.push(this.gamesService.dataGamesByCategory$.subscribe(response => {
      this.isLoadingGamesData = false;
      this.gamesData = this.gamesFilterCacheData = response;
    }));

    //Get Categories - Answer
    this.subs.push(this.gamesService.dataCategories$.subscribe(response => {
      this.isLoadingData = false;
      this.categoriesData = response;
    }));
  }

  getData() {
    this.gamesService.getCategories();
    this.gamesService.getGames();
  }

  /////////
  // Forms
  //-----------------------------------------------
  initForm() {
    
    //Init search form
    this.searchForm = this.formBuilder.group({
      searchText: ['']
    });
  }

  validateForm(form: FormGroup): boolean {
    if (!form.valid) {
      return false;
    }

    return true;
  }


  /////////
  // Filtering
  //-----------------------------------------------
  selectCategory(categoryId: string) {
    this.isLoadingGamesData = true;
    if(!categoryId) {
      this.gamesService.getGames();
    } else {
      this.gamesService.getGamesByCategory(categoryId);
    }
  }

  //Here i didn't know how to search by name usign the provided API, so i decided to do this localy by using a simple filter via font-end.
  filterByText(submittedForm: FormGroup) {
    if (this.validateForm(submittedForm)) {
      let searchText = submittedForm.value.searchText.trim().toLocaleLowerCase();

      this.gamesData = this.gamesFilterCacheData.filter(game => {
        return game.name.trim().toLocaleLowerCase().includes(searchText);
      })
    }
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
