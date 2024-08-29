import { useState } from 'react';

// Composant pour afficher un compteur
const Display = ({ counter }) => <div>{counter}</div>;

// Composant pour afficher l'historique des clics
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {allClicks.join('')}</div>;
};

// Composant bouton réutilisable
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
);

// Composant principal de l'application
const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  // Fonction pour gérer les clics sur le bouton gauche
  const handleLeftClick = () => {
    setAll(allClicks.concat('L'));
    setLeft(left + 1);
  };

  // Fonction pour gérer les clics sur le bouton droit
  const handleRightClick = () => {
    setAll(allClicks.concat('R'));
    setRight(right + 1);
  };

  return (
    <div>
      <Display counter={left} />
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      <Display counter={right} />
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
