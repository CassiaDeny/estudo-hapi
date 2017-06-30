import Hapi from 'hapi';
import routes from './routes';
import dbConnect, { objectID } from './src/db';
import plugins from './plugins';

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.dbConnect = dbConnect;
server.objectID = objectID;

server.route(routes);

server.register(plugins, (error) => {
  if (error) throw error;

  server.log('Server registred plugin successfully');
});

export default server;
