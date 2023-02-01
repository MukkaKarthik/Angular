import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  template: `
    <p>
      simple-component works!
    </p>
  `,
  styles: [
  ]
})
export class SimpleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
