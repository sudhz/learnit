import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  IconButton,
} from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';

const OnlinePaymentPage = () => {


  
  const pageContainerStyle :React.CSSProperties= {
    textAlign: 'center',
    marginTop:'25px',
    marginLeft: '80px',
    marginRight: '80px',
    background: 'rgba(175, 219, 245, 1)',
    color: 'rgba(52, 152, 219, 1)',
  };
  const formStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const iconStyle = {
    fontSize: '100px',
    margin: '0 20px',
    cursor: 'pointer',
  };

  const formContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };

  const billingFormStyle = {
    border: '1px solid #3498db',
    borderRadius: '5px',
    padding: '20px',
    width: '45%',
    marginRight: '20px',
  };

  const creditCardFormStyle = {
    border: '1px solid #3498db',
    borderRadius: '5px',
    padding: '20px',
    width: '45%',
  };
 
  const inputStyle = {
    margin: '10px',
    padding: '8px',
    color: '#3498db',
    border: '1px solid #3498db',
    borderRadius: '5px',
  };

  const buttonBackStyle:React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20px',
  };

  const navButtonStyle = {
    margin: '0 10px',
    padding: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '10px',
  };

  return (
    <Container style={pageContainerStyle}>
      <Typography variant="h3" style={{fontWeight:'bold'}}>Payment</Typography>
      
      <Grid container justifyContent="center" marginTop="10px">
        <Grid >
          <IconButton style={iconStyle} color="primary">
            <CreditCardIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Grid container style={formContainerStyle}>
        <Card style={billingFormStyle}>
          <CardContent>
          <Typography variant="h5" style={{ color: '#3498db', fontWeight: 'bold' }}>
  Billing Info
</Typography>
<form style={formStyle}>
  <label style={{ color: '#3498db' }}>Full Name</label>
  <input type="text" style={inputStyle} required />

  <label style={{ color: '#3498db' }}>Address</label>
  <input type="text" style={inputStyle} required />

  <label style={{ color: '#3498db' }}>City</label>
  <input type="text" style={inputStyle} required />

  <label style={{ color: '#3498db' }}>Zip Code</label>
  <input type="text" style={inputStyle} required />

  <label style={{ color: '#3498db' }}>Country</label>
  <input type="text" style={inputStyle} required />
  <div style={buttonBackStyle}>
                <Button to="#" component={Link} style={navButtonStyle}>
                  Proceed
                </Button>
                <Button to="/courses" component={Link} style={navButtonStyle}>
                  Back
                </Button>
              </div>
</form>

          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
};

export default OnlinePaymentPage;
