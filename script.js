// بيانات المنتجات
const products = [
  {
    id: '1',
    title: 'اشتراك نتفليكس بريميوم (شهر)',
    description: 'حساب 4K UHD رسمي، ضمان طوال فترة الاشتراك، يدعم اللغة العربية، ملف خاص بك.',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1574375927938-d5a98e8efe30?auto=format&fit=crop&w=800&q=80',
    fileType: 'ACCOUNT'
  },
  {
    id: '2',
    title: 'مفتاح تفعيل ويندوز 11 برو',
    description: 'كود تفعيل أصلي 100% مدى الحياة، يدعم التحديثات الرسمية وإعادة التثبيت.',
    price: 99,
    imageUrl: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=800&q=80',
    fileType: 'KEY'
  },
  {
    id: '3',
    title: 'أوفيس 365 برو بلس (5 أجهزة)',
    description: 'حساب يضم حزمة الأوفيس كاملة (Word, Excel, PPT) مع مساحة تخزين 1TB سحابة.',
    price: 69,
    imageUrl: 'https://images.unsplash.com/photo-1633419461186-7d75ce2ef995?auto=format&fit=crop&w=800&q=80',
    fileType: 'ACCOUNT'
  },
  {
    id: '4',
    title: 'اشتراك سبوتيفاي (3 أشهر)',
    description: 'تفعيل بريميوم على حسابك الشخصي، استمتع بالموسيقى بدون إعلانات وبجودة عالية.',
    price: 49,
    imageUrl: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&w=800&q=80',
    fileType: 'INVITE'
  },
  {
    id: '5',
    title: 'كانفا برو (اشتراك تعليمي)',
    description: 'انضمام لفريق كانفا برو لتفعيل جميع المميزات المدفوعة والقوالب على حسابك.',
    price: 29,
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b7993143d2d?auto=format&fit=crop&w=800&q=80',
    fileType: 'INVITE'
  },
  {
    id: '6',
    title: 'اشتراك IPTV ذهبي (سنة كاملة)',
    description: 'أضخم مكتبة قنوات عالمية، أفلام ومسلسلات بجودة 4K، سيرفرات ثابتة بدون تقطيع.',
    price: 199,
    imageUrl: 'https://images.unsplash.com/photo-1593784653056-16a374715816?auto=format&fit=crop&w=800&q=80',
    fileType: 'SUB'
  }
];

// المتغيرات العامة
let currentProduct = null;
const modal = document.getElementById('order-modal');
const form = document.getElementById('order-form');

// تهيئة الأيقونات وتشغيل التطبيق
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  lucide.createIcons(); // تفعيل الأيقونات
  
  // إغلاق النافذة المنبثقة
  document.getElementById('close-modal-btn').addEventListener('click', closeModal);
  document.getElementById('modal-backdrop').addEventListener('click', closeModal);
  
  // التعامل مع إرسال النموذج
  form.addEventListener('submit', handleFormSubmit);
});

// دالة عرض المنتجات
function renderProducts() {
  const grid = document.getElementById('products-grid');
  grid.innerHTML = products.map(product => `
    <div class="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full group">
      <div class="relative h-48 overflow-hidden">
        <img 
          src="${product.imageUrl}" 
          alt="${product.title}" 
          class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-gray-700 flex items-center gap-1 shadow-sm">
          <span>${product.fileType}</span>
        </div>
      </div>
      
      <div class="p-5 flex-1 flex flex-col">
        <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-1">${product.title}</h3>
        <p class="text-gray-500 text-sm mb-4 line-clamp-2 flex-1">${product.description}</p>
        
        <div class="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
          <span class="text-xl font-bold text-accent">${product.price} درهم</span>
          <button 
            onclick="openModal('${product.id}')"
            class="bg-secondary hover:bg-gray-800 text-white px-5 py-2 rounded-xl text-sm font-medium transition-colors flex items-center gap-2"
          >
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            اطلب الآن
          </button>
        </div>
      </div>
    </div>
  `).join('');
  
  // إعادة تفعيل الأيقونات للعناصر الجديدة
  lucide.createIcons();
}

// فتح النافذة
window.openModal = function(productId) {
  currentProduct = products.find(p => p.id === productId);
  if (!currentProduct) return;
  
  document.getElementById('modal-product-title').textContent = currentProduct.title;
  document.getElementById('modal-product-price').textContent = currentProduct.price;
  document.getElementById('product-id').value = currentProduct.id;
  
  modal.classList.remove('hidden');
}

// إغلاق النافذة
function closeModal() {
  modal.classList.add('hidden');
  currentProduct = null;
  form.reset();
}

// إرسال الطلب عبر واتساب
function handleFormSubmit(e) {
  e.preventDefault();
  if (!currentProduct) return;
  
  const name = document.getElementById('customer-name').value;
  const phone = document.getElementById('customer-phone').value;
  const city = document.getElementById('customer-city').value;
  
  // رقم الواتساب الخاص بالبائع
  const SELLER_PHONE = '212600000000'; 
  
  const message = `
*طلب منتج جديد 🛒*
---------------------------
*المنتج:* ${currentProduct.title}
*السعر:* ${currentProduct.price} درهم
---------------------------
*بيانات العميل:*
👤 الاسم: ${name}
📱 الهاتف: ${phone}
📍 المدينة: ${city}
---------------------------
يرجى تأكيد الطلب وطريقة الدفع.
  `.trim();
  
  const url = `https://wa.me/${SELLER_PHONE}?text=${encodeURIComponent(message)}`;
  
  window.open(url, '_blank');
  closeModal();
}