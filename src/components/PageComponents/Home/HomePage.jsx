import React from 'react'


import SectionHero from './section1Hero'
import SectionTiles from './section2Tiles'
import SectionThree from './sectionThree'
import FeaturesSectionZigzag from '../../FeaturesSectionZigzag'


const Homepage = (props) => {
return(
<>
    <SectionHero
    bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg"
    headline="Bienvenidos"
    subtitle="¿Cómo podemos ayudar te hoy?"
    />
    <SectionTiles />
    
    <FeaturesSectionZigzag
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      />
      

</>
)
}
export default Homepage
