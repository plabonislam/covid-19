import React,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl,Input } from "@material-ui/core";
import { fetchCountries } from "../../api"
const Country = ({ handleChange }) => {
  const [currency, setCurrency] = useState([]);
  useEffect(() => {
    const test = async () => {
      let p = await fetchCountries();
      console.log(p);
      console.log("BOSSSSSS");
      setCurrency(p);
    };
    test();
    
  }, [setCurrency]);

  return (
    <form noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-select-currency-native"
          select
          onChange={(e)=>handleChange(e.target.value)}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your Country"
          variant="outlined"
        >
          <option value="">GLOBAL</option>
          {currency.map((option, it) => (
            <option key={it} value={option.name}>
              {option.name}
            </option>
          ))}
        </TextField>
      </div>
    </form>
  );
};

export default Country;
