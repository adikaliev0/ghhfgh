import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Zap, MonitorPlay, Settings2, BarChart3, Download, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background -z-10" />
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm border-primary/20 bg-primary/10 text-primary">
            Версия 2.0 уже доступна
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 max-w-4xl mx-auto leading-tight">
            Донаты <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-red-600">Kaspi</span> на вашем стриме
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Автоматические уведомления, виджеты для OBS, история донатов и полная кастомизация. 
            Сделайте ваши трансляции ярче и удобнее для зрителей.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-lg h-14 px-8" asChild>
              <Link to="/register">
                Начать бесплатно <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-14 px-8" asChild>
              <a href="#download">
                <Download className="mr-2 w-5 h-5" /> Скачать приложение
              </a>
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            2 дня полного доступа бесплатно. Привязка карты не требуется.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-card/30 border-y border-border/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Всё необходимое для стримера</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы собрали лучшие инструменты, чтобы вы могли сосредоточиться на контенте, а не на технической настройке.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Автоуведомления"
              description="Моментальный вывод донатов Kaspi на экран стрима без задержек."
            />
            <FeatureCard 
              icon={<MonitorPlay className="w-6 h-6 text-primary" />}
              title="Виджеты для OBS"
              description="Легкая интеграция с OBS Studio, Streamlabs и другими программами."
            />
            <FeatureCard 
              icon={<Settings2 className="w-6 h-6 text-primary" />}
              title="Полная кастомизация"
              description="Настройка внешнего вида, гифок, музыки, озвучки и времени показа."
            />
            <FeatureCard 
              icon={<BarChart3 className="w-6 h-6 text-primary" />}
              title="Детальная статистика"
              description="История донатов, топ донатеров и аналитика сборов в реальном времени."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-primary" />}
              title="Цензура и модерация"
              description="Автоматический фильтр плохих слов и ручная модерация сообщений."
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6 text-primary" />}
              title="Интерактив со зрителями"
              description="Рулетка, заказ музыки, прогресс-бар цели сбора и функции для TikTok."
            />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает?</h2>
            <p className="text-muted-foreground">Всего 3 простых шага до первого доната на стриме</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-border/50 -z-10" />
            
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-card border-2 border-primary/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-[0_0_30px_rgba(229,46,46,0.15)]">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Регистрация</h3>
              <p className="text-muted-foreground">Создайте аккаунт и получите 2 дня бесплатного доступа ко всем функциям.</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-card border-2 border-primary/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-[0_0_30px_rgba(229,46,46,0.15)]">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Настройка</h3>
              <p className="text-muted-foreground">Скачайте приложение, настройте виджеты и добавьте ссылку в OBS.</p>
            </div>
            
            <div className="text-center relative">
              <div className="w-24 h-24 mx-auto bg-card border-2 border-primary/20 rounded-full flex items-center justify-center text-3xl font-bold text-primary mb-6 shadow-[0_0_30px_rgba(229,46,46,0.15)]">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Стрим</h3>
              <p className="text-muted-foreground">Запускайте трансляцию и получайте донаты от зрителей прямо на экран.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы прокачать свой стрим?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Выберите подходящий тариф и начните получать донаты Kaspi красиво и удобно.
          </p>
          <Button size="lg" className="text-lg h-14 px-10" asChild>
            <Link to="/pricing">Посмотреть тарифы</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Частые вопросы</h2>
          </div>
          
          <div className="space-y-6">
            <FaqItem 
              question="Как работает бесплатный период?"
              answer="После регистрации вы автоматически получаете тариф Free на 2 дня. Вам будут доступны все базовые функции для тестирования сервиса. Привязывать карту не нужно."
            />
            <FaqItem 
              question="Нужно ли скачивать приложение?"
              answer="Да, для корректной работы автоуведомлений необходимо установить наше десктопное приложение. Оно работает в фоновом режиме и связывает ваш Kaspi с виджетами на стриме."
            />
            <FaqItem 
              question="Поддерживается ли Mac OS?"
              answer="На данный момент наше десктопное приложение работает только на Windows (10/11). Поддержка Mac OS находится в разработке."
            />
            <FaqItem 
              question="Безопасно ли это?"
              answer="Абсолютно. Мы не имеем доступа к вашим деньгам или паролям. Приложение только считывает входящие уведомления о переводах для отображения их на стриме."
            />
          </div>

          <div className="mt-16 text-center p-8 bg-card border rounded-2xl">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4 opacity-80" />
            <h3 className="text-xl font-semibold mb-2">Остались вопросы?</h3>
            <p className="text-muted-foreground mb-6">Наша поддержка всегда готова помочь вам с настройкой.</p>
            <Button variant="outline" asChild>
              <a href="https://t.me/adixxlee" target="_blank" rel="noreferrer">Написать в Telegram</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-colors duration-300">
      <CardHeader>
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="border border-border/50 rounded-xl p-6 bg-card/30">
      <h4 className="text-lg font-semibold mb-2">{question}</h4>
      <p className="text-muted-foreground leading-relaxed">{answer}</p>
    </div>
  );
}
