export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  fileType: 'PDF' | 'ZIP' | 'LINK' | 'VIDEO';
}

export interface OrderFormData {
  name: string;
  phone: string;
  city: string;
}