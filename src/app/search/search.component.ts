import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  seachItems: string = '';
  constructor(private rout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rout.params.subscribe(params => {
      this.seachItems = params['searchItem'];
    })

  }
  search() {
    if (this.seachItems) {
      this.router.navigateByUrl("/search/" + this.seachItems);
    }
  }

}
