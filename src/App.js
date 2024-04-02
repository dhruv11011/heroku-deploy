import './App.css';

function App(props) {
  return (
    <div className="App">
      <img src={props.imgUrl} />
      <h2>{props.name}</h2>
      <p>Color: {props.color}</p>
      <p>Manufacturer: {props.man}</p>
    </div>
  );
}

App.defaultProps = {
  name: "Not Available",
  color: "Not available",
  man: "Not available",
  imgUrl: "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227724992-stock-illustration-image-available-icon-flat-vector.jpg"
};


export default App;


