import { client } from './connection';


// client.ping({
//     requestTimeout: 30000,
//   }, function (error) {
//     if (error) {
//       console.error('elasticsearch cluster is down!');
//     } else {
//       console.log('All is well');
//     }
//   });





// if (client.indices.exists({ index: "test"})) {
//     console.log('its here');
// }else {
//   console.log('its not here');
// }

// client.indices.delete({index: 'test'},function(err,resp,status) {  
//   console.log("delete",resp);
// });

function test() {
  client.index({
    index: 'book',
    type: 'book',
    body: {
      "name": "Courtney Box",
      "number": "2223333",
    },
    refresh: 'wait_for'
  }).then(resp => {
    client.search({
      index: 'book',
      type: 'book',
      body: {
        query: {
          match_all: {}
        }
      }
    }).then(({ hits: { hits } }) => {
      console.log(hits);
    });
  });

}

async function manualInput() {
  await client.create({
    index: 'contacts',
    type: 'person',
    body: {
      'name': 'Amy Adams',
      'address': '13 Office Rd',
      'cellnumber': 3332222,
    }
  });
  await client.create({
    index: 'contacts',
    type: 'person',
    body: {
      'name': 'Bill Burr',
      'address': '22 Comedy St',
      'cellnumber': 4443333,
    }
  });
  await client.create({
    index: 'contacs',
    type: 'person',
    body: {
      'name': 'Courtney Cox',
      'address': '44 Friends Ave',
      'cellnumber': 5554444,
    }
  });
  await client.create({
    index: 'contacts',
    type: 'person',
    body: {
      'name': 'Danny Devito',
      'address': '55 iasip ln',
      'cellnumber': 6665555,
    }
  });
}

function clearAll() {
  client.indices.delete({
    index: '_all'
  });
}

function createNewIndex() {
  client.indices.create({
    index: "contact"
  });
}

try {
  test();
} catch (e) {
  console.error(e);
}