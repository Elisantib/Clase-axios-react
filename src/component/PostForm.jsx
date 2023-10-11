import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
export default function PostForm({ userPost }) {
  return (
    <div className="content-post-form">
      <Avatar alt="Remy Sharp" src={`${userPost.avatar}`} />
      <h6>{userPost.nombre}</h6>
      <TextField
        id="filled-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Post"
        variant="filled"
        sx={{ width: "90%", margin: "15px 0" }}
      />
      <Button
        sx={{ width: "90%", margin: "15px 0" }}
        variant="contained"
        color="success"
      >
        Guardar
      </Button>
    </div>
  );
}
