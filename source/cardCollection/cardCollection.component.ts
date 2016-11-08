import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

import { CardCollectionService } from './cardCollection.service';

@Component({
	moduleId: module.id,
	selector: 'cd-card-collection',
	templateUrl: 'cardCollection.component.html',
})
export class CardCollectionComponent implements OnInit {
	@ViewChild('aceClubs') aceClubs: TemplateRef<any>;
	@ViewChild('tenClubs') tenClubs: TemplateRef<any>;

	constructor(private cardCollectionService: CardCollectionService) {}

	ngOnInit(): void {

	}
}
