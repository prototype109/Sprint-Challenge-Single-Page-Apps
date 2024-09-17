import React, { useState } from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  const [searchName, setSearchName] = useState('');

  const onSearch = (name) => {
    setSearchName(name)
  }

  console.log('SEARCHNAME: ', searchName);
  return (
    <main>
      <Header />
      <TabNav />
      <SearchForm onSearch={onSearch} />
      <AppRouter name={searchName} />
    </main>
  );
}
