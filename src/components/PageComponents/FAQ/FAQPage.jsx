import React from 'react'

import FaqSimpleSection from '../../FaqSimpleSection'

import Banner from '../../banner'

const FAQPage = (props) => {
    return(
<>
<Banner
bgImage="https://res.cloudinary.com/dexdumfqy/image/upload/v1600594974/rbl-art-designs/sunset-1509132_pajczh.jpg" />

<FaqSimpleSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Preguntas Frecuentes"
        subtitle=""
      />

</>
    )
}

export default FAQPage