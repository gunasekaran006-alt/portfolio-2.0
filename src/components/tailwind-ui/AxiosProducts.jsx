import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function AxiosProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // ⚡ Initialize navigate function
  const navigate = useNavigate();


  useEffect(() => {
    // Logic: Fetching data using Axios from DummyJSON
    axios.get("https://dummyjson.com/products")
      .then(response => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch(error => {
        console.error("Axios Fetch Error:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='p-8 bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl transition-all w-full mt-12'>

      {/* 🚀 Integrated Header: Standard Cyan Title */}
      <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <h4 className="!text-[#27C8F5] text-xs font-black uppercase tracking-widest flex items-center gap-2">
          <span className="text-lg"></span>Axios Data Engine Lab
        </h4>
      </div>

      {loading ? (
        <p className="text-center text-slate-500 animate-pulse py-10 font-mono text-xs uppercase tracking-widest">
          Syncing External Data Stream...
        </p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.slice(0, 8).map(data => (
            <div
              key={data.id}
              // ⚡ Click event to navigate to Product Detail Page
              onClick={() => navigate(`/product/${data.id}`)}
              className='bg-[#161b22] border border-slate-800 rounded-2xl p-5 hover:border-[#27C8F5] hover:shadow-[0_0_15px_rgba(39,200,245,0.1)] transition-all duration-300 group flex flex-col justify-between cursor-pointer'
              style={{ minHeight: '420px' }}
            >
              <div>
                <div className='overflow-hidden rounded-xl mb-4 bg-white/5 p-2'>
                  <img
                    // className='w-full h-40 object-contain group-hover:scale-110 transition-transform duration-500' 
                    className='w-full h-auto max-h-[200px] object-contain group-hover:scale-110 transition-transform duration-500'
                    src={data.thumbnail}
                    alt={data.title}
                  />
                </div>

                <h3 className='text-white text-lg font-bold group-hover:text-[#27C8F5] transition-colors leading-tight min-h-[56px] flex items-center'>
                  {data.title}
                </h3>

                <p className='text-slate-500 text-[11px] mt-1 mb-3 italic line-clamp-2'>
                  {data.description}
                </p>
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <p className='text-[#27C8F5] font-black text-lg'>${data.price}</p>
                  <span className="text-[10px] text-yellow-500 font-bold bg-yellow-500/10 px-2 py-0.5 rounded border border-yellow-500/20">
                    ⭐ {data.rating}
                  </span>
                </div>

                {/* 🎯 Master Hub Style Button */}
                <button
                  // ⚡ 4. e.stopPropagation() prevents the card click event from firing when button is clicked!
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`🛒 ${data.title} added to cart from Dashboard!`);
                  }}
                  className='w-full mt-2 !bg-transparent border-2 !border-[#27C8F5] !text-[#27C8F5] font-black py-2 !rounded-[12px] text-[11px] uppercase transition-all duration-300 outline-none
                  hover:!bg-[#27C8F5] hover:!text-black 
                  focus:!bg-[#27C8F5] focus:!text-black 
                  active:!bg-[#27C8F5] active:!text-black'
                  style={{ letterSpacing: '1px' }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AxiosProducts;