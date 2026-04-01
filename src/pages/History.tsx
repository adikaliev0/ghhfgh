import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Search, Download, Filter, ArrowUpDown } from 'lucide-react';

// Mock data for history
const MOCK_HISTORY = Array.from({ length: 25 }).map((_, i) => ({
  id: `don_${1000 + i}`,
  date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
  amount: Math.floor(Math.random() * 10000) + 500,
  name: ['Аноним', 'Alex', 'Ivan_Gamer', 'KzStreamer', 'DotaPro'][Math.floor(Math.random() * 5)],
  message: ['Привет со стрима!', 'Топ контент', 'На пиццу', '', 'Удачи в катке!'][Math.floor(Math.random() * 5)],
  status: 'Успешно'
})).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function History() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHistory = MOCK_HISTORY.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.amount.toString().includes(searchTerm)
  );

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  return (
    <div className="flex-1 bg-background/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">История донатов</h1>
            <p className="text-muted-foreground mt-1">Все полученные переводы и сообщения</p>
          </div>
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Экспорт CSV
          </Button>
        </div>

        <Card className="bg-card/50 border-border/50">
          <CardHeader className="pb-4">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Поиск по имени, сумме..." 
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="pl-9 bg-background/50"
                />
              </div>
              <Button variant="secondary" className="gap-2 w-full sm:w-auto">
                <Filter className="w-4 h-4" />
                Фильтры
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border border-border/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/50 border-b border-border/50">
                    <tr>
                      <th className="px-4 py-3 font-medium">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-foreground">
                          Дата <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium">Отправитель</th>
                      <th className="px-4 py-3 font-medium">
                        <div className="flex items-center gap-1 cursor-pointer hover:text-foreground">
                          Сумма <ArrowUpDown className="w-3 h-3" />
                        </div>
                      </th>
                      <th className="px-4 py-3 font-medium">Сообщение</th>
                      <th className="px-4 py-3 font-medium text-right">Статус</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredHistory.length > 0 ? (
                      filteredHistory.map((item) => (
                        <tr key={item.id} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                            {formatDate(item.date)}
                          </td>
                          <td className="px-4 py-3 font-medium">
                            {item.name}
                          </td>
                          <td className="px-4 py-3 font-bold text-primary whitespace-nowrap">
                            {item.amount.toLocaleString('ru-RU')} ₸
                          </td>
                          <td className="px-4 py-3 max-w-xs truncate" title={item.message}>
                            {item.message || <span className="text-muted-foreground italic">Без сообщения</span>}
                          </td>
                          <td className="px-4 py-3 text-right">
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500 border border-green-500/20">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="px-4 py-8 text-center text-muted-foreground">
                          Ничего не найдено
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4 text-sm text-muted-foreground">
              <div>Показано {filteredHistory.length} из {MOCK_HISTORY.length} записей</div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>Назад</Button>
                <Button variant="outline" size="sm">Вперед</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
