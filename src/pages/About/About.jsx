
import Banner from '../../components/Banner/Banner';
import Collapse from '../../components/Collapse/Collapse';
import ImageAboutBanner from './../../assets/image-about-banner.png'
import collapseListe from '../../Data/Collapses.json';
import './About.scss';



const About = () => {
return(
<main className = 'about'>
<Banner imgBanner={ImageAboutBanner} showTitleBanner={false} />
<div className = 'about__collapse'>
    {collapseListe.map((item, index) => (
        <Collapse key= {index} className='about__collapse__block'
         title={item.label} description={item.text} />
    )) }

</div>
</main> 
)
}
export default About


