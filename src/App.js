import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Heading from './Heading';
import Menu from './Menu';
import Card from './Card';

function App() {
  return (
   <>
  <div className="row  " >
    <div className=" col-sm-12 col-md-1 col-lg-1">
      <Nav />
    </div>
    <div className="col-12 col-sm-12 col-md-11 col-lg-11" >
      <Heading />
      <div className="row ms-5 text-center d-flex justify-content-center ">
        <div className="col-3 ">
        <Card color="bg-danger"  count="5"/>
        </div>
        <div className="col-3">
        <Card  color="bg-info" count="13" />
        </div>
        <div className="col-4">
        <Card  color="bg-success" count="45" />
        </div>
      </div>
      <Menu />
     
      </div>
  </div>
   </>
  );
}

export default App;
