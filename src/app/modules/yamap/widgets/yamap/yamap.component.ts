import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-yamap',
  templateUrl: './yamap.component.html',
  //styleUrls: ['./yamap.component.scss']
})
export class YamapComponent implements OnInit {

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '100%';
    }
    return '100%';
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
