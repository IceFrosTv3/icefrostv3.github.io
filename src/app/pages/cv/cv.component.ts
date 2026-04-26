import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PhoneHrefPipe} from '../../pipes/phone-href.pipe';
import {CvData} from '../../models/cv.interface';
import {cvEn} from '../../data/cv-en';
import {cvRu} from '../../data/cv-ru';
import {cvPl} from '../../data/cv-pl';
import {Meta} from '@angular/platform-browser';

const CV_DATA: Record<string, CvData> = {
  en: cvEn,
  ru: cvRu,
  pl: cvPl,
};

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [PhoneHrefPipe],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.scss',
})
export class CvComponent implements OnInit {
  private readonly route = inject(ActivatedRoute)
  private readonly meta = inject(Meta)

  cv: CvData | undefined;

  ngOnInit() {
    const lang = this.route.snapshot.data['lang'] as string;
    this.cv = CV_DATA[lang] ?? cvEn;

    const descriptions: Record<string, string> = {
      en: 'CV of Andrei Sergheev, Junior Frontend Developer. Angular, TypeScript, SCSS.',
      ru: 'Резюме Андрея Сергеева, Junior Frontend Developer. Angular, TypeScript, SCSS.',
      pl: 'CV Andrei Sergheev, Junior Frontend Developer. Angular, TypeScript, SCSS.',
    };

    this.meta.updateTag({
      name: 'description',
      content: descriptions[lang] ?? descriptions['en']
    });
    this.meta.updateTag({property: 'og:url', content: `https://icefrostv3.github.io/cv/${lang}`});

  }
}
