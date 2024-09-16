import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {
    const [value, setValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        if (value.trim().length <= 1) return;
        onNewCategory(value.trim());
        setValue('');
    }

    return (
        <form
            onSubmit={(event) => onSubmit(event)}
        >
            <input
                type="text"
                placeholder="Buscar Gifts"
                value={value}
                onChange={({ target }) => setValue(target.value)}
            />
        </form>
    )
}
