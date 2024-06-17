import React from "react";
import { useNavigate } from "react-router-dom/dist";
import TaskManager from '../Structs/TaskManager.js';

TaskManager.loadFromStorage();
const categories = TaskManager.categories;

const CategorisViev = () => {
    const navigate = useNavigate();

    function handleCategoryClick(categoryId) {
        navigate(`/categories/tasks/${categoryId}`);
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Kategoria</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>
                                <button onClick={() => handleCategoryClick(category.id)}>
                                    {category.title}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default CategorisViev;
