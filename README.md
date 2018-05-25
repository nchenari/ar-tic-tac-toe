# xoAR
> Tic Tac Toe! Play in 2D or 3D augmented reality.

xoAR is an entirely web-based, front-end tic-tac-toe game that can be played in both traditional and augmented reality modes across multiple devices and browsers. Desktop/laptop AR gameplay is seamless so long as you have a webcam, and mobile gameplay functions at high levels of performance on a variety of platforms (e.g., iOS, Android, Windows Phone, etc.) and browsers (e.g., Safari, Chrome, Firefox, etc.). 

For those of you playing on iOS, there are some caveats for AR gameplay. Namely, your phone will need to be updated to at least iOS 11, but preferably iOS 11.3.1, and Safari must be used for the AR game to be able to run otherwise the following error will be thrown:

"Webcam Error name: message: WebRTC issue navigator.mediaDevices not present in your browser." 

Additionally, another iOS/Safari quirk we encountered was that the game had to be explicitly opened in Safari, as opposed to jumping into Safari through a third party application such as Slack. 

For everyone on Android, Windows Phone, etc., AR gameplay should occur without difficulty, but don't hesitate to reach out if you run into any difficulties.

![Tic-Tac-Toe](https://en.wikipedia.org/wiki/Tic-tac-toe#/media/File:Tic_tac_toe.svg)

## Link

Visit on GitHub:

```sh
https://nchenari.github.io/ar-tic-tac-toe/index.html
```

## Usage example

A few motivating and useful examples of how your product can be used. Spice this up with code blocks and potentially more screenshots.

_For more examples and usage, please refer to the [Wiki][wiki]._

## Tech

xoAR is built from a variety of front-end web technologies including HTML, A-Frame, CSS, Materialize, JavaScript, jQuery, and AR.js. Across both the 2D and 3D game embodiments, the core markup structure and styling are done in HTML, CSS, and Materialize, and the tic-tac-toe game logic is driven by JavaScript/jQuery. Additionally, in the 3D game embodiment, A-Frame is leveraged in order to provide robust, cross-platform AR visual components (e.g., tic-tac-toe board and X's & O's) and the rendering of such components is provided for by AR.js. For your reference, we have provided links to A-Frame and AR.js in case you're curious to learn more!

  https://aframe.io/
  
  https://github.com/jeromeetienne/AR.js/blob/master/README.md

## Meta

Your Name – [@YourTwitter](https://twitter.com/dbader_org) – YourEmail@example.com

Distributed under the XYZ license. See ``LICENSE`` for more information.

[https://github.com/yourname/github-link](https://github.com/dbader/)

## Contributing

1. Fork it (<https://github.com/nchenari/ar-tic-tac-toe>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
