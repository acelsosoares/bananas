import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { IGame, ICategory } from 'src/interfaces';
import { GamesService } from 'src/app/services/games.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-games',
  templateUrl: './page-games.component.html',
  styleUrls: ['./page-games.component.scss'],
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
export class PageGamesComponent implements OnInit, OnDestroy {
  readonly subs: Subscription[] = [];
  public headerTransitionState: string = 'start';

  //Loaders
  public isLoadingData: boolean = true;
  public isLoadingGamesData: boolean = true;

  //Cached filters
  public filteredSearchGame: string = null;
  public filteredCategory: string = 'all';

  //Data
  public categoriesData: ICategory[];
  public gamesData: IGame[];
  public gamesFilterCacheData: IGame[] = [];

  //Form
  public searchForm: FormGroup;

  //Pagination
  public itemsLoadedEachTime: number = 12;
  public maxItemsVisible: number = this.itemsLoadedEachTime;
  public currentPage: number = 1;


  constructor(private formBuilder: FormBuilder,
              private gamesService: GamesService,
              private route: ActivatedRoute,
              private location: Location) { }

  ngOnInit() {
    setTimeout(() => {
      this.headerTransitionState = 'end';
    }, 1);
    
    this.subs.push(this.route.params.subscribe(params => {
      //get param1 = games/search-game/:searchGame
      this.filteredSearchGame = (params['searchGame'])?params['searchGame']:null;

      //get param2 = games/cat/:category
      this.filteredCategory = (params['category'])?params['category']:null;

      this.initForm();
      this.initRequests();
      this.getData();
    }));
  }


  /////////
  // Data & Requests
  //-----------------------------------------------
  initRequests() {
    
    //Get Games - Answer
    this.subs.push(this.gamesService.dataGames$.subscribe(response => {
      
      this.gamesData = this.gamesFilterCacheData = response;
      this.maxItemsVisible = this.itemsLoadedEachTime;

      this.dataArrived();
    }));

    //Get Games By Category - Answer
    this.subs.push(this.gamesService.dataGamesByCategory$.subscribe(response => {
      this.gamesData = this.gamesFilterCacheData = response;
      this.maxItemsVisible = this.itemsLoadedEachTime;

      this.dataArrived();
    }));

    //Get Categories - Answer
    this.subs.push(this.gamesService.dataCategories$.subscribe(response => {
      this.categoriesData = response;

      this.dataArrived();
    }));
  }

  getData() {
    this.gamesService.getCategories();
    if(this.filteredCategory)
    this.gamesService.getGamesByCategory(this.filteredCategory);
    else
    this.gamesService.getGames();
  }

  dataArrived() {
    if(this.gamesData && this.categoriesData) {
      this.isLoadingData = false;
      this.isLoadingGamesData = false;

      //Filter by text with filter on URL or Local
      if(this.filteredSearchGame)
      this.filterByText(this.searchForm);

      //Update categories menu with category filter on URL
      if(this.filteredCategory)
      this.updateCategoriesSelectedItem(this.filteredCategory);
    }
  }

  /////////
  // Forms
  //-----------------------------------------------
  initForm() {
    
    //Init search form
    this.searchForm = this.formBuilder.group({
      searchText: [this.filteredSearchGame]
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
    this.filteredCategory = categoryId;
    if(this.filteredCategory==='all') {
      this.gamesService.getGames();
    } else {
      this.gamesService.getGamesByCategory(this.filteredCategory);
    }

    this.updateCategoriesSelectedItem(categoryId);
  }

  updateCategoriesSelectedItem(categoryId: string) {
    setTimeout(() => {
      let catItems = document.getElementsByClassName('bnn-categories-filter-item');
      for (var i = 0; i < catItems.length; i++) {
        catItems[i].classList.remove('active');
      }
      document.getElementById('cat-menu-item-'+categoryId).classList.add('active');
    })
  }

  //Here i didn't know how to search by name usign the provided API, so i decided to do this localy by using a simple filter via font-end.
  filterByText(submittedForm: FormGroup) {
    if (this.validateForm(submittedForm)) {
      this.filteredSearchGame = submittedForm.value.searchText.trim().toLocaleLowerCase();
      this.gamesData = this.gamesFilterCacheData.filter(game => {
        return game.name.trim().toLocaleLowerCase().includes(this.filteredSearchGame);
      })

      this.updateUrlFilters();
    }
  }

  updateUrlFilters() {
    //this.location.replaceState('/games/search-game/'+this.filteredSearchGame+'/cat/'+this.filteredCategory);
  }


  /////////
  // Pagination
  //-----------------------------------------------
  loadMore() {
    this.currentPage += 1;
    this.maxItemsVisible = this.itemsLoadedEachTime * this.currentPage;
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
