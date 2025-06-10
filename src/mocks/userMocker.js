import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generateUsers = (quantity) => {
  const hashedPassword = bcrypt.hashSync('coder123', 10);
  return Array.from({ length: quantity }, () => ({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: hashedPassword,
    role: faker.helpers.arrayElement(['user', 'admin']),
    pets: []
  }));
};
