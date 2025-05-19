import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  getCategories(): string[] {
    return [
      'Home Page',
      'Categories',
      'Business',
      'Entertainment',
      'General',
      'Health',
      'Science',
      'Sport',
      'Technology',
    ];
  }

  constructor() {}
}
