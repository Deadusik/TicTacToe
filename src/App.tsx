import React, { useEffect, useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { AppSettingsContext } from './context';
import { AppSettings } from './models/appSettings';
import { SPACE } from './utils/constants';
import { Theme } from './utils/enums';
import i18n from './locales/i18n';

function App() {
  const theme = Number(localStorage.getItem('theme') || Theme.WHITE)
  const [settings, setSettings] = useState<AppSettings>(new AppSettings(theme, true))

  const styles = {
    mainContainer: [
      'w-full',
      'h-screen',
      settings.Theme === Theme.WHITE ? 'bg-orange-50' : 'bg-[#343434]',
    ].join(SPACE)
  }

  useEffect(() => {
    const savedLng = localStorage.getItem('language')
    if (savedLng)
      i18n.changeLanguage(savedLng)
  }, [])

  return (
    <AppSettingsContext.Provider value={{
      settings,
      setSettings
    }}>
      <div className={styles.mainContainer}>
        <AppRouter />
      </div>
    </AppSettingsContext.Provider>
  );
}

export default App;
