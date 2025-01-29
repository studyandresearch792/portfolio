import { Box, Card, CardMedia } from "@mui/material";
import mainCv from "../utils/maincv.pdf";

const ResumeComponent = () => {
  return (
    <Box sx={{ p: 4, backgroundColor: "black" }}>
      <Card>
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
