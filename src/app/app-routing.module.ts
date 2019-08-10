import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentMainComponent } from './components/parent-main/parent-main.component';
import { PageHomeComponent } from './components/page-home/page-home.component';

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
      {
        path: 'home', component: PageHomeComponent,
        data: {}
      },
      /*{
        path: 'membro/:memberId/inicio', component: PageMembersIconsComponent,
        data: {
          breadcrumb: [
            { label: '', url: '/membros' },
            { label: 'Início', url: '' }]
        }
      },*/
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
