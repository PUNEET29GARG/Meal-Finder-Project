import "../styles.css";
import React from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import { useEffect, useState } from "react";
import ItemImages from "./ItemImages";
import ShuffleIcons from "./ShuffleIcons";

function LoadingPage() {
  const [search, setSearch] = useState("");
  const [searchResultTitle, setSearchResultTitle] = useState("");
  const [imageArray, setimageArray] = useState([]);
  const [itemsArray, setitemsArray] = useState([]);
  const [styling, setStyling] = useState({ display: "block" });
  const [divStyle, setDivStyle] = useState({ display: "none" });
  const [randomDetail, setRandomDetail] = useState([]);
  const [rondomStyle, setRandomStyle] = useState({ display: "none" });

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setimageArray(data.meals);
        //console.log(dataArr);
      })
      .catch((error) => {
        console.log("Error is", error);
      });
  }, [search]);

  function pic() {
    setSearchResultTitle("Search results for" + " " + "'" + search + "'" + ":");
    const arr = imageArray.filter((s) => {
      return s.strMeal.includes(search);
    });
    setitemsArray(arr);
  }
  function Random() {
    const x = imageArray[Math.floor(Math.random() * imageArray.length)];
    setRandomDetail(x);
    // console.log("quotes it is");
    // console.log(quote);
  }
  return (
    <>
      <input
        className="SearchInput"
        type="text"
        placeholder="Search for meals or keyword"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <IconButton
        className="SearchIcon"
        type="submit"
        sx={{ p: "12px" }}
        aria-label="search"
        onClick={() => {
          if (search.length === 0) {
            alert("please type !");
          } else {
            setStyling({ display: "block" });
            pic();
            setSearch("");
            setDivStyle({ display: "none" });
            setRandomStyle({ display: "none" });
          }
        }}
      >
        <SearchIcon />
      </IconButton>

      <IconButton
        className="ShuffleIcon"
        style={{ marginLeft: "20px", borderRadius: "10%" }}
        onClick={() => {
          setStyling({ display: "none" });
          //console.log("clicked");
          Random();
          setRandomStyle({ display: "block" });
          setSearch("");
        }}
      >
        <ShuffleIcon />
      </IconButton>

      <div style={styling}>
        <div className="mainTitle">{searchResultTitle}</div>
        <ItemImages
          itemsArray={itemsArray}
          divStyle={divStyle}
          setDivStyle={setDivStyle}
        />
      </div>
      <div style={rondomStyle}>
        <ShuffleIcons style={rondomStyle} imgDetail={randomDetail} />
      </div>
    </>
  );
}
export default LoadingPage;
