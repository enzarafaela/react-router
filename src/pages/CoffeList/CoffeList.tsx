// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

import { coffeeList } from "../../data";
import { Link } from "react-router-dom";

import './CoffeeLits.css';

function CoffeeList() {
    // const navigate = useNavigate();

    // Example if you want to validate data before load another page
    // const [password] = useState('123456');
    
    // function handleClick() {
    //     if (password.length > 5) {
    //         navigate(-1); // load previous clicked page
    //     }
    // }

  return (
    <div className="list-page">
      <h1>Nossos cafés</h1>
      <main>
        <ul>
          {
            coffeeList.map((coffee) => (
              <Link to={`/coffees/${coffee.slug}`}>
                <li className="coffee-card">{coffee.title}</li>                                
              </Link>    
            ))
          }
        </ul>
      </main>

      {/* <button onClick={ handleClick }>Click me</button> */}
    </div>
  )
}
  
export default CoffeeList;