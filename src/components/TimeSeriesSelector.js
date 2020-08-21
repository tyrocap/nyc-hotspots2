import React, {Component} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const muiTheme = createMuiTheme({
  overrides: {
    MuiSlider: {
      root: {
        color: "rgba(255, 255, 255, 1)"
      },
      thumb: {
        color: "rgba(191, 186, 186, 1)",
      },
      track: {
        color: "rgba(191, 186, 186, 1)"
      },
      rail: {
        color: "rgba(191, 186, 186, 0.4)"
      },
      markLabel: {
        color: "rgba(255, 255, 255, 1)"
      },
      markLabelActive: {
        color: "rgba(255, 255, 255, 1)",
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  root: {
    width: 300
  },
  margin: {
    height: theme.spacing(1)
  },
}));

const marks = [
  {
    value: 0,
    label: "5PM"
  },
  {
    value: 10,
    label: "6PM"
  },
  {
    value: 20,
    label: "7PM"
  },
  {
    value: 30,
    label: "8PM"
  },
  {
    value: 40,
    label: "9PM"
  },
  {
    value: 50,
    label: "10PM"
  },
  {
    value: 60,
    label: "11PM"
  },
  {
    value: 70,
    label: "12AM"
  },
  {
    value: 80,
    label: "1AM"
  },
  {
    value: 90,
    label: "2AM"
  },
  {
    value: 100,
    label: "3AM"
  }
];

function findTimeIndex(value) {
  return marks.findIndex(mark => mark.value === value)+1;
}

function TimeSeriesSelector({passTimeIndex = f => f}) {
  return (
    <div id='HeatMapSlider'>
      <div className='heat-map-slider-container'>
        <div className='slider-container'>
          <ThemeProvider theme={muiTheme}>
            <Slider
              className='slider-style'
              defaultValue={20}
              aria-labelledby='discrete-slider-custom'
              step={10}
              marks={marks}
              onChange={(e, val) => {
                passTimeIndex(findTimeIndex(val));
              }}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default TimeSeriesSelector;