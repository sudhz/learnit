import React, { useEffect, useState } from 'react';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import MenuItem from '@mui/material/MenuItem';
// import Select from '@mui/material/Select';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import { SelectChangeEvent } from '@mui/material/Select';
 
// const UploadItem: React.FC = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [selectedRadio, setSelectedRadio] = useState('');
 
//   const handleClickOpen = () => {
//     setOpen(true);
//   };
 
//   const handleClose = () => {
//     setOpen(false);
//   };
 
 
//   const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSelectedRadio(event.target.value);
//   };
 
//   useEffect(() => {
//     handleOpenDialogue();
//   }, []);
//   const handleOpenDialogue =() => {
//     setOpen(true);
//   };
//   return (
//     // <div>
//       // {/* <Button variant="outlined" onClick={handleClickOpen}>
//       //   Open alert dialog
//       // </Button> */}
     
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">New Item</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             Upload Or Create
//           </DialogContentText>
         
         
//           <RadioGroup aria-label="gender" name="gender1" value={selectedRadio} onChange={handleRadioChange}>
//             <FormControlLabel value="radio1" control={<Radio />} label="Video" />
//             <FormControlLabel value="radio2" control={<Radio />} label="Assignment" />
//             <FormControlLabel value="radio3" control={<Radio />} label="Quiz" />
//           </RadioGroup>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClose} autoFocus>
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//     // </div>
//   );
// }
 
// export default UploadItem;