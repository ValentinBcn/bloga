export class Article{
    titre: string;
    contenu: string;
    commentaires: [[string]];
    hideComments : boolean;
    constructor(_titre,_contenu,_commentaires, _hideComments){
        this.titre = _titre;
        this.contenu = _contenu;
        this.commentaires = _commentaires;
        this.hideComments = _hideComments;
    }
}