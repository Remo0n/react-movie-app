import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function MediaCard({ media }) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: "2rem 0" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${media.poster_path}`}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {media.original_title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {media.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/details/${media.media_type}/${media.id}`}>
          <Button size="small">See More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
