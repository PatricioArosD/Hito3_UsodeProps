import React from "react";
import "../assets/css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import { coso } from '../utils/coso';
const CardPizza = ({pizza}) => {
  return (
    <div className="card mx-2">
      <img src={pizza.img} className="card-img-top" alt="Plumon" />
      <div className="card-body">
        <h5 className="card-title fw-light mb-3 fs-2">Pizza {pizza.name}</h5>
        <hr />
        <p className="card-text h6 fw-light text-center fs-3">Ingredientes: </p>
        <p className="fw-light fs-5">
        <ul>{pizza.ingredients.map ((ingredients,index)=>(
            <li key={ingredients.index} >
                {ingredients} <FontAwesomeIcon icon={faPizzaSlice} />
            </li>
        ))}
          </ul>
        </p>
        <hr />
        <p className="h2 fw-bold green text-center">Total:${coso(pizza.price)}</p>
      </div>
      <div className="butonCard">
        <button type="button" class="btn btn-light border border-dark">
          Ver mas <FontAwesomeIcon icon={faEye} />
        </button>
        <button type="button" class="btn btn-dark border border-light">
          Añadir <FontAwesomeIcon icon={faBasketShopping} />
        </button>
      </div>
    </div>
  );
};

export default CardPizza;
