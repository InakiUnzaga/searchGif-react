import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["two and a half men"]);

  const onAddCategory = (newCategory) => {
    //setCategories(cat  => [...cat , "Valorant"]);

    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <div>GifExpertApp</div>

      <AddCategory onNewValue={(value) => onAddCategory(value)} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
