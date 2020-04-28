import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PtkdevInstagramWidgetWcComponent} from './components/ptkdev-instagram-widget-wc/ptkdev-instagram-widget-wc.component';


const routes: Routes = [
  {path: 'instagram-widget', component: PtkdevInstagramWidgetWcComponent},
  {path: '', redirectTo: 'instagram-widget', pathMatch: 'full'},
  {path: '**', redirectTo: 'instagram-widget'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
