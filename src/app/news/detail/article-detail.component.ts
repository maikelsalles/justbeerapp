import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../shared/articles.model';

import { ArticlesService } from '../shared/articles.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.sass']
})
export class ArticleDetailComponent implements OnInit {
    selectedArticle: Article = {} as Article;

  constructor(
    private route:ActivatedRoute,
    private articlesService: ArticlesService
  ) { }

  ngOnInit(): void {
    this.getArticles();
  }

  loadArticle(){
    const articleId = this.route.snapshot.paramMap.get('slug');
    return articleId;
  }

  getArticlesBySlug(articles: any[]){
    const slug = this.loadArticle();
    if(
      !slug
      ){
      return;
    }
    this.selectedArticle=this.articlesService.getBySlug(slug, articles)

  }

  loadArticleId(){
    const articleId = this.route.snapshot.paramMap.get('slug');
  }

  getArticles() {
    this.articlesService
    .getAll()
    .subscribe((data:any) => {
      this.loadArticle()
      this.getArticlesBySlug(data.payload);
    });
  }

}
