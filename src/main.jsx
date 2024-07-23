import Profile from "./Components/Profile"
import ReactDOM from "react-dom/client"
import "./Components/Style.css";
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="sm:flex justify-center">
    <Profile name=  "Ali ahmed" bgColor="blue" bio= "Hello I am Ali iam softwere developer i have these skills "  image="https://i.pinimg.com/236x/e6/33/ee/e633eefbeb77cd4323a1557d33c91c83.jpg" />
    <Profile name= "Nuradiin Osman" bgColor= "red" bio= "Hello Sir iam Nuradiin Osman FullStack Softwere Eng and i have this Down Skills and Their Exprience" image="https://i.pinimg.com/564x/47/91/f0/4791f027dcad85f85883359daf191c5d.jpg" />
    <Profile name= "Abdi Nasir" bgColor= "orange" bio= "Hi All iam Abdi Nasir i am Senior Mobile App developer and i have this skills" image="https://i.pinimg.com/564x/6e/a9/d3/6ea9d3a86db7a28dce962115aaf815db.jpg" />
  </div>

)