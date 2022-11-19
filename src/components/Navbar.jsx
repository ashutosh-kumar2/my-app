import {Link} from 'react-router-dom';
const Navbar = () => {
    return(
        <>
        <div className="bg-gray-200 flex justify-center py-4">
            <Link to="/" className="px-16">Home</Link>
            <Link to="/FindTheService" className="px-16">Find The Service</Link>
            <Link to="/DisabilityInfo" className="px-16">Disability Info</Link>
            <Link to="/EssentialDocs" className="px-16">Essential Docs</Link>
            <Link to="/Resources" className="px-16">Resources</Link>

            <input class="block bg-white h-1/4 pl-4 pr-8 py-0.5" placeholder="Search for schemes/services" type="text" name="search"/>
        </div>
        </>
    )
}

export default Navbar