import React, {useState} from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from './components/Stats/Stats';


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => {
    
    setGood(prevState => prevState + 1);
  };

  const handleNeutralButton = () => {
    
    setNeutral(prevState => prevState + 1);
  };
  const handleBadButton = () => {
    
    setBad(prevState => prevState + 1);
  };

  const countTotalFeedback = good + neutral + bad;
  
    return (<Section title={'Please leave feedback'}>
      <FeedbackOptions
        good={handleGoodButton}
        neutral={handleNeutralButton}
        bad={handleBadButton}
      />
      
      <Statistics title={'Statistics'}
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={Math.round((good / countTotalFeedback) * 100)}
      />
    
    </Section>
    );

}

