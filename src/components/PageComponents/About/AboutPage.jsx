import React from 'react'

import SectionOne from './sectionOne'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'

import Banner from '../../banner'
import CardsWBgSection from '../../CardsWBgSection'


const AboutPage = (props) => {
    return(
<>
        <Banner
        bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg" />
        
              <CardsWBgSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      />

</>
)
    }

export default AboutPage
