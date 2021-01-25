import { ApiNewServiceService } from './servies/api-new-service.service';
import { MetrialModule } from './metrial/metrial/metrial.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { DevlopmentComponent } from './devlopment/devlopment.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsCardComponent } from './news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    DevlopmentComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MetrialModule,
    HttpClientModule,

  ],
  providers: [ApiNewServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
