//Rubin Thomas
//Typescript Address Book
//Training Day 2

import * as express from 'express';
//will route to contacts in this addressbook
import { router } from './api/routes/contact';

export const requestHandle = (express as any)();


requestHandle.use('/contact', router);