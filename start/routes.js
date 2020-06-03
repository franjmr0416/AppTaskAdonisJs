'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('apptask/login', ({ view }) => {
  return view.render('login')
});
Route.get('apptask/home', ({ view }) => {
  return view.render('home')
});
Route.get('apptask/registro', ({ view }) => {
  return view.render('registro')
})
Route.get('apptask/newProject', ({ view }) => {
  return view.render('newproject')
})

Route.group(()=>{
  Route.post('users/register', 'UserController.store');
  Route.post('users/login', 'UserController.login');

  Route.get('proyectos', 'ProyectoController.index').middleware('auth');
  Route.post('proyectos', 'ProyectoController.create').middleware('auth');
  Route.delete('proyectos/:id', 'ProyectoController.destroy').middleware('auth');
  Route.patch('proyectos/:id', 'ProyectoController.update').middleware('auth');

  Route.get('proyectos/:id/tareas', 'TareaController.index').middleware('auth');
  Route.post('proyectos/:id/tareas', 'TareaController.create').middleware('auth');
  Route.patch('tareas/:id', 'TareaController.update').middleware('auth');
  Route.delete('tareas/:id', 'TareaController.destroy').middleware('auth');
}).prefix('api/v1');

