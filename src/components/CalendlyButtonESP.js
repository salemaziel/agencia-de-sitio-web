import React from 'react'
import { openPopupWidget } from 'react-calendly';
import calendlyStyle from './CalendlyButton.module.css'

//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const CalendlyButton = ({ url }, props) => {
    const onClick = () => openPopupWidget({ url:"https://calendly.com/salemaziel/30-min" });
  return <button onClick={onClick} className={calendlyStyle.whiteBtn} /*className="profile-card__button button--blue"*/ url={url} >{props.buttonText}</button>
}

export default CalendlyButton