import SendIcon from "@mui/icons-material/Send";
import { Box, Button, Grid, Typography } from "@mui/material";

import "./index.css";

export function App() {
  return (
    <>
      <Box component="span">Aqui é um span</Box>

      <Box sx={{ backgroundColor: "#f0f0f0" }}>
        <Typography variant="h1">Hello, Mui!</Typography>
        <Button variant="text" disabled>
          Clique aqui
        </Button>

        <Button
          sx={{ backgroundColor: "green", color: "black" }}
          variant="contained"
          startIcon={<SendIcon />}
        >
          Send
        </Button>

        {/* <Container maxWidth="xs" sx={{ backgroundColor: "black" }}>
          Teste
        </Container> */}
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={5} md={9}>
          <Box sx={{ backgroundColor: "#ccc" }}>Item 1</Box>
        </Grid>

        <Grid item xs={5} md={3}>
          <Box sx={{ backgroundColor: "#eee" }}>Item 2</Box>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={6} md={9}>
          <Box sx={{ backgroundColor: "#ccc" }}>Item 1</Box>
        </Grid>

        <Grid item xs={6} md={3}>
          <Box sx={{ backgroundColor: "#eee" }}>Item 2</Box>
        </Grid>
      </Grid>
    </>
  );
}
