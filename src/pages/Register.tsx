import * as React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Zap, AlertCircle } from 'lucide-react';

export function Register() {
  const [email, setEmail] = useState('');
  const [channelUrl, setChannelUrl] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Пароли не совпадают. Пожалуйста, проверьте правильность ввода.');
      return;
    }

    if (password.length < 8) {
      setError('Пароль должен содержать минимум 8 символов.');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="flex-1 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <Card className="w-full max-w-md border-border/50 shadow-2xl bg-card/80 backdrop-blur-xl">
        <CardHeader className="space-y-1 text-center pb-4">
          <div className="flex justify-center mb-2">
            <div className="bg-primary p-2 rounded-xl shadow-[0_0_20px_rgba(229,46,46,0.3)]">
              <Zap className="w-6 h-6 text-white fill-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight">Создать аккаунт</CardTitle>
          <CardDescription className="text-base">
            Начните использовать KaspiStream бесплатно
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="p-3 rounded-md bg-destructive/10 border border-destructive/20 flex items-start gap-3 text-sm text-destructive-foreground">
                <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}
            
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="channelUrl">
                Ссылка на канал (Twitch/YouTube)
              </label>
              <Input 
                id="channelUrl" 
                type="url" 
                placeholder="https://twitch.tv/username" 
                required 
                value={channelUrl}
                onChange={(e) => setChannelUrl(e.target.value)}
                className="h-12 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="password">
                Пароль
              </label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 bg-background/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="confirmPassword">
                Подтвердите пароль
              </label>
              <Input 
                id="confirmPassword" 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="h-12 bg-background/50"
              />
            </div>
            <Button type="submit" className="w-full h-11 text-base mt-4" disabled={isLoading}>
              {isLoading ? 'Создание аккаунта...' : 'Зарегистрироваться'}
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <Link to="/terms" className="text-primary hover:underline">Условиями использования</Link> и{' '}
              <Link to="/privacy" className="text-primary hover:underline">Политикой конфиденциальности</Link>.
            </p>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-border/40 pt-6">
          <p className="text-sm text-muted-foreground">
            Уже есть аккаунт?{' '}
            <Link to="/login" className="text-primary hover:underline font-medium">
              Войти
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
