import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CardCollectionComponent }  from './cardCollection/cardCollection.component';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		CardCollectionComponent,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule { }
