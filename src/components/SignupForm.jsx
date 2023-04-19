import * as React from 'react';
import { useFormik } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Required'),
  experience: Yup.number()
    .required('Required'),
  organization: Yup.string().required('Required')
});

const Form = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      experience: '',
      organization: '',
    },
    validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: 480,
        mx: 'auto',
      }}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h4" color="#5D3891" gutterBottom>
        Signup Form
      </Typography>

      <TextField
        label="Username"
        id="username"
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
        margin="normal"
        fullWidth
      />

      <TextField
        type="email"
        label="Email"
        id="email"
        name="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
        margin="normal"
        fullWidth
      />

      <TextField
        type="password"
        label="Password"
        id="password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Experience"
        id="experience"
        name="experience"
        value={formik.values.experience}
        onChange={formik.handleChange}
        error={formik.touched.experience && Boolean(formik.errors.experience)}
        helperText={formik.touched.experience && formik.errors.experience}
        margin="normal"
        fullWidth
      />

      <TextField
        label="Organization"
        id="organization"
        name="organization"
        value={formik.values.organization}
        onChange={formik.handleChange}
        error={formik.touched.organization && Boolean(formik.errors.organization)}
        helperText={formik.touched.organization && formik.errors.organization}
        margin="normal"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          '&:hover': {
            backgroundColor: 'primary.dark',
          },
        }}
      >
        Submit
      </Button>
    </Box>
  );
};

export default Form;
