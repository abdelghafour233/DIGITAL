import React, { useState } from 'react';
import { Product, OrderFormData } from '../types';
import { X, Send, User, MapPin, Phone } from 'lucide-react';

interface OrderModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ product, isOpen, onClose }) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    city: ''
  });

  // Replace this with your actual WhatsApp number
  const SELLER_PHONE_NUMBER = '212600000000'; 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the WhatsApp message
    const message = `
*طلب منتج جديد 🛒*
---------------------------
*المنتج:* ${product.title}
*السعر:* ${product.price} درهم
---------------------------
*بيانات العميل:*
👤 الاسم: ${formData.name}
📱 الهاتف: ${formData.phone}
📍 المدينة: ${formData.city}
---------------------------
يرجى تأكيد الطلب وطريقة الدفع.
    `.trim();

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SELLER_PHONE_NUMBER}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="bg-secondary p-4 flex justify-between items-center text-white">
          <h3 className="text-lg font-bold">إكمال الطلب</h3>
          <button onClick={onClose} className="p-1 hover:bg-white/10 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100">
            <p className="text-sm text-blue-800 font-medium">أنت تطلب: {product.title}</p>
            <p className="text-xl font-bold text-blue-600 mt-1">{product.price} درهم مغربي</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <User className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                  placeholder="مثال: محمد العمري"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-5 h-5" />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-right"
                  placeholder="مثال: 0612345678"
                  dir="ltr" 
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <input
                  type="text"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full pr-10 pl-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all"
                  placeholder="مثال: الدار البيضاء"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#1fb855] text-white font-bold py-3 rounded-xl shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2 mt-6"
            >
              <Send className="w-5 h-5" />
              <span>إرسال الطلب عبر واتساب</span>
            </button>
            <p className="text-xs text-center text-gray-400 mt-3">
              سيتم فتح تطبيق واتساب لإرسال تفاصيل طلبك مباشرة للبائع
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;