
const {Spanner} = require('@google-cloud/spanner');
const spanner = new Spanner();

const instance = spanner.instance('my-instance');
const database = instance.database('my-database');
const table = database.table('Singers');

const query = table.createQuery('SELECT * FROM Singers');

query.moveCall({ priority: 100 });

