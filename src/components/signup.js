import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';
import Marketing from '../pages/Marketing';
import { useHistory } from 'react-router';
const Signup = () => {
    let history = useHistory();
    const paperStyle = { padding: 30, width: 600, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 15 }
    const initialValues = {
       
        name: '',
        email: '',
        user: '',
        // gender: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termsAndConditions: false
    }
    const validationSchema = Yup.object().shape({
      
        user: Yup.string().oneOf(["newuser", "accountant"], "Required").required("Required"),
        name: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        // gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required('Required'),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not matched").required("Required"),
        termsAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })
    const onSubmit = (values, props) => {
        history.push("/login");
        console.log(values)
        console.log(props)
        setTimeout(() => {

            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }
    return (
        <div style={{ backgroundImage:"url('https://tse3.mm.bing.net/th?id=OIP.RVeAyC6S257koogzT_G_VwHaFj&pid=Api&P=0&w=217&h=163')", height:"800px",  backgroundSize:"cover"}}>
        <br></br>  <br></br> <br></br>
        <Grid >
            <Paper style={paperStyle}>
                <Grid align='center' >
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form >
                             <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">User</FormLabel>
                                < Field as={RadioGroup} aria-label="user" name="user" name="user" style={{ display: 'initial' }}>
                                    <FormControlLabel value="newuser" control={<Radio />} label="New User" />
                                    <FormControlLabel value="accountant" control={<Radio />} label="Accountant" />
                                </ Field>
                            </FormControl>

                            <Field as={TextField} fullWidth name="name" label='Name'
                                placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            {/* <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                < Field as={RadioGroup} aria-label="gender" name="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </ Field>
                            </FormControl> */}
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth name='password' type="password"
                                label='Password' placeholder="Enter your password"
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={TextField} fullWidth name="confirmPassword" type="password"
                                label='Confirm Password' placeholder="Confirm your password"
                                helperText={<ErrorMessage name="confirmPassword" />} />
                            <FormControlLabel
                                control={<Field  style={{marginBottom:"40px"}} as={Checkbox}  name="termsAndConditions" />} />
                            <a href="/marketing"  style={{marginTop:"6px"}}  >I accept the terms and conditions.</a> 
                            
                            <FormHelperText><ErrorMessage  name="termsAndConditions" /></FormHelperText>
                            <br></br>
                            <Button type='submit' variant='contained' disabled={props.isSubmitting} 
                              style={{marginTop:"6px", backgroundColor:"brown", marginRight:"200px", fontFamily: "Open Sans", fontSize:"20px", borderRadius:"10px 10px 10px 10px"}}   color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>
                                
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
        </div>
    )
}

export default Signup;