import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostAddEditComponent } from './post-add-edit/post-add-edit.component';
import { PostCardComponent } from './post-card/post-card.component';
import { PostsSectionComponent } from './posts-section/posts-section.component';

@NgModule({
  declarations: [
    AppComponent,
    PostAddEditComponent,
    PostCardComponent,
    PostsSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
