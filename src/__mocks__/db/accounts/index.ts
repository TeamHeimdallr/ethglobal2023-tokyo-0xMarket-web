import { faker } from '@faker-js/faker';
import { factory, nullable, primaryKey } from '@mswjs/data';

export const accountDB = factory({
  accounts: {
    id: primaryKey(() => faker.random.alphaNumeric(6)),
    address: String,
    receivingAddress: String,

    title: String,
    description: String,
    category: String,

    price: Number,
    tokenValue: Number,

    hidded: nullable(Boolean),
  },

  accountDiscovers: {
    id: primaryKey(() => faker.random.alphaNumeric(6)),
    address: String,
    title: String,
    category: String,

    price: Number,
    tokenValue: Number,
  },
});
