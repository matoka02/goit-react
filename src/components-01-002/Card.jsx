import data from '../assets/data-01-001.json';
import { Head } from './Head';
// 2. ванильный CSS, требует уникальных названий классов
// import '../components-01-002/Card.css';
// 2. модульный CSS
// import css from '../components-01-002/Card.module.css';
// 2. библиотека для добавления переключателей классов clsx
// import clsx from 'clsx';
// 3. библиотека для добавления классов styled-components
import { Container, Picture } from './Card.styled';


// // 1. Пример с использованием Bootstrap

// export const Card = () => {    
//     return data.map((photo) => {
//         return (
//             <div key={photo.id} className="card mx-auto my-2" style={{width: '18rem'}}>
//             <img src={photo.url} className="card-img-top" alt={photo.title} />
//             <div className="card-body">
//                 <h5 className="card-title">Card title: {photo.title}</h5>
//                 <Head id='id-123' clas= 'card-title'>
//                     {/* children */}
//                     jjjjjjjjjjjj
//                     <p>mmmmmmmmmm</p>
//                     <div>gggggggggg</div>
//                 </Head>
//                 <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <a href="http" className="btn btn-primary">Go somewhere</a>
//             </div>
//             </div>
//         )
//     })
// };


// // 2. Пример с использованием модулей

// export const Card = ({isOnline}) => {    
//     return data.map((photo) => {
//         return (
//             <div 
//             key={photo.id} 
//             // инлайновые стили
//             // style={{backgroundColor: '#808080'}}
//             // если прописать в App  <Card isOnline/>, стили простые .red
//             // className={isOnline? css.red : css.blue}
//             // если прописать в App  <Card isOnline/>, комбинация стилей .main.red
//             // className={isOnline? `${css.main} ${css.red}` : `${css.main} ${css.blue}`}
//             // если прописать в App  <Card isOnline/>, использование библиотеки clsx
//             // className={clsx(css.main, isOnline && css.red, !isOnline && css.blue)}
//             // если прописать в App  <Card isOnline/>, использование библиотеки clsx - рефакторинг    
//             className={clsx(
//                 css.main, {
//                     [css.red]: isOnline
//                 }
//                 )}            
//             >
//                 <img src={photo.url} alt={photo.title} className={css.photo}/>
//                 <div >
//                     <h5 >Card title: {photo.title}</h5>
//                     <Head id='id-123' clas= 'card-title'>
//                         jjjjjjjjjjjj
//                         <p>mmmmmmmmmm</p>
//                         <div>gggggggggg</div>
//                     </Head>
//                     <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                     <a href="http">Go somewhere</a>
//                 </div>
//             </div>
//         )
//     })
// };


// // 3. Пример с использованием библиотеки styled-components

// см. файл Card.styled.js

export const Card = ({isOnline, isOffline}) => {    
    return data.map((photo) => {
        return (
            <Container key={photo.id} isHide={isOnline}>
                <Picture src={photo.url} alt={photo.title} />
                <div >
                    <h5 >Card title: {photo.title}</h5>
                    <Head id='id-123' clas= 'card-title'>
                        jjjjjjjjjjjj
                        <p>mmmmmmmmmm</p>
                        <div>gggggggggg</div>
                    </Head>
                    <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="http">Go somewhere</a>
                </div>
            </Container>
        )
    })
};
