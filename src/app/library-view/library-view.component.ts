import {Component, OnInit} from '@angular/core';
import {LibraryViewElement} from './library-view-element';
import {LiteratureStatus} from './LiteratureStatus';
import { LIBRARY_VIEW_ELEMENTS } from '../mocks/mock-literature';

@Component({
  selector: 'app-library-view',
  templateUrl: './library-view.component.html',
  styleUrls: ['./library-view.component.sass']
})
export class LibraryViewComponent implements OnInit {

  constructor() { }

  libraryViewTitle = 'Könyvtáram';

  literatures = LIBRARY_VIEW_ELEMENTS;

  literature: LibraryViewElement = {
    id: 1,
    title: 'Spring AOP crash course',
    URL: 'https://www.udemy.com/course/spring-aop-crash-course/learn/',
    status: LiteratureStatus.FINISHED
  };

  selectedLiteratureItem: LibraryViewElement;

  ngOnInit(): void {
  }

  onSelect(literature: LibraryViewElement): void {
    this.selectedLiteratureItem = literature;
  }
}
