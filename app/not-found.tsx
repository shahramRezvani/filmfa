import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center">
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700 text-center max-w-md w-full mx-4">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-red-400">404</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 mb-6">صفحه مورد نظر یافت نشد</p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            بازگشت به خانه
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}