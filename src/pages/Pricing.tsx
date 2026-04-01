import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Check, X, Zap } from 'lucide-react';

export function Pricing() {
  return (
    <div className="flex-1 bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">Тарифы</Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Выберите свой план</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От базовых уведомлений до полного интерактива со зрителями. 
            Меняйте тариф в любой момент.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Free Plan */}
          <PricingCard 
            title="Free" 
            price="Бесплатно" 
            period="2 дня"
            description="Тестовый период для новых пользователей"
            features={[
              { name: 'Автоуведомления Kaspi', included: true },
              { name: 'Базовые виджеты OBS', included: true },
              { name: 'История донатов', included: true },
              { name: 'Стандартная озвучка', included: true },
              { name: 'Кастомизация виджетов', included: false },
              { name: 'Интерактивные функции', included: false },
              { name: 'Приоритетная поддержка', included: false },
            ]}
            buttonText="Текущий тариф"
            buttonVariant="outline"
            link="/dashboard"
          />

          {/* Lite Plan */}
          <PricingCard 
            title="Lite" 
            price="5 000 ₸" 
            period="/ мес"
            description="Базовые функции для начинающих стримеров"
            features={[
              { name: 'Автоуведомления Kaspi', included: true },
              { name: 'Базовые виджеты OBS', included: true },
              { name: 'История донатов', included: true },
              { name: 'Стандартная озвучка', included: true },
              { name: 'Кастомизация виджетов', included: false },
              { name: 'Интерактивные функции', included: false },
              { name: 'Приоритетная поддержка', included: false },
            ]}
            buttonText="Выбрать Lite"
            buttonVariant="default"
            link="/checkout/lite"
          />

          {/* Plus Plan */}
          <PricingCard 
            title="Plus" 
            price="7 000 ₸" 
            period="/ мес"
            description="Расширенные возможности кастомизации"
            isPopular={true}
            features={[
              { name: 'Автоуведомления Kaspi', included: true },
              { name: 'Все виджеты OBS', included: true },
              { name: 'История и статистика', included: true },
              { name: 'Своя озвучка и музыка', included: true },
              { name: 'Кастомизация виджетов', included: true },
              { name: 'Интерактивные функции', included: false },
              { name: 'Приоритетная поддержка', included: false },
            ]}
            buttonText="Выбрать Plus"
            buttonVariant="default"
            link="/checkout/plus"
          />

          {/* Pro Plan */}
          <PricingCard 
            title="Pro" 
            price="10 000 ₸" 
            period="/ мес"
            description="Полный доступ ко всем функциям сервиса"
            features={[
              { name: 'Автоуведомления Kaspi', included: true },
              { name: 'Все виджеты OBS', included: true },
              { name: 'Продвинутая статистика', included: true },
              { name: 'Своя озвучка и музыка', included: true },
              { name: 'Полная кастомизация', included: true },
              { name: 'Рулетка, заказ медиа', included: true },
              { name: 'Приоритетная поддержка', included: true },
            ]}
            buttonText="Выбрать Pro"
            buttonVariant="default"
            link="/checkout/pro"
          />
        </div>

        <div className="mt-20 text-center max-w-2xl mx-auto p-8 rounded-2xl bg-card/30 border border-border/50">
          <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Нужна помощь с выбором?</h3>
          <p className="text-muted-foreground mb-6">
            Напишите нам, и мы поможем подобрать идеальный тариф под ваши задачи и аудиторию.
          </p>
          <Button variant="outline" asChild>
            <a href="https://t.me/adixxlee" target="_blank" rel="noreferrer">Связаться с поддержкой</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

interface PricingFeature {
  name: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: "default" | "outline";
  link: string;
  isPopular?: boolean;
}

function PricingCard({ title, price, period, description, features, buttonText, buttonVariant, link, isPopular }: PricingCardProps) {
  return (
    <Card className={`relative flex flex-col h-full bg-card/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${isPopular ? 'border-primary shadow-[0_0_30px_rgba(229,46,46,0.1)] scale-105 z-10' : 'border-border/50 hover:border-border'}`}>
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 flex justify-center">
          <Badge className="bg-primary text-primary-foreground">Самый популярный</Badge>
        </div>
      )}
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="h-10">{description}</CardDescription>
        <div className="mt-4 flex items-baseline text-4xl font-extrabold">
          {price}
          <span className="ml-1 text-xl font-medium text-muted-foreground">{period}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              {feature.included ? (
                <Check className="w-5 h-5 text-primary shrink-0" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground/50 shrink-0" />
              )}
              <span className={feature.included ? 'text-foreground' : 'text-muted-foreground/70'}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button variant={buttonVariant} className="w-full h-12 text-base" asChild>
          <Link to={link}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
