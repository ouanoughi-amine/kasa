
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import ImageAboutBanner from '../assets/image-about-banner.png'
import '../pages/About.scss';
import collapseText from '../Data/CollapseText';



function About (){
return(
<main className = 'about'>
<Banner imgBanner={ImageAboutBanner} showTitleBanner={false} />
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


