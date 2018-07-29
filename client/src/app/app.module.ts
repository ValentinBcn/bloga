import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { dataApi } from './shared/data.service';
import { ListArticlesComponent } from './list-articles/list-articles.component';
import { PostArticleComponent } from './post-article/post-article.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListArticlesComponent,
    PostArticleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [dataApi],
  bootstrap: [AppComponent]
})
export class AppModule { }
