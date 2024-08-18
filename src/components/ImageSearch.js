import React, { useState } from 'react';

const ImageSearch = ({ searchText}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="max-w-8xl mx-auto p-4 flex justify-center">
      <form onSubmit={onSubmit} className="flex w-full max-w-md border border-gray-300 rounded-lg shadow-sm">
        <input 
         id="search-input" // Added id attribute
         name="search" //
          onChange={e => setText(e.target.value)} 
          className="flex-1 px-4 py-2 border-none rounded-l-lg focus:outline-none "
          type="text" 
          placeholder="Search Image Term..." 
        />
        <button 
          className="bg-bubble-gum-500 hover:bg-midnight-700 text-white px-4 py-2 rounded-r-lg font-semibold h-full"
          type="submit"
        >
          Search
        </button>


      </form>
    </div>
  );
};

export default ImageSearch;
