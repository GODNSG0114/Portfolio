import React ,{useEffect, useState}from 'react'
import appContext from './AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Daily_que_Context = ({children}) => {

  const [dailyQuestion, setDailyQuestion] = useState(null);
  const [dailyLoading, setDailyLoading] = useState(true);
  const [dailysolved, setDailysolved] = useState(false);
  const [SubmissionData , setSubmissionData]  = useState([]);


  const fetchDailyQuestion = async () => {
      try {
        const data = await axios.get('https://alfa-leetcode-api.onrender.com/daily');
        setDailyQuestion(data.data);
        console.log('daily question :' ,data.data)
        toast.success("Daily question loaded 》》》");
      } catch (error) {
        console.error('Error fetching daily question:', error);
        toast.error(error.message)
      } finally {
        setDailyLoading(false);
      }
    };
    
const Submissions = async ()=>{
          try {
          
            const data = await axios.get('https://alfa-leetcode-api.onrender.com/GODNSG0114/acSubmission');
            setSubmissionData(data.data.submission);
          } catch (error) {
            toast.error(error.message);
          }
     }

useEffect(()=>{
   fetchDailyQuestion();
   Submissions();
  },[]);

useEffect(() => {
  const isSolved = SubmissionData.some(
    obj => obj.titleSlug === dailyQuestion.titleSlug
  );
  setDailysolved(isSolved);
}, [SubmissionData, dailyQuestion]);
  
  const val = {
      dailyLoading,
      dailyQuestion,
      dailysolved
    }
  return (
    <appContext.Provider value={val}>
        {children}
    </appContext.Provider>
  )
}

export default Daily_que_Context