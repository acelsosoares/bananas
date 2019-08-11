// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Third party
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Components
import { AppComponent } from './app.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { SectionGamesPopularComponent } from './components/section-games-popular/section-games-popular.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PageGameComponent } from './components/page-game/page-game.component';
import { PageGamesComponent } from './components/page-games/page-games.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    ParentMainComponent,
    MenuMainComponent,
    SectionGamesPopularComponent,
    LoaderComponent,
    PageGameComponent,
    PageGamesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
