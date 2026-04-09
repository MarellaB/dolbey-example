import { route } from '@aurelia/router';
import { Dashboard } from './pages/dashboard/dashboard'
import { CodesDatabase } from './pages/codes-database/codes-database'

@route({
  routes: [
    { path: 'dashboard', component: Dashboard },
    { path: 'codes-database', component: CodesDatabase }
  ]
})

export class MyApp {
  message = "Hello World"

  testAction = () => {
    console.log("THIS WORKS")
  }
}
