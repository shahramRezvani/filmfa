import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            FilmFA
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            دنیایی از فیلم‌ها و سریال‌های فارسی، در خانه‌تان
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">فیلم‌های جدید</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">جستجوی بهترین فیلم‌های ایرانی و جهانی</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">سریال‌های محبوب</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">سریال‌های ایرانی با کیفیت بالا و زیرنویس</p>
            </CardContent>
          </Card>
          
          <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">پخش زنده</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">تلویزیون‌های فارسی زبان در یکجا</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold">
            شروع تماشا
          </Button>
        </div>
      </div>
    </div>
  );
}