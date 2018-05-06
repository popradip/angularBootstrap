import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { AboutComponent } from './about/about.component'
import { ServicesComponent } from './services/services.component'
import { TestimonialsComponent } from './testimonials/testimonials.component'
import { ContactComponent } from './contact/contact.component'
import { FooterComponent } from './footer/footer.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    component: FooterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
