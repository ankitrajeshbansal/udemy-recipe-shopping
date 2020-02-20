import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, UrlHandlingStrategy } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
id:number;
editMode= false;
routeSubscribtion: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeSubscribtion= this.route.params.subscribe((params : Params)=>{
      this.id= + params['id'];
      this.editMode= params['id']!= null; 
      console.log(this.editMode);
    });
  }
  ngOnDestroy(){
this.routeSubscribtion.unsubscribe();
  }

}
