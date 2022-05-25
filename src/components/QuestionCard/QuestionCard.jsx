import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box } from "@mui/system";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const QuestionCard = ({post}) => {
  
  const getAvatarBgColor = ({ category }) => ({
    M1: '#FBC02D',
    M2: '#43A047',
    M3: '#D81B60',
  }[category] || '#42A5F5');


  const handleClick = () => {
    console.info('Clickeaste el tag...');
  };

  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : 'transparent',
        }}
    >
      <Grid container spacing={2} >

        <Grid item>
          <Avatar sx={{  bgcolor: getAvatarBgColor(post), fontSize:"1rem", color: "#392e57", marginBottom:'10px'}} aria-label="recipe" >
            {/* {" "} */}
            {post.category}{" "}
          </Avatar>
          <Stack  direction="row" spacing={.5}>
            <CheckCircleIcon sx={{ color: "green" }} />   {/* // Verde sobre violeta MUY polémico */}
            <Typography sx={{ color: "green", fontSize:'18px' }}>
              <span>{post.answerQty}</span>
            </Typography>
          </Stack> 
        </Grid>

        <Grid item xs={12} sm container>

          <Grid item xs container direction="column" spacing={2}>

            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{ color:'white' }}>
                {post.title}
              </Typography>
              <Typography variant="body2" color="#A8A3B5" sx={{ fontSize:'14px', width:'75%' }}>
                {post.message}
              </Typography>
             
            </Grid>

            <Grid item>  {/* TAGs de cada categoría*/} 
              <Stack direction="row" spacing={1} >
                {post.tags.map((everyTag) => (
                  <Chip label={<Box sx={{ color: "white" }}>{everyTag}</Box>}
                    key={post.id}
                    variant="outlined"
                    size="small"
                    onClick={ handleClick }
                  /> 
                ))}
              </Stack>
            </Grid>

          </Grid>

          <Grid item>
            <Typography variant="subtitle1" component="div" color="pink">
              Carita :)
            </Typography>
             <Typography variant="body2" color="white">
                {post.user_name}
              </Typography>
          </Grid>

        </Grid>
      </Grid>
    </Paper>
  )
}
