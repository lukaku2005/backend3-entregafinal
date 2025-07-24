import { Router } from 'express';
import UserModel from '../dao/models/user.model.js';


const router = Router();

router.get('/', async (req, res) => {
  const users = await UserModel.find();
  res.json(users);
});

export default router;
