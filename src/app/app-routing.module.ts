import { NotfoundComponent } from './components/notfound/notfound.component';
import { McComponent } from './components/mc/mc.component';
import { MiComponent } from './components/mi/mi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'mi', pathMatch: 'full'},
  {path: 'mc/:id', component: McComponent},
  {path: 'mi/:id', component: MiComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
