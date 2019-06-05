import 'jquery/dist/jquery';
import 'popper.js/dist/popper'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import TodoListController from './bar';
import drop from './dir';
angular.module('todoApp', [])
  .component('myDrop',drop)
  .controller('TodoListController',TodoListController);