import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { useTranslation } from 'react-i18next'
import React, { useState, useEffect } from 'react';

import enJson from './locales/en.json'
import jaJson from './locales/ja.json'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enJson,
    },
    ja: {
      translation: jaJson,
    },
  },
  lng: 'en',
  fallback: 'en',
  interpolation: {escapeValue: false},
});

function App() {
  const [t, i18n] = useTranslation();
  const [lang, setLang] = useState('en');

  useEffect( () => {
    i18n.changeLanguage(lang)
  } ,[lang, i18n]);

  return (
    <div className="App">
      <p>{t('welcome')}</p> 
      <div>
        <button onClick={
          () => setLang(lang === 'en' ? 'ja' : 'en')
        }>
          {t('changeLang')}
        </button>
      </div>
    </div>
  );
}

export default App;
