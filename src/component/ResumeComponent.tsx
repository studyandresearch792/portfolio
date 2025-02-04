import { Card, CardMedia, Container } from "@mui/material";
import mainCv from "../utils/maincv.pdf";

const ResumeComponent = () => {
  return (
    <Container maxWidth="xl" sx={{ height: "100%", marginTop: "4%",backgroundColor:"black" }}>
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CardMedia
          component="iframe"
          src={mainCv}
          title="Resume"
          sx={{ height: "100%", width: "100%" }}
        />
      </Card>
    </Container>
  );
};

export default ResumeComponent;
