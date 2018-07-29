import { Component, OnInit } from '@angular/core';
import { dataApi } from '../shared/data.service';
import { NgForm } from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-post-article',
  templateUrl: './post-article.component.html',
  styleUrls: ['./post-article.component.scss']
})
export class PostArticleComponent implements OnInit {

  constructor(private dataApi: dataApi) { }

  ngOnInit() {
    // $(document).ready(()=>{
    //   $(".item").click(function() {
    //     console.log('fdp')
    //     $(".item").addClass("collapse");
    //     $(this).removeClass("collapse");    
    // });
    // })
  }

  onSubmit(f: NgForm){
    var titre = f.value['leTitre'];
    var contenu = f.value['leContenu'];
    this.dataApi.postArticle(titre,contenu)
    .subscribe(
      (res)=>{
        console.log('reponse de la requete' + res);
      },
      (err)=>{
        console.log('error' + err);
      }
    )    
  }  
}
