import "./App.css";

import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";

import PersonCard from "./components/PersonCard";

const useCurrentData = () => {
  dayjs.extend(weekOfYear);
 
  const FIRST_WEEK = 15;
  const thisWeek = dayjs().week();
  const thisDay = dayjs().format("DD.MM.YYYY");

  const frontendQueue = ["Dima", "Leo", "Andrii", "Julio"];
  const backendQueue = ["Marco", "Leoni", "Sukh", "Daniel"];

  const getCurrentWeek = () => {
    // when new year starts
    if ((thisWeek - FIRST_WEEK) < 1) {
      return thisWeek;
    }

    return thisWeek - FIRST_WEEK;
  };
 
  const frontendPerson = frontendQueue[getCurrentWeek() % frontendQueue.length];
  const backendPerson = backendQueue[getCurrentWeek() % backendQueue.length];

  return {
    thisDay,
    thisWeek,
    frontendPerson,
    backendPerson,
  };
};

const App = () => {
  const { thisDay, thisWeek, frontendPerson, backendPerson } = useCurrentData();

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
