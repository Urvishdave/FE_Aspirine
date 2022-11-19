import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    // children: [
    //   {
    //     path: "",
    //     redirectTo: "index",
    //     pathMatch: "full"
    //   },
    //   {
    //     path: "index",
    //     loadChildren: () => import('./index/index.module').then(m => m.IndexModule)
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
