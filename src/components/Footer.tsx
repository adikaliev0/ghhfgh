import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 py-12 mt-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="bg-primary p-1 rounded-md">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">KaspiStream</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs mb-6 leading-relaxed">
            Профессиональный сервис уведомлений о донатах Kaspi для стримеров.
            Сделайте ваши трансляции ярче и удобнее.
          </p>
          <p className="text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} KaspiStream. Все права защищены.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold mb-4 text-foreground">Продукт</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><Link to="/#features" className="hover:text-primary transition-colors">Возможности</Link></li>
            <li><Link to="/pricing" className="hover:text-primary transition-colors">Тарифы</Link></li>
            <li><Link to="/#how-it-works" className="hover:text-primary transition-colors">Как это работает</Link></li>
            <li><a href="#" className="hover:text-primary transition-colors">Скачать приложение</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-foreground">Поддержка</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href="https://t.me/adixxlee" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Telegram Поддержка</a></li>
            <li><Link to="/#faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            <li><Link to="/terms" className="hover:text-primary transition-colors">Пользовательское соглашение</Link></li>
            <li><Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
