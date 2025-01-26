import { Box, Typography } from "@mui/material";
const ImagelistComponent = ({ name,imageList }: {name:string, imageList: Array<{ name: string; image: string }> }) => {

    
  return (
    <Box sx={{ display: "flex-col",padding:"20px"}}>
      <Typography
        sx={{
          display: "flex",
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:"20px"
        }}
      >
        {name}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageList.map((item) => (
          <img
            className="flex justify-center items-center h-[100px] w-[100px] border-2 border-orange-500 p-1 rounded-2xl "
            key={item.name}
            srcSet={`${item.image}?w=264&h=264&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.image}?w=264&h=264&fit=crop&auto=format`}
            alt={item.name}
            loading="lazy"
          />
        ))}
      </Box>
    </Box>
  );
};

export default ImagelistComponent
