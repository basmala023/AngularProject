import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { HeaderComponent } from './component/header/header.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { PortofolioComponent } from './component/portofolio/portofolio.component';

const routes: Routes = [
  {path:'',component:HeaderComponent},
  {path:'about',component:AboutComponent},
  {path:'portofolio', component:PortofolioComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
