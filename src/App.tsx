import React, { useState } from 'react';
import { AppRouter } from './router/AppRouter';
import { AppSettingsContext } from './context';
import { AppSettings } from './models/appSettings';
import { SPACE } from './utils/constants';
import { Theme } from './utils/enums';

function App() {
  const [settings, setSettings] = useState(new AppSettings())

  const styles = {
    mainContainer: [
      'w-full',
      'h-screen',
      settings.Theme === Theme.WHITE ? 'bg-orange-50' : 'bg-[#343434]',
    ].join(SPACE)
  }

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
