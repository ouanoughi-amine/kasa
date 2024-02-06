import './Collapse.scss'
import React, { useState } from 'react';


function Collapse( {className,title, description}) {
  const [isRotated, setRotated] = useState(false);
  const [isTextVisible, setTextVisible] = useState(false);

  //on regroupe les deux changement d'etat dans une fonction
  const visibleText = () => {
      setRotated(!isRotated);
      setTextVisible(!isTextVisible);
  }

  //en fonction de la valeur de isRotated on change la classe des fleche, une classe normale par default, et une autre classe avec une animation de rotation
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
        {/* si isTextVisible = true on rajoute la classe collapse text--visible(qui a une height a 300px) sinon on rajoute rien de plus
        (la classe collapse text a une height de 0) */}
        <div className={`collapse__text ${isTextVisible ? 'collapse__text--visible' : ''}`}>
            {Array.isArray(description) ? (
                // Si c'est un tableau, affiche chaque élément dans un paragraphe
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


