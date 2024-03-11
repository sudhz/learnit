import React from 'react';
import {
 Box,
 Button,
 FormControl,
 FormControlLabel,
 FormLabel,
 Radio,
 RadioGroup,
 TextField,
 Typography,
 Stack,
} from '@mui/material';
import { useForm, SubmitHandler, Controller } from 'react-hook-form'; // Import Controller
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
 
// Define the schema for validation
const schema = z.object({
 title: z.string().nonempty({ message: 'Title is required' }),
 availability: z.enum(['always', 'timeBased']),
 availableFrom: z.string().optional().refine(
    (value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value),
    { message: 'Date format should be YYYY-MM-DD' }
 ),
 availableTo: z.string().optional().refine(
    (value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value),
    { message: 'Date format should be YYYY-MM-DD' }
 ),
 courseStartDate: z.string().optional().refine(
    (value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value),
    { message: 'Date format should be YYYY-MM-DD' }
 ),
 courseEndDate: z.string().optional().refine(
    (value) => !value || /^\d{4}-\d{2}-\d{2}$/.test(value),
    { message: 'Date format should be YYYY-MM-DD' }
 ),
 content: z.string().nonempty({ message: 'Content is required' }),
});
 
type FormFields = z.infer<typeof schema>;
 
const CourseBuilder = () => {
 const {
    register,
    handleSubmit,
    formState: { errors },
    control, // Use control for Controller
 } = useForm<FormFields>({
    resolver: zodResolver(schema),
 });
 
 const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data);
    // Handle form submission here
 };
 
 return (
  <Box margin={2} padding={5} borderRadius={2} boxShadow={1} sx={{ backgroundColor: 'background.paper', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <Box marginTop={2}>
     <Typography variant="h5" sx={{ color: 'primary.main', fontWeight: 600 }}> Title </Typography><br></br>
     <form onSubmit={handleSubmit(onSubmit)}>
       <Stack spacing={2} width={500}>
            <TextField
              {...register("title")}
              label="Course Title"
              type="text"
              error={!!errors.title}
              helperText={errors.title?.message}
            />
            <FormControl component="fieldset">
              <Typography component="legend" variant="h5" sx={{ color: 'primary.main', fontWeight: 600 }} >Availability</Typography>
              <RadioGroup {...register("availability")} defaultValue="always">
                <FormControlLabel value="always" control={<Radio />} label="Always Available" />
                <FormControlLabel value="timeBased" control={<Radio />} label="Time-Based Availability" />
              </RadioGroup>
            </FormControl>
            {/* Add the course start and end date fields */}
            <Typography component="legend" variant="h5" sx={{ color: 'primary.main', fontWeight: 600 }} >Course Date</Typography>
            <Controller
              name="courseStartDate"
              control={control}
              render={({ field }) => (
                <TextField
                 {...field}
                 label="Course Start Date"
                 type="date"
                 InputLabelProps={{ shrink: true }}
                 error={!!errors.courseStartDate}
                 helperText={errors.courseStartDate?.message}
                />
              )}
            />
            <Controller
              name="courseEndDate"
              control={control}
              render={({ field }) => (
                <TextField
                 {...field}
                 label="Course End Date"
                 type="date"
                 InputLabelProps={{ shrink: true }}
                 error={!!errors.courseEndDate}
                 helperText={errors.courseEndDate?.message}
                />
              )}
            />
            <Typography component="legend" variant="h5" sx={{ color: 'primary.main', fontWeight: 600 }} >Content</Typography>
             
            <TextField
              {...register("content")}
              label="Course Content"
              type="text"
              multiline
              rows={4}
              error={!!errors.content}
              helperText={errors.content?.message}
            />
            <Button type="submit" variant="contained" color="primary">Create Course</Button>
          </Stack>
        </form>
      </Box>
    </Box>
 );
};
 
export default CourseBuilder;