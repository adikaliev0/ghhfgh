import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { User, Lock, Link as LinkIcon, Save, AlertCircle, CheckCircle2 } from 'lucide-react';

export function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  
  const [profile, setProfile] = useState({
    email: 'streamer@example.com',
    twitchUrl: 'https://twitch.tv/mystream',
    youtubeUrl: 'https://youtube.com/@mystream'
  });

  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSuccessMsg('Профиль успешно обновлен');
      setTimeout(() => setSuccessMsg(''), 3000);
    }, 1000);
  };

  const handleSavePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      alert('Новые пароли не совпадают');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPasswords({ current: '', new: '', confirm: '' });
      setSuccessMsg('Пароль успешно изменен');
      setTimeout(() => setSuccessMsg(''), 3000);
    }, 1000);
  };

  return (
    <div className="flex-1 bg-background/50">
      <div className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold tracking-tight">Настройки профиля</h1>
          <p className="text-muted-foreground mt-1">Управление аккаунтом и безопасностью</p>
        </div>

        {successMsg && (
          <div className="mb-6 p-4 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center gap-3 text-green-500">
            <CheckCircle2 className="w-5 h-5" />
            <p className="font-medium">{successMsg}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile Settings */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                Основные данные
              </CardTitle>
              <CardDescription>Ваш email и привязанные каналы</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSaveProfile} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email адрес</label>
                  <Input 
                    type="email" 
                    value={profile.email} 
                    disabled 
                    className="bg-muted/50 text-muted-foreground cursor-not-allowed"
                  />
                  <p className="text-xs text-muted-foreground">Для смены email обратитесь в поддержку</p>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Ссылка на Twitch</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      type="url" 
                      value={profile.twitchUrl}
                      onChange={e => setProfile({...profile, twitchUrl: e.target.value})}
                      className="pl-9 bg-background/50"
                      placeholder="https://twitch.tv/..."
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Ссылка на YouTube</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input 
                      type="url" 
                      value={profile.youtubeUrl}
                      onChange={e => setProfile({...profile, youtubeUrl: e.target.value})}
                      className="pl-9 bg-background/50"
                      placeholder="https://youtube.com/..."
                    />
                  </div>
                </div>

                <Button type="submit" disabled={isLoading} className="w-full gap-2 mt-2">
                  <Save className="w-4 h-4" />
                  Сохранить изменения
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="bg-card/50 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="w-5 h-5 text-primary" />
                Безопасность
              </CardTitle>
              <CardDescription>Изменение пароля для входа</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSavePassword} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Текущий пароль</label>
                  <Input 
                    type="password" 
                    required
                    value={passwords.current}
                    onChange={e => setPasswords({...passwords, current: e.target.value})}
                    className="bg-background/50"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Новый пароль</label>
                  <Input 
                    type="password" 
                    required
                    minLength={8}
                    value={passwords.new}
                    onChange={e => setPasswords({...passwords, new: e.target.value})}
                    className="bg-background/50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Повторите новый пароль</label>
                  <Input 
                    type="password" 
                    required
                    minLength={8}
                    value={passwords.confirm}
                    onChange={e => setPasswords({...passwords, confirm: e.target.value})}
                    className="bg-background/50"
                  />
                </div>

                <Button type="submit" variant="secondary" disabled={isLoading} className="w-full gap-2 mt-2">
                  <Lock className="w-4 h-4" />
                  Обновить пароль
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
