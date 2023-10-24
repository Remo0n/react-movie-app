import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  containerSpaceAround: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0 !important",
  },
  poster: {
    borderRadius: "20px",
    boxShadow: "0.5em 1em 1em rgb(64, 64, 70)",
    width: "80%",
  },
  genresContainer: {
    margin: "10px 0 !imaportant",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
  },
  castImage: {
    width: "100%",
    maxWidth: "7em",
    height: "8em",
    objectFit: "cover",
    borderRadius: "10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "50%",
    height: "50%",
  },
}));
