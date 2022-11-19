const Content4 = () => {
    return(
        <>
        <div className="bg-gray-400">
        
        <div className="container max-w-2xl mx-auto bg-white">
        <p className="flex justify-center max-w-3xl mx-auto bg-gray-200 font-semibold  py-2">Let us help you find relevant scheme and services for you!</p>
        <form className="px-8">
            <label className="block py-2">Date of Birth</label>
            <input type="date" className="border-solid border-2 border-slate-200 w-full rounded px-2 py-0.5 outline-none"/>
            <label className="block py-2">Annual Family Income (Optional)</label>
            <select className="border-solid border-2 border-slate-200 w-full rounded bg-white px-2 py-0.5">
                <option hidden disabled selected value></option>
                <option>0-20,000</option>
                <option>20,001-30,000</option>
                <option>30,001-40,000</option>
                <option>40,001-50,000</option>
            </select>
            <label className="block py-2">Any specific category of scheme and services, you are interested in? (Optional)</label>
            <select className="border-solid border-2 border-slate-200 w-full rounded bg-white px-2 py-0.5">
                <option hidden disabled selected value></option>
                <option>All</option>
                <option>Educational</option>
                <option>Health</option>
                <option>Financial</option>
                <option>Skill and Employment</option>
            </select>
            <label className="block py-2">Type of Disability?</label>
            <select className="border-solid border-2 border-slate-200 w-full rounded bg-white px-2 py-0.5">
                <option hidden disabled selected value></option>
                <option>Physical Disability</option>
                <option>Intellectual Disability</option>
                <option>Mental Disability</option>
                <option>Neurological</option>
                <option>Blood Disorder</option>
                <option>Multiple Disability</option>
            </select>
            <label className="block py-2">Disability percentage% (Optional)</label>
            <input type="text" className="border-solid border-2 border-slate-200 w-full rounded px-2 py-0.5 outline-none"/>
        </form>
        <div className="text-center">
            <input type="submit" value="Search" className="rounded bg-black text-white px-8 py-2 my-4"/>
        </div>
        
        </div>
        </div>
        </>
    )
};

export default Content4;