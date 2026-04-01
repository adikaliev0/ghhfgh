import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { ShieldAlert, Info, Mail } from 'lucide-react';

export function Banned() {
  return (
    <div className="flex-1 flex items-center justify-center py-6 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-destructive/10 rounded-full blur-3xl -z-10" />
      
      <Card className="w-full max-w-lg border-destructive/30 shadow-[0_0_50px_rgba(127,29,29,0.15)] bg-card/80 backdrop-blur-xl text-center">
        <CardHeader className="space-y-2 pb-4">
          <div className="mx-auto bg-destructive/10 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-1">
            <ShieldAlert className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight text-destructive">Аккаунт заблокирован</CardTitle>
          <CardDescription className="text-base text-muted-foreground/80 max-w-sm mx-auto">
            Доступ к сервису KaspiStream был ограничен из-за нарушения правил использования платформы.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-background/50 border border-border/50 rounded-xl p-5 text-left">
            <h3 className="font-semibold mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-muted-foreground" /> Детали блокировки:
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Статус:</span>
                <span className="font-medium text-destructive">Заблокирован</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Дата блокировки:</span>
                <span className="font-medium">12.10.2023</span>
              </div>
              <div className="flex justify-between border-b border-border/50 pb-2">
                <span className="text-muted-foreground">Тип:</span>
                <span className="font-medium">Постоянная</span>
              </div>
              <div className="flex flex-col gap-1 pt-1">
                <span className="text-muted-foreground">Причина:</span>
                <span className="font-medium bg-destructive/10 text-destructive p-3 rounded-lg border border-destructive/20 mt-1">
                  Мошеннические действия и нарушение пользовательского соглашения (п. 4.2)
                </span>
              </div>
            </div>
            <p className="mt-6 text-xs text-muted-foreground/70 leading-relaxed">
              * В случае блокировки аккаунта средства за неиспользованный период подписки не возвращаются. Все виджеты и уведомления отключены.
            </p>
          </div>
          
          <div className="bg-card/50 border border-border/50 rounded-xl p-5 text-center">
            <Mail className="w-6 h-6 text-muted-foreground mx-auto mb-2 opacity-50" />
            <h4 className="font-medium mb-1">Считаете, что произошла ошибка?</h4>
            <p className="text-sm text-muted-foreground mb-3">
              Вы можете подать апелляцию, связавшись с нашей службой поддержки. Мы рассмотрим вашу заявку в течение 48 часов.
            </p>
            <Button variant="outline" className="w-full" asChild>
              <a href="https://t.me/adixxlee" target="_blank" rel="noreferrer">
                Связаться с поддержкой (@adixxlee)
              </a>
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t border-border/40 pt-6">
          <Button variant="ghost" asChild>
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
