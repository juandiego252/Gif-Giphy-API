import { useState } from 'react';
import { AddCategory, Gifgrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);
    const onAddCategory = (onNewCategory) => {
        if (categories.includes(onNewCategory)) return;
        setCategories([...categories, onNewCategory]);

    }
    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={(value) => onAddCategory(value)} />
            <button onClick={onAddCategory}>Agregar</button>
                {
                    categories.map((category, index) => (
                        <Gifgrid key={category} category={category}/>
                    ))
                }
        </>
    )
}
