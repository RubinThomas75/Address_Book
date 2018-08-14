var client = require('./connection.ts');


client.ping({
    requestTimeout: 30000,
  }, function (error) {
    if (error) {
      console.error('elasticsearch cluster is down!');
    } else {
      console.log('All is well');
    }
  });

  
  
client.indices.create({
    index: "test"
});

if (client.indices.exists({ index: "test"})) {
    console.log('its here');
}