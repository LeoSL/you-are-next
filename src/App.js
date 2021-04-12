import "./App.css";

import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

import PersonCard from "./components/PersonCard";

const FIRST_WEEK = 15;

function App() {
  dayjs.extend(weekOfYear)

  const frontendQueue = ["Dima", "Leo", "Andrii"];
  const frontendIndexes = Object.keys(frontendQueue);

  const backendQueue = ["Marco", "Leoni", "Sukh", "Daniel"];
  const backendIndexes = Object.keys(backendQueue);

  const thisWeek = dayjs().week();
  const thisDay = dayjs().format("DD.MM.YYYY");

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
    <>
      <header className="header">
        <h1>Week {thisWeek}th 🗓️ {thisDay}</h1>
      </header>

      <main className="main-wrapper">
        <h2 className="main-wrapper__subtitle">This week representatives</h2>
        <div className="row">
          <div className="col">
            <PersonCard title="Frontend 🖼️" personName={frontendPerson} />
          </div>
          <div className="col">
            <PersonCard title="Backend 📦" personName={backendPerson} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
