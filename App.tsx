import React, { useState } from 'react';
import { products } from './data/products';
import { Product } from './types';
import ProductCard from './components/ProductCard';
import OrderModal from './components/OrderModal';
import { Zap, ShieldCheck, HeartHandshake, Menu } from 'lucide-react';

const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOrderClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Add a small delay to clear product so animation finishes if we add one later
    setTimeout(() => setSelectedProduct(null), 200);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-lg bg-white/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-accent to-purple-600 rounded-lg flex items-center justify-center text-white font-bold">
              D
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
              متجر ديجيتال
            </h1>
          </div>
          <button className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg md:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#" className="hover:text-accent transition-colors">الرئيسية</a>
            <a href="#products" className="hover:text-accent transition-colors">المنتجات</a>
            <a href="#features" className="hover:text-accent transition-colors">المميزات</a>
            <a href="#contact" className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-colors">تواصل معنا</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-secondary text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-accent text-sm font-bold mb-6">
            ✨ منتجات رقمية احترافية
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            ارتقِ بمهاراتك وأعمالك مع <span className="text-accent">أفضل الأدوات الرقمية</span>
          </h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            نوفر لك كتبًا إلكترونية، قوالب جاهزة، ودورات تدريبية تساعدك على التطور والنجاح. تسليم فوري وروابط مباشرة.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#products" 
              className="w-full sm:w-auto px-8 py-3.5 bg-accent hover:bg-blue-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              تصفح المنتجات
            </a>
            <a 
              href="#features" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-xl font-bold backdrop-blur-sm transition-all"
            >
              لماذا نحن؟
            </a>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 bg-blue-100 text-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">تسليم فوري</h3>
              <p className="text-gray-500">احصل على منتجك الرقمي فور إتمام عملية الدفع مباشرة وبدون انتظار.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">جودة مضمونة</h3>
              <p className="text-gray-500">جميع ملفاتنا مراجعة بعناية لتضمن لك أفضل جودة وفائدة عملية.</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-accent/30 transition-colors">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-2">دعم فني مستمر</h3>
              <p className="text-gray-500">فريقنا جاهز دائمًا لمساعدتك في حال واجهت أي مشكلة في التحميل أو الاستخدام.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-16 bg-gray-50 flex-1">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">أحدث المنتجات</h2>
            <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onOrder={handleOrderClick} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-gray-400 py-12 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-right">
              <h3 className="text-white text-xl font-bold mb-2">متجر المنتجات الرقمية</h3>
              <p className="text-sm">وجهتك الأولى للأدوات الرقمية الاحترافية في المغرب.</p>
            </div>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                 <span className="sr-only">Twitter</span>
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-sm border-t border-gray-800 pt-8">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>

      {/* Order Modal */}
      {selectedProduct && (
        <OrderModal 
          product={selectedProduct} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;