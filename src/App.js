import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear";
import "./App.css";

const FIRST_WEEK = 15;

function App() {
  dayjs.extend(weekOfYear)

  const frontendQueue = ["Dima", "Leo", "Andrii"];
  const frontendIndexes = Object.keys(frontendQueue);

  const backendQueue = ["Marco", "Leoni", "Sukh", "Daniel"];
  const backendIndexes = Object.keys(backendQueue);

  const thisWeek = dayjs().week();
  const thisDay = dayjs().format('DD.MM.YYYY');

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
            <div className="card">
              <div className="card__content">
                <h2 className="card__label">Frontend 🖼️</h2>
                <div className="card__title">
                  {frontendPerson}
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div className="card__content">
                <h2 className="card__label">Backend 📦</h2>
                <div className="card__title">
                  {backendPerson}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
