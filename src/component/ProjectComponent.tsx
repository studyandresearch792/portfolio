import { Box, Typography } from "@mui/material";
import ImageSlider from "../utils/ImageSlider";

const ProjectComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        height: "100svh",
        padding:4
      }}
    >
      <Typography sx={{ color: "white",display:"flex",justifyContent:"center",alignItems:"center" }}>
        Projects Done
      </Typography>
      <ImageSlider/>
    </Box>
  );
};

export default ProjectComponent;


