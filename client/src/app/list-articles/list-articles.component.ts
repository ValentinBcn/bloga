import { Component, OnInit } from '@angular/core';
import { dataApi } from '../shared/data.service';
import { Article } from '../shared/model/article.model';
import * as $ from 'jquery';
@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.css']
})
export class ListArticlesComponent implements OnInit {
  data = {};
  listArticles : Article[] =[];
  toggle : boolean;
  constructor(private apiService: dataApi) { }

  ngOnInit() {
    
    this.listArticles.push(new Article('titre1','contenu1',['commentaire1','commentaire2'], true));
    this.listArticles.push(new Article('titre2','contenu2',['commentaire21','commentaire22'], true))
    this.apiService.getArticles().subscribe((res)=>{
   
      for(var obj in res){
       
        this.listArticles.push(new Article(res[obj].title,res[obj].content,res[obj].comments, true));
      }
     
      this.listArticles = this.listArticles.reverse();
      
    })
  }

  invert(index){
    this.toggle = !this.toggle;
    console.log(index)
  }

}
