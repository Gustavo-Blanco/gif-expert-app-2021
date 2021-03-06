import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";
const GifExpertApp = () => {
    console.log('main app');
  const [categories, setCategories] = useState([
    "One punch man"
  ]);
  
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
