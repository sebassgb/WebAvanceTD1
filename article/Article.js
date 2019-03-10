var db = require('../db');
var Article = {getArticles: function(callback)
    {return db.query('SELECT * from t_article', callback);}
    ,
    createArticle: function (Article, callback) {
        return db.query('Insert into t_article(libelle, prix) values(?, ?)',[Article.libelle, Article.prix], callback);
    }
}
module.exports = Article;