import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <p
        style={{
          backgroundColor: "lightpink",
          fontFamily: "cursive",
          fontSize: "27px",
        }}
      >
        React Props and Components
      </p>
      <Navbar />
      <div className="card-container">
        <Cards
          img="https://th.bing.com/th/id/OIP.UXrKKmXr2xkeb33i3DpC8QHaHa?rs=1&pid=ImgDetMain"
          topic="Apple"
          content="Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. Apples have been grown for thousands of years in Asia and Europe. Apples are very sweet and refreshing. An apple a day, keeps the doctor away."
        />
        <Cards
          img="https://imgs.search.brave.com/jCnfLP99MG3lQUIdywgRiJ3R2tW2fLOgHGDL4Q3C18M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/bW9zLmNtcy5mdXR1/cmVjZG4ubmV0L25Y/UlZHQ3VHMm5HbzZp/M0dKVWpLbm4tMjMw/LTgwLmpwZw"
          topic="Orange"
          content="Orange, any of several species of small trees or shrubs of the genus Citrus of the family Rutaceae and their nearly round fruits, which have leathery and oily rinds and edible, juicy inner flesh. A number of species and varieties of orange are economically important"
        />

        <Cards
          img="https://th.bing.com/th/id/R.d313cab317974901b554bb42a67747ad?rik=mmYF8fmbaHBjIA&riu=http%3a%2f%2f2.bp.blogspot.com%2f_3ihjK4ToWAE%2fTJDkD39kCHI%2fAAAAAAAAAdo%2fJ5hMD7HwgN8%2fs320%2fKiwi.jpg&ehk=SOOHN4rOE2f1lEkHc4kpv8TP104uQMswvvPDxY3%2bwlQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
          topic="Kiwi"
          content=" Kiwi, woody vine and edible fruit of the family Actinidiaceae. It is native to mainland China and Taiwan and is also grown commercially in New Zealand and California. Raw kiwis have a slightly acid taste and are high in vitamins C and K"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
