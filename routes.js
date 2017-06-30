import * as controller from './src/controller';
import * as schema from './src/schema';

const routes = [{
    method: 'GET',
    path: '/hello/{user?}',
    handler: controller.hello,
  },
  {
    method: 'POST',
    path: '/users',
    handler: controller.create,
    config: {
      tags: ['api'],
      validate: {
        payload: schema.user,
      },
      response: {
        status: {
          200: schema.userResponse,
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: controller.getById,
    config: {
      tags: ['api'],
      validate: {
        params: {
          id: schema.paramId,
        },
      },
      response: {
        status: {
          200: schema.userResponse,
        },
      },
    },
  },
  {
    method: 'GET',
    path: '/users',
    handler: controller.list,
    config: {
      tags: ['api'],
      response: {
        status: {
          200: schema.userList,
        },
      },
    },
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: controller.remove,
    config: {
      tags: ['api'],
      validate: {
        params: { id: schema.paramId },
      },
    },
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: controller.update,
    config: {
      tags: ['api'],
      validate: {
        params: { id: schema.paramId },
        payload: schema.user,
      },
      response: {
        status: { 200: schema.userResponse },
      },
    },
  },
];

export default routes;
