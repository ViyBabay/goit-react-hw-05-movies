import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';


const data = {
  url: 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640',
  product: 'Tacos With Lime',
  price: 10.99,
};
ReactDOM.createRoot(document.getElementById('root')).render(
  const painting = (
  <div>
    <img src={data.url} alt={data.product} width="480" />
    <h2>{data.product}</h2>
    <p>Ціна: {data.price}</p>
    <button>Замовити</button>
  </div>
);
);
// import React from 'react';
// import { ReactDOM } from 'react';



// const painting = (
//   <div>
//     <img src={data.url} alt={data.product} width="480" />
//     <h2>{data.product}</h2>
//     <p>Ціна: {data.price}</p>
//     <button>Замовити</button>
//   </div>
// );

// ReactDOM.render(painting, document.querySelector('#root'));
