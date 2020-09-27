import {LibraryViewElement} from '../library-view/library-view-element';
import {LiteratureStatus} from '../library-view/LiteratureStatus';

export const LIBRARY_VIEW_ELEMENTS: LibraryViewElement[] = [
  {
    id: 1,
    title: 'Spring AOP crash course',
    URL: 'https://www.udemy.com/course/spring-aop-crash-course/learn/',
    status: LiteratureStatus.FINISHED
  },

  {
    id: 2,
    title: 'Spring Core Advanced - Beyond the Basics',
    URL: 'https://www.udemy.com/course/spring-core-advanced-beyond-the-basics/learn/',
    status: LiteratureStatus.NOT_STARTED
  },

  {
    id: 3,
    title: 'Testing Spring Boot: Beginner to Guru',
    URL: 'https://www.udemy.com/course/testing-spring-boot-beginner-to-guru/learn/',
    status: LiteratureStatus.NOT_STARTED
  },

  {
    id: 4,
    title: 'Spring Framework 5: Beginner to Guru',
    URL: 'https://www.udemy.com/course/testing-spring-boot-beginner-to-guru/learn/',
    status: LiteratureStatus.IN_PROGRESS
  },

  {
    id: 5,
    title: 'Rest APIs using Spring Data',
    URL: 'https://www.udemy.com/course/microservices-rest-apis-using-spring-data-rest/learn/',
    status: LiteratureStatus.NOT_STARTED
  },

  {
    id: 6,
    title: 'Hands on Spring security',
    URL: 'https://www.udemy.com/course/hands-on-spring-security-511/learn/',
    status: LiteratureStatus.NOT_STARTED
  }
];
