import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './Mybutton'

const image={
    name:"Butter Fly",
    imgurl:"https://th.bing.com/th/id/R.a34aa6816109fdca4f6f164f939fb1fb?rik=9u9vXBYlJehHwA&riu=http%3a%2f%2fclipart-library.com%2fimg1%2f1220639.jpg&ehk=b5wzXuEfnAA0siiDsEfoSMZx9JTHzIM8L82LUD%2f5A%2bA%3d&risl=&pid=ImgRaw&r=0",
    imgsize:90,
};

function App() {
  return <div>
    <h1>{image.name}</h1>
    <img src={image.imgurl} alt={'Photo of'+image.name} style={{height:image.imgsize}}/>
    <br />
    <Mybutton></Mybutton>
    <h2>Learning React is so Much fun..!!</h2>
    <Mybutton></Mybutton>
  </div>
}

export default App
