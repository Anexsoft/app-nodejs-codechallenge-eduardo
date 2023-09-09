import { createContainer, asValue, InjectionMode, asClass } from 'awilix';

import { config } from './configuration';
import database from './database';

import { TransactionFindByIdQuery } from './services/queries/transaction-find-by-id.query';
import { TransactionRepository } from './services/repositories/transaction.repository';
import { TransactionCreateCommand } from './services/commands/transaction-create.command';

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC,
});

export default async () => {
  container.register({
    config: asValue(config),
    logger: asValue(console),

    // services > queries
    transactionFindByIdQuery: asClass(TransactionFindByIdQuery),

    // services > commands
    transactionCreateCommand: asClass(TransactionCreateCommand),

    // repositories
    transactionRepository: asClass(TransactionRepository),

    // db
    db: asValue(await database()),
  });

  return container;
};
