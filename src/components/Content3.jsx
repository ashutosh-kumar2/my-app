

import List from "../components/List";

const Content3 = () => {
    
    return(
        <>
        <div className="container mx-auto pt-4 pb-9">
        <span className="text-xl px-12 py-4 font-semibold"> 
        Essential Documents for a Person with Disability
        </span>
        <span className="flex px-12 py-4"> 
        A person with a benchmark disability as defined above will require a Disability Certificate & Unique Disability ID to avail benefits under various schemes and entitlements. 
        </span>
        <p className="px-12 py-4"> 
        <strong> Disability Certificate:</strong> Disability Certificate or Handicap Certificate (as it may alternatively be called) is a document that certifies the type and degree of disability that has affected the person. 
        </p>
        <p className="px-12 py-4"> 
        <strong> Unique Disability ID:</strong> Unique Disability ID is a single source document for identification, and verification of the disabled for availing benefits that they are eligible for under the various schemes and acts.
        </p>
        <span className="text-xl px-12 py-4 font-semibold"> 
        References
        </span>
        <List/>
        </div>
        </>
    )
};

export default Content3;