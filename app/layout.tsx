import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'roice de castro',description:'biomedical engineering, research, and home.',icons:{icon:'/favicon.svg'},openGraph:{title:'roice de castro',description:'biomedical engineering, research, and home.',images:['/og.png']},twitter:{card:'summary_large_image',title:'roice de castro',images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
