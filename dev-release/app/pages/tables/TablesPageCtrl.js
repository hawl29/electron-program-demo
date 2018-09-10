/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.tables')
      .controller('TablesPageCtrl', TablesPageCtrl);


  /** @ngInject */

  function TablesPageCtrl($scope, $filter,$http, editableOptions, editableThemes) {

      //$scope.smartTablePageSize;


      //$http.get('app/pages/tables/tsconfig.json').then(function(response){
         // $scope.smartTableData = response.data.sites;
         // $scope.smartTableData1 = response.data.sites;
     // });

      var f = require('../renderer-process/database/SELECT');
      var pg = require('pg');
      var QueryStream = require('pg-query-stream');
      var JSONStream = require('JSONStream');
      var conString = "tcp://postgres:123456@localhost:5432/testdb";//1.连接
      var client = new pg.Client(conString);
      let test;
      //Table_Name='Log_Inf';//2.表名
      //Row_Number=0;//2.行数,默认从0开始
      //Col_Name='id';//2.列名
      client.connect(function(error,done) {
          if(error){
              console.log('ClientConnectionReady Error: ' + error.message);
              client.end();
              return;
          }
          var query = new QueryStream('SELECT * FROM warning');
          var stream = client.query(query);
          //release the client when the stream is finished
          stream.on('end',() => {
              console.log();
              console.log('1')
          });
          stream.pipe(JSONStream.stringify()).pipe(process.stdout);
          //f._select(client,Table_Name,Row_Number,Col_Name);
          /*f._select(client,'warning',3,'rank',function (result) {

              //document.getElementById('got-database-info').innerHTML = result;
              test = result;
              $scope.smartTableData = test;
              console.log(test)
          });//2.all*/

      });
  }
})();
