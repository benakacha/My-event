// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'https://www.eventbriteapi.com/v3/events/search/?token=',
  apiUrlCat: 'https://www.eventbriteapi.com/v3/categories/?token=',
  key: '4ROQ5DXPSMJIG2YQGYHG',
  tokenUrl: '/?token=',
  apiUrlEvent: 'https://www.eventbriteapi.com/v3/events/',
  registerUrl: 'http://localhost:8000/api/register'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
