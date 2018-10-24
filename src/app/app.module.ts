import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
 
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// Main component
import { AppComponent }   from './app.component';
// Components
import { HeaderComponent }   from './components/Header/header.component';
import { FooterComponent }   from './components/Footer/footer.component';
// Pages
import { HomeComponent }   from './pages/Home/home.component';
import { TradingComponent }   from './pages/Trading/trading.component';
import { ExchangeComponent }   from './pages/Exchange/exchange.component';
import { WalletComponent }   from './pages/Wallet/wallet.component';
import { NewsComponent }   from './pages/News/news.component';
import { NotificationsComponent }   from './pages/Notifications/notif.component';
import { TermsConditionsComponent }   from './pages/TermsConditions/terms.component';
import { SignupComponent }   from './pages/Signup/signup.component';
import { LoginComponent }   from './pages/Login/login.component';
import { ForgotPasswordComponent }   from './pages/ForgotPassword/forgot.component';

import { SettingsComponent }   from './pages/Settings/settings.component';
import { SettingsAsideComponent }   from './pages/Settings/Aside/settings-aside.component';

import { NotFoundComponent }   from './pages/NotFound/not-found.component';

// Routing
const appRoutes: Routes =[
    { path: '', component: HomeComponent},
    { path: 'trade', component: TradingComponent},
    { path: 'exchange', component: ExchangeComponent},
    { path: 'wallet', component: WalletComponent},
    { path: 'news', component: NewsComponent},
    { path: 'notifications', component: NotificationsComponent},
    { path: 'terms', component: TermsConditionsComponent},
    { path: 'settings', component: SettingsComponent},
    { path: 'login', component: LoginComponent},
    { path: 'signup', component: SignupComponent},
    { path: 'forgot-password', component: ForgotPasswordComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes), PerfectScrollbarModule ],
    providers: [
        {
          provide: PERFECT_SCROLLBAR_CONFIG,
          useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        TradingComponent,
        ExchangeComponent,
        WalletComponent,
        NewsComponent,
        NotificationsComponent,
        TermsConditionsComponent,
        LoginComponent,
        SignupComponent,
        ForgotPasswordComponent,

        SettingsComponent,
        SettingsAsideComponent,

        NotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }