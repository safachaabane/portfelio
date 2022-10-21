import React from "react";
import { useTranslation } from "react-i18next";
import Typewriter from "typewriter-effect";

function Type() {
  const {t}= useTranslation();
  const {item1,item2,item3}=t('home',{returnObjects:true});
  return (
    <Typewriter
      options={{
        strings: [
          `${item1}`,
          `${item2}`,
          `${item3}`,
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
    />
  );
}

export default Type;
