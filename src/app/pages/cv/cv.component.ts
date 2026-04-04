import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvData } from '../../models/cv.interface';
import { cvEn } from '../../data/cv-en';
import { cvRu } from '../../data/cv-ru';
import { cvPl } from '../../data/cv-pl';

const CV_DATA: Record<string, CvData> = {
  en: cvEn,
  ru: cvRu,
  pl: cvPl,
};

@Component({
  selector: 'app-cv',
  standalone: true,
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent {
  cv: CvData;

  constructor(private route: ActivatedRoute) {
    const lang = this.route.snapshot.data['lang'] as string;
    this.cv = CV_DATA[lang] ?? cvEn;
  }
}
