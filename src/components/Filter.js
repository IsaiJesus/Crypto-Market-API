import { Box, TextField } from "@mui/material";

const Filter = ({ handleChange }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Box
      component="form"
      sx={{ boxShadow: 4, p: 2, borderRadius: 3, bgcolor: "background.paper" }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{ width: "100%" }}
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={handleChange}
      />
    </Box>
  );
};

export default Filter;
