import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import 'index.css';
import images from '../assets/image.json';


// Лекция 03.03.2023


// console.log('hello');
// console.log(images);     // объект с 5 картинками


// // Пример элемента

// const img = React.createElement('img', {
//     src: images[0],
//     width: '200px',
// });
// console.log(img);           // {$$typeof: Symbol(react.element), type: 'img', key: null, ref: null, props: {…}, …}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(img);


// // Пример компонента

// const img = (src) => {
//     return React.createElement('img', {
//         src: src,
//         width: '200px',
//     });
// }
// console.log(img);         

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(img(images[0]));


// // Рефакторинг
// const ImgComponent = ({src, alt = 'roses'}) => {
//     // console.log(props.src);        

//     return (
//         <div>
//             <img width='200px' src={src} alt={alt}></img>
//             <div />      
//         </div>
        
//     )
// };  

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ImgComponent src={images[0]} />);


// // Рефакторинг  с проверками
// const ImgComponent = ({src, alt = 'roses'}) => {
//     // console.log(props.src);        

//     return (
//         <div>
//             {src ? <img width='200px' src={src} alt={alt}></img> : <p>No images</p>}
//             <div />      
//         </div>
        
//     )
// };  

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ImgComponent src={images[0]} />);


// // Рендеринг на JS
// const div = document.createElement('div');
// const root = document.getElementById('root');
// root.append(div);

const div = React.createElement('div');
const root = document.getElementById('root');
ReactDOM.createRoot(root).render(div);















