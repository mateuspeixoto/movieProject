import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

export const routes: Routes = [
    // Rota raiz que redireciona para o login se o usuário não estiver autenticado
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login, component: LoginComponent'},
    {path: 'home', component: HomeComponent},
    {path: 'movie', component: MovieComponent},
    // Rota curinga que captura URLs não mapeadas e redireciona para o login
    {path: '**', redirectTo: 'login'}
];
