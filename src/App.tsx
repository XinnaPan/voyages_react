import React, { useState, useEffect } from 'react'
import Header from '@/components/Header-bar'
import { FormattedMessage, IntlProvider } from "react-intl";

function App() {
        const [locale, setLocale] = useState(undefined)
        const [lang, setLang] = useState('en')
        useEffect(async() => {
            const resp = await fetch(`./lang/${lang}.json`)
            const data = await resp.json()
            setLocale(data)
          },[lang])
      return (
        <IntlProvider  messages={locale}>
            <Header />
        </IntlProvider>
      );
    }

  
  export default App;