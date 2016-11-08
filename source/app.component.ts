import { Component, ViewChild } from '@angular/core';

import { CardCollectionComponent } from './cardCollection/cardCollection.component';

@Component({
	moduleId: module.id,
	selector: 'my-app',
	templateUrl: 'app.component.html',
})
export class AppComponent {
	@ViewChild(CardCollectionComponent) collection: CardCollectionComponent;
}
