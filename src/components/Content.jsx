import {Link} from 'react-router-dom';
const Content = () => {
    return(
        <div className="container mx-auto pb-9">
            <span className="flex justify-center text-3xl font-semibold pt-16 pb-4">Child Rights</span>
            <span className="flex justify-center text-center px-56 py-4">The Delhi Commission for Protection of Child Rights has attempted to create extensive repository of all existing entitlements and relevant information which could be of benefit to Persons with Disabilities & their caregivers in Delhi. This website aims to address the information asymmetry by creating awareness about the rights of Persons with Disabilities, especially Children with Special Needs or Children who have parents with disabilities & assist them in understanding the means of leveraging rightful entitlements for their own benefit.</span>
            <span className="flex justify-center text-center px-16 py-4">Click to know your rights & entitlement</span>
            <div className="flex justify-center">
                <button className="box-border rounded bg-black text-white px-16 py-2"><Link to="/FindTheService">Get Started</Link></button>
            </div>
            
        </div>
    );
}

export default Content;