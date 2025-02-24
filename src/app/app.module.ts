import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { CVComponent } from './cv/cv.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    HeaderComponent,
    CenterComponent,
    FooterComponent,
    ProjectsComponent,
    CVComponent,
    CertificationsComponent,
    ContactsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
