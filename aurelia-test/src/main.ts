import './styles.css';
import Aurelia from 'aurelia';
import { MyApp } from './my-app';
import { GlobalComponents } from './components';

Aurelia
  .register(...GlobalComponents)
  .app(MyApp)
  .start();
