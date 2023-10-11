import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
export default function Post({ post }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto" }}>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.postContenido}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> {post.counterLikes}
        </IconButton>
        <IconButton aria-label="add to favorites">
          <MessageIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
