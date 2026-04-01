import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Clock, AlertTriangle, ArrowRight } from 'lucide-react';

export function Blocked() {
  return (
    <div className="flex-1 flex items-center justify-center py-6 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <Card className="w-full max-w-lg border-border/50 shadow-2xl bg-card/80 backdrop-blur-xl text-center">
        <CardHeader className="space-y-2 pb-4">
          <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-1">
            <Clock className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">Подписка истекла</CardTitle>
          <CardDescription className="text-base text-muted-foreground/80 max-w-sm mx-auto">
            Срок действия вашего тарифа подошел к концу. Работа виджетов и уведомлений временно приостановлена.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-background/50 border border-border/50 rounded-xl p-5 text-left">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" /> Что сейчас недоступно:
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full">
                Вывод новых донатов на стрим
              </li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full">
                Доступ к истории и статистике
              </li>
              <li className="flex items-center gap-2 before:content-[''] before:w-1.5 before:h-1.5 before:bg-primary/50 before:rounded-full">
                Настройка виджетов
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground/70">
              * Все ваши настройки, история и статистика сохранены. Они станут доступны сразу после оплаты.
            </p>
          </div>
          
          <Button className="w-full h-12 text-base" asChild>
            <Link to="/pricing">
              Продлить подписку <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-border/40 pt-6">
          <Button variant="ghost" asChild>
            <Link to="/dashboard">Вернуться в кабинет (ограниченный режим)</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
