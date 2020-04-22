import {Request, Response} from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'shilton.sis@gmail.com',
    password: '56464',
    techs: [
      'react',
      'node.js',
      'vue',
      { title: 'Javascript', expericence: 107},
    ],
  });

  return response.json({ user })
}