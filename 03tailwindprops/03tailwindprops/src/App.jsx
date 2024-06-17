import './App.css'
import Card from './components/Card'

function App() {
  

  return (
    <>
      <h1 className="text-3xl font-bold text-red-800 bg-green-300 p-4 rounded-lg">
      Vite with tailwind
    </h1>
    <Card username = "Asghar" post = "Software Engineer" />
    <Card username = "Haris" post = "Assistant Commissioner"/>
    <Card username = "Talha" post = "Haji"/>
    </>
  )
}

export default App
