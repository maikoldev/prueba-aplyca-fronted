import Users from '../pages/Users/Index';
import UsersList from '../pages/Users/List';
import UserTodos from '../pages/Users/Todos';

import Register from '../pages/Register';

export default [
  {
    path: '/',
    redirect: { name: 'Register' }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/users',
    component: Users,
    children: [
      {
        path: '',
        name: 'Users',
        component: UsersList
      },
      {
        path: ':userId/todos',
        name: 'UserTodos',
        component: UserTodos,
        props: true
      }
    ]
  }
];
