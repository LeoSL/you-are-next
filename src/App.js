import "./App.css";

import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

import PersonCard from "./components/PersonCard";

const FIRST_WEEK = 15;

function App() {
  dayjs.extend(weekOfYear)

  const frontendQueue = ["Dima", "Leo", "Andrii", "Julio"];
  const frontendIndexes = Object.keys(frontendQueue);

  const backendQueue = ["Marco", "Leoni", "Sukh", "Daniel"];
  const backendIndexes = Object.keys(backendQueue);

  const thisWeek = dayjs().week();
  const thisDay = dayjs().format("DD.MM.YYYY");
  let calculatedWorkWeek = thisWeek;

  if (
    !frontendIndexes.includes(String(calculatedWorkWeek - FIRST_WEEK))
    && !backendIndexes.includes(String(calculatedWorkWeek - FIRST_WEEK))
  ) {
    calculatedWorkWeek = calculatedWorkWeek - 4;
  }

  const frontendPerson = frontendQueue[calculatedWorkWeek - FIRST_WEEK];
  const backendPerson = backendQueue[calculatedWorkWeek - FIRST_WEEK];

  return (
    <>
      <header className="header">
        <h1>Week {thisWeek} 🗓️ {thisDay}</h1>
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
