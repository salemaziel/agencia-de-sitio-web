import React, { useState } from "react";
//import Select from '@material-ui/core/Select'
//import MenuItem from '@material-ui/core/MenuItem'

import Dropdown from "react-bootstrap/Dropdown";

import { useTranslation } from "react-i18next";

//import twLogo from "images/tw.png";
//import enLogo from "images/en.png";

const LanguageMenu = (props) => {
  const { t, i18n } = useTranslation();

  const [values, setValues] = useState({
    language: "es",
  });

  function handleChange(event) {
    i18n.changeLanguage(event.target.value);

    setValues((oldValues) => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant=""
        id="dropdown-basic"
        title={values.language}
        onChange={(e) => handleChange(e)}
        inputProps={{
          name: "language",
        }}
      ></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item value={"es"}>
          <img
            src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601552057/rbl-art-designs/mexico-flag-transparent-8_jhgzkf.png"
            alt="ES"
            width={60}
          />
        </Dropdown.Item>
        <Dropdown.Item value={"en"}>
          <img
            src="https://res.cloudinary.com/dexdumfqy/image/upload/v1601579192/rbl-art-designs/united-states-of-america-flag-3d-round-icon-256_gbffry.png"
            alt="EN"
            width={60}
          />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageMenu;
