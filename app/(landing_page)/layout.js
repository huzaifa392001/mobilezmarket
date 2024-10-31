import BlogsWrapper from '@/Components/Blogs_lp/BlogsWrapper/BlogsWrapper';
import { Inter, Poppins, Dancing_Script } from "next/font/google";
import './global.scss'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MobilezMarket",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <BlogsWrapper>
          {children}
        </BlogsWrapper>
      </body>
    </html>
  );
}