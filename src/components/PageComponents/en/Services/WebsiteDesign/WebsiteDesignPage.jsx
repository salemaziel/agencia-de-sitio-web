import React from 'react'
import Banner from '../../../../banner'
import HeroSectionTxtBtnRight from '../../../../HeroSectionTxtBtnRight'
import HeroSectionTxtBtnLeft from '../../../../HeroSectionTxtBtnLeft'
import PortfolioSection from '../../../../PortfolioSection'
import CardsHomeSection from '../../../../CardsHomeSection'
import {navigateTo} from 'gatsby'
import CtaSectionBgImage from '../../../../CtaSectionBgImage'


const WebsiteDesignPage = (props) => {
    return(
        <>
            <Banner />
            <HeroSectionTxtBtnRight
                    bg="white"
                    textColor="dark"
                    size="md"
                    bgImage=""
                    bgImageOpacity={0.8}
                    title="Building from the Ground Up"
                    subtitle="Appealing and innovative website design helps you get an edge over your competitors and connect your target audiences across the world. Our web designers keep your brand in mind to ensure that everything is catered properly! Everything will be prepared according to your specifications to give you a different online presence and contribute to your business’ growth."
                    description1=""
                    description2=""
                    description3=""
                    description4=""
                    description5=""
                    description6=""
                    description7=""
                    buttonText="Get Started"
                    buttonColor="primary"
                    image="https://res.cloudinary.com/dexdumfqy/image/upload/v1600836618/rbl-art-designs/digital-marketing-1433427_1920_ikotj9.jpg"
                    link="/en/contact"
                    /*buttonOnClick={() => {
                      // Navigate to pricing page
                      navigateTo("/");
                    }}*/
                  />

<HeroSectionTxtBtnLeft
                    bg="white"
                    textColor="dark"
                    size="md"
                    bgImage=""
                    bgImageOpacity={0.8}
                    title="Fully Responsive Design"
                    subtitle="Where there’s a phone, there’s a way. Having a fully responsive website adds elegance to your business and creates compelling user experiences that drive traffic, generate leads and ultimately, increase sales. No need to worry about crazy coding for a separate mobile site, it’s already taken care of."
                    description1=""
                    description2=""
                    description3=""
                    description4=""
                    description5=""
                    description6=""
                    description7=""
                    buttonText="Get Started"
                    buttonColor="primary"
                    image="https://res.cloudinary.com/dexdumfqy/image/upload/v1600836618/rbl-art-designs/digital-marketing-1433427_1920_ikotj9.jpg"
                    link="/en/contact"
                    /*buttonOnClick={() => {
                      // Navigate to pricing page
                      navigateTo("/");
                    }}*/
                  />
                  <PortfolioSection
                  bg="white"
                  textColor="dark"
                  size="md"
                  bgImage=""
                  bgImageOpacity={1}
                  title="View Our Portfolio"
                  subtitle=""

                  />
                        <CardsHomeSection
              bg=""
              textColor="dark"
              size="md"
              bgImage=""
              bgImageOpacity={1}
              title=""
              subtitle=""
            />
                        

<CtaSectionBgImage
bg="dark"
textColor="white"
size="sm"
bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600837824/rbl-art-designs/smartphone-1894723_1920_yti9if.jpg"
bgImageOpacity={0.8}
title="Schedule A Consultation"
subtitle=""
buttonText="Get Started"
buttonColor="primary"
buttonOnClick={() => {
// Navigate to pricing page
navigateTo("/about");
}}
/>




        </>
    )
}

export default WebsiteDesignPage