import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import "../../taxbracket"
import { taxbracket } from '../../taxbracket';
import './Dropdown.css'

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
   
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    
    backgroundColor: "#EFF2F5",
    border: '1px solid #ced4da',
    fontSize: 18,
    padding: '6px 65px 6px 5px',
    border:0,
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

export default function MultipleSelectPlaceholder({names,header,setTrue}) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState("")
  const handleChange = (event) => {

    setAge(event.target.value);
  };
//  console.log({names});
// width:"14.375rem"
  return (

    <div className={`${header=="Financial Year"?"dropdown-basis":"dropdown-wrapper"}`}>
      <div className="dropdown-header"> {header}</div>
      <FormControl sx={{ 
       height:"2",
       width:"100%",
      paddingright:'60px',
      
    }}>
        <Select
         labelId="demo-simple-select-helper-label"
         id="demo-simple-select-helper"
          displayEmpty
          style={
            {
              
           
                
            }
          }
          defaultValue={names[0].text}
          onClick={handleChange}
          input={<BootstrapInput/>}

          inputProps={{ 'aria-label': 'Without label' }}
        >   
          {names.map((name) => (
            <MenuItem
              key={name.id}
              value={name.text}
              onClick={()=>{
               
              }}
              defaultValue={names[0].text}
              style={getStyles(name, personName, theme)}
            >
              <div style={{
                display:'flex',
                flexdirection:'row',
                gap:4,
                alignItems:'center',
                fontSize:`${name.flag?'0.9375rem':'1.25rem'}`,

              }}>
              {name.flag?<img src={name.flag} style={{
                borderRadius:"100%",
                height:"1.7rem",
                width:"1.7rem"
               
              }} ></img>:null}
              {name.text}
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
