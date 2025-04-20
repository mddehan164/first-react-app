
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const products = [
    {
      name:'Photoshop',
      price:'$200'
    },
    {
      name:'Illustrator',
      price:'$149'
    },
    {
      name:'Premire Pro',
      price:'$215'
    },
    {
      name:'PDF Reader',
       price:'$166'
    },
    {
      name:'Indesign',
      price:'$259.44'
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <p>Hello react</p>
        
        {
          products.map((product, index) => <Product key={index} product={product} />)
        }
        <Person></Person>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(5);
  return(
    <div>
      <h4>Count : {count}</h4>
      <button onClick={()=> setCount(count + 1 )}>Increase</button>
      <button onClick={()=> setCount(count -1)}>Decrease</button>
    </div>
  )
}

function Person(){
  const persons = ['Alamgir', 'Shuvo', 'Bappi', 'salman', 'Razzak', 'shakib'];
  return(
    <div>
     <ul>
     {
        persons.map(person => <li>{person}</li>)
      }
     </ul>
    </div>
  )
}


function Product(props) {
  const productStyle  = {
    border : '1px solid gray',
    borderRadius : '5px',
    backgroundColor : 'lightgreen',
    color:'red',
    height:'200px',
    width:'200px',
    padding:'50px'
  }


const {name, price} = props.product;


  return (
    <div style={productStyle}>
      <h5>{name}</h5>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return(
    <div>
      <ul>
      {
        users.map(user => <li>{user.name}</li>)
      }
      </ul>
    </div>
  )
}

export default App;
