import Header from '@/components/header/header';
import { Footer } from '@/components/footer/user-layout-footer';
import { Toaster } from 'sonner';
export default function Layout({ children }) {
    return (
        <div className="flex flex-col gap-4 h-screen w-full min-h-screen">
            <Header/>
            <main className="flex flex-col flex-grow md:px-20 px-4 mt-14">
                {children}
            </main>
            <Footer/>
            <Toaster />
        </div>
    );
}
