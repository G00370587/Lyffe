import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  
  return (
    <Box sx={{width: '99%' ,bottom: 0, top: 'auto', position: 'absolute',  }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{
            display: 'flex',
            justifyContent: 'space-evenly'
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Exercises" icon={<SportsGymnasticsIcon />} />
        <BottomNavigationAction label="Workout" icon={<FitnessCenterIcon />} />
        <BottomNavigationAction label="User" icon={<PersonIcon />} />
      </BottomNavigation>
    </Box>
  );
}