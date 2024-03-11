import {
  Alert,
  Box,
  Button,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddStudent } from "../../services/studentService";
import Student from "../../model/student";

const schema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    phone: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!value) return true;
          return /^\d{10}$/.test(value);
        },
        { message: "Phone number must be 10 digits" }
      ),
    college: z.string(),
    password: z
      .string()
      .min(8, { message: "Password number must be 8 characters" }),
    confirmedPassword: z
      .string()
      .min(8, { message: "Password number must be 8 characters" }),
  })
  .refine((data) => data.password === data.confirmedPassword, {
    path: ["confirmedPassword"],
    message: "Passwords do not match",
  });

type FormFields = z.infer<typeof schema>;

const StudentSignup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      const studentObj: Student = {
        name: data.name,
        email: data.email,
        phone: data.phone ? data.phone : null,
        college: data.college ? data.college : null,
        password: data.password,
      };
      const response = await AddStudent(studentObj);
      console.log(response);
      alert("Signup successfull!");
      navigate("/student/login");
    } catch (error) {
      setError("root", {
        message: `${error}`,
      });
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Stack margin={5} alignItems="center">
      <Typography variant="h2">Signup as a student</Typography>
      <Box margin={3}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} width={400}>
            <TextField
              {...register("name")}
              label="Name"
              type="text"
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              {...register("email")}
              label="Email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              {...register("phone", { required: false })}
              label="Phone (optional)"
              type="number"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
            <TextField
              {...register("college", { required: false })}
              label="College (optional)"
              type="text"
              error={!!errors.college}
              helperText={errors.college?.message}
            />
            <TextField
              {...register("password")}
              label="Password"
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      {showPassword ? (
                        <VisibilityOff fontSize="small" />
                      ) : (
                        <Visibility fontSize="small" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              {...register("confirmedPassword")}
              label="Confirm Password"
              type="password"
              error={!!errors.confirmedPassword}
              helperText={errors.confirmedPassword?.message}
            />
            {errors.root && (
              <Alert severity="error">{errors.root.message}</Alert>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Signup"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={() => navigate(-1)}
            >
              Go Back
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  );
};

export default StudentSignup;
