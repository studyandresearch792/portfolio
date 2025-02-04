import { Box, Typography, Container } from "@mui/material";
const ImagelistComponent = ({
  name,
  imageList,
}: {
  name: string;
  imageList: Array<{ name: string; image: string }>;
}) => {
  return (
    <Container
      maxWidth="xl"
      sx={{ display: "flex", marginBottom: "2%", marginTop: "2%" }}
    >
      <Typography
        sx={{
          display: "flex",
          color: "orange",
          justifyContent: "flex-start",
          alignItems: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        {name} :
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", gap: "40px", marginLeft: "2%" }}>
          {imageList.map((item) => (
            <img
              className="flex justify-center items-center h-[100px] w-[110px] p-1 rounded-2xl "
              key={item.name}
              srcSet={`${item.image}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.image}?w=200&h=200&fit=crop&auto=format`}
              alt={item.name}
              loading="lazy"
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default ImagelistComponent;
