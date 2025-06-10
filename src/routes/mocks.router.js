import { Router } from 'express';
import { generateUsers } from '../mocks/userMocker.js';
import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';
import { faker } from '@faker-js/faker';

const router = Router();

router.get('/mockingpets', (req, res) => {
  const pets = Array.from({ length: 20 }, () => ({
    name: faker.animal.dog(),
    species: 'dog',
    age: faker.number.int({ min: 1, max: 15 })
  }));
  res.json(pets);
});

router.get('/mockingusers', (req, res) => {
  res.json(generateUsers(50));
});

router.post('/generateData', async (req, res) => {
  try {
    const { users = 0, pets = 0 } = req.body;

    const newUsers = generateUsers(Number(users));
    await UserModel.insertMany(newUsers);

    const newPets = Array.from({ length: Number(pets) }, () => ({
      name: faker.animal.cat(),
      species: 'cat',
      age: faker.number.int({ min: 1, max: 20 })
    }));

    await PetModel.insertMany(newPets);

    res.json({ message: 'Datos generados', inserted: { users: newUsers.length, pets: newPets.length } });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
