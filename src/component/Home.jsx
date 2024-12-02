import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="p-8 text-center"> 
    <Link to= "/star1">
      <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Star1</button>
    </Link>
    <Link to= "/star2">
      <button className="bg-black  hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Star2</button>
    </Link>
    <Link to= "/star3">
      <button className="bg-black  hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Star3</button>
    </Link>
    <Link to= "/star4">
      <button className="bg-black  hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Star4</button>
    </Link>
    <Link to= "/star5">
      <button className="bg-black  hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Star5</button>
    </Link>
    <Link to= "/star6">
      <button className="bg-black  hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-2">Star6</button>
    </Link>
   
    </div>
  );
}
