import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnTeteComponent } from './en-tete/en-tete.component';
import { EnBloc1Component } from './en-bloc1/en-bloc1.component';
import { EnBloc2Component } from './en-bloc2/en-bloc2.component';
import { EnBloc3Component } from './en-bloc3/en-bloc3.component';
import { TextareaComponent } from './textarea/textarea.component';
import { NouveauMessageComponent } from './nouveau-message/nouveau-message.component';


@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    EnBloc1Component,
    EnBloc2Component,
    EnBloc3Component,
    TextareaComponent,
    NouveauMessageComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
