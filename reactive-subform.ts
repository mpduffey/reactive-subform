import {Component, Input} from '@angular/core';

@Component({
	selector:			'reactive-subform',
	template:			`
		<div class="sub-form" [ngClass]="{'col-sm-10': classField.custom.labelLeft}">
			<div><p (click)="showSubform=!showSubform;">{{valueItem.name}}</p><i class="fa fa-times red-text" (click)="deleteProp(valueItem)"></i></div>
			<reactive-form *ngIf="showSubform" [formObject]="classField.formObject" [valueObject]="valueItem"></reactive-form>
		</div>
	`,
	styles:					[`
		label {padding-left: 0;}
		.sub-form {padding-left: 0;}
		.sub-form > div {width: 175px;}
		.sub-form > div > i {float: right; margin-top: 7px; color: red;}
		.sub-form > div > i:hover {cursor: pointer;}
		.sub-form > div > p {margin: 5px 0; font-weight: bold; display: inline-block;}
		.sub-form > div > p:hover {cursor: pointer; text-decoration: underline;}
	`]
})

export class ReactiveSubform {
	@Input() classField;
	@Input() valueItem;
	showSubform = false;
	 
	deleteProp = (x) => {
		console.log("Delete ", x);
	}
}