import React from 'react';
// import axios from 'axios';
import { Grid, TextField, Card, CardContent, Typography, Button } from '@material-ui/core';


const ContactPage = () => {
// class ContactPage extends React.Component {  
//   constructor(props){
//     super(props)
//     this.state = {
//       firstName: ''
//     }
// }
  
//   handleChange = event => {
//     this.setState({ firstName: event.target.value });
//     console.log(event.target.value);
//   }
  

//   handleSubmit = event => {
//     event.preventDefault();

//     let user = {
//       firstName: this.state.firstName

//     };

//     axios.post(`http://localhost:5000/addContact`,user)
//       .then(res => {
//         console.log(res.data.firstName);
//         console.log(res.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   render() {
    return (
      <div> 
        <Grid style={{paddingTop:"200px" }}>
          <Card style={{ maxWidth: 650, padding: "50px 5px", margin: "0 auto" }}>
            <CardContent>
              <Typography gutterBottom variant="h5" color='orange'>
                Contact Us 
            </Typography> 
              <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
            </Typography> 
              <form>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter first name" label="First Name" variant="outlined"  fullWidth required  />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="Enter street" label="Street" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="Enter city" label="City" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField placeholder="Enter State Province" label="State Province" variant="outlined" fullWidth required />
                    </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" placeholder="Enter Zipcode" label="Zip code" variant="outlined" fullWidth required />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField label="Message" multiline rows={5} placeholder="Type your message here" variant="outlined" fullWidth required />
                  </Grid>
                  <Grid item xs={12}  >
                  <Button className="myBtn" style={{width: '100%'}} >
                    Submit
                    
                  </Button>
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    )
  }
// }
export default ContactPage;
