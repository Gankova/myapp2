import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PageComponent } from './page/page.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.sevice';
import { JokeComponent } from './joke/joke.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  //классы компонентов, директив и пайпов
  declarations: [
    AppComponent,
    MycomponentComponent,
    UserComponent,
    PageComponent,
    Page1Component,
    Page2Component,
    JokeComponent

  ],
  // классы других модулей
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule
  ],
  //классы сервисов (injectable классы)
  providers: [ApiService],
  //классы компонентов, которые должны быть загружены перед стартом приложения
  bootstrap: [AppComponent]
})
export class AppModule { }
