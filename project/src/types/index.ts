export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'seller' | 'customer';
  avatar?: string;
}

export interface Turf {
  id: string;
  name: string;
  location: string;
  price: number;
  images: string[];
  sellerId: string;
  amenities: string[];
  availability: {
    start: string;
    end: string;
  }[];
  rating: number;
}

export interface Booking {
  id: string;
  turfId: string;
  customerId: string;
  date: string;
  startTime: string;
  endTime: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  totalAmount: number;
}