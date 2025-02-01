import { Box, Card, CardMedia } from "@mui/material";
import mainCv from "../utils/maincv.pdf";

const ResumeComponent = () => {
  return (
    <Box sx={{ backgroundColor: "black", height: "auto", width: "auto" }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          width: "100vw",
        }}
      >
        <CardMedia
          component="iframe"
          src={mainCv}
          title="Resume"
          sx={{ height: "100%", width: "100%" }}
        />
      </Card>
    </Box>
  );
};

export default ResumeComponent;
