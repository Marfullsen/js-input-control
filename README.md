# js-input-control

A lightweight Javascript library used to handle the input events of mouse, keyboard and touch control from end-user.

[![Test it!](https://img.shields.io/badge/Test%20it!-Gh%20Pages-blue)](https://marfullsen.github.io/js-input-control)
<img src="https://img.shields.io/badge/Vanilla-JavaScript-yellow.svg" alt="Vanilla JS">
[![Forked](https://img.shields.io/badge/Forked%20from-jingwood-green)](https://github.com/jingwood/js-input-control)

# Features

- Event registeriton and dispatching
- Receives and dispatches mouse, keyboard and touch events
- Provides and dispatches dragging events based on mouse and touch events
- Provides functions to check whether specified key is pressed
- Provides hotkey define feature (todo)

# Installation

```shell
yarn add @jingwood/input-control
```

# Hello-World

Test this example [here!](https://marfullsen.github.io/js-input-control)

```js

// get the element to receive mouse, keyboard and touch events
const element = document.getElementById(myTargetElement);

// make sure the element can receive keyboard events
element.tabIndex = 0;
element.focus();

// create controller and use 'on' method to receive input events
const controller = new InputController(element);

// keyup event
controller.on("keyup", e => {
  if (e.keyCode === 32) {
    alert("Space key was pressed");
  }
});

// drag event
controller.on("drag", e => {
  console.log("mouse moving " + e.movement.x + ", " + e.movement.y);
});
```

# License

Released under MIT License

Copyright (C) 2015-2020 Jingwood, unvell.com, all rights reserved.

# References
- **Forked from** [@jingwood/input-control](https://github.com/jingwood/js-input-control)
- [TypeError: Converting circular structure to JSON](https://stackoverflow.com/a/31557814)
- [type="module"](https://stackoverflow.com/questions/61191061/uncaught-syntaxerror-cannot-use-import-statement-outside-a-module)
- [Swap key with value in object](https://stackoverflow.com/a/56781239)