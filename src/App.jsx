import React, { useState } from 'react';
import './App.css';

const FruitsDetectionAndCounting = () => {
  const [selectedFruit, setSelectedFruit] = useState(""); 

  const handleFruitChange = (event) => {
    setSelectedFruit(event.target.value); 
  };

  return (
    <div>
      <h1>Fruits Detection</h1>
      <div>
        <h2>Fruits Image Selection</h2>
        <select className="fruit" onChange={handleFruitChange}>
          <option value="">Selecciona una fruta</option>
          <option value="Manzana">Manzana</option>
          <option value="Banano">Banano</option>
          <option value="Cereza">Cereza</option>
          <option value="Arandanos">Arándanos</option>
          <option value="Higo">Higo</option>
          <option value="Uva">Uva</option>
          <option value="Kiwi">Kiwi</option>
          <option value="Limon">Limón</option>
          <option value="Mango">Mango</option>
          <option value="Naranja">Naranja</option>
          <option value="Papaya">Papaya</option>
          <option value="Durazno">Durazno</option>
          <option value="Pera">Pera</option>
          <option value="Piña">Piña</option>
          <option value="Ciruela">Ciruela</option>
          <option value="Frambuesa">Frambuesa</option>
          <option value="Fresa">Fresa</option>
          <option value="Sandia">Sandía</option>
        </select>
        <p>Fruta seleccionada: {selectedFruit || "Ninguna"}</p>
      </div>

      <div>
        <div>
          <h3>Input Image</h3>
          <img
            src="https://via.placeholder.com/300x200.png"
            alt="Input Image"
          />
        </div>
        <div>
          <h3>Mask Image</h3>
          <img
            src="https://via.placeholder.com/300x200.png"
            alt="Mask Image"
          />
        </div>
        <div>
          <h3>Output Image</h3>
          <img
            src="https://via.placeholder.com/300x200.png"
            alt="Output Image"
          />
        </div>
      </div>

      <div>
        <h2>Fruit Count and Pixel Area Information</h2>
        <p>Número de frutas seleccionadas en la imagen es:</p>
        <p>El área de {selectedFruit || "fruta"} en el objeto 1 es:</p>
        <p>El área de {selectedFruit || "fruta"} en el objeto 2 es:</p>
        <p>El área de {selectedFruit || "fruta"} en el objeto 3 es:</p>
        <p>El área de {selectedFruit || "fruta"} en el objeto 4 es:</p>
      </div>
    </div>
  );
};

export default FruitsDetectionAndCounting;
