import React from 'react';
import 'index.css';
import images from '../assets/image.json';


// day01

console.log('hello');


// console.log(images);     // объект с 5 картинками

const img = React.createElement('img', {
    src: images[0]
});
console.log(img);           // {$$typeof: Symbol(react.element), type: 'img', key: null, ref: null, props: {…}, …}
