import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CardCollectionComponent }  from './cardCollection/cardCollection.component';
import { CardCollectionService }  from './cardCollection/cardCollection.service';

@NgModule({
	imports: [BrowserModule],
	declarations: [
		AppComponent,
		CardCollectionComponent,
	],
	providers: [
		CardCollectionService,
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
