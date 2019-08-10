// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

// Components
import { AppComponent } from './app.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { MenuMainComponent } from './components/menu-main/menu-main.component';
import { SectionGamesPopularComponent } from './components/section-games-popular/section-games-popular.component';
import { SectionGamesTopComponent } from './components/section-games-top/section-games-top.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    ParentMainComponent,
    MenuMainComponent,
    SectionGamesPopularComponent,
    SectionGamesTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
