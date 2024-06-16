import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom/dist";
import TaskManager from "../Structs/TaskManager.js";
import taskManagerInstance from "../Structs/TaskManager.js";
const categories = TaskManager.categories;

const CategorisViev = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]); // Stan kategorii

  const fetchCategories = async () => {
    await taskManagerInstance.loadFromFirebase();
    setCategories(taskManagerInstance.categories);
  };
  useEffect(()=>{
    fetchCategories(); 
  },[]);

   const handleCategoryClick = async (categoryId)=> {
    console.log(categoryId);
    navigate(`/categories/tasks/${categoryId}`);
    await fetchCategories();
  };

  return (
    <>
      <h3>Lista kategorii</h3>
      <table className="table">
        <thead>
          <tr>
            <th>ID kategorii</th>
            <th>Kategoria</th>
            <th>Liczba zadań</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.id}>
              <td>{category.id}</td>
              <td>
                <button onClick={() => handleCategoryClick(category.id)}>
                  {category.title}
                </button>
              </td>
              <td>{category.tasks.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CategorisViev;
