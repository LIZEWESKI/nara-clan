import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from '@/components/ui/input';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout  from '@/layouts/auth-layout';
import { register } from '@/routes';
import { store } from '@/routes/login';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { Twitch } from 'lucide-react';
import { useEffect } from 'react';
import { toast } from 'sonner';


export default function Login({status,canResetPassword,canRegister}){
    
    useEffect(() => {
        status && toast(status, {position: "top-center"})
    },[status])

    return (
        <AuthLayout
            title="Log in to your account"
            description="Enter your email and password below to log in"
        > 
            <Head title="Log in" />

            <Form
                {...store.form()}
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                    <FieldGroup>
                        <Field>
                            <FieldLabel htmlFor="email">Email address</FieldLabel>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="email"
                                placeholder="email@example.com"
                            />
                            <InputError message={errors.email} />
                        </Field>
                        <Field>
                            <div className="flex items-center">
                                <FieldLabel htmlFor="password">Password</FieldLabel>
                                {canResetPassword && (
                                    <TextLink
                                        href={request()}
                                        className="ml-auto text-sm"
                                        tabIndex={5}
                                    >
                                        Forgot password?
                                    </TextLink>
                                )}
                            </div>
                            <Input
                                id="password"
                                type="password"
                                name="password"
                                required
                                tabIndex={2}
                                autoComplete="current-password"
                                placeholder="Password"
                            />
                            <InputError message={errors.password} />
                        </Field>
                        <Field>
                        <Button
                            type="submit"
                            tabIndex={4}
                            disabled={processing}
                            data-test="login-button"
                        >
                            {processing && <Spinner />}
                            Log in
                        </Button>
                        </Field>
                        <FieldSeparator>Or continue with</FieldSeparator>
                        <Field>
                         <Field className="grid grid-cols-2 gap-4">
                            <Button variant="outline" type="button">
                            <Twitch strokeWidth={2.7}/>
                            <span className="sr-only">Login with Twitch</span>
                            </Button>
                            <Button variant="outline" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                                fill="currentColor"
                                />
                            </svg>
                            <span className="sr-only">Login with Google</span>
                            </Button>
                        </Field>
                        {canRegister && 
                        <FieldDescription className="text-center text-sm text-muted-foreground">
                            Don&apos;t have an account?{" "}
                                <TextLink href={register()} tabIndex={5}>
                                    Sign up
                                </TextLink>
                        </FieldDescription>}
                        </Field>
                    </FieldGroup>
                    </>
                )}
            </Form>
        </AuthLayout>
    );
}
