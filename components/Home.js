import React, { useState, useEffect } from "react";
import {
  CircularProgress,
  Container,
  Box,
  Pagination,
  Stack,
  Link,
} from "@mui/material";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchAppBar from "./SearchAppBar";
import MovieCard from "./MovieCard";
import { getMoviesByTitle, getDetail } from "../store/movies/action";

const Home = ({ movies, loading, getMoviesByTitle }) => {
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword) {
      const debounceFn = setTimeout(() => {
        getMoviesByTitle(keyword);
      }, 500);

      return () => clearTimeout(debounceFn);
    }
  }, [keyword]);

  return (
    <>
      <SearchAppBar keyword={keyword} setKeyword={setKeyword} />
      <Container>
        {loading ? (
          <Box sx={{ position: "fixed", top: "50%", left: "50%" }}>
            <CircularProgress size={"5rem"} />
          </Box>
        ) : (
          <>
            <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap" }}>
              {movies.map((movie) => (
                <Link
                  key={movie.imdbID}
                  href={`movie/${movie.imdbID}`}
                  sx={{
                    width: "calc(20% - 16px)",
                    minWidth: 220,
                    m: "auto",
                    height: "auto",
                  }}
                >
                  <MovieCard
                    title={movie.Title}
                    year={movie.Year}
                    type={movie.Type}
                    poster={movie.Poster}
                    id={movie.imdbID}
                  />
                </Link>
              ))}
            </Box>
            <Box
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                mt: "1rem",
              }}
            >
              <Pagination count={10} showFirstButton showLastButton />
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    loading: state.movies.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getMoviesByTitle: bindActionCreators(getMoviesByTitle, dispatch),
    getDetail: bindActionCreators(getDetail, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
