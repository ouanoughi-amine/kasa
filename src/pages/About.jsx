import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BannerAbout from '../components/BannerAbout';
import Collapse from '../components/Collapse';

function About (){
return(
<main className='about'>
<Navbar />
<BannerAbout />
<div className='about__collapse'>
<Collapse label="Fiabilité" 
contentRef="Les annonces postées sur Kasa garantissent une fiabilité totale.
 Les photos sont conformes aux logements,
 et toutes les informations sont régulièrement vérifiées par nos équipes.">
</Collapse>
<Collapse label="Respect" 
contentRef="La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.">
</Collapse>
<Collapse label="Service" 
contentRef="La bienveillance fait partie des valeurs fondatrices de kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre platforme.">

</Collapse>
<Collapse label="Sécurité" 
contentRef="La sécurité est la priorité de Kasa. C'est pourquoi nous assurons un
suivi qualité constant sur les logements mis en ligne. De plus, la
totalité des transactions est gérée par nos soins.">
</Collapse>
</div>
<Footer />   
</main> 
)
}
export default About


