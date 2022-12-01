import { useFormik } from 'formik'; 
import * as yup from 'yup';
import { TextField, Button, Grid, Typography  } from '@mui/material';
import Card from '../../components/Card';

const validationShema = yup.object({
    username: yup.string().required("user name is required"),
    password: yup.string().required("password is required")
})

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
          username: '',
          password: ''
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
        validationSchema: validationShema
      });

    return(
        <Card>
            <Grid
                container
                spacing={3}
                direction={"column"}
                justify={"center"}
                alignItems={"center"}
            >
                <Grid item xs={12}>
                    <Typography variant="h2">LOGIN</Typography>
                </Grid>
                <Grid item xs={12}>
                    <form variant="outlined" onSubmit={formik.handleSubmit}>
                        <TextField 
                            id="username" 
                            name="username" 
                            label="username" 
                            onChange={formik.handleChange} 
                            value={formik.values.username} 
                            margin="normal"
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            helperText={formik.touched.username && formik.errors.username}
                        />
                        <TextField 
                            id="password" 
                            name="password" 
                            label="password" 
                            onChange={formik.handleChange} 
                            value={formik.values.password} 
                            margin="normal"
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <Button
                            variant="contained"
                            sx={{ mt: 4 }}
                            disabled={!formik.values.username || !formik.values.password}
                            onClick={() => formik.handleSubmit(formik.values.username, formik.values.password)}
                        margin="normal">Login</Button>
                    </form>
                </Grid>
            </Grid>  
        </Card>
    );
}

export default LoginForm;