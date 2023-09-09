import { ObjectId } from 'mongodb';

export interface Transaction {
  _id?: ObjectId;
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
  tranferTypeId: number;
  value: number;
}
