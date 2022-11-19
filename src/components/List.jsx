import { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
const List = () => {
    const [isVisible1, setIsVisible1] = useState();
    const [isVisible2, setIsVisible2] = useState();
    const [isVisible3, setIsVisible3] = useState();
    const [isVisible4, setIsVisible4] = useState();
    const [isVisible5, setIsVisible5] = useState();
    const [isVisible6, setIsVisible6] = useState();
    const [isVisible7, setIsVisible7] = useState();
    const [isVisible8, setIsVisible8] = useState();
    const [isVisible9, setIsVisible9] = useState();
  return(
    <ul className="px-12">
        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">What is the process to avail a Disability Certificate?
            <button onClick={()=> setIsVisible1(!isVisible1)}>{
                isVisible1 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div> 
            {isVisible1 ? 
            <p>Stepwise process of obtaining a disability certificate is as follows: 
            <ul className="list-decimal px-4">
            <li>The disabled person must visit a Medical Hospital for the specific disability.</li>
            <li>The doctor will prescribe tests depending on disability.</li>
            <li>Duly filled form as attached in Annexure 1 along with documents and test reports need to be submitted to the concerned Doctor in the Medical Hospital.</li>
            <li>A committee of doctors will consider the case and examine the person.</li>
            <li>If approved, the person is asked to collect the certificate at a later date.</li>
            </ul>
            </p> : ""} 
        </li>
        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">What is the process to avail a Unique Disability ID (UDID) ?
            <button onClick={()=> setIsVisible2(!isVisible2)}>{
                isVisible2 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible2 ? <p>dummyAnswer</p> : ""}
        </li>
        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">What are the documents required to be submitted by a disabled person to obtain a Disability Certificate?
            <button onClick={()=> setIsVisible3(!isVisible3)}>{
                isVisible3 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible3 ? <p>dummyAnswer</p> : ""}
        </li>

        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">Is it mandatory to get a UDID?
            <button onClick={()=> setIsVisible4(!isVisible4)}>{
                isVisible4 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible4 ? <p>dummyAnswer</p> : ""}
        </li>

        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">What are the documents required to be submitted by a disabled person to obtain a UDID?
            <button onClick={()=> setIsVisible5(!isVisible5)}>{
                isVisible5 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible5 ? <p>dummyAnswer</p> : ""}
        </li>

        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">Why is the Government encouraging Disabled Persons to get the UDID card?
            <button onClick={()=> setIsVisible6(!isVisible6)}>{
                isVisible6 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible6 ? <p>dummyAnswer</p> : ""}
        </li>

        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">Why is it useful for a disabled person to get a UDID?
            <button onClick={()=> setIsVisible7(!isVisible7)}>{
                isVisible7 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible7 ? <p>dummyAnswer</p> : ""}
        </li>

        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">What do I do in case of a grievance?
            <button onClick={()=> setIsVisible8(!isVisible8)}>{
                isVisible8 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible8 ? <p>dummyAnswer</p> : ""}
        </li>

        <li className="px-12 py-2 my-4 bg-gray-200">
            <div className="flex font-semibold">How long is the disability certificate valid for?
            <button onClick={()=> setIsVisible9(!isVisible9)}>{
                isVisible9 ? <><BsChevronUp/></> : <BsChevronDown/>
                }
            </button>
            </div>
            {isVisible9 ? <p>dummyAnswer</p> : ""}
        </li>
    </ul>
  )
}

export default List;