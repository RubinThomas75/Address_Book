
// var elasticsearch = require('elasticsearch');
// var client = new elasticsearch.Client({
//  host: 'localhost:9200',
//  log: 'info'
// });

import * as elasticsearch from 'elasticsearch';

export const client = new elasticsearch.Client({
    host: 'localhost:9200',
    log: 'trace'
});

