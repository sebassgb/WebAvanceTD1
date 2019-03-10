var mysql      = require('mysql');
var connection = mysql.createPool({
    host     : 'localhost',
    user     : 'admin',
    password : 'admin',
    database : 'bd_commandes'
});
    
    module.exports=connection;