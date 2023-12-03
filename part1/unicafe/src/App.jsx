import { useState } from 'react'

const StatisticsLine = (props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const average = props.clicks.total/3 
  const positive = (props.clicks.good/props.clicks.total)*100

  if(props.clicks.total=== 0){
    return <p>No feedback given</p>
  }else{
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticsLine text='good' value={props.clicks.good}/>
            <StatisticsLine text='neutral' value={props.clicks.neutral}/>
            <StatisticsLine text='bad' value={props.clicks.bad}/>
            <StatisticsLine text='all' value={props.clicks.total}/>
            <StatisticsLine text='average' value={average}/>
            <StatisticsLine text='positive' value={positive}/>
          </tbody>
        </table>
      </>
    )
  }
}

const App = () => {
//saving the click count of good, bad, neutral buttons into a single object
    const [clicks,setClicks] = useState({
      good:0,neutral:0,bad:0,total:0
  })
//creates a copy of the clicks object where the value of the mentioned property is increased by one.
    const goodClick = ()=>setClicks({
      ...clicks,
      good: clicks.good+1,
      total: clicks.total+1
  })
  const neutralClick = ()=>setClicks({
    ...clicks,
    neutral: clicks.neutral+1,
    total: clicks.total+1
  })
  const badClick = ()=>setClicks({
    ...clicks,
    bad: clicks.bad+1,
    total: clicks.total+1
  })

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={goodClick}>good</button>
      <button onClick={neutralClick}>neutral</button>
      <button onClick={badClick}>bad</button>
      <Statistics clicks={clicks}/>
    </>
  )
}

export default App
