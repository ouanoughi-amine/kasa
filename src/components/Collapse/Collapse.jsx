import './Collapse.scss'
import  { useState } from 'react';

// Définition du composant Collapse qui prend les props 
const Collapse = ({className, title, description}) => {
      // Déclaration de l'état local isRotated qui indique si la flèche est tournée ou non
  const [isRotated, setRotated] = useState(false);
    // Déclaration de l'état local isTextVisible qui indique si le texte est visible ou non
  const [isTextVisible, setTextVisible] = useState(false);

  //on regroupe les deux changement d'etat dans une fonction
  const visibleText = () => {
      setRotated(!isRotated);
      setTextVisible(!isTextVisible);
  }
  // Fonction appelée pour déterminer la classe CSS de la flèche en fonction de l'état de isRotated
  const changeClassName = () => {
      let arrowClassName = 'dropdown__arrow';
      if (isRotated) {
        arrowClassName += ' dropdown__arrow--rotated';
      }
      return arrowClassName;
  }
  return (
    <div className={`collapse ${className}`}>
        {/* sur le click on appelle la fonction visibletext qui contient nos deux changement d'etat */}
        <div className="collapse__dropdown" onClick={visibleText}>
            <p className='dropdown__title'>{title}</p>
            <img src='../src/assets/dropdown.png' className={changeClassName()} alt="fleche directionnelle"/>
        </div>
         {/* si isTextVisible = true on rajoute la classe collapse text--visible sinon on rajoute rien */}
        <div className={`collapse__text ${isTextVisible ? 'collapse__text--visible' : ''}`}>
            {/* // Si c'est un tableau, affiche chaque élément dans un paragraphe */}
            {Array.isArray(description) ? (
                description.map(item => <p key={item}>{item}</p>)
            ) : (
                // Sinon,  on affiche la description dans un seul paragraphe
                <p>{description}</p>
            )}
        </div>
    </div>
  )
  }

export default Collapse;


