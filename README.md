This app demonstrates that [`workbox-range-requests@4.2.0`](https://developers.google.com/web/tools/workbox/modules/workbox-range-requests) (via `workbox-webpack-plugin`) does not work as expected in Safari. The mp4 video no longer renders when the service worker pre-caches the asset and serves it afterwards.

## Deployment

```
$ npm i
$ npm run build
$ npx serve -s build -l 3000
```
