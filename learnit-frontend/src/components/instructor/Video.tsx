import React, { useState, useEffect, useContext } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Box,
} from "@mui/material";
import axios from "axios";
import { AuthContext } from "../../services/context/auth/authContext";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const VideoUploadForm: React.FC = () => {
  const [videoName, setVideoName] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    handleOpenDialog();
  }, []);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const handleVideoNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVideoName(event.target.value);
  };

  const handleVideoLinkChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setVideoLink(event.target.value);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setVideoLink(file.name);
    }
  };

  const handleVideoUpload = async () => {
    const data = {
      C_Id: Number(id),
      VideoLink: videoLink,
      VideoName: videoName,
    };

    try {
      const response = await axios.post(
        "http://localhost:5292/api/AddVideo",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      setOpen(false);
      navigate("/instructor/home");
      window.alert("Video added successfully");
    } catch (error) {
      console.error(error);
      window.alert("Error adding video");
    }
  };

  return (
    <>
      <Box height="75vh" />
      <Dialog open={open} onClose={handleCloseDialog}>
        <DialogTitle>Add Video</DialogTitle>
        <DialogContent>
          <TextField
            label="Video Name"
            value={videoName}
            onChange={handleVideoNameChange}
            fullWidth
            margin="normal"
            style={{ marginBottom: "16px" }}
          />
          <TextField
            label="Video Link"
            value={videoLink}
            onChange={handleVideoLinkChange}
            fullWidth
            margin="normal"
            style={{ marginBottom: "16px" }}
          />
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <Button
            variant="contained"
            component="label"
            style={{ marginBottom: "16px" }}
          >
            Browse
            <input
              type="file"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleVideoUpload} color="primary">
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VideoUploadForm;
