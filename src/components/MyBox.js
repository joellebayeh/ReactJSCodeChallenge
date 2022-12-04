import { Box } from '@mui/material';

const MyBox = (props) => {
    return(
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px rgba(0, 132, 255, 0.788)",
            },
          }}
        >{props.children}</Box>
    );
}

export default MyBox;