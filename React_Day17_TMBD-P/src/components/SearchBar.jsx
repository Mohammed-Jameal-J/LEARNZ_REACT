const SearchBar = ({ searchQuery, updateSearchQuery}) => {

    return (
        <div className="mb-6">
            <input 
                type="text" 
                placeholder="Search Movies..."
                value={searchQuery}
                onChange={ (event) => updateSearchQuery(event.target.value)}
                className="w-full bg-gray-800 px-4 py-2 rounded-lg "
            />
        </div>
    )
}

export default SearchBar;