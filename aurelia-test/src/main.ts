import './styles.css';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { GlobalComponents } from './components';
import { RouterConfiguration } from '@aurelia/router';

Aurelia
  .register(...GlobalComponents)
  .register(RouterConfiguration)
  .app(MyApp)
  .start();
