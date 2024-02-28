import { useEffect, useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { RiTrainWifiLine } from "react-icons/ri";
import { GiRadarDish } from "react-icons/gi";


const ChoosePlan = () => {

  const [datas, setDatas] = useState([])

  useEffect(() => {
    fetch('ChoosePlanData.json')
    .then((res) => res.json())
    .then((data) => setDatas(data))
  },[])

  return (
    <div>
      <div className="container mx-auto my-10">
        <div className="text-center mb-10 px-4">
          <h5 className="text-base sm:text-xl md:text-2xl lg:text-2xl text-red-500 font-bold">Traffis</h5>
          <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-4xl font-bold">Choose your plan</h2>
          <p className="text-sm sm:text-lg lg:text-lg mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in<br></br> elementum urna est ut ligula.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 lg:gap-7 px-5 lg:px-0">
          {/* item one */}
          {
            datas.map((data) => <div key={data.id} className="rounded-xl">
            <div className="text-center py-10 bg-[#f4f2e9] relative ">
              <h3 className="text-xl font-bold text-red-700">{data.title}</h3>
              <p className="text-3xl font-bold">{data.serviceName}</p>
              <div className="flex justify-center left-0 right-0 gap-3 absolute -bottom-5">
                <RiTrainWifiLine className="text-4xl p-1 rounded-full bg-white"></RiTrainWifiLine>
                <GiRadarDish className="text-4xl bg-white p-1 rounded-full"></GiRadarDish>
              </div>
            </div>
            <div className="bg-slate-300 mx-auto text-center">
            <div className="flex justify-center py-10 ">
              <ul className="space-y-3">
                {data.serviceList.map((service, index) => <li key={index} className="flex gap-3 items-center text-lg"><IoCheckmarkOutline className="text-red-700"></IoCheckmarkOutline>{service}</li>)}
              </ul>
            </div>
            <p className="text-xl font-bold bg-slate-300 mx-auto text-center"><span className="text-red-700">${data.price}</span> | month</p>
            <button className="btn btn-success  w-[80%] my-8">Get Started</button>
            </div>
          </div>)
          }
          {/* item one */}

        </div>
      </div>
    </div>
  );
};

export default ChoosePlan;