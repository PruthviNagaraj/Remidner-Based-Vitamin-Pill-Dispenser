import React, { useState, useEffect } from 'react';
import Schedule from './Components/Schedule';
import Home from './Components/Home';
import AddNewVitamins from './Components/AddNewVitamins';
import Alram from './Components/Alarm';
import AlarmClock from './Components/AlarmCode';

function App() {
  const [displaySchedule, setDisplaySchedule] = useState(false);
  const [addNewVit, setAddNewVit] = useState(false);
  const [alarm, onSetAlarm] = useState(false);

  return (
    <div>
      {
        displaySchedule ? <Schedule />
          : addNewVit ? <AddNewVitamins />
          : alarm ? <AlarmClock />
            : <Home
              onDisplaySchedule={val => setDisplaySchedule(val)}
              addNewVitamis={val => setAddNewVit(val)}
              onAlarm={val=> onSetAlarm(val)}
            />
      }
    </div>
  );
}

export default App;
