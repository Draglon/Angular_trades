import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

// Main component
import { AppComponent }   from './app.component';
// Components
import { HeaderComponent }   from './components/Header/header.component';
import { FooterComponent }   from './components/Footer/footer.component';
// Pages
import { HomeComponent }   from './pages/Home/home.component';
import { NotFoundComponent }   from './pages/NotFound/not-found.component';

// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    // { path: 'about', component: AboutComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent, HeaderComponent, FooterComponent, HomeComponent, NotFoundComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }