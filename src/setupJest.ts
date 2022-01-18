import 'zone.js';
import 'zone.js/testing';
// import 'zone.js/dist/zone-testing';
import 'jest-preset-angular';
import './jestGlobalMocks';
import 'core-js/es/reflect';
import 'core-js/proposals/reflect-metadata';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import {getTestBed, TestBed} from '@angular/core/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting(),
);

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: string) => {
      return '';
    },
  }),
});
