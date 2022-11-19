import React from 'react';
import {TextField,InputLabel,MenuItem,Select,FormControl,FormControlLabel,RadioGroup,FormLabel} from "@material-ui/core"
// import Navbar from './Navbar';
import "./Fields.css"
import styles from "../style"; 
import Box from '@mui/material/Box';

const Fields = () => {
  return (
    <div className='wrapper'>
    {/* <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            The Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          
        </div> */}
    <div className="text">
    
      <TextField type="number" id="outlined-basic" label="Age" variant="outlined" />
      <TextField type="number" id="outlined-basic" label="Height (in cm)" variant="outlined" />
      <TextField type="number" id="outlined-basic" label="Weight (in kg)" variant="outlined" />
      </div>
      <div>
      <Box sx={{minWidth:220}}>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={gender}
    label="Gender"
    // onChange={handleChange}
  >
    <MenuItem>Male</MenuItem>
    <MenuItem>Female</MenuItem>
    <MenuItem>Others</MenuItem>
  </Select>
</FormControl>
</Box>
{/* <TextField type="number" id="outlined-basic" label="Systolic Blood Pressure" variant="outlined" /> */}
{/* <TextField type="number" id="outlined-basic" label="Diastolic Blood Pressure" variant="outlined" /> */}
<Box sx={{minWidth:220}}>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Cholestrol</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={gender}
    label="Cholestrol"
    // onChange={handleChange}
  >
    <MenuItem>Normal</MenuItem>
    <MenuItem>above Normal</MenuItem>
    <MenuItem>Well above Normal</MenuItem>
  </Select>
</FormControl>
</Box>
<Box sx={{minWidth:220}}>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Glucose</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={gender}
    label="Glucose"
    // onChange={handleChange}
  >
    <MenuItem>Normal</MenuItem>
    <MenuItem>above Normal</MenuItem>
    <MenuItem>Well above Normal</MenuItem>
  </Select>
</FormControl>
</Box>
<Box sx={{minWidth:220}}>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Smoking</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={gender}
    label="Smoking"
    // onChange={handleChange}
  >
    <MenuItem>Yes</MenuItem>
    <MenuItem>No</MenuItem>
    
  </Select>
</FormControl>
</Box>
<Box sx={{minWidth:220}}>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Alcohol Intake</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={gender}
    label="Alcohol Intake"
    // onChange={handleChange}
  >
    <MenuItem>Yes</MenuItem>
    <MenuItem>No</MenuItem>
    
  </Select>
</FormControl>
</Box>
<Box sx={{minWidth:220}}>
      <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Physical Activity</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    // value={gender}
    label="Physical Activity"
    // onChange={handleChange}
  >
    <MenuItem>Yes</MenuItem>
    <MenuItem>No</MenuItem>
    
  </Select>
</FormControl>
</Box>
</div>

    </div>

  )
}

  


export default Fields
