import  { useState } from "react";

function AboutPage() {

    const [count, setCount] = useState(0);

    const countIncreement = () => {
        setCount(count+1)
        
    }

    const countDecreement = () => {
        if (count <= 0) {
            alert("no further increment")
        } else {
            setCount(count -1)
        }
        
    }

    return (  
        <div className="pt-24">
            <button onClick={countIncreement}>Increase</button>
            <p>{count}</p>
            <button onClick={countDecreement}>Decrease</button>
        </div>
      )
}

export default AboutPage;