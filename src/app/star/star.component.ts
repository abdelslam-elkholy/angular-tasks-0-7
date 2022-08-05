import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  stars = [1, 2, 3, 4, 5]
  selectedStar = 0;
  @ViewChildren('starelem') starElement!: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {
  }
  setSelectedStar(star: number) {
    this.selectedStar = star;
    console.log(this.selectedStar);
  }
  addStar(star: number) {
    for (let index = 0; index < star; index++) {
      (this.starElement.get(index)?.nativeElement as HTMLLIElement).classList.add("selected")

    }
  }

  removeStar(star: number) {
    for (let index = 5; index >this.selectedStar; index--) {
      (this.starElement.get(index)?.nativeElement as HTMLLIElement).classList.remove("selected")

    }
    
  }
}
