import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable()
export class dataApi{
    constructor(private _http: HttpClient){

    }

    getArticles(){
         const headers = new HttpHeaders().set("authorization", "secret");
        return this._http.get("http://localhost:3000/api/getArticles", {headers})
    }

    postArticle(titre: string, contenu: string){
        return this._http.post("http://localhost:3000/api/addArticle",{"title": titre,"content":contenu})
    }
}