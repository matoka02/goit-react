import data from '../assets/data-01-001.json';
import { Head } from './Head';


// // Пример с использованием Bootstrap

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

export const Card = () => {    
    return data.map((photo) => {
        return (
            <div key={photo.id} style={{
                backgroundColor: '#808080'
            }}>
            <img src={photo.url} alt={photo.title} />
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
            </div>
        )
    })
};
