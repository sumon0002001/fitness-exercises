import React, {useEffect, useState} from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({ exercises, bodyPart, setExercises}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPage = 9
  
  useEffect(() => {
   const fetchExercisesData = async () => {
     let exerciseData = [];

     if(bodyPart === "all"){
       exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
     } else {
       exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
     }
     setExercises(exerciseData);
   }
   fetchExercisesData()
  },[bodyPart])

  const indexOfLastExercise = currentPage * exercisesPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise );

  const paginate = (e, v) => {
    setCurrentPage(v);

    window.scrollTo({top: 1800, behavior: "smooth"})
  }
  return (
    <Box id="exercise"
      sx={{mt: {lg: '100px'}}}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" fontWeight="bold" sx={{fontSize: {lg:'44px', xs: '30px'}}} mb="46px">
        Showing Results
      </Typography>
      <Stack direction="row" sx={{gap: {lg:'110px', xs: '50px'}}}
      flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <p>
           < ExerciseCard key={index} exercise={exercise} />
          </p>
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > 9 && (
          <Pagination 
          count={Math.ceil(exercises.length / exercisesPage)} 
          color="primary"
          shape="rounded"
          size="large"
          page={currentPage}
          onChange={paginate} /> 

        )}
      </Stack>
      
    </Box>
  )
}

export default Exercises
