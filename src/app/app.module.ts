import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { MoviesComponent } from './movies/movies.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { EditMenuComponent } from './admin/edit-menu/edit-menu.component';
import { EditMovieComponent } from './admin/edit-movie/edit-movie.component';
import { EditTvseriesComponent } from './admin/edit-tvseries/edit-tvseries.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    ProfileComponent,
    BoardAdminComponent,
    MoviesComponent,
    EditMenuComponent,
    EditMovieComponent,
    EditTvseriesComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    SkeletonModule,
    SidebarModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
