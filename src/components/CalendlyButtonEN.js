import React from 'react'
import { openPopupWidget } from 'react-calendly';
import calendlyStyle from './CalendlyButton.module.css'

//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const CalendlyButton = ({ url }, props) => {
    const onClick = () => openPopupWidget({ url:"https://calendly.com/viadelweb/discovery-call" });
    const {
      buttonText,
      ...otherProps
    } = props;
  return( <button onClick={onClick} className={calendlyStyle.whiteBtn} /*className="profile-card__button button--blue"*/ url={url} >Schedule A Call</button>
  )
}

export default CalendlyButton