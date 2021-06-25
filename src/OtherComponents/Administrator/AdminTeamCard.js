import React from "react";
import "./admin.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "2vh",
  },
  media: {
    height: 190,
    width: '50vh'
  },
});
// connected to AdminTeam.j
const AdminTeamCard = ({
  photo,
  name,
  title,
  clickedHandlerDeleteCard,
  clickedHandlerEditCard,
}) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={photo}
          size="large"
          title="photo"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom component="h2">
            {title}
          </Typography>
        </CardContent>
      <CardActions>
        <Button onClick={clickedHandlerEditCard} size="small" color="primary">
          Edit
        </Button>
        <Button onClick={clickedHandlerDeleteCard} size="small" color="primary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default AdminTeamCard;
