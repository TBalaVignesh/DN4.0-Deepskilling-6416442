import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <h1>Score Calculator App</h1>
      <CalculateScore name="Peter Parker" school="MIT" total={450} goal={6} />
    </div>
  );
}

export default App;
