import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'member' | 'office-bearer';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

// Demo accounts
const DEMO_ACCOUNTS = [
  {
    id: '1',
    email: 'member@smvitm.edu',
    password: 'member123',
    name: 'John Member',
    role: 'member' as const
  },
  {
    id: '2',
    email: 'president@smvitm.edu',
    password: 'ieeepres2025',
    name: 'Sarah President',
    role: 'office-bearer' as const
  }
];

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for saved user session
    const savedUser = localStorage.getItem('ieee-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const account = DEMO_ACCOUNTS.find(acc => acc.email === email && acc.password === password);
    
    if (account) {
      const user = {
        id: account.id,
        name: account.name,
        email: account.email,
        role: account.role
      };
      
      setUser(user);
      localStorage.setItem('ieee-user', JSON.stringify(user));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ieee-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};