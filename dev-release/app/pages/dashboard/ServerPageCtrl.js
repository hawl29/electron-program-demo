/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.tables')
        .controller('ServerPageCtrl', ServerPageCtrl);

    /** @ngInject */
    function ServerPageCtrl($scope, $filter) {

        $scope.smartTablePageSize = 2;

        $scope.smartTableData =
            [
                {
                    id: 1,
                    firstName: 'Mark',
                    lastName: 'Otto',
                    username: '@mdo',
                    email: 'mdo@gmail.com',
                    age: '28'
                },
                {
                    id: 2,
                    firstName: 'Jacob',
                    lastName: 'Thornton',
                    username: '@fat',
                    email: 'fat@yandex.ru',
                    age: '45'
                },
                {
                    id: 3,
                    firstName: 'Larry',
                    lastName: 'Bird',
                    username: '@twitter',
                    email: 'twitter@outlook.com',
                    age: '18'
                },
                {
                    id: 4,
                    firstName: 'John',
                    lastName: 'Snow',
                    username: '@snow',
                    email: 'snow@gmail.com',
                    age: '20'
                },
                {
                    id: 5,
                    firstName: 'Jack',
                    lastName: 'Sparrow',
                    username: '@jack',
                    email: 'jack@yandex.ru',
                    age: '30'
                },
                {
                    id: 6,
                    firstName: 'Ann',
                    lastName: 'Smith',
                    username: '@ann',
                    email: 'ann@gmail.com',
                    age: '21'
                },
                {
                    id: 7,
                    firstName: 'Barbara',
                    lastName: 'Black',
                    username: '@barbara',
                    email: 'barbara@yandex.ru',
                    age: '43'
                },
                {
                    id: 8,
                    firstName: 'Sevan',
                    lastName: 'Bagrat',
                    username: '@sevan',
                    email: 'sevan@outlook.com',
                    age: '13'
                },
                {
                    id: 9,
                    firstName: 'Ruben',
                    lastName: 'Vardan',
                    username: '@ruben',
                    email: 'ruben@gmail.com',
                    age: '22'
                },
                {
                    id: 10,
                    firstName: 'Karen',
                    lastName: 'Sevan',
                    username: '@karen',
                    email: 'karen@yandex.ru',
                    age: '33'
                },
                {
                    id: 11,
                    firstName: 'Mark',
                    lastName: 'Otto',
                    username: '@mark',
                    email: 'mark@gmail.com',
                    age: '38'
                },
                {
                    id: 12,
                    firstName: 'Jacob',
                    lastName: 'Thornton',
                    username: '@jacob',
                    email: 'jacob@yandex.ru',
                    age: '48'
                },
                {
                    id: 13,
                    firstName: 'Haik',
                    lastName: 'Hakob',
                    username: '@haik',
                    email: 'haik@outlook.com',
                    age: '48'
                },
                {
                    id: 14,
                    firstName: 'Garegin',
                    lastName: 'Jirair',
                    username: '@garegin',
                    email: 'garegin@gmail.com',
                    age: '40'
                },
                {
                    id: 15,
                    firstName: 'Krikor',
                    lastName: 'Bedros',
                    username: '@krikor',
                    email: 'krikor@yandex.ru',
                    age: '32'
                },
                {
                    "id": 16,
                    "firstName": "Francisca",
                    "lastName": "Brady",
                    "username": "@Gibson",
                    "email": "franciscagibson@comtours.com",
                    "age": 11
                },
                {
                    "id": 17,
                    "firstName": "Tillman",
                    "lastName": "Figueroa",
                    "username": "@Snow",
                    "email": "tillmansnow@comtours.com",
                    "age": 34
                },
                {
                    "id": 18,
                    "firstName": "Jimenez",
                    "lastName": "Morris",
                    "username": "@Bryant",
                    "email": "jimenezbryant@comtours.com",
                    "age": 45
                }
                ];

        /*var pg = require('pg');
        var conString = "tcp://postgres:123456@localhost:5432/testdb";//1.连接
        var client = new pg.Client(conString);
        client.connect();

        client.query('select * from server').then(result => $scope.smartTableData = result.rows);

        setTimeout (5000000,console.log($scope.smartTableData));
        /*client.connect(function(error) {
            if(error){
                console.log('ClientConnectionReady Error: ' + error.message);
                client.end();
                return;
            }
            var resultSet;


            /*client.query('select * from server', function selectCb(error, results)
            {

                if (error)
                {
                    console.log('GetData Error: ' + error.message),
                        client.end();
                    return;
                }
                if(results.rowCount > 0)
                {

                    $scope.smartTableData = results.rows;
                    resultSet = $scope.smartTableData;
                    //console.log(resultSet);
                }

                console.log(resultSet);
            });

        });*/
    }
})();
