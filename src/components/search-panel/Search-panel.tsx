import React, { useState } from 'react';
import './Search-panel.css';

const SearchPanel: React.FC<{ onSearchChange: (newValue: string) => void }> = ({ onSearchChange }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setSearchTerm(newValue);
        onSearchChange(newValue);
    };

    return (
        <div className="searchPanel">
            <input 
                type="text" 
                placeholder="Search your trip" 
                value={searchTerm} 
                onChange={handleChange} 
            />
        </div>
    );
};

export default SearchPanel;
