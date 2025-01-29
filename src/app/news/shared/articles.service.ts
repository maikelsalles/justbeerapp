import { Injectable } from '@angular/core';

import { Article } from './articles.model';

import { HttpClient } from '@angular/common/http';

import { Observable} from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  private readonly API = `${environment.API}articles`;

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Article[]> {
    return this.httpClient.get<Article[]>(this.API)
  }

  getBySlug(id: any, array:any[]): Article{
    const selectedId = array.find((item) => item.permalink.slug == id);
    return selectedId;
  }

}
