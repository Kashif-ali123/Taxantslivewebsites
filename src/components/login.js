import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router';

const Login = ({ handleChange }) => {
let history = useHistory();
    const paperStyle = { padding: 20, height: '53vh', width: 600, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        username: '',
        password: '',
        remember: false
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().email('please enter valid email').required("Required"),
        password: Yup.string().required("Required")
    })
    const onSubmit = (values, props) => {
        history.push("/dash");
        console.log(values)
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)

    }
    return (
        <div style={{ backgroundImage:"url('https://tse3.mm.bing.net/th?id=OIP.RVeAyC6S257koogzT_G_VwHaFj&pid=Api&P=0&w=217&h=163')", height:"800px",  backgroundSize:"cover"}}>
        <br></br>  <br></br> <br></br><br></br><br></br>
       
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(props) => (
                        <Form>
                            <Field as={TextField} label='Username' name="username"
                                placeholder='Enter username' fullWidth required
                                helperText={<ErrorMessage name="username" />}
                            />
                            <Field as={TextField} label='Password' name="password"
                                placeholder='Enter password' type='password' fullWidth required
                                helperText={<ErrorMessage name="password" />} />
                            <Field as={FormControlLabel}
                                name='remember'
                                control={
                                    <Checkbox
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                            <Button  type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                                style={{btnstyle, backgroundColor:"brown"}}  fullWidth onClick>{props.isSubmitting ? "Loading" : "Sign in"}</Button>
                     
                        </Form>
                    )}
                </Formik>
                <Typography >
                    <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="/signup" onClick={() => handleChange("event", 1)} >
                        Sign Up
                </Link>
                </Typography>
            </Paper>
        </Grid>
     </div>
       
    )
}

export default Login