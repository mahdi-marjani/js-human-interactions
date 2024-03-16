function setNativeValue(element, value) {
    valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    prototype = Object.getPrototypeOf(element);
    prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  
    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
}

text = 'abcde';
for (let i = 0; i < text.length; i++) {
    input = document.querySelector('') // Input to fill
    setNativeValue(input, input.value + text[i]);
    input.dispatchEvent(new Event('input', { bubbles: true }));
}