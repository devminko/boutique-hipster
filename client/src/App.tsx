import React from 'react';
import TextField from './TextField';

const App: React.FC = () => {
  return (
    <div className="App">
      <TextField text='johnson' person={{ firstName: 'Johnson', lastName: 'Account' }} 
        handleChange={e => {e.target.value}}
      />
    </div>
  );
}

export default App;
