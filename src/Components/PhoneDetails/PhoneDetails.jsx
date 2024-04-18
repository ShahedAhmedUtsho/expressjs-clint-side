import { useLoaderData, useParams } from "react-router-dom";

const PhoneDetails = () => {
   const phone = useLoaderData();
   console.log(phone)

    return (
        
        <div className="max-w-[500px] border-2 border-black  min-h-96 rounded-md my-20 mx-3 md:mx-auto p-5">
          
            <img className=" w-full h-52   p-2 object-contain mb-5" src={phone.image} alt="" />
            <h2 className=" font-semibold text-xl ">Name : {phone.name}</h2>
            <h3 className="font-semibold text-lg">Price : {phone.price} $</h3>
        </div>
    );
};

export default PhoneDetails;