import React, { useEffect, useState } from "react";
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
import { number, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Instructor from "../../model/instructor";
import { GetInstructor } from "../../services/api/instructorService";
// import { UpdateInstructor } from "./UpdateInstructor";

// Define the schema for validation
const schema = z
  .object({
    // id: z.string(),
    name: z.string(),
    email: z.string().email(),
    phone: z
      .string()
      .optional()
      .refine((value) => !value || /^\d{10}$/.test(value), {
        message: "Phone number must be 10 digits",
      }),
    currentPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmNewPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    path: ["confirmNewPassword"],
    message: "Passwords do not match",
  });

type FormFields = z.infer<typeof schema>;

const UpdateProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [instructor, setInstructor] = useState<Partial<Instructor>>({});

  useEffect(() => {
    try {
      const fetchInstructor = async () => {
        if (!id) {
          throw new Error("id not present in the route parameter");
        }
        const instructor = await GetInstructor(+id);
        setInstructor(instructor);
      };
      fetchInstructor();
    } catch (error) {
      alert(`${error}`);
    }
  }, [id]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormFields>({
    resolver: zodResolver(schema), // Set the default values here
  });
  useEffect(() => {
    reset({
      // name: instructor.name || "",
      // email: instructor.email || "",
      phone: instructor.phone || "",
      // Reset other fields as necessary
    });
  }, [instructor, reset]);

  const onSubmit: SubmitHandler<FormFields> = async (data: FormFields) => {
    try {
      // TODO
    } catch (error) {
      setError("root", {
        message: "The error from the backend",
      });
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Stack margin={5} alignItems="center">
      <Typography variant="h5" sx={{ color: "pr     imary.main", fontWeight: 600 }}>
        Update Profile Details
      </Typography>
      <Box margin={3}>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2} width={400}>
            <TextField
              {...register("name")}
              label="Name"
              type="text"
              value={instructor.name || ""}
              // disabled
              error={!!errors.name}
              helperText={errors.name?.message}
            />
            <TextField
              {...register("email")}
              label="Email"
              type="email"
              value={instructor.email || ""}
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
            <Typography
              variant="h5"
              align="center"
              sx={{ color: "primary.main", fontWeight: 600 }}
            >
              Change Password
            </Typography>
            <TextField
              {...register("currentPassword")}
              label="Current Password"
              type={showPassword ? "text" : "password"}
              value={instructor.password || ""}
              error={!!errors.currentPassword}
              helperText={errors.currentPassword?.message}
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
              {...register("newPassword")}
              label="New Password"
              type={showPassword ? "text" : "password"}
              error={!!errors.newPassword}
              helperText={errors.newPassword?.message}
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
              {...register("confirmNewPassword")}
              label="Confirm New Password"
              type="password"
              error={!!errors.confirmNewPassword}
              helperText={errors.confirmNewPassword?.message}
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
              {isSubmitting ? "Updating..." : "Update Profile"}
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

export default UpdateProfile;