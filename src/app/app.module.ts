import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortofolioComponent } from './component/portofolio/portofolio.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HeaderComponent } from './component/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './component/footer/footer.component';
import { CopyrightComponent } from './component/copyright/copyright.component'

@NgModule({
  declarations: [
    AppComponent,
    PortofolioComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CopyrightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
