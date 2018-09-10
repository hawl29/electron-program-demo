function _select(client,Table_Name,start_time,end_time,callback)
{
    var resultSet;
    selectSQLString = 'select * from '+Table_Name;
    client.query(selectSQLString, function selectCb(error, results)
    {
        if (error)
        {
            console.log('GetData Error: ' + error.message),
                client.end();
            return;
        }
        if(results.rowCount > 0)
        {

            var temp = results.rows;
            for(var i = 0; i < results.rowCount ; i++)
            {
                if(temp[i]['日志时间']);

            }
            //console.log(resultSet);
        }


        //console.log(resultSet);

        callback(resultSet);
        //document.getElementById('got-database-info').innerHTML = resultSet;
        /* 添加功能:使查询结果集返回到客户端并保证此函数的通用性. */
    });


}
exports._select = _select;