import React, { useState, useEffect, ChangeEvent } from 'react';
import { TextField, Button, Typography, Dialog, DialogTitle, DialogContent, DialogActions, Link, Grid, InputLabel } from '@mui/material';

const AddAssignmentForm: React.FC = () => {
  const [assignmentName, setAssignmentName] = useState('');
  const [details, setDetails] = useState('');
  const [deadline, setDeadline] = useState('');
  const [link, setLink] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleOpenDialog(); // Open the dialog when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to backend or perform any action
    console.log('Submitted:', { assignmentName, details, deadline, link });
    // Close the dialog
    handleCloseDialog();
  };

  const handleAssignmentLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAssignmentName(event.target.value);
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setLink(file.name); // Display file name as URL
    }
  };

  const handleAssignmentUpload = () => {
    // Handle assignment upload logic
    console.log('Assignment Name:', assignmentName);
    console.log('Assignment Link:', link);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>Add Assignment</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputLabel htmlFor="assignment-name">Assignment Name</InputLabel>
                <TextField
                  fullWidth
                  id="assignment-name"
                  variant="outlined"
                  value={assignmentName}
                  onChange={handleAssignmentLinkChange}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="details">Details</InputLabel>
                <TextField
                  fullWidth
                  id="details"
                  variant="outlined"
                  multiline
                  rows={1}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel htmlFor="deadline">Deadline</InputLabel>
                <TextField
                  fullWidth
                  id="deadline"
                  variant="outlined"
                  type="datetime-local"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Upload Assignment"
                  value={link}
                  onChange={handleAssignmentLinkChange}
                  fullWidth
                  margin="normal"
                  style={{ marginBottom: '6px' }}
                />
                <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                <Button variant="contained" component="label" style={{ marginBottom: '6px' }}>
                  Browse
                  <input type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit">
                  Add Assignment
                </Button>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddAssignmentForm;
