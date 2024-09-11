import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import HeadlineList from "../HeadlineList/HeadlineList";
import Filter from "../filter/Filter";
import Header from "../header/Header";
import Navbarr from "../navbar/Navbar"; // Ensure this is imported correctly
import { PaginationComponent } from "../pagination/Pagination";
import Footer from "../footer/Footer";

const API_KEY = "f3ed04e2efec681b1bd5f3cc04f4f6e1";

function LandingPage() {
  const [headlines, setHeadlines] = useState([]);
  const [category, setCategory] = useState("general");
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const [totalArticles, setTotalArticles] = useState(0); // Store the total articles count
  const [currentPage, setCurrentPage] = useState(1); // Store the current page

  const fetchHeadlines = () => {
    const url = `https://gnews.io/api/v4/${
      searchQuery ? "search" : "top-headlines"
    }?apikey=${API_KEY}&page=${currentPage}&max=10`;

    let queryParams = "";
    if (searchQuery) {
      queryParams += `&q=${encodeURIComponent(searchQuery)}`;
    } else {
      queryParams += `&category=${category}`;
      if (language) queryParams += `&lang=${language}`;
      if (country) queryParams += `&country=${country}`;
    }

    fetch(url + queryParams)
      .then((response) => response.json())
      .then((data) => {
        setHeadlines(data.articles);
        setTotalArticles(data.totalArticles); // Set the total number of articles
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchHeadlines();
  }, [category, language, country, searchQuery, currentPage]); // Added currentPage to dependencies

  return (
    <div className="LandingPage">
      <Header />
      <Navbarr onSearch={setSearchQuery} />
      <Filter
        category={category}
        setCategory={setCategory}
        language={language}
        setLanguage={setLanguage}
        country={country}
        setCountry={setCountry}
      />
      <PaginationComponent
        totalPages={Math.ceil(totalArticles / 10)} // totalArticles divided by 10 to get the number of pages
        pageLimit={6} // Set page limit to 10
        currentPage={currentPage}
        onPageChange={setCurrentPage} // Pass the setCurrentPage function
      />
      <HeadlineList headlines={headlines} />
      <Footer />
    </div>
  );
}

export default LandingPage;
