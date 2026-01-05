import AuthHeader from '@/components/header/auth-header';
import AuthFooter from '@/components/footer/auth-footer';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}) {
    return (
        <div className="flex min-h-svh flex-col items-center bg-background pt-14 md:pt-16 px-6 pb-6 md:px-10 md:pb-10">
            <AuthHeader/>
            <main className="w-full flex max-w-sm flex-1 items-center">
                <div className="flex w-full flex-col gap-8">
                    <div className="flex flex-col items-center gap-4 flex-grow">
                        <div className="flex flex-col items-center gap-1 text-center">
                            <h1 className="text-2xl font-bold">{title}</h1>
                            <p className="text-muted-foreground text-sm text-balance">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </main>
            <AuthFooter/>
        </div>
    );
}
