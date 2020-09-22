import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import bannerStyle from './banner.module.css'

const Banner = (props) => {

return (
    <section className={bannerStyle.BannerSection}
    style={{
        "--image": `url(${props.bgImage})`
    }}
    >
            <Row />
                <Col>
                    
                </Col>

    </section>
)
}

export default Banner