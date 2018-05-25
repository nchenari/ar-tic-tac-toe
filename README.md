# xoAR
> Tic-Tac-Toe! Play in 2D or 3D augmented reality.

xoAR is an entirely web-based, front-end Tic-Tac-Toe game that can be played in both traditional and augmented reality modes across multiple devices and browsers. Desktop/laptop AR gameplay is seamless so long as you have a webcam, and mobile gameplay functions at high levels of performance on a variety of platforms (e.g., iOS, Android, Windows Phone, etc.) and browsers (e.g., Safari, Chrome, Firefox, etc.). 

For those of you playing on iOS, there are some caveats for AR gameplay. Namely, your phone will need to be updated to at least iOS 11, but preferably iOS 11.3.1, and Safari must be used for the AR game to be able to run, otherwise the following error will be thrown:

"Webcam Error name: message: WebRTC issue navigator.mediaDevices not present in your browser." 

Additionally, another iOS/Safari quirk we encountered was that the game had to be explicitly opened in Safari, as opposed to jumping into Safari through a third party application such as Slack. 

For everyone on Android, Windows Phone, etc., AR gameplay should occur without difficulty, but do not hesitate to reach out if you run into any problems..

## Tech

xoAR is built from a variety of front-end web technologies including HTML, A-Frame, CSS, Materialize, JavaScript, jQuery, and AR.js. Across both the 2D and 3D game embodiments, the core markup structure and styling are done in HTML, CSS, and Materialize, and the tic-tac-toe game logic is driven by JavaScript/jQuery. Additionally, in the 3D game embodiment, A-Frame is leveraged in order to provide robust, cross-platform AR visual components (e.g., tic-tac-toe board and X's & O's) and the rendering of such components is provided for by AR.js. For your reference, we have provided links to A-Frame and AR.js in case you are curious to learn more!

  https://aframe.io/
  
  https://github.com/jeromeetienne/AR.js/blob/master/README.md

## Gameplay Instructions

In order to play xoAR in AR mode, the Hiro AR marker provided under the oxAR "AR Marker" window needs to be utilized. 

For example, on a first computing device, maybe your deskptop/laptop, pull up the Hiro AR Marker. On a second computing device such as your mobile phone, pull up the xoAR "AR Tic-Tac-Toe" window. Upon doing so, you will be asked if xoAR can use your camera - select OK - then point your camera at the Hiro AR Marker on the first computing device. The AR Tic-Tac-Toe gameboard will be rendered on your mobile device! You can then touch the rendered AR planes in order to make your move. 

Such steps may also be inverted so you can play on your desktop/laptop while providing the Hiro AR Marker from your mobile device.

## Gameplay Photos

Mobile

<img width="556" alt="screen shot 2018-05-25 at 11 05 21 am" src="https://user-images.githubusercontent.com/37127765/40551655-977938d4-600b-11e8-8540-66a1b58bfc7e.png">

<img width="649" alt="screen shot 2018-05-25 at 11 07 50 am" src="https://user-images.githubusercontent.com/37127765/40551804-f499a5f8-600b-11e8-904e-fa17734012a2.png">

Laptop

<img width="1435" alt="screen shot 2018-05-25 at 10 56 13 am" src="https://user-images.githubusercontent.com/37127765/40551401-cda65028-600a-11e8-8461-75bf6261b70a.png">
  
## Link

Visit on GitHub:

```sh
https://nchenari.github.io/ar-tic-tac-toe/index.html
```

## Contributing

1. Fork it (<https://github.com/nchenari/ar-tic-tac-toe>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request
