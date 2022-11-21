import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientEffects } from './modules/clients/store/effects/client.effects';
import { ClientReducer } from './modules/clients/store/reducers/client.reducer';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot({
      client: ClientReducer
    }),
    EffectsModule.forRoot([ClientEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: true })
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
