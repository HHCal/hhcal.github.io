var id = location.search.substr(1).split('-');
var tableUri = 'https://hhcal.table.core.windows.net';
var token = '?sv=2017-04-17&ss=t&srt=sco&sp=ru&se=2038-01-15T23:56:06Z&st=2018-01-15T15:56:06Z&spr=https&sig=RSso2iiGMPIxpLUVBpKigeEiOUIjhxaUN89GzXVcyTM%3D';
var tableService = AzureStorage.createTableServiceWithSas(tableUri, token);
var tableQuery = new AzureStorage.TableQuery()
                .where('PartitionKey eq ? and RowKey eq ?', id[0], id[1].split(/=&/)[0]);
tableService.queryEntities('hhcal', tableQuery, null, function(error, results) {
    if (error) {
        window.location.href = '/';
    } else {
        var app = {
            el: '#page',
            data: {
                lang: results.entries[0].title._.replace(/\+/g, ' '),
                langClass: {},
                code: decodeURIComponent(results.entries[0].code._.replace(/\+/g, ' ')),
                desc: decodeURIComponent(results.entries[0].desc._.replace(/\+/g, ' '))
            },
            mounted: function() {
                var prism = document.createElement('script');
                prism.src = '../js/prism.js';
                document.body.appendChild(prism);
            }
        };
        app.data.langClass['language-' + results.entries[0].lang._] = true;
        new Vue(app);
    }
});