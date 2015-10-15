Spiritual Timer
=========

An extension of native javascript timers which returns 'Actual Waiting Time' in callback.

## Example ##
```javascript

SpiritualTimer.setTimeout(function(actualTime){
    console.log(actualTime); // "500"
    // Your code
}, 500);
```
## What Problem is it trying to solve?

#### Problem:

Say you are using native setInterval and setTimeout in your application and you have timers running less than 1000ms. However, if you switch TABs or minimize the browser window, these timers slow down a lot. This is a performance feature of modern browsers.
They make the assumption that if the particular web app isn't visible for the user, they can slow down its timers to save performance. This is pretty reasonable in general, but sometimes you just need to keep things running.

#### Solution:

This timer will not make it always run in background. But it will return you the Actual time it waited before executing your code. With this you will know that ok the timer did not run for this amount of time, you can basically add code to cover up for the lost time. Now see the example below.

### Example ###
```javascript

SpiritualTimer.setTimeout(function(actualTime){
    // The user minimizes the borwser tab
    // or switches to another tab for say 2000 ms and then comes back
    console.log(actualTime); // "2000"
    // You know know that it being called after 2000ms not 500ms, you can handle it with your code
}, 500);
```

## Installation

```shell
  npm install spiritual-timer --save
```

## Usage

```js
  var SpiritualTimer = require('SpiritualTimer');
  
  SpiritualTimer.setTimeout(function(actualTime){
    // write your code here
  }, 500);

```

## Contributing

I love pull requests. If you think you can improve the code or you have a idea of adding more features, Just do it and send me pull request

The end goal is to make timers which even works regardless if the tab is active or not. And it is possible as [well](http://maximilianschmitt.me/posts/setinterval-settimeout-slows-down-on-tab-change/). 
But to make it work, currently the best solution is to use Web worker which is not supported by [many browsers](http://caniuse.com/#feat=webworkers)


### Features in pipeline

 * Do it same for setInterval
 * Write timers which use web worker to make it work

## License

MIT license; see [LICENSE](./LICENSE).

(c) 2015 by Inderpal Singh
