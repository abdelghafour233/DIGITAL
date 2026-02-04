import React from 'react';
import { Product } from '../types';
import { Download, FileText, Video, Link as LinkIcon, ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onOrder }) => {
  const getIcon = () => {
    switch (product.fileType) {
      case 'PDF': return <FileText className="w-4 h-4" />;
      case 'VIDEO': return <Video className="w-4 h-4" />;
      case 'LINK': return <LinkIcon className="w-4 h-4" />;
      default: return <Download className="w-4 h-4" />;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm">
          {getIcon()}
          <span>{product.fileType}</span>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">{product.description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span className="text-xl font-bold text-accent">{product.price} درهم</span>
          <button 
            onClick={() => onOrder(product)}
            className="bg-secondary hover:bg-gray-800 text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            اطلب الآن
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;