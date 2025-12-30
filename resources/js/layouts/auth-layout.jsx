import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';
import { Toaster } from 'sonner';

export default function AuthLayout({
    children,
    title,
    description,
    ...props
}) {
    return (
        <AuthLayoutTemplate title={title} description={description} {...props}>
            {children}
            <Toaster />
        </AuthLayoutTemplate>
    );
}
