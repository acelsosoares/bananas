import { Injectable } from '@angular/core';
import { IGame, IGamesResponse, ICategory, ICategoriesResponse } from 'src/interfaces';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  public dataGames$: Subject<IGame[]> = new Subject<IGame[]>();
  public dataGamesPopular$: Subject<IGame[]> = new Subject<IGame[]>();
  public dataGamesByCategory$: Subject<IGame[]> = new Subject<IGame[]>();
  public dataGame$: Subject<IGame> = new Subject<IGame>();
  public dataCategories$: Subject<ICategory[]> = new Subject<ICategory[]>();
  

  //Cached data vars
  private games: IGame[];
  private game: IGame;
  private gamesPopular: IGame[];
  private categories: ICategory[];

  constructor(private http: HttpClient) { }

  getParams(): HttpParams {
    return new HttpParams().set("brand", environment.apiBrand).set("locale", environment.apiLocale);
  }

  getGames() {
    if(!this.games) {
      
      //Get data from DB
      let apiContent = 'games';
      this.http.get<IGamesResponse>(environment.apiUrl+apiContent, {params: this.getParams()}).subscribe(data => {
        this.games = data._embedded.games.filter(game => game.enabled);
        this.dataGames$.next(this.games);
      }, error => {
        //Go to error generic page
      });
    } else {
      
      //Use cached data
      this.dataGames$.next(this.games);
    }
  }

  getGame(gameId: string) {
    if(!this.game || this.game.id !== gameId) {
      
      //Get data from DB
      let apiContent = 'games/'+gameId;
      this.http.get<IGame>(environment.apiUrl+apiContent, {params: this.getParams()}).subscribe(data => {
        this.game = data;
        this.dataGame$.next(this.game);
      }, error => {
        //Go to error generic page
      });
    } else {
      
      //Use cached data
      this.dataGame$.next(this.game);
    }
  }

  getCategories(categoryName: string = null) {
    if(!this.categories) {
      
      //Get data from DB
      let apiContent = 'game-categories';
      this.http.get<ICategoriesResponse>(environment.apiUrl+apiContent, {params: this.getParams()}).subscribe(data => {
        this.categories = data._embedded.game_categories;
        
        if(categoryName)//Send specific category games
        this.dataGamesByCategory$.next(this.getCachedCategoryGames(categoryName));
        else//Send all categories
        this.dataCategories$.next(this.categories);
      }, error => {
        //Go to error generic page
      });
    } else {
      
      //Use cached data
      if(categoryName)//Send specific category games
      this.dataGamesByCategory$.next(this.getCachedCategoryGames(categoryName));
      else//Send all categories
      this.dataCategories$.next(this.categories);
    }
  }

  getGamesPopular() {
    if(!this.gamesPopular) {

      //Get data from DB
      let apiContent = 'game-categories/popular-games';
      this.http.get<ICategory>(environment.apiUrl+apiContent, {params: this.getParams()}).subscribe(data => {
        this.gamesPopular = data._embedded.games.filter(game => game.enabled);
        this.dataGamesPopular$.next(this.gamesPopular);
      }, error => {
        //Go to error generic page
      });
    } else {
      
      //Use cached data
      this.dataGamesPopular$.next(this.gamesPopular);
    }
  }

  getGamesByCategory(categoryName: string) {
    this.getCategories(categoryName);
  }

  getCachedCategoryGames(categoryName: string): IGame[] {
    return this.categories.filter(category => category.slug == categoryName)[0]._embedded.games;
  }
}
