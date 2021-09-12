import { useState } from 'react';
import AuthCode from 'react-auth-code-input';
import {withRouter} from 'react-router-dom';
import auth from './Auth';

function Login({history}) {
    const [authCode, setAuthCode] = useState();
    const [showError, setShowError] = useState(false);
  
    const onChange = (e) => {
      setAuthCode(e);
    }  
  
    const onSubmit = async (e) => {
      e.preventDefault();
      // eslint-disable-next-line no-restricted-globals
      await auth.login(authCode);
      if(auth.isAuthenticated) {
        setShowError(false);
        history.push('success');
      } else {
        setShowError(true);
      }
      setAuthCode();
    };
    
    return (
      <div className="App">
        <h1>Verification Code:</h1>
        <AuthCode
          characters={6}
          onChange={(e) => onChange(e)}
          allowedCharacters = {/[0-9]/}
          containerClassName='container'
          inputClassName='input'
      />
      <button className="submit-btn" onClick = {e => onSubmit(e)}>SUBMIT</button>
      {showError && ( <div style={{color: 'red', fontSize: '2rem'}}>Verification Error!</div> )}
      </div>
    );
    
  }

  export default withRouter(Login);