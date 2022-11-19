const Content1 = () => {
    return(
        <>
        <div className="container mx-auto pt-4 pb-9">
        <p className="text-center px-56 py-4"> 
        The Rights of Persons with Disabilities Act, 2016, defines the term Person with Disability as “a person with long term physical, mental, intellectual or sensory impairment which, in interaction with barriers, hinders his full and effective participation in society equally with others.”
        </p>
        <p className="text-center px-56 py-4"> The Act also specifies a comprehensive list of 21 disabilities, which are included under the ambit of the Act and are broadly classified into 6 major categories: <a href="https://legislative.gov.in/sites/default/files/A2016-49_1.pdf"> https://legislative.gov.in/sites/default/files/A2016-49_1.pdf</a> 
        </p>
        </div>
        <div className="grid grid-cols-3 gap-8 px-64 pb-5">
            <span className="box-border bg-gray-200 text-center py-4">Physical Disability</span>
            <span className="box-border bg-gray-200 text-center py-4">Intellectual Disability</span>
            <span className="box-border bg-gray-200 text-center py-4">Mental Disability</span>
            <span className="box-border bg-gray-200 text-center py-4">Neurological</span>
            <span className="box-border bg-gray-200 text-center py-4">Blood Disorder</span>
            <span className="box-border bg-gray-200 text-center py-4">Multiple Disability</span>
        </div>
        </>
    )
};

export default Content1;