import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Stack,
} from "@mui/material";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
 
const CourseDiscussion: React.FC = () => {
  const { id } = useParams();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
 
  type Comment = {
    commentId: number;
    commentText: string;
    courseId: number;
  };
 
  type addedComment = {
    commentText: string;
    courseId: number;
  };
 
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const commentResponse = await axios.get(
          `http://localhost:5292/api/comment/course/${id}`
        );
 
        setComments(commentResponse.data);
 
        console.log(commentResponse.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, [id]);
 
  // useEffect(() => {
  //   const fetchComments = async () => {
  //      try {
  //        const commentResponse = await axios.get(
  //          `http://localhost:5292/api/comment/course/${id}`
  //        );
 
  //        // Check if the response data is an array and if it's empty
  //        if (Array.isArray(commentResponse.data) && commentResponse.data.length === 0) {
  //          console.log("No comments");
  //        } else {
  //          setComments(commentResponse.data);
  //        }
 
  //        console.log(commentResponse.data);
  //      } catch (error) {
  //        console.error("Error fetching comments:", error);
  //      }
  //   };
  //   fetchComments();
  //  }, [id]);
 
  const addComment = async () => {
    try {
      const commentPayload: addedComment = {
        commentText: newComment,
        courseId: Number(id),
      };
      console.log(commentPayload);
 
      const response = await axios.post(
        `http://localhost:5292/api/comment/course/${id}`,
        commentPayload,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(response.data);
 
      const newCommentData = response.data;
      setComments((prevComments) => [...prevComments, newCommentData]);
 
      setNewComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };
 
  return (
    <Box display="flex" height="100vh" width="100%" gap={2} >
 
      <Box width="20%" padding={2} height="100%" sx={{ bgcolor: "#1976d2" }}>
 
 
        <Stack spacing={2} mt={5}>
          <Typography
            variant="h5"
            component={Link}
            sx={{ color: "white", textDecoration: "none" }}
            to=""
          >
            Back to Courses
          </Typography>
        </Stack>
      </Box>
 
    <Box width="60%" sx={{ padding: 2 }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addComment();
        }}
      >
        <TextField
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          variant="outlined"
          margin="normal"
          fullWidth
          id="comment"
          label="Enter your comment"
          name="comment"
          autoComplete="comment"
        />
        <Button type="submit" variant="contained" color="primary">
          Add Comment
        </Button>
      </form>
 
      <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
        Comments
      </Typography>
 
      <List>
        {comments.map((comment) => (
          <ListItem key={comment.commentId}>
            <ListItemText primary={comment.commentText} />
          </ListItem>
        ))}
      </List>
    </Box>
    </Box>
  );
};
 
export default CourseDiscussion;