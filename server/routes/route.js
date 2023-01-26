import express from 'express';
import { userSignup } from '../controller/user-controller.js';

const Router = express.Router();
Router.post('/signup', userSignup);

export default Router;