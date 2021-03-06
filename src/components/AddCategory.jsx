import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    const [value, setValue] = useState("");
    
    const handleInputChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim().length > 0) setCategories(categories => [value,...categories]);
        setValue('');
        
    }
    return (
        <form onSubmit={handleSubmit} className="miclase">
            <input
                type="text"
                value={value}
                onChange={handleInputChange}
                />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
    
}