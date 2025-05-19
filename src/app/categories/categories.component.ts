import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  providers: [CategoriesService],
})
export class CategoriesComponent implements OnInit {
  categories: string[];
  selectedCategories: { [key: string]: boolean } = {};
  newsList: any[] = [];
  totalResults: any;
  categoryNews: { [key: string]: any[] } = {};

  hiddenCategories: { [key: string]: boolean } = {
    'Home Page': true,
    'About Me': true,
    'Categories': true,
  };

  constructor(
    private categoriesService: CategoriesService,
    private newsService: NewsService
  ) {
    this.categories = this.categoriesService.getCategories();
    this.selectedCategories['General'] = true;
  }

  ngOnInit(){
    this.hiddenCategories['Home Page'] = false;
    this.hiddenCategories['About Me'] = true;
    this.loadNewsForSelectedCategories();
  }

  onCategorySelectionChange() {
    // secilen kategoriye gore
    this.loadNewsForSelectedCategories();
  }

  selectedCategoriesNotEmpty(): boolean {
    return Object.values(this.selectedCategories).some(selected => selected);
  }

  loadNewsForSelectedCategories() {

    const selectedCategories = Object.keys(this.selectedCategories).filter(
      (category) => this.selectedCategories[category]
    );
    console.log('SEELECT:' + selectedCategories);

    if (selectedCategories.length === 0) {
      return; // kategori secmediysen bos kalsin
    }

    for (const category of selectedCategories) {
      if (category === 'Business') {
        this.newsService.getNewsWithCategory('Business',1).subscribe((data: any) => {
          this.categoryNews['Business'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }

      if (category === 'Entertainment') {
        this.newsService.getNewsWithCategory('Entertainment',1).subscribe((data: any) => {
          this.categoryNews['Entertainment'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      
      if (category === 'General') {
        this.newsService.getNewsWithCategory('General',1).subscribe((data: any) => {
          this.categoryNews['General'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Health') {
        this.newsService.getNewsWithCategory('Health',1).subscribe((data: any) => {
          this.categoryNews['Health'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Science') {
        this.newsService.getNewsWithCategory('Science',1).subscribe((data: any) => {
          this.categoryNews['Science'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Sport') {
        this.newsService.getNewsWithCategory('Sport',1).subscribe((data: any) => {
          this.categoryNews['Sport'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }
      if (category === 'Technology') {
        this.newsService.getNewsWithCategory('Technology',1).subscribe((data: any) => {
          this.categoryNews['Technology'] = data.articles;
          this.totalResults = data.totalResults;
      });
      }

  }
}
// Titleda bulunan kaynak silme
getDescriptionPart(news: any) {
  const descriptionPart = news.title.split('- ' + news.author)[0].trim();
  return descriptionPart;
  
}

formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('tr-TR', options);
} 

getRandomNumber(): number {
  return Math.floor(Math.random() * 1000); 
}
}