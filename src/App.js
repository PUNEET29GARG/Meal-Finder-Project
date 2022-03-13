import "./styles.css";
import React from "react";
import LoadingPage from "./components/LoadingPage";

export default function App() {
  return (
    <>
      <h1 className="App">Meal Finder</h1>
      <div className="MainConatainer">
        <LoadingPage />
      </div>
    </>
  );
}
