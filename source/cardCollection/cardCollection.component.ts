import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'cd-card-collection',
	templateUrl: 'cardCollection.component.html',
})
export class CardCollectionComponent implements OnInit {
	@ViewChild('aceClubs') aceClubs: TemplateRef<any>;
	@ViewChild('tenClubs') tenClubs: TemplateRef<any>;

	ngOnInit(): void {

	}
}
