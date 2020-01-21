import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootersComponent } from './footers/footers.component';
import { HeadersComponent } from './headers/headers.component';
import { ContentsComponent } from './contents/contents.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { PricingsComponent } from './pricings/pricings.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleriesComponent } from './galleries/galleries.component';
import { ClientComponent } from './client/client.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import {ConfigService} from  './config.service';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PagerService} from './pager.service';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
   FootersComponent,
   HeadersComponent,
   ContentsComponent,
   IntroductionComponent,
   PricingsComponent,
   TestimonialsComponent,
   GalleriesComponent,
   ClientComponent,
   SocialComponent,
   NavigationComponent,
   HomeComponent,
   BlogComponent,
   PostComponent,
   ArticleComponent,
   NotfoundComponent,
   PaginationComponent,
   LoginComponent,
   ContactusComponent,
   SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
   
  ],
  providers: [ConfigService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
