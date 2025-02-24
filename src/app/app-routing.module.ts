import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { ProjectsComponent } from './projects/projects.component';
import { CVComponent } from './cv/cv.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  { path:'', component: PrincipalComponent},
  {path:'Projects', component: ProjectsComponent},
  {path:'CV',  component: CVComponent},
  {path:'Certifications', component: CertificationsComponent},
  {path:'Contacts', component: ContactsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
