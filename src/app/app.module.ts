import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { LandingPageRoutingModule } from './pages/landing/landing-routing.module';
import { LandingPageModule } from './pages/landing/landing.module';
import { ChatPageModule } from './pages/chat/chat.module';
import { ChatPageRoutingModule } from './pages/chat/chat-routing.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PusherService } from './providers/pusher.service';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
            HttpClientModule,
            AppRoutingModule, 
            LandingPageModule, 
            LandingPageRoutingModule,
            ChatPageModule,
            ChatPageRoutingModule,
          ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              HttpClient,
              PusherService,
            ],
  bootstrap: [AppComponent],
})
export class AppModule {}
