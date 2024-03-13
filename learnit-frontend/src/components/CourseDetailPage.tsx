import React from "react";
import { Link, useParams } from "react-router-dom";
import { alignProperty } from "@mui/material/styles/cssUtils";
import { Button, Card, CardContent, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';

interface Module {
  id: number;
  title: string;
  duration: string;
}

interface CourseDetails {
  title: string;
  price: string;
  description: string;
  duration: string;
  modules: Module[];
  frequentlyBoughtTogether: number[];
}

const CourseDetailPage: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div>Invalid video ID</div>;
  }

  const courseDetails: Record<string, CourseDetails> = {
    '1': {
      title: 'Introduction to React',
      price: '$20.00',
      description: 'Course description goes here.',
      duration: '2 hours',
      modules: [
        { id: 1, title: 'Module 1', duration: '30 mins' },
        { id: 2, title: 'Module 2', duration: '45 mins' },
        { id: 3, title: 'Module 3', duration: '50 mins' },
        { id: 4, title: 'Module 4', duration: '35 mins' },
        { id: 5, title: 'Module 5', duration: '55 mins' },

      ],
      frequentlyBoughtTogether: [2, 3, 4],
    },

    '2': {
        title: 'JavaScript Fundamentals',
        price: '$20.00',
        description: 'Course description goes here.',
        duration: '2 hours',
        modules: [
          { id: 1, title: 'Module 1', duration: '30 mins' },
          { id: 2, title: 'Module 2', duration: '45 mins' },
          { id: 3, title: 'Module 3', duration: '50 mins' },
          { id: 4, title: 'Module 4', duration: '35 mins' },
          { id: 5, title: 'Module 5', duration: '55 mins' },
  
        ],
        frequentlyBoughtTogether: [2, 3, 4],
      },
      '3': {
        title: 'CSS Styling Techniques',
        price: '$20.00',
        description: 'Course description goes here.',
        duration: '2 hours',
        modules: [
          { id: 1, title: 'Module 1', duration: '30 mins' },
          { id: 2, title: 'Module 2', duration: '45 mins' },
          { id: 3, title: 'Module 3', duration: '50 mins' },
          { id: 4, title: 'Module 4', duration: '35 mins' },
          { id: 5, title: 'Module 5', duration: '55 mins' },
  
        ],
        frequentlyBoughtTogether: [2, 3, 4],
      },
      '4': {
        title: 'Responsive Web Design',
        price: '$20.00',
        description: 'Course description goes here.',
        duration: '2 hours',
        modules: [
          { id: 1, title: 'Module 1', duration: '30 mins' },
          { id: 2, title: 'Module 2', duration: '45 mins' },
          { id: 3, title: 'Module 3', duration: '50 mins' },
          { id: 4, title: 'Module 4', duration: '35 mins' },
          { id: 5, title: 'Module 5', duration: '55 mins' },
  
        ],
        frequentlyBoughtTogether: [2, 3, 4],
      },
      '5': {
        title: 'State Management in React',
        price: '$20.00',
        description: 'Course description goes here.',
        duration: '2 hours',
        modules: [
          { id: 1, title: 'Module 1', duration: '30 mins' },
          { id: 2, title: 'Module 2', duration: '45 mins' },
          { id: 3, title: 'Module 3', duration: '50 mins' },
          { id: 4, title: 'Module 4', duration: '35 mins' },
          { id: 5, title: 'Module 5', duration: '55 mins' },
  
        ],
        frequentlyBoughtTogether: [2, 3, 4],
      },
      '6': {
        title: 'Building RESTful APIs',
        price: '$20.00',
        description: 'Course description goes here.',
        duration: '2 hours',
        modules: [
          { id: 1, title: 'Module 1', duration: '30 mins' },
          { id: 2, title: 'Module 2', duration: '45 mins' },
          { id: 3, title: 'Module 3', duration: '50 mins' },
          { id: 4, title: 'Module 4', duration: '35 mins' },
          { id: 5, title: 'Module 5', duration: '55 mins' },
  
        ],
        frequentlyBoughtTogether: [2, 3, 4],
      },
  };

  const videoDetails = courseDetails[id];

  if (!videoDetails) {
    return <div>Video not found</div>;
  }

  
  const { title, price, description, duration, modules, frequentlyBoughtTogether } = videoDetails;

  // Styles for the sidebar
  const sidebarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100%',  // Adjust the height as needed
    color: 'white',
    boxSizing: 'border-box',
    width: '15%',
    background: 'rgba(52, 152, 219, 1)',
    padding: '20px',
  };

  const contentContainerStyle: React.CSSProperties = {
    marginLeft: '15%',  // Adjust the width to match the sidebar width
    boxSizing: 'border-box',
    padding: '20px',
  };
  const videoContainerStyle: React.CSSProperties = {
    background: 'rgba(175, 219, 245, 1)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 10px', 
    height:'10%'// Add margin to the left and right
  };
  const frevideoContainerStyle:React.CSSProperties={

    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 120px',

  }

  const titleContainerStyle: React.CSSProperties = {
    flex: 1,
    marginRight: '40px',
    
  };

  const orderButtonStyle: React.CSSProperties = {
    borderRadius: '5px',
    background: '#3498db',
    color: 'white',
    padding: '12px',
    cursor: 'pointer',
  };

  const formContainerStyle: React.CSSProperties = {
    background: 'rgba(175, 219, 245, 1)',
    padding: '20px',
    borderRadius: '10px',
    margin: '25px 50px',
    color: '#3498db'
  };
  
  const textContainerStyle: React.CSSProperties = {
    maxWidth: '1100px', 
    margin: 'auto',   
    fontSize:'15px',
    color: '#3498db' 
  };
  const moduleContainerStyle: React.CSSProperties = {
    background: 'white',
    color:'#3498db',
    borderRadius: '10px',
    padding: '10px',
    marginBottom: '10px',
   
  };
  const videoStyle: React.CSSProperties = {
    width: '300px',
    margin: '20px',
    padding: '20px',
    height: '100px',
    background: 'rgba(175, 219, 245, 0.5)',
    borderRadius: '10px',
    textAlign: 'center',
  };
  const videoTextContainerStyle: React.CSSProperties = {
    marginBottom: '10px',
  };
  const videoButtonStyle: React.CSSProperties = {
    margin: '10px',
    padding: '12px',
    borderRadius: '5px',
    background: '#3498db',
    color: 'white',
  };
 
  // Your existing styling constants here...

  return (
    <>
     
  <div style={{display:'flex'}}>
      <div style={{  alignItems: 'center', justifyContent: 'center', height: '100%' }}>
  <div style={sidebarStyle}>
    {/* <Link to="/CourseDiscussion" style={{ textDecoration: 'none', color: 'inherit' }}>
      <h4>Course Discussion</h4>
    </Link> */}
  </div>
</div>


   <div style={contentContainerStyle}>
        <div style={{ width: '70%', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', color: '#3498db' }}>COURSE LANDING PAGE</h2>
          <br />
          <br />
  
          <div style={videoContainerStyle}>
            <div style={titleContainerStyle}>
              <h2>{title}</h2>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} style={{ color: '#3498db' }} /> {duration}
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="/OnlinePaymentPage">
                <button style={orderButtonStyle}>ORDER NOW</button>
              </Link>
             &nbsp;&nbsp;&nbsp;
              
            </div>
          </div>
  
          <div>
            <br />
            <br />
            <h3 style={{ textAlign: 'center', color: '#3498db' }}>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            </h3>
            <div style={formContainerStyle}>

            <p style={moduleContainerStyle}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quiepakis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comepmodo
  consetquat. Duis aute irure dolor in reprehenderit in voluptate velit esse cfgillum dolore eutpe fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt inpeku culpa qui officia deserunt mollit anim id est
  laborum.
</p>
</div>

            
            <br />
            
          </div>
          <br />
          <br />
  
          <h2 style={{ textAlign: 'center', color: '#3498db' }}>COURSE CURRICULUM</h2>
          <div style={formContainerStyle}>
            <p style={{ color: '#3498db' }}>
              &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; {modules.length} MODULES &nbsp; &nbsp; &nbsp; &nbsp;{' '}
              {duration.length} HOURS-TOTAL TIME
            </p>
  
            {modules.map((module: Module) => (
              <div key={module.id} style={moduleContainerStyle}>
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}
                >
                  <h4 style={{ flex: '1' }}>Consectetur adipiscing elit as heading</h4>
                  <h4 style={{ flex: '0 0 auto', marginLeft: 'auto', textAlign: 'justify' }}>
                    Duration: {module.duration}
                  </h4>
                </div>
  
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam as content as content
                  </p>
                </div>
              </div>
            ))}
          </div>
         
        </div>
        </div>
      </div>
    
    </>
  );
  
  
};

export default CourseDetailPage;
