import { RiDoubleQuotesL } from "react-icons/ri"

function HomePage() {

  return (
    <div className="pt-24 ">
        <div className="flex"> 
            <RiDoubleQuotesL size={40} className="text-indigo-600" />  
            <h1 className="text-3xl font-bold text-indigo-600 px-2 py-2"> If you looking drive and ride. <span className="text-black"> Then you come at right place </span> </h1>
            <RiDoubleQuotesL size={40} className="rotate-180 text-black" /> 
        </div>
    </div>
  );
}

export default HomePage;
