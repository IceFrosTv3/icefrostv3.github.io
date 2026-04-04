import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cv',
  standalone: true,
  template: '<p>CV works! Lang: {{ lang }}</p>',
})
export class CvComponent {
  lang: string;

  constructor(private route: ActivatedRoute) {
    this.lang = this.route.snapshot.data['lang'];
  }
}
