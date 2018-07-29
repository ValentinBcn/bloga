const express = require('express');
const article = require('../model/article');
const router = express.Router();

router.post('/addArticle', (req, res) => {
    var post = new article({
        title: req.body.title,
        content: req.body.content,
        comments: req.body.comment,
        date: Date()
    })
    post.save((err, post) => {
        if (err) { res.json('error' + err) }
        else {
            res.json('article ajouté')
        }
    })
})

router.get('/getArticles', (req, res) => {
    var auth = req.get("authorization");
     if(auth != "secret" || !auth){
         res.json("pas d'autorizarion")
     }
     else{
        article.find((err, articles) => {
            if (err) { res.json('error' + err) }
            else {
                res.json(articles)
            }
        })
     }
       
    
   
})

router.put('/addComment', (req, res) => {
    article.findById(req.body.id, (err, article) => {
        if (err) { res.json('error' + err) }
        else {
            var array = [req.body.comment, Date()];
            article.comments.push(array);
            article.save();
            res.json('ok');
        }
    })
})



module.exports = router