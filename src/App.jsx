import { useEffect, useState } from "react";
import Loader from "./Loader";
import "./App.css";
import Tours from "./Tours";
const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(false);
  const [toursList, setToursList] = useState([]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      setLoading(true);
      if (res.ok) {
        const data = await res.json();
        setLoading(false);
        setToursList(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const deleteTour = (id) => {
    const newTours = toursList.filter((tour) => tour.id !== id);
    setToursList(newTours);
  };

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (toursList.length === 0) {
    return (
      <main className="section-center">
        <div className="title">
          <h2>Empty list</h2>
          <button
            className="refresh-btn"
            style={{ marginTop: "1rem" }}
            onClick={fetchData}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="section-center">
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>

      <Tours toursList={toursList} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
