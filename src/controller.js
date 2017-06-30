import Boom from 'boom';

export const hello = (request, reply) => {
  const user = request.params.user ? encodeURIComponent(request.params.user) : 'stranger';

  reply(`Hello ${user}!`);
};

export const create = (request, reply) => {
  const user = request.payload;
  request.server.db.collection('user').insertOne(user)
    .then((data) => {
      reply(data.ops[0]);
    })
    .catch(err => reply(Boom.badImplementation(err.message)));
};

export const getById = (request, reply) => {
  const id = request.params.id;
  const objID = request.server.objectID(id);


  request.server.db.collection('user').findOne({ _id: objID })
    .then((data) => {
      reply(data);
    })
    .catch(err => reply(Boom.badImplementation(err.message)));
};

export const list = (request, reply) => {
  request.server.db.collection('user').find({}).toArray()
    .then((data) => {
      reply(data);
    })
    .catch(err => reply(Boom.badImplementation(err.message)));
};

export const remove = (request, reply) => {
  const id = request.params.id;
  const objID = request.server.objectID(id);

  request.server.db.collection('user').remove({ _id: objID })
    .then(() => reply().code(204))
    .catch(err => reply(Boom.badImplementation(err.message)));
};

export const update = (request, reply) => {
  const modified = request.payload;
  delete modified._id;

  const id = request.params.id;
  const objID = request.server.objectID(id);

  request.server.db.collection('user')
    .findOneAndUpdate({ _id: objID }, { $set: modified }, { returnOriginal: false })
    .then(data => reply(data.value))
    .catch(err => reply(Boom.badImplementation(err.message)));
};
