import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
function valuetext(value) {
  return `${value}°C`;
}

export default function DSlider({onSliderChange}) {
    const [sliderVal,setSliderVal]=useState(8);
    const handleSliderChange=(event,newValue) => {
      setSliderVal(newValue);
      onSliderChange(newValue);
    }
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        value={sliderVal}
        onChange={handleSliderChange}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={2}
        marks
        min={4}
        max={32}
      />
    </Box>
  );
}