import React, { useEffect, useState } from "react";
import { Typography, Grid, Box, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchMediaDetails } from "../../services/api";
import useStyles from "./styles";

function Movie() {
  const { media_type, id } = useParams();
  const [mediaDetails, setMediaDetails] = useState({});
  const classes = useStyles();

  useEffect(() => {
    fetchMediaDetails(media_type, id)
      .then((response) => setMediaDetails(response.data))
      .catch((error) => console.error(error));
  }, [media_type, id]);

  return (
    <Grid container className={classes.containerSpaceAround}>
      <Grid item sm={12} lg={4} align="center">
        <img
          src={`https://image.tmdb.org/t/p/w500/${mediaDetails?.poster_path}`}
          className={classes.poster}
          alt={mediaDetails?.title}
        />
      </Grid>
      <Grid item container direction="column" lg={7}>
        <Typography variant="h3" align="center" gutterBottom>
          {mediaDetails?.title}
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          {mediaDetails?.tagline}
        </Typography>
        <Grid item className={classes.containerSpaceAround}>
          <Box display="flex" align="center">
            <Rating readOnly value={mediaDetails.vote_average / 2} />
            <Typography
              gutterBottom
              variant="subtitle1"
              style={{ marginLeft: "10px" }}
            >
              {mediaDetails?.vote_average} / 10
            </Typography>
          </Box>
          <Typography gutterBottom variant="h6" align="center">
            {mediaDetails?.runtime}min
          </Typography>
        </Grid>
        <Typography variant="h5" gutterBottom style={{ marginTop: "20px" }}>
          Overview
        </Typography>
        <Typography style={{ marginBottom: "2rem" }}>
          {mediaDetails?.overview}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Movie;
