import { Component, OnInit, ElementRef, ViewChild ,EventEmitter, Output} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput',{static:true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static:true}) amountInputRef: ElementRef;
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }
  OnAddItem(){
const ingName = this.nameInputRef.nativeElement.value;
const ingNumber = this.amountInputRef.nativeElement.value;
const newingredient = new Ingredient(ingName, ingNumber);
this.slService.addIngredient(newingredient);
  }
}
