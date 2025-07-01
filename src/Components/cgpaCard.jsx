import React from "react";
import { Paper, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import GradeIcon from '@mui/icons-material/Grade';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BlurText from "../Animations/blurText";

export default function CgpaCard() {
  // Static data for now - replace with dynamic data later
  const cgpa = 3.75;
  const lastSemGpa = 3.62;
  const creditsCompleted = 98;
  const creditsRequired = 120;

  const progress = (creditsCompleted / creditsRequired) * 100;
  const improvement = cgpa > lastSemGpa ? "up" : "down";

  return (
    <Paper 
   
      elevation={3} 
      className="shadow-lg" 
      sx={{
         mt:4,
        background: 'linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)',
        color: 'white',
        borderRadius: '16px',
        padding: '24px',
        minWidth: 300,
        maxWidth: 400,
        position: 'relative',
        overflow: 'hidden',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: -50,
          right: -50,
          width: 150,
          height: 150,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 200,
          height: 200,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.1)'
        }
      }}
    >
      {/* Icon and title */}
      <div className="flex items-center mb-4">
        <SchoolIcon sx={{ fontSize: 40, mr: 2 }} />
        <BlurText 
                  text="Academic Progress"
                  delay={100}
                  animateBy="letters"
                  direction="top"
                  className="text-xl font-bold text-white" animationFrom={undefined} animationTo={undefined} onAnimationComplete={undefined} />
      </div>
      
      {/* Main CGPA display */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>Current CGPA</Typography>
          <div className="flex items-baseline">
            <Typography variant="h2" sx={{ fontWeight: 'bold', mr: 1 }}>{cgpa}</Typography>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>/ 4.0</Typography>
          </div>
        </div>
        
        <div className="relative">
          <GradeIcon sx={{ fontSize: 60, opacity: 0.3 }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <TrendingUpIcon sx={{ 
              fontSize: 30, 
              color: improvement === "up" ? '#4ade80' : '#f87171',
              transform: improvement === "up" ? 'rotate(0deg)' : 'rotate(180deg)'
            }} />
          </div>
        </div>
      </div>
      
      {/* Credits progress */}
      <div className="mb-3">
        <div className="flex justify-between text-sm mb-1">
          <span>Credits Completed </span>
          <span>{creditsCompleted}/{creditsRequired}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-yellow-400 h-2.5 rounded-full" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <div className="bg-white bg-opacity-10 p-3 rounded-lg">
          <Typography variant="body2" sx={{ opacity: 0.8 }}>Last Semester</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{lastSemGpa}</Typography>
        </div>
        <div className="bg-white bg-opacity-10 p-3 rounded-lg">
          <Typography variant="body2" sx={{ opacity: 0.8 }}>Completion</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{Math.round(progress)}%</Typography>
        </div>
      </div>
    </Paper>
  );
}