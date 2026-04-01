import * as React from 'react';
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Upload, CheckCircle2, AlertCircle, ArrowLeft } from 'lucide-react';

export function Checkout() {
  const { plan } = useParams<{ plan: string }>();
  const [period, setPeriod] = useState<'1' | '3' | '6' | '12'>('1');
  const [promoCode, setPromoCode] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const plans: Record<string, { name: string, price: number }> = {
    lite: { name: 'Lite', price: 5000 },
    plus: { name: 'Plus', price: 7000 },
    pro: { name: 'Pro', price: 10000 },
  };

  const selectedPlan = plans[plan || 'lite'] || plans.lite;
  const months = parseInt(period);
  const subtotal = selectedPlan.price * months;
  const discount = months >= 6 ? subtotal * 0.1 : 0; // 10% discount for 6+ months
  const total = subtotal - discount;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Пожалуйста, загрузите чек об оплате');
      return;
    }
    
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className="flex-1 flex items-center justify-center py-6 px-4 bg-background">
        <Card className="w-full max-w-md text-center border-primary/20 bg-card/50">
          <CardHeader>
            <div className="mx-auto bg-green-500/10 p-4 rounded-full mb-4">
              <CheckCircle2 className="w-12 h-12 text-green-500" />
            </div>
            <CardTitle className="text-2xl">Заявка отправлена!</CardTitle>
            <CardDescription className="text-base mt-2">
              Мы проверяем ваш чек. Обычно это занимает от 5 до 15 минут.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-background/50 rounded-lg p-4 text-left space-y-2 mb-6 border border-border/50">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Тариф:</span>
                <span className="font-medium">{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Срок:</span>
                <span className="font-medium">{months} мес.</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Сумма:</span>
                <span className="font-medium">{total.toLocaleString('ru-RU')} ₸</span>
              </div>
            </div>
            <Button className="w-full h-12" asChild>
              <Link to="/dashboard">Вернуться в кабинет</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-background py-6">
      <div className="container mx-auto px-4 max-w-5xl">
        <Link to="/pricing" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Вернуться к тарифам
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Оформление подписки</h1>
            
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>1. Выберите срок подписки</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { value: '1', label: '1 месяц', discount: null },
                    { value: '3', label: '3 месяца', discount: null },
                    { value: '6', label: '6 месяцев', discount: '-10%' },
                    { value: '12', label: '1 год', discount: '-15%' },
                  ].map((opt) => (
                    <div 
                      key={opt.value}
                      onClick={() => setPeriod(opt.value as any)}
                      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${period === opt.value ? 'border-primary bg-primary/5' : 'border-border/50 hover:border-primary/30 bg-background/50'}`}
                    >
                      {opt.discount && (
                        <Badge className="absolute -top-2.5 bg-green-500 text-white border-none text-[10px] px-1.5 py-0">{opt.discount}</Badge>
                      )}
                      <span className="font-medium">{opt.label}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>2. Оплата переводом Kaspi</CardTitle>
                <CardDescription>
                  Переведите точную сумму по номеру телефона и загрузите чек
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Номер для перевода (Kaspi Gold)</p>
                  <p className="text-3xl font-mono font-bold tracking-wider text-primary mb-2">+7 777 123 45 67</p>
                  <p className="text-sm font-medium">Получатель: Адилет К.</p>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-medium block">Загрузите чек об оплате (PDF, JPG, PNG)</label>
                  <div className="border-2 border-dashed border-border/50 rounded-xl p-6 text-center hover:bg-card/80 transition-colors relative">
                    <input 
                      type="file" 
                      accept="image/*,.pdf" 
                      onChange={handleFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-4" />
                    {file ? (
                      <div>
                        <p className="font-medium text-primary">{file.name}</p>
                        <p className="text-xs text-muted-foreground mt-1">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                    ) : (
                      <div>
                        <p className="font-medium">Нажмите или перетащите файл сюда</p>
                        <p className="text-xs text-muted-foreground mt-1">Максимальный размер: 5 MB</p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 bg-card/50 border-primary/20 shadow-[0_0_30px_rgba(229,46,46,0.05)]">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Тариф</span>
                    <span className="font-semibold">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Срок</span>
                    <span className="font-semibold">{months} мес.</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Цена за месяц</span>
                    <span className="font-semibold">{selectedPlan.price.toLocaleString('ru-RU')} ₸</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50 space-y-4">
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Промокод" 
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="bg-background/50 h-10"
                    />
                    <Button variant="secondary" className="shrink-0 h-10">Применить</Button>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between items-center text-green-500 text-sm">
                      <span>Скидка за период</span>
                      <span>-{discount.toLocaleString('ru-RU')} ₸</span>
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="flex justify-between items-end mb-6">
                    <span className="text-lg font-medium">Итого к оплате</span>
                    <span className="text-3xl font-bold text-primary">{total.toLocaleString('ru-RU')} ₸</span>
                  </div>
                  
                  <Button 
                    className="w-full h-12 text-base" 
                    onClick={handleSubmit} 
                    disabled={status === 'submitting' || !file}
                  >
                    {status === 'submitting' ? 'Отправка...' : 'Подтвердить оплату'}
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Проверка чека занимает до 15 минут
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
