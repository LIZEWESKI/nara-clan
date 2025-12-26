import AuthHeader from '@/components/header/auth-header';
import AuthFooter from '@/components/footer/auth-footer';

export default function AuthSimpleLayout({
    children,
    title,
    description,
}) {
    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background pb-6 px-6 md:pb-10 md:px-10">
            <AuthHeader/>
            <div className="w-full flex m-0 max-w-sm h-screen justify-center items-center">
                <div className="flex w-full flex-col gap-8">
                    <div className="flex flex-col items-center gap-4 flex-grow">
                        <div className="space-y-2 text-center">
                            <h1 className="text-xl font-medium">{title}</h1>
                            <p className="text-center text-sm text-muted-foreground">
                                {description}
                            </p>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
            <AuthFooter/>
        </div>
    );
}
