import server from './server';

server.dbConnect()
  .then((db) => {
    server.db = db;
    server.start((err) => {
      if (err) {
        server.log(err);
      }

      server.log(`Oi! Server running at: ${server.info.uri}`);
    });
  })
  .catch(err => server.log(err));
