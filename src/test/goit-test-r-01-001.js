import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'index.css';

import images from '../assets/image.json';
import data from '../assets/data-01-001.json';
import { Card } from 'components-01-001/Card';


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


// // 1.1 Рендеринг на JS
// const div = document.createElement('div');
// div.id = 'some-ID';
// div.classList = 'test-class';
// const root = document.getElementById('root');
// root.append(div);

// // 1.2 Рендеринг на React
// const div = React.createElement('div', {name: 'main', id: 'test-ID', className: 'test-class', children: ['hello', 'React', 'from', 'UA']} );
// ReactDOM.createRoot(document.getElementById('root')).render(div);

// console.log(div);       // {$$typeof: Symbol(react.element), type: 'div', key: null, ref: null, props: {…}, …}
// // props: {name: 'main', id: 'test-ID', className: 'test-class', children: Array(4)}


// // 2. Вложенность элементов

// const paragraph = React.createElement('p', {id:'test-P-Id', children: ['I am P']});

// const div = React.createElement('div', {name: 'main', id: 'test-ID', className: 'test-class', children: paragraph} );

// ReactDOM.createRoot(document.getElementById('root')).render(div);

// // рефакторинг
// const p = <p id='test-Id'>I am P</p>;

// const div = (
//     <div name='main' id='test' className='test-class'>
//         {p}
//     </div>
// );

// ReactDOM.createRoot(document.getElementById('root')).render(div);

// // Подключение Bootstrap в html
// <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"></link>
// <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>


// // 3. Создание карточки

// const card = (
//     data.map((photo) => {
//         return (
//             <div key={photo.id} className="card mx-auto my-2" style={{width: '18rem'}}>
//             <img src={photo.url} className="card-img-top" alt={photo.title} />
//             <div className="card-body">
//                 <h5 className="card-title">Card title: {photo.title}</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="http" className="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>
//         )
//     })
// );

// ReactDOM.createRoot(document.getElementById('root')).render(card);

// // рефакторинг в функцию

// const Card = () => {    
//     return data.map((photo) => {
//         return (
//             <div key={photo.id} className="card mx-auto my-2" style={{width: '18rem'}}>
//             <img src={photo.url} className="card-img-top" alt={photo.title} />
//             <div className="card-body">
//                 <h5 className="card-title">Card title: {photo.title}</h5>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="http" className="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>
//         )
//     })
// };

// ReactDOM.createRoot(document.getElementById('root')).render(<Card />);


// // 4. Разделение по файлам

// см. папку components-01-001

ReactDOM.createRoot(document.getElementById('root')).render(<Card />);