import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'FilmFA',
  description: 'Persian video streaming platform',
  keywords: 'فیلم, سریال, فارسی, استریمینگ, فیلم فا',
  authors: [{ name: 'FilmFA Team' }],
  openGraph: {
    title: 'FilmFA - بهترین پلتفرم استریمینگ فیلم و سریال فارسی',
    description: 'تماشای فیلم‌ها و سریال‌های فارسی با کیفیت بالا و بدون تبلیغات',
    url: 'https://filmfa.ir',
    siteName: 'FilmFA',
    locale: 'fa_IR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FilmFA - بهترین پلتفرم استریمینگ فیلم و سریال فارسی',
    description: 'تماشای فیلم‌ها و سریال‌های فارسی با کیفیت بالا و بدون تبلیغات',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={inter.variable}>
      <body className="bg-gray-900 text-white">
        {children}
      </body>
    </html>
  );
}