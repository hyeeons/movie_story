import React, { useEffect, useState } from "react";
import MovieCard from "../components/movie/MovieCard";

interface Movie {
  id: number;
  title: string;
  referenceIdentifier: string;
  rating: string;
  releaseDate: string;
}

// API에서 json 영화데이터를 받아오는 함수
const fetchMovies = async (): Promise<Movie[]> => {
  const response = await fetch(
    "http://api.kcisa.kr/openapi/service/rest/meta5/getKFCC0502"
  );
  const data: Movie[] = await response.json();
  return data;
};

const NowMovie: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const movieData = await fetchMovies();
        setMovies(movieData.slice(0, 12));
      } catch (error) {
        console.error("Error fetching movies", error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, []);

  return (
    <>{loading ? <p>로딩중...</p> : movies.map((movie) => <MovieCard />)}</>
  );
};

export default NowMovie;
