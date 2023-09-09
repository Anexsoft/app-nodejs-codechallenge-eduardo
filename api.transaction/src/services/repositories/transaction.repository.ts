import { Db, Collection, ObjectId } from 'mongodb';

import { Transaction } from './domain/transaction.domain';

export class TransactionRepository {
  private collection: Collection<Transaction>;

  constructor(db: Db) {
    this.collection = db.collection('transactions');
  }

  async findById(_id: ObjectId) {
    return await this.collection.findOne({
      _id,
    });
  }

  async create(input: Transaction) {
    const { insertedId } = await this.collection.insertOne(input);
    return insertedId;
  }
}
