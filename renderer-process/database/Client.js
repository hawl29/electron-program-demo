var f = require('../renderer-process/database/SELECT');
var pg = require('pg');
var conString = "tcp://postgres:123456@localhost:5432/postgres";//1.连接
var client = new pg.Client(conString);
var test;
Table_Name='info_log';//2.表名
Row_Number=0;//2.行数,默认从0开始
Col_Name='id';//2.列名
client.connect(function(error, results) {
    if(error){
        console.log('ClientConnectionReady Error: ' + error.message);
        client.end();
        return;
    }
      //f._select(client,Table_Name,Row_Number,Col_Name);
      f._select(client,'info_log',3,'rank',function (result) {

          document.getElementById('got-database-info').innerHTML = result;
          test = result;
          console.log(test)
      });//2.all

});


