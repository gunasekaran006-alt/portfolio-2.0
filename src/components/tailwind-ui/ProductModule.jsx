import React from 'react';
import { products } from '../../data';

function ProductModule() {
    const addtoCart = (name) => {
        alert(`🛒 ${name} Added to your Cart successfully!`);
    };

    return (
        <div className='p-8 bg-[#0d1117] border border-slate-800 rounded-3xl shadow-2xl transition-all'>
            <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-4">
                <h4 className="!text-[#27C8F5] text-xs font-black uppercase tracking-widest flex items-center gap-2">
                    Dynamic Data Mapping Lab
                </h4>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {products.map((data) => (
                    <div
                        key={data.id}
                        className='bg-[#161b22] border border-slate-800 rounded-2xl p-5 hover:border-[#27C8F5] hover:shadow-[0_0_15px_rgba(39,200,245,0.1)] transition-all duration-300 group flex flex-col'
                        // Logic: Removing fixed minHeight to let flexbox handle it naturally
                    >
                        {/* 1. Image Fix: Using aspect-video or aspect-square ensures identical image boxes */}
                        <div className="overflow-hidden rounded-xl mb-4 aspect-square bg-[#0d1117]">
                            <img
                                className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500'
                                src={data.image}
                                alt={data.name}
                            />
                        </div>

                        {/* 2. Content Fix: flex-grow makes this section push the footer down */}
                        <div className='flex-grow flex flex-col'>
                            {/* 3. Title Fix: min-h ensures 2 lines of space even for short names */}
                            <h3 className='text-white text-lg font-bold group-hover:text-[#27C8F5] transition-colors leading-tight min-h-[50px] line-clamp-2'>
                                {data.name}
                            </h3>
                            
                            <p className='text-slate-500 text-[11px] mt-2 mb-3 italic line-clamp-2'>
                                {data.desc}
                            </p>
                        </div>

                        {/* Footer Section: This will always stay at the bottom */}
                        <div className='mt-auto pt-4 border-t border-slate-800/50'>
                            <p className='text-[#27C8F5] font-black text-xl'>{data.price}</p>
                            <button
                                onClick={() => addtoCart(data.name)}
                                className='w-full mt-4 !bg-transparent border-2 !border-[#27C8F5] !text-[#27C8F5] font-black py-2 !rounded-[12px] text-[11px] uppercase transition-all duration-200 outline-none
                                hover:!bg-[#27C8F5] hover:!text-black'
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