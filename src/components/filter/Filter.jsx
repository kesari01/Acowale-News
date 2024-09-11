import React from "react";
import "./Filter.css";

const CATEGORIES = [
  "general",
  "world",
  "nation",
  "business",
  "technology",
  "entertainment",
  "sports",
  "science",
  "health",
];
const LANGUAGES = ["en", "hi"]; // Add more languages as needed
const COUNTRIES = ["in", "il", "us"]; // Add more countries as needed

function Filter({
  category,
  setCategory,
  language,
  setLanguage,
  country,
  setCountry,
}) {
  return (
    <>
      <h6>apply filters on Top Headlines...</h6>
      <div className="filter-container">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="">Select Language</option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">Select Country</option>
          {COUNTRIES.map((cntry) => (
            <option key={cntry} value={cntry}>
              {cntry}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Filter;
