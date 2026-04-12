import React from 'react';
import { products } from '../../data';

function ProductModule() {
    const addtoCart = (name) => {
        alert(`🛒 ${name} Added to your Cart successfully!`);
    };

    return (
        <div className='p-8 bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl transition-all'>
    {/* Standard Header with Cyan Title & Grey Tag */}
    <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
        <h4 className="!text-[#27C8F5] text-xs font-black uppercase tracking-widest flex items-center gap-2">
            <span className="text-lg">📦</span> Dynamic Data Mapping Lab 
        </h4>        
    </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((data) => (
                    <div
                        key={data.id}
                        className='bg-[#161b22] border border-slate-800 rounded-2xl p-5 hover:border-[#27C8F5] hover:shadow-[0_0_15px_rgba(39,200,245,0.1)] transition-all duration-300 group flex flex-col justify-between'
                        style={{ minHeight: '380px' }} // Logic: Ensuring all cards are even
                    >
                        <div>
                            <div className="overflow-hidden rounded-xl mb-4">
                                <img
                                    className='w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500'
                                    src={data.image}
                                    alt={data.name}
                                />
                            </div>
                            <h3 className='text-white text-lg font-bold group-hover:text-[#27C8F5] transition-colors leading-tight min-h-[56px] flex items-center'>
                                {data.name}
                            </h3>
                            <p className='text-slate-500 text-[11px] mt-1 mb-3 italic'>
                                {data.desc}
                            </p>
                        </div>

                        <div>
                            <p className='text-[#27C8F5] font-black text-lg mb-4'>{data.price}</p>
                            <button
                                onClick={() => addtoCart(data.name)}
                                className='w-full mt-4 !bg-transparent border-2 !border-[#27C8F5] !text-[#27C8F5] font-black py-2 !rounded-[12px] text-[11px] uppercase transition-all duration-0 outline-none
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
        </div>
    );
}

export default ProductModule;