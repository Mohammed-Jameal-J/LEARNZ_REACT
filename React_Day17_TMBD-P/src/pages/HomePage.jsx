import { useState } from "react";
import { useGetMoviesQuery } from "../api/tmdbApi";
import MovieCard from "../components/MovieCard";
import Skeleton from "../components/Skeleton";
import SearchBar from "../components/SearchBar";
import GenreFilter from "../components/GenreFilter";
const HomePage = () => {
  const [page, setPage] = useState(1);
  const [ searchQuery, setSearchQuery ] = useState("")
  const [ selectedGenre, setSelectedGenre] = useState("")

  const { data, isLoading, isFetching, refetch } = useGetMoviesQuery({ 
    page: page, 
    query: searchQuery,
    genreId: selectedGenre
  });


  const updateSearchQuery = (value) => {
    setSearchQuery(value)
  }

  const updateSelectedGenre = (value) => {
    setSelectedGenre(value)
  }
  
  const movies = data?.results || [];
  const totalPages = data?.total_pages || 1;

  return (
    <div>

      <div>
        <SearchBar searchQuery={searchQuery} updateSearchQuery={updateSearchQuery}></SearchBar>
        <GenreFilter 
          selectedGenre={selectedGenre}
          updateSelectedGenre={updateSelectedGenre}
        ></GenreFilter>
      </div>

      {/* Movies List */}
      {isLoading ? (
        <div>
          <Skeleton></Skeleton>
        </div>
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}

      {/* pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 gap-3">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-600 disabled:opacity-50"
          >
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default HomePage;
