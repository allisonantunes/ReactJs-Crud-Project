import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/cards/cards";

function App() {
  const [values, setValues] = useState({});
  const [listGames, setListGames] = useState([]);

  const handleChangeValues = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value,
    }));
  };

  const handleClickButton = () => {
    axios
      .post("http://localhost:3001/register", {
        name: values.name,
        cost: values.cost,
        category: values.category,
      })
      .then((Response) => {
        console.log(Response);
      });
  };

  useEffect(() => {
    axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Scrim Shop</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
          onChange={handleChangeValues}
        ></input>

        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register-input"
          onChange={handleChangeValues}
        ></input>

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="register-input"
          onChange={handleChangeValues}
        ></input>
        <button className="register-button" onClick={() => handleClickButton()}>
          Cadastrar
        </button>
      </div>

      {typeof listGames !== "undefined" &&
        listGames.map((value) => {
          return (
            <Card
              key={value.id}
              listCards={listGames}
              setListCard={setListGames}
              id={value.id}
              name={value.name}
              cost={value.cost}
              category={value.category}
            ></Card>
          );
        })}
    </div>
  );
}

export default App;
