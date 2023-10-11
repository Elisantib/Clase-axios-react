import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Drawer } from "@mui/material";
export default function Header({ titulo, anio, avatarUser }) {
  // Entre el enunciado de la función y el return declaro 1- hooks 2- variables 3- funciones
  // Hooks =>
  // 1) useState :
  // sintaxis => const [<estado>, <metodo para modificar estado>] = useState(valor inicial);
  ///
  const [open, setOpen] = useState(false);
  // Constantes "Funciones"
  const handleDrawer = () => {
    setOpen(!open); // ==> "!" + valor ==> le paso el valor contrario
  };
  return (
    <header>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={(_) => handleDrawer()}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  width: 240,
                  boxSizing: "border-box",
                },
              }}
              open={open}
              onClose={(_) => handleDrawer()}
            ></Drawer>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {titulo} - {anio}
            </Typography>

            <Avatar alt="Remy Sharp" src={`${avatarUser}`} />
          </Toolbar>
        </AppBar>
      </Box>
    </header>
  );
}
