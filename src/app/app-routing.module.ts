import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { ContentsComponent } from './contents/contents.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PricingsComponent } from './pricings/pricings.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { ClientComponent } from './client/client.component';
import { BlogComponent }  from './blog/blog.component'
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';
import { GuardService} from './guard.service';





const routes: Routes = [
  {path:"", redirectTo: '/home', pathMatch: 'full'},
  {path:"home", component:HeadersComponent },
 {path:"about", component:IntroductionComponent},
 {path:"login", component:LoginComponent},
 {path:"contact", component:ContactusComponent},
 {path:"signup", component:SignupComponent},
 {path:"testimonials", component:TestimonialsComponent},
 {path:"services", component:ContentsComponent},
 {path:"gallery", component:GalleriesComponent},
 {path:"clients", component:ClientComponent},
 {path:"pricing", component:PricingsComponent},
 {path: 'blog', component:BlogComponent , canActivate:[GuardService]},
 {path: 'post', component:PostComponent},
 {path: 'article/:id', component:ArticleComponent},
 {path: '404', component:NotfoundComponent},
 {path:'**', redirectTo: '/404' }

];

          
     

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
