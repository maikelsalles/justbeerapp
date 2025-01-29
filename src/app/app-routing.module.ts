import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './news';
import { ArticleDetailComponent } from './news';

import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { AboutComponent } from './components/pages/about/about.component';

export const routes: Routes = [
    { path: '', component:  ArticlesListComponent },
    { path: 'news', component: ArticlesListComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    
    { path: 'news/:slug', component:  ArticleDetailComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}