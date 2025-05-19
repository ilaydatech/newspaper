import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  private apiKey = '1e713ac64902474cbcf72267fc0ed771';
  private apiUrl = 'https://newsapi.org/v2/top-headlines';

  constructor(private http: HttpClient) {}

  getNews(page: number) {
    return this.http.get(
      `${this.apiUrl}?country=us&page=${page}&apiKey=${this.apiKey}`
    );
  }

  getNewsWithCategory(category: string, page: number) {
    return this.http.get(
      `${this.apiUrl}?country=us&category=${category}&page=${page}&apiKey=${this.apiKey}`
    );
  }

  getNewsWithQuery(word: string, page: number) {
    return this.http.get(
      `${this.apiUrl}?country=us&q=${word}&page=${page}&apiKey=${this.apiKey}`
    );
  }
}
