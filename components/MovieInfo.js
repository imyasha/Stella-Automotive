import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  CircularProgress,
  Container,
  Box,
  Grid,
  Typography,
  Stack,
  Rating,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import Navbar from "./Navbar";

const Poster = styled("img")(({ theme }) => ({
  width: "100%",
  boxShadow: "0px 0px 5px 5px " + alpha(theme.palette.common.black, 0.25),
}));

const MovieInfo = ({ movie, loading }) => {
  const [rating, setRating] = useState("");

  useEffect(() => {
    if (Object.keys(movie).length) {
      const val = movie.Ratings[0].Value;
      setRating(val);
    }
  }, [movie]);
  const theme = useTheme();

  return (
    <>
      <Navbar title={"MovieInfo"} />
      <Container sx={{ mt: 4, display: "flex", flexWrap: "wrap" }}>
        {loading ? (
          <Box sx={{ position: "fixed", top: "50%", left: "50%" }}>
            <CircularProgress size={"5rem"} />
          </Box>
        ) : (
          <>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Poster src={movie.Poster} alt={movie.Title + " Poster"} />
              </Grid>
              <Grid xs={7} item>
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                  {movie.Title}
                </Typography>
                <Stack direction={"row"} spacing={1} alignItems="baseline">
                  <Typography variant="h6" color={theme.palette.grey.A400}>
                    {movie.Year}
                  </Typography>
                  <Typography variant="h6" color={theme.palette.grey.A400}>
                    {movie.Runtime}
                  </Typography>
                  <Typography color={theme.palette.grey.A400}>
                    ({movie.Language})
                  </Typography>
                </Stack>
                <Stack direction={"row"} spacing={1} alignItems="center">
                  <Rating
                    name="read-only"
                    value={rating.split("/")[0] / 2}
                    precision={0.1}
                    readOnly
                  />
                  <Typography color={theme.palette.grey.A400}>
                    ({movie.imdbVotes})
                  </Typography>
                  <Box
                    sx={{
                      backgroundImage:
                        "linear-gradient(to right, #faaf00 , #f3ed2f, #faaf00)",
                      fontWeight: "bold",
                      lineHeight: "1",
                      padding: "2px",
                    }}
                  >
                    IMDB
                  </Box>
                  <Typography
                    color={theme.palette.grey.A400}
                    fontWeight={"bold"}
                  >
                    ({rating})
                  </Typography>
                </Stack>
                <Stack sx={{ marginTop: theme.spacing(2) }}>
                  <Typography variant="body1" color={theme.palette.grey.A700}>
                    {movie.Plot}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ marginTop: theme.spacing(2) }}
                  spacing={2}
                >
                  <Typography variant="h6" color={theme.palette.grey.A400}>
                    Actors:
                  </Typography>
                  <Typography variant="h6" color={theme.palette.grey.A700}>
                    {movie.Actors}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ marginTop: theme.spacing(2) }}
                  spacing={2}
                >
                  <Typography variant="h6" color={theme.palette.grey.A400}>
                    Directed By:
                  </Typography>
                  <Typography variant="h6" color={theme.palette.grey.A700}>
                    {movie.Director}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ marginTop: theme.spacing(2) }}
                  spacing={2}
                >
                  <Typography variant="h6" color={theme.palette.grey.A400}>
                    Wrote By:
                  </Typography>
                  <Typography variant="h6" color={theme.palette.grey.A700}>
                    {movie.Writer}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ marginTop: theme.spacing(2) }}
                  spacing={2}
                >
                  <Typography variant="h6" color={theme.palette.grey.A400}>
                    Awards:
                  </Typography>
                  <Typography variant="h6" color={theme.palette.grey.A700}>
                    {movie.Awards}
                  </Typography>
                </Stack>
                <Stack
                  direction={"row"}
                  sx={{ marginTop: theme.spacing(2) }}
                  spacing={2}
                >
                  <Typography variant="h6" color={theme.palette.grey.A400}>
                    Country:
                  </Typography>
                  <Typography variant="h6" color={theme.palette.grey.A700}>
                    {movie.Country}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    movie: state.movies.movie,
    loading: state.movies.loading,
  };
};

export default connect(mapStateToProps, {})(MovieInfo);
