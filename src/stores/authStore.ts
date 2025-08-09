import { create } from 'zustand';

const API_URL = 'https://backend-destinos.impplac.com';

interface LoginStore {
  email: string;
  password: string;
  name: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  resetLoginForm: () => void;
  login: () => Promise<void>;
  logout: () => void;
}

interface RegisterStore {
  fullName: string;
  email: string;
  country: string;
  city: string;
  company: string;
  position: string;
  phone: string;
  password: string;
  setFullName: (name: string) => void;
  setEmail: (email: string) => void;
  setCountry: (country: string) => void;
  setCity: (city: string) => void;
  setCompany: (company: string) => void;
  setPosition: (position: string) => void;
  setPhone: (phone: string) => void;
  setPassword: (password: string) => void;
  resetRegisterForm: () => void;
  register: () => Promise<void>;
}

export const useLoginStore = create<LoginStore>((set, get) => ({
  email: '',
  password: '',
  name: localStorage.getItem('subscriberName') || '',  
  setEmail: email => set({ email }),
  setPassword: password => set({ password }),
  resetLoginForm: () => set({ email: '', password: '' }),
  login: async () => {
    const { email, password } = get();
    const res = await fetch(`${API_URL}/api/auth/subscribers/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!res.ok) throw new Error('El correo u contraseña que ingresaste es incorrecto');
    const data = await res.json();
    localStorage.setItem('accessToken', data.accessToken);
    localStorage.setItem('subscriberName', data.full_name);
    set({ email: '', password: '', name: data.full_name, }); // borrar formulario al login
  },
  logout: () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('subscriberName');
    set({ name: '', email: '', password: '' });
  }
}));

export const useRegisterStore = create<RegisterStore>((set, get) => ({
  fullName: '',
  email: '',
  country: '',
  city: '',
  company: '',
  position: '',
  phone: '',
  password: '',
  setFullName: fullName => set({ fullName }),
  setEmail: email => set({ email }),
  setCountry: country => set({ country }),
  setCity: city => set({ city }),
  setCompany: company => set({ company }),
  setPosition: position => set({ position }),
  setPhone: phone => set({ phone }),
  setPassword: password => set({ password }),
  resetRegisterForm: () =>
    set({
      fullName: '',
      email: '',
      country: '',
      city: '',
      company: '',
      position: '',
      phone: '',
      password: '',
    }),
  register: async () => {
    const { fullName, email, country, city, company, position, phone, password } = get();
    const payload = {
      full_name: fullName,
      email,
      country,
      city,
      company,
      job_title: position,
      phone,
      password,
    };
    const res = await fetch(`${API_URL}/api/auth/subscribers/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || 'Error al registrarse');
    }
    set({
      fullName: '',
      email: '',
      country: '',
      city: '',
      company: '',
      position: '',
      phone: '',
      password: '',
    });
  },
}));
