import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HeaderComponent }   from './Header/header.component';
import { FooterComponent }   from './Footer/footer.component';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, HeaderComponent, FooterComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }