import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App
      name="Wooden Dining Table"
      color="Wooden"
      man="Reva Furnitures"
      imgUrl="https://housing.com/news/wp-content/uploads/2022/11/image8-9.jpg"
    />
    <App
      name="L-shaped Couch set"
      color="Brown"
      man="Anant Furnitures"
      imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtRrhbPAh4CeySTY5r1GV5RzfkFJFD13Rc2w&usqp=CAU"
    />
    <App
      name="Two-Seater Plush chair set"
      color="Blue"
      man="Next-in Furnitures"
      imgUrl="https://classy.co.in/wp-content/uploads/2023/02/Single-Chairs.webp"
    />
    <App
      name="Minimal Bedside table and chair set"
      color="Black"
      man="Reva Furnitures"
      imgUrl="https://housing.com/news/wp-content/uploads/2022/11/Popular-wooden-furniture-design-for-home-and-types-of-wood.jpg"
    />
  </React.StrictMode>
);

reportWebVitals();
