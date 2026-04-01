import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Privacy() {
  return (
    <div className="flex-1 bg-background py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> На главную
        </Link>
        
        <h1 className="text-3xl font-bold tracking-tight mb-8">Политика конфиденциальности</h1>
        
        <div className="prose prose-invert max-w-none text-muted-foreground space-y-6">
          <p>
            Настоящая Политика конфиденциальности описывает, как сервис KaspiStream (далее — «Сервис») 
            собирает, использует и защищает вашу личную информацию.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">1. Какую информацию мы собираем</h2>
          <p>
            При использовании Сервиса мы можем собирать следующие данные:
            <br />
            - <strong>Данные аккаунта:</strong> email-адрес, пароль (в зашифрованном виде), ссылки на ваши каналы (Twitch, YouTube).
            <br />
            - <strong>Данные для работы виджета:</strong> текст входящих SMS-уведомлений от банка (только суммы, имена отправителей и сообщения), необходимые для вывода на экран.
            <br />
            - <strong>Технические данные:</strong> IP-адрес, тип браузера, данные об использовании сайта.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">2. Как мы используем информацию</h2>
          <p>
            Собранная информация используется исключительно для:
            <br />
            - Предоставления услуг Сервиса (вывод уведомлений на стрим).
            <br />
            - Управления вашим аккаунтом и подпиской.
            <br />
            - Улучшения работы Сервиса и технической поддержки.
            <br />
            - Отправки важных уведомлений (например, об окончании подписки).
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">3. Защита данных</h2>
          <p>
            3.1. Мы применяем современные технические и организационные меры для защиты ваших данных от несанкционированного доступа, изменения или уничтожения.
            <br />
            3.2. Сервис <strong>не хранит</strong> ваши банковские реквизиты, номера карт или пароли от банковских приложений. Мы работаем только с текстом входящих уведомлений.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">4. Передача данных третьим лицам</h2>
          <p>
            Мы не продаем и не передаем вашу личную информацию третьим лицам, за исключением случаев, прямо предусмотренных законодательством Республики Казахстан.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">5. Изменения в Политике</h2>
          <p>
            Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Обновленная версия публикуется на этой странице.
          </p>

          <p className="mt-12 text-sm">
            <em>Последнее обновление: 1 апреля 2026 г.</em>
          </p>
        </div>
      </div>
    </div>
  );
}
