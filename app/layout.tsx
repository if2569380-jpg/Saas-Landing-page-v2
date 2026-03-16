import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Assumption OS | Decision Risk & Assumption Monitoring',
  description: 'Capture the assumptions behind every major decision and get alerted when the logic behind your strategy stops being true.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-[#FAFAFA] text-[#111111] selection:bg-neutral-200 selection:text-black" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
