import { Routes } from '@angular/router';

import { ArticlesListComponent } from './list';
import { ArticleDetailComponent } from './detail';


export const routes: Routes = [
    { path: 'news', component:  ArticlesListComponent },
    { path: 'news/:id', component:  ArticleDetailComponent }
];

export class ArticlesRoutingModule {}