import { EnergyGraph } from "../../components/EnergyGraph/EnergyGraph.jsx";
import background from "../../assets/images/background.png";
import toggle from "../../assets/images/toggle.png";
import './EnergyPage.scss'
import {useState} from "react";

export const EnergyPage = () => {
  const [graphClass, setGraphClass] = useState('graph graph--hide')
  const handleClick = () => {
    if (graphClass === 'graph graph--hide') {
      setGraphClass('graph')
    } else {
      setGraphClass('graph graph--hide')
    }
  }

  return (
    <>
      <section className="background">
        <img className="background__img" src={background} alt="GREENPOINTS"/>
      </section>
      <div className='toggle'>
        <img src={toggle} alt="Button" onClick={handleClick}/>
      </div>
      <div className={graphClass}>
        <EnergyGraph/>
      </div>
    </>
  );
};
