import 'zone.js';
import 'zone.js/testing';
// import 'zone.js/dist/zone-testing';
import 'jest-preset-angular';
import './jestGlobalMocks';
import 'core-js/es/reflect';
import 'core-js/proposals/reflect-metadata';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {getTestBed} from '@angular/core/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);
