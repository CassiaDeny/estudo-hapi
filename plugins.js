import Good from 'good';
import Swaggered from 'hapi-swaggered';
import SwaggeredUI from 'hapi-swaggered-ui';
import Vision from 'vision';
import Inert from 'inert';
import Tv from 'tv';

//todo plugin do hapi tem essa conf
export default [
  Inert,
  Vision,
  {
    register: Good,
    options: {
      ops: false,
      reporters: {
        consoleReporter: [{ module: 'good-console' }, 'stdout'],
      }
    }
  },
  {
    register: Swaggered,
    options: {
      tags: {
        api: 'Api Users'
      },
      info: {
        title: 'API',
        description: 'Estudo hapi',
        version: '1.0'
      }
    }
  },
  {
    register: SwaggeredUI,
    options: {
      title: 'Api Users',
      path: '/docs',
      swaggerOptions: {
        validatorUrl: null
      }
    }
  },
  {
    register: Tv,
    options: { endpoint: '/logs' }
  }
];
