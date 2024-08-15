import { BiLogoHtml5, BiLogoAndroid, BiBuilding } from "react-icons/bi";
import { GiDuration } from "react-icons/gi";

const courses = [
  {
    title: "Web Development",
    icon: <BiLogoHtml5 />,
    duration: '2 Hours',
  },
  {
    title: "App Development",
    icon: <BiLogoAndroid />,
    duration: '2 Hours',
  },
  {
    title: "UX & UI",
    icon: <BiBuilding/>,
    duration: '2 Hours',
  },
];

const Card = () => {
  return (
    <div className="card--container">
      {courses.map((item) =>(
        <div className="card">
            <div className="card--cover">{item.icon}</div>
            <div className="card--title">
                <h2>{item.title}</h2>
            </div>
        </div>
      ))}
    </div>
  );
};

export default Card
