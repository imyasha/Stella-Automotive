import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MovieCard({ title, year, type, poster, id }) {
  const [raised, setRaised] = React.useState(false);
  const onMouseOver = () => setRaised(true);
  const onMouseOut = () => setRaised(false);
  return (
    <Card
      sx={{ width: "100%", maxWidth: 345, m: 1, height: "auto" }}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
      raised={raised}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={poster}
      />
      <CardContent>
        <Typography gutterBottom variant="title">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}&nbsp; {type}
        </Typography>
      </CardContent>
    </Card>
  );
}
