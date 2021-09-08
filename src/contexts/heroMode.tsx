import React from 'react';

type Mode = `masks` | 'video';

const ModeContext = React.createContext<{ mode: Mode; toggleMode: () => void }>(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  { mode: 'masks', toggleMode: () => {} },
);

const ModeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = React.useState<Mode>('masks');
  const toggleMode = () => setMode(mode === 'masks' ? 'video' : 'masks');
  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};

const useMode = () => {
  return React.useContext(ModeContext);
};

export { ModeProvider, useMode };
