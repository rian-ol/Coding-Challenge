"use client";
import { useEffect, useState } from "react";

export default function Products() {
  

    interface Item {
      id: number;
      name: string;
  
  }
    const [data, setData] = useState<Item[]>([]);
    const [addSpaghetti, setSpaghetti] = useState(false);
    const [removeItem, setRemoveItem] = useState(false);
  
    useEffect(() => {
      fetch('products.json')
        .then(response => response.json())
        .then(json => setData(json));
    },[]);
  
    if (!data) {
      return <p>Loading...</p>;
    }
  

    return (
        <div>
      <ul>
        {(data as Item[]).map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <button disabled = {addSpaghetti}
      onClick={()=> {
        setSpaghetti(true)
        const newdata =  data.concat({id:data.length+1, name: "Spaghetti"})
        setData(newdata)
        setRemoveItem(false)
      }} 
      value="Spaghetti">

      Add Spaghetti
    </button >

    <button 
      disabled = {removeItem}
      onClick={()=> {
      if(data.length ==1){setRemoveItem(true)}
      setSpaghetti(false);
      const newData = [...data.slice(0, -1)]
      setData(newData)
    }}>
    Remove item

    </button>

    </div>      
    );
  }

