import { login } from '@/routes';
import { store } from '@/routes/register';
import { Form, Head } from '@inertiajs/react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import AuthLayout from '@/layouts/auth-layout';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel
} from "@/components/ui/select"

export default function Register() {

    const servers = [
        {
        type : "Dofus",
        lists: ["Brial","Dakal","Draconiros","Hell Mina","Imagiro","Kourial","Mikhal","Ombre","Orukam","Rafal","Salar","TalKasha","Tylezia"],
        },
        {
        type : "Dofus Retro",
        lists: ["Allisteria","Boune","Fallanster"]
        },
        {
        type : "Dofus Touch",
        lists: ["Blair","Kelerog","Talok","Tiliwan"]
        },
        {
        type : "Wakfu",
        lists: ["Ogrest","Pandora","Rubilax"]
        }
    ];
    return (
            <AuthLayout
                title="Create an account"
                description="Enter your details below to create your account"
            >
                <Head title="Sign up" />
                <Form
                    {...store.form()}
                    resetOnSuccess={['password', 'password_confirmation']}
                    disableWhileProcessing
                    className="flex flex-col gap-6"
                >
                    {({ processing, errors }) => (
                        <>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="pseudonym">Pseudonym</Label>
                                    <Input
                                        id="pseudonym"
                                        type="text"
                                        required
                                        autoFocus
                                        tabIndex={1}
                                        autoComplete="pseudonym"
                                        name="pseudonym"
                                        placeholder="Suave"
                                    />
                                    <InputError
                                        message={errors.pseudonym}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="server">Server</Label>
                                    <Select 
                                        id="server"
                                        type="server"
                                        required
                                        tabIndex={2}
                                        autoComplete="server"
                                        name="server"
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select a server" />
                                        </SelectTrigger>
                                        <SelectContent className="h-[250px]">
                                            {servers.map((server,i) => (
                                            <SelectGroup key={i}>
                                                <SelectLabel>{server.type}</SelectLabel>
                                                {server.lists.map((list,i) => (
                                                    <SelectItem value={list} key={i}>{list}</SelectItem>
                                                ))}
                                            </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <InputError message={errors.servers} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        required
                                        tabIndex={3}
                                        autoComplete="email"
                                        name="email"
                                        placeholder="email@example.com"
                                    />
                                    <InputError message={errors.email} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        required
                                        tabIndex={4}
                                        autoComplete="new-password"
                                        name="password"
                                        placeholder="Password"
                                    />
                                    <InputError message={errors.password} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="password_confirmation">
                                        Confirm password
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        required
                                        tabIndex={5}
                                        autoComplete="new-password"
                                        name="password_confirmation"
                                        placeholder="Confirm password"
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    className="mt-2 w-full"
                                    tabIndex={6}
                                    data-test="register-user-button"
                                >
                                    {processing && <Spinner />}
                                    Create account
                                </Button>
                            </div>

                            <div className="text-center text-sm text-muted-foreground">
                                Already have an account?{' '}
                                <TextLink href={login()} tabIndex={7}>
                                    Log in
                                </TextLink>
                            </div>
                        </>
                    )}
                </Form>
            </AuthLayout>
    );
}
