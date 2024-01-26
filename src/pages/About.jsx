
import BannerAbout from '../components/BannerAbout';
import Collapse from '../components/Collapse';



const collapseText = [
    {
        label : "Fiabilité",
        text:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont réguliérement vérifiées par nos équipes. ",
    },
    {
        label : "Respect",
        text : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
        label : "Service",
        text : "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."     
    },
    {
        label : "Sécurité",
        text : "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
]



function About (){
return(
<main className = 'about'>
<BannerAbout />
<div className = 'about__collapse'>
    {collapseText.map((item, index) => (
        <Collapse key= {index} className='about__collapse__block'
         title={item.label} description={item.text} />
    )) }

</div>
</main> 
)
}
export default About


