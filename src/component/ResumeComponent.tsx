import { Box, Card, CardMedia, Typography } from "@mui/material";
import mainCv from "../utils/maincv.pdf";

const ResumeComponent = () => {
  return (
    <Box sx={{ p: 4 ,backgroundColor:"black"}}>
      <Card>
        <Typography variant="h2" sx={{alignContent:"center"}}>Resume</Typography>
        <CardMedia
          component="iframe"
          src={mainCv}
          title="Resume"
          sx={{ height: "100vh" }}
        />
      </Card>
    </Box>
  );
};

export default ResumeComponent;
