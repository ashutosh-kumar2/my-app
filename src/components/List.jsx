import { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import { ReferencesFAQ } from "../assets/ReferencesFAQ";
const List = () => {
    const [isVisible, setIsVisible] = useState();
  return(
    <ul>
        <li>
            dummyQuestion1
            <button onClick={()=> setIsVisible(!isVisible)}>{
                isVisible ? <><BsChevronUp/><li>dummyAnswer1</li></> : <BsChevronDown/>
                }
            </button>
        </li>
        <li>
            dummyQuestion2
            <button onClick={()=> setIsVisible(!isVisible)}>{
                isVisible ? <><BsChevronUp/><li>dummyAnswer2</li></> : <BsChevronDown/>
                }
            </button>
        </li>
    </ul>
  )
}

export default List;