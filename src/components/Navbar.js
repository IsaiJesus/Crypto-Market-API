import { Typography, Box } from '@mui/material';

function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        p: 2,
        mb: 2,
        borderRadius: 3,
        boxShadow: 4,
        bgcolor: "background.paper"
      }}
    >
      <img height="60" src="/images/coin_pig.png" alt="Coin Market" />
      <Typography
        variant="h1"
        sx={{
          fontSize: 40,
          fontWeight: "bold",
          ml: 1,
          color: "#113DDF"
        }}
        align={"center"}
      >
        Crypto Market
      </Typography> 
    </Box>
  );
}

export default Navbar;
