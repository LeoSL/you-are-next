import moment from "moment";
import './App.css';

const FIRST_WEEK = 15;

function App() {
  const frontendQueue = ["Dima", "Leo", "Andrii"];
  const frontendIndexes = Object.keys(frontendQueue);

  const backendQueue = ["Marco", "Leoni", "Sukh", "Daniel"];
  const backendIndexes = Object.keys(backendQueue);

  const thisWeek = moment().week();

  let frontendCurrentWeek = thisWeek;
  let backendCurrentWeek = thisWeek;

  while (!frontendIndexes.includes(String(frontendCurrentWeek - FIRST_WEEK))) {
    frontendCurrentWeek = frontendCurrentWeek - 6;
  }

  while (!backendIndexes.includes(String(backendCurrentWeek - FIRST_WEEK))) {
    backendCurrentWeek = backendCurrentWeek - 6;
  }

  const frontendPerson = frontendQueue[frontendCurrentWeek - FIRST_WEEK];
  const backendPerson = backendQueue[backendCurrentWeek - FIRST_WEEK];

  return (
    <div className="App">
      <h1>Week: ({thisWeek}th)</h1>
      <hr className="Divider"></hr>
      <h2>Frontend</h2>
      <div className="Background">
      <p>This week's person is:</p>
        {frontendPerson}
      </div>
      <h2>Backend</h2>
      <div className="Background">
      <p>This week's person is:</p>
        {backendPerson}
      </div>
    </div>
  );
}

export default App;
