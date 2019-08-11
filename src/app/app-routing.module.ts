import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageGameComponent } from './components/page-game/page-game.component';
import { PageGamesComponent } from './components/page-games/page-games.component';

const routes: Routes = [
  {
    path: '',
    component: ParentMainComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {path: 'home', component: PageHomeComponent, data: {}},
      {path: 'games', component: PageGamesComponent, data: {}},
      {path: 'games/search-game/:searchGame', component: PageGamesComponent},
      {path: 'games/cat/:category', component: PageGamesComponent},
      {path: 'games/search-game/:searchGame/cat/:category', component: PageGamesComponent},
      {path: 'game/:gameId', component: PageGameComponent, data: {
          breadcrumb: [//TODO
            { label: 'Games', url: '/games' },
            { label: 'Game', url: '' }]
      }},
    ]
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
