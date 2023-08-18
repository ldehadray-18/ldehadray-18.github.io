import { Component } from '@angular/core';
import { FoodService } from './services/food/food.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FoodOrder';
  tag: any = [];
  constructor(private fs: FoodService) { }
  ngOnInit(): void {
    this.tag = this.fs.getAll;
  }
}
