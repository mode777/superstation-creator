import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import '@clr/icons';
import { BackgroundComponent } from './backgrounds/background/background.component';
import { SceneComponent } from './scenes/scene/scene.component';
import { SpriteComponent } from './sprites/sprite/sprite.component';
import { ImageBrowserComponent } from './images/image-browser/image-browser.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    SceneComponent,
    SpriteComponent,
    ImageBrowserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
