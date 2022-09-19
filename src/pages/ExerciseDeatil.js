import React,{useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';

import {exerciseOptions, fetchData} from '../utils/fetchData';
import Detail from '../components/Detail';
import ExerciseVidoes from '../components/ExerciseVidoes';
import SimilarExercises from '../components/SimilarExercises';


const ExerciseDeatil = () => {
  const [exerciseDetail, setExerciseDetail] = useState({})
  const {id} = useParams();
  
  useEffect(() => {
    const fetchExerciseData = async() => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com'
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,exerciseOptions)
      setExerciseDetail(exerciseDetailData)
    }
    fetchExerciseData()
  },[id])
  return (
    <Box>
      <Detail exerciseDetail= {exerciseDetail} />
      <ExerciseVidoes />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDeatil
