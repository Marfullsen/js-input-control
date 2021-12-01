////////////////////////////////////////////////////////////////////////////////
// js-input-control
// A lightweight library to handle the mouse, keyboard and touch control.
//
// MIT License (C) 2015-2020 Jingwood, unvell.com, all rights reserved.
////////////////////////////////////////////////////////////////////////////////

import { InputController, EventDispatcher } from "../src/controller.js";
    import { Keys } from "../src/keyboard.js";
    
    // get the element to receive mouse, keyboard and touch events
    const element = document.getElementById('testbox');

    const logtext = document.getElementById("log");
    const logarg = document.getElementById("log-arg");
    const keys = Object.fromEntries(Object.entries(Keys).map(a => a.reverse()))

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
      const pressedKey = keys[e.keyCode] ? keys[e.keyCode] : 'unkown';
      logtext.innerText = `Pressed keycode: ${e.keyCode}. (${pressedKey})` + "\n" + logtext.innerText;
      logarg.innerText = `Last pressed keycode: ${e.keyCode}. (${pressedKey})`;
    });

    // drag event
    controller.on("drag", e => {
      console.log("mouse moving " + e.movement.x + ", " + e.movement.y);
      logtext.innerText = "Mouse moving " + e.movement.x + ", " + e.movement.y + "\n" + logtext.innerText;
      logarg.innerText = "Last mouse moved: " + e.movement.x + ", " + e.movement.y;
    });