import { MongoClient, ObjectID } from 'mongodb';

export const objectID = ObjectID;

export default function dbConnect() {
  return MongoClient.connect('mongodb://localhost:27017/users');
}
