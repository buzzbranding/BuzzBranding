import React from 'react';
import './contact.css'
import './app.css'
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


export default function ContactCard(){

    const [state, setState] = React.useState({
        age: 'ff',
        name: 'hai',
      });
    
    
      const handleChange = (event) => {
        const name = event.target.name;
        console.log("eve",name)
        setState({
          ...state,
          
          [name]: event.target.value,
        });
      };

    return(
        <div className="contact">
        <h1 className="writeh1"> Write to Us</h1>
        <form id="form" className="form">
          <div className="email">
            <TextField id="outlined-basic" label="Name" variant="outlined" className="tf1" />
            <TextField id="outlined-basic" label="E-mail" variant="outlined" className="tf1" />
          </div>

          {/* <div className="email">
            <TextField id="outlined-basic" label="Name" variant="outlined" className="tf1" />
            <FormControl variant="filled" className="tf1" >
              <InputLabel htmlFor="filled-age-native-simple">Service</InputLabel>
              <Select
                native
                value={state.name}
                onChange={handleChange}
                inputProps={{
                  name: 'Feature',
                  id: 'filled-age-native-simple',
                }}
              >
                <option aria-label="None" value="" />
                <option value={'Website'}>Website</option>
                <option value={'Social-Media'}>Social-Media</option>
                <option value={30}>Promotion</option>
              </Select>
            </FormControl>
          </div> */}

          <div className="textArea1" >
            <textarea className="textArea" placeholder="Message"></textarea>
          </div>

          <div className="sendButton">
            SEND
          </div>
        </form>

      </div>
    )
}