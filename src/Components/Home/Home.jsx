import { Link, useLoaderData } from "react-router-dom";


const Home = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            <ul>
                <h1>phone list</h1>
                {
                    phones.map((phone ,index) => <Link to={`/phones/${phone.id}`} key={index}> <li className="text-xl  p-5 mx-auto text-center text-stone-500 font-semibold">{phone.name}</li></Link>)
                }
            </ul>
            
            
        </div>
    );
};

export default Home;