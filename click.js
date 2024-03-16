simulateMouseEvent = function(element, eventName, coordX, coordY) {
    element.dispatchEvent(new MouseEvent(eventName, {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: coordX,
        clientY: coordY,
        button: 0
    }));
};
  
element = document.querySelector(''); // Element to click

box = element.getBoundingClientRect(),
    coordX = box.left + (box.right - box.left) / 2,
    coordY = box.top + (box.bottom - box.top) / 2;

simulateMouseEvent (element, "mousedown", coordX, coordY);
simulateMouseEvent (element, "mouseup", coordX, coordY);
simulateMouseEvent (element, "click", coordX, coordY);