import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import axios from "axios";
 
interface Comment {
  id: number;
  text: string;
}
 
const CourseDiscussion: React.FC = () => {
 const [comments, setComments] = useState<Comment[]>([]);
 const [newComment, setNewComment] = useState<string>('');
 
 useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get<Comment>('http://localhost:5292/api/comment');
        console.log(response.data);
        // setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };
    fetchComments();
 });
 
 const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    const newCommentObj: Comment = { id: Date.now(), text: newComment };
    try {
      // Send the new comment to the server
      await axios.post('http://localhost:5292/api/Comment', newCommentObj);
      // Update the local state to include the new comment
      setComments([...comments, newCommentObj]);
      setNewComment('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
 };
 
 return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Comment on the Course
      </Typography>
      <form onSubmit={handleSubmitComment}>
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Your Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Post Comment
        </Button>
      </form>
 
      <Typography variant="h6" gutterBottom sx={{ marginTop: 2 }}>
        Comments
      </Typography>
      {/* <List>
        {comments.map((comment) => (
          <ListItem key={comment.id}>
            <ListItemText primary={comment.text} />
          </ListItem>
        ))}
      </List> */}
      <List>
      {comments.map((comment) => (
        <ListItem key={comment.id}>
      <ListItemText primary={comment.text} />
    </ListItem>
  ))}
</List>
 
    </Box>
 );
};
 
export default CourseDiscussion;