import { Logger } from '../../types';
import { TransactionRepository } from '../repositories/transaction.repository';

export interface TransactionCreateCommandInput {
  accountExternalIdDebit: string;
  accountExternalIdCredit: string;
  tranferTypeId: number;
  value: number;
}

export class TransactionCreateCommand {
  constructor(
    private readonly transactionRepository: TransactionRepository,
    private readonly logger: Logger,
  ) {}

  async handle(input: TransactionCreateCommandInput) {
    this.logger.debug(
      `Trying to create new transaction for ${input.accountExternalIdCredit}:${input.accountExternalIdDebit}`,
    );

    return this.transactionRepository.create({
      accountExternalIdCredit: input.accountExternalIdCredit,
      accountExternalIdDebit: input.accountExternalIdDebit,
      tranferTypeId: input.tranferTypeId,
      value: input.value,
    });
  }
}
