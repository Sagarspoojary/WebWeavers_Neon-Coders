import { useState } from 'react';
import { X, Loader2, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<'member' | 'office-bearer' | ''>('');
  
  const { login, isLoading } = useAuth();
  const { toast } = useToast();

  const closeModal = () => {
    document.querySelector('#login-modal')?.classList.add('hidden');
    setEmail('');
    setPassword('');
    setSelectedAccount('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing credentials",
        description: "Please enter both email and password",
        variant: "destructive"
      });
      return;
    }

    const success = await login(email, password);
    
    if (success) {
      toast({
        title: "Login successful!",
        description: "Welcome to IEEE Student Branch SMVITM",
      });
      closeModal();
    } else {
      toast({
        title: "Login failed",
        description: "Invalid email or password. Please try again.",
        variant: "destructive"
      });
    }
  };

  const fillDemoCredentials = (type: 'member' | 'office-bearer') => {
    if (type === 'member') {
      setEmail('member@smvitm.edu');
      setPassword('member123');
    } else {
      setEmail('president@smvitm.edu');
      setPassword('ieeepres2025');
    }
    setSelectedAccount(type);
  };

  return (
    <div id="login-modal" className="hidden fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-card rounded-3xl shadow-elegant max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h2 className="text-2xl font-heading font-bold">Welcome Back</h2>
            <p className="text-muted-foreground">Sign in to your IEEE account</p>
          </div>
          <button
            onClick={closeModal}
            className="p-2 hover:bg-muted rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Demo Account Buttons */}
          <div className="mb-6">
            <p className="text-sm text-muted-foreground mb-3">Demo Accounts (Click to auto-fill):</p>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => fillDemoCredentials('member')}
                className={`p-3 border rounded-xl text-left transition-all ${
                  selectedAccount === 'member' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="font-medium text-sm">Member</div>
                <div className="text-xs text-muted-foreground">Regular student</div>
              </button>
              <button
                onClick={() => fillDemoCredentials('office-bearer')}
                className={`p-3 border rounded-xl text-left transition-all ${
                  selectedAccount === 'office-bearer' 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="font-medium text-sm">Office Bearer</div>
                <div className="text-xs text-muted-foreground">Admin access</div>
              </button>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@smvitm.edu"
                className="mt-1"
                required
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <div className="relative mt-1">
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-3 flex items-center text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked === true)}
              />
              <Label htmlFor="remember" className="text-sm">Remember me</Label>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full btn-ieee-primary"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                'Sign In'
              )}
            </Button>
          </form>

          {/* Demo Credentials Info */}
          <div className="mt-6 p-4 bg-muted/50 rounded-xl">
            <h4 className="font-medium text-sm mb-2">Demo Credentials:</h4>
            <div className="text-xs text-muted-foreground space-y-1">
              <div><strong>Member:</strong> member@smvitm.edu / member123</div>
              <div><strong>Office Bearer:</strong> president@smvitm.edu / ieeepres2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;