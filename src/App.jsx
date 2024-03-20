import { useState } from "react";

import { MovieContext, ThemeContext } from "./Context";
import Pages from "./Pages";

function App() {
  const [cardData, setCardData] = useState([]);
  const [darkMood, setDarkMood] = useState(true);
  return (
    <ThemeContext.Provider value={{ darkMood, setDarkMood }}>
      <MovieContext.Provider value={{ cardData, setCardData }}>
        <Pages />
      </MovieContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
