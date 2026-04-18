import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // ⚡ Fetching from DummyJSON based on Dynamic ID
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#0d1117]">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-[#27C8F5] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[#27C8F5] font-black uppercase tracking-widest text-sm animate-pulse">Syncing Product Data...</p>
      </div>
    </div>
  );

  if (!product) return <div className="text-white text-center mt-20">Product Not Found!</div>;

  return (
    <div className="min-h-[85vh] bg-[#0a0a0c] pt-8 pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 text-slate-400 hover:text-[#27C8F5] font-bold text-sm flex items-center gap-2 transition-colors"
        >
          ← Back to Dashboard
        </button>

        <div className="flex flex-col lg:flex-row gap-12 bg-[#161b22] border border-slate-800 p-8 lg:p-12 rounded-[30px] shadow-2xl">
          
          {/* Left: Image Container */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white rounded-2xl p-8 aspect-square flex items-center justify-center relative overflow-hidden group border border-slate-700 hover:border-[#27C8F5] transition-colors duration-500">
              <img 
                src={product.thumbnail} // ⚡ DummyJSON uses 'thumbnail' or 'images[0]'
                alt={product.title} 
                className="max-h-[85%] object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            
            <div className="mb-4">
              <span className="bg-[#27C8F5]/10 text-[#27C8F5] text-[10px] px-4 py-1.5 font-black uppercase tracking-widest rounded-full border border-[#27C8F5]/30">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-4 leading-tight group-hover:text-[#27C8F5]">
              {product.title}
            </h1>

            <div className="flex items-center gap-3 mb-8">
              <div className="text-yellow-400 text-sm">
                {"★".repeat(Math.round(product.rating))}
                <span className="text-slate-600">{"★".repeat(5 - Math.round(product.rating))}</span>
              </div>
              <span className="text-xs text-slate-400 font-bold bg-slate-800 px-2 py-1 rounded">
                {product.rating} Score
              </span>
            </div>

            <div className="text-5xl font-black text-[#27C8F5] mb-10">
              ${product.price}
            </div>

            <div className="space-y-4 mb-10">
              <h4 className="text-xs font-black uppercase tracking-widest text-slate-500 border-b border-slate-800 pb-2">Description</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {product.description}
              </p>
            </div>

            <div className="flex gap-4">
              <button 
                onClick={() => alert(`🛒 ${product.title} added to cart!`)}
                className="flex-1 btn-master-hub !py-4 !rounded-2xl text-sm"
              >
                ADD TO SECURE CART ➔
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;