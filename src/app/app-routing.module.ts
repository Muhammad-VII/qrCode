import { McComponent } from './components/mc/mc.component';
import { MiComponent } from './components/mi/mi.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'mi', pathMatch: 'full'},
  {path: 'mc', component: McComponent},
  {path: 'mi', component: MiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
