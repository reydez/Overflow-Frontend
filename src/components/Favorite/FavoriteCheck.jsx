import { Favorite } from '@mui/icons-material';
import { Checkbox, Grid } from '@mui/material';
import { pink } from '@mui/material/colors';
import React from 'react';

function FavoriteCheck() {

    const label = { inputProps: { "aria-label": "Checkbox demo" } };
    return (
        
          <Grid>
            {/* check de corazon para clickear hacia favoritos */}
            <Checkbox
              {...label}
              icon={<Favorite sx={{ color: "#A8A3B5" }} />}
              checkedIcon={<Favorite sx={{ color: "#D81B60" }} />}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
                top: 10,
                left: -50,
              }}
            />
          </Grid>
    );
}

export default FavoriteCheck;