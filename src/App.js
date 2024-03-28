import Header from './components/Header'
import Pirate from './components/Pirate'
//import piratesFile from './data/sample-pirates-array'
import React from 'react'
import AddPirate from './components/AddPirate'

const pirateCalls = [
  'Aaarg, belay that!',
  'Avast me hearties!',
  'Shiver me timbers!',
]

// const addPirate = (pirate) => console.log('form the app component', pirate)

// function randomize() {
//   return pirateCalls[Math.floor(Math.random() * pirateCalls.length)]
// }

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)]

function App() {
  const [pirates, setPirates] = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3001/pirates')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setPirates(data)
      })
  }, [])

  // const addPirate = (pirate) => {
  //   const newPirates = [...pirates]
  //   newPirates.unshift(pirate)
  //   setPirates(newPirates)
  // }

  // const addPirate = (pirate) => {
  //   const newPirates = [pirate, ...pirates]
  //   setPirates(newPirates)
  // }

  const addPirate = (pirate) => {
    pirate.image = 'avatar.png'
    setPirates((prev) => [pirate, ...prev])
  }

  return (
    <div>
      <Header title={randomize()} />
      <AddPirate addPirate={addPirate} />

      {pirates.map((pirate, index) => (
        <Pirate key={index} tagline={randomize()} pirate={pirate} />
      ))}
    </div>
  )
}

export default App
