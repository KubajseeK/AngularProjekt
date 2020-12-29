import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditMenuComponent } from './admin/edit-menu/edit-menu.component';
import { EditMovieComponent } from './admin/edit-movie/edit-movie.component';
import { EditTvseriesComponent } from './admin/edit-tvseries/edit-tvseries.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin', component: BoardAdminComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'edit', component: EditMenuComponent},
  {path: 'edit/movies', component: EditMovieComponent},
  {path: 'edit/tvseries', component: EditTvseriesComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
