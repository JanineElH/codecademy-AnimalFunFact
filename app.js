import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = "";

let background = (
  <img className="background" alt="ocean" src="/images/ocean.jpg" />
);

function displayFact(e) {
  const animal = e.target.alt;
  const index = Math.floor(
    Math.random() * animals[animal].facts.length
  );
  let funFact = animals[animal].facts[index];
  const p = document.getElementById('fact');
  p.innerHTML = funFact;
}

const images = [];
for (const animal in animals) {
  const image = (
    <img
      key={animal}
      src={animals[animal].image}
      className="animal"
      alt={animal}
      ariaLabel={animal}
      role="button"
      onClick={displayFact}
    />
  );

  images.push(image);
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>{title == "" ? "Click an animal for a fun fact" : title}</h1>
    {background}
    <p id="fact"></p>
    <div className="animals">{images}</div>
  </div>
);

root.render(animalFacts);

ReactDOM.render(animalFacts, document.getElementById("root"));
