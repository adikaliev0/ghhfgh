import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Settings, Download, CreditCard, Activity, Bell, ShieldAlert, ArrowUpRight, User } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Пн', amount: 4000 },
  { name: 'Вт', amount: 3000 },
  { name: 'Ср', amount: 2000 },
  { name: 'Чт', amount: 2780 },
  { name: 'Пт', amount: 1890 },
  { name: 'Сб', amount: 2390 },
  { name: 'Вс', amount: 3490 },
];

export function Dashboard() {
  // Mock user data
  const user = {
    name: 'Стример',
    email: 'streamer@example.com',
    plan: 'Free',
    planStatus: 'active', // active, expired, banned
    expiresAt: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('ru-RU'),
    balance: '0 ₸',
    totalDonations: '15 500 ₸',
    donationsCount: 12
  };

  return (
    <div className="flex-1 bg-background/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Личный кабинет</h1>
            <p className="text-muted-foreground mt-1">Управление аккаунтом и подпиской</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" asChild>
              <a href="#download"><Download className="w-4 h-4 mr-2" /> Скачать приложение</a>
            </Button>
            <Button asChild>
              <Link to="/settings"><User className="w-4 h-4 mr-2" /> Настройки профиля</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Plan Status Card */}
          <Card className="md:col-span-2 border-primary/20 bg-card/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl flex items-center gap-2">
                    Текущий тариф: <span className="text-primary">{user.plan}</span>
                    <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20 ml-2">Активен</Badge>
                  </CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Доступ ко всем базовым функциям. Идеально для старта.
                  </CardDescription>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Действует до</p>
                  <p className="font-semibold text-lg">{user.expiresAt}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/pricing"><CreditCard className="w-4 h-4 mr-2" /> Продлить подписку</Link>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link to="/pricing">Сравнить тарифы</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="bg-card/50">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Activity className="w-4 h-4" /> Статистика за сегодня
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-1">{user.totalDonations}</div>
              <p className="text-sm text-muted-foreground">{user.donationsCount} донатов получено</p>
              
              <div className="mt-6 pt-6 border-t border-border/50">
                <Link to="/history" className="text-sm text-primary flex items-center hover:underline">
                  Подробная история <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Section */}
        <Card className="mb-6 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Доход за последние 7 дней</CardTitle>
            <CardDescription>Динамика поступлений донатов</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#e52e2e" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#e52e2e" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                  <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value} ₸`} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1a1a1a', borderColor: '#333', borderRadius: '8px' }}
                    itemStyle={{ color: '#e52e2e' }}
                    formatter={(value: number) => [`${value} ₸`, 'Сумма']}
                  />
                  <Area type="monotone" dataKey="amount" stroke="#e52e2e" strokeWidth={2} fillOpacity={1} fill="url(#colorAmount)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-xl font-semibold mb-4">Быстрые действия</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <ActionCard 
            title="Настройки профиля" 
            description="Смена пароля и ссылок" 
            icon={<User className="w-5 h-5 text-primary" />} 
            link="/settings"
          />
          <ActionCard 
            title="История донатов" 
            description="Список всех поступлений" 
            icon={<Bell className="w-5 h-5 text-primary" />} 
            link="/history"
          />
          <ActionCard 
            title="Кастомизация" 
            description="Звуки, гифки и цвета" 
            icon={<Settings className="w-5 h-5 text-primary" />} 
            link="/customization"
          />
          <ActionCard 
            title="Черный список" 
            description="Блокировка слов и спама" 
            icon={<ShieldAlert className="w-5 h-5 text-primary" />} 
            link="/blacklist"
          />
        </div>
      </div>
    </div>
  );
}

function ActionCard({ title, description, icon, link }: { title: string, description: string, icon: React.ReactNode, link: string }) {
  return (
    <Link to={link}>
      <Card className="h-full bg-card/30 hover:bg-card/60 transition-colors border-border/50 hover:border-primary/30 cursor-pointer">
        <CardContent className="p-5 flex items-start gap-4">
          <div className="bg-primary/10 p-2.5 rounded-lg shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-medium mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground leading-snug">{description}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
