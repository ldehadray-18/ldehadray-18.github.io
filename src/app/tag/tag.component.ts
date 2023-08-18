import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {
  tags: any = [];
  constructor(private fs: FoodService) { }
  ngOnInit(): void {
    this.tags = this.fs.getTag();
    console.log(this.tags);
  }
}
