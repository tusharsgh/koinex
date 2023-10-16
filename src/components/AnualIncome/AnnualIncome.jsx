import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import "./AnnualIncome.css";
import "../../taxbracket"
import { taxbracket } from '../../taxbracket';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
   
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: "#EFF2F5",
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 12px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#0F1629',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));


function getStyles(name, personName, theme) {
  return {
   
    backgroundColor: '#EFF2F5',
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectPlaceholder(props) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState("")
  const handleChange = (event) => {

    setAge(event.target.value);
  };
  const handler=(text,id)=>{
    props.taxhandler(text,id);
  }
  

  return (

    <div className="income-wrapper">
      <div className="income-header"> Select Your Annual Income</div>
      <FormControl sx={{ width:"300px",
       height:"2",
      
      
    }}>
        <Select
         labelId="demo-simple-select-helper-label"
         id="demo-simple-select-helper"
          displayEmpty
          style={
            {
              
           
                
            }
          }
          defaultValue={taxbracket[2].Income}
          onClick={handleChange}
          input={<BootstrapInput/>}

          inputProps={{ 'aria-label': 'Without label' }}
        >   
          {taxbracket.map((name) => (
            <MenuItem
              key={name.id}
              value={name.Income}
              onClick={()=>{
                handler(name.Text,name.id);
              }}
              defaultValue={taxbracket[2].Income}
              style={getStyles(name, personName, theme)}
            >
              {name.Income}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
