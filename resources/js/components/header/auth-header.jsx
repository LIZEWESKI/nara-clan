import { Link, router, usePage } from '@inertiajs/react'
import { home, register, login } from '@/routes';
import { Button } from '@/components/ui/button'
import AppLogoIcon from '@/components/app-logo-icon'

const AuthHeader = () => {
  const {auth} = usePage().props
  const {url} = usePage()
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent md:px-20 py-2 px-4 z-50 flex justify-between items-center">
      <Link href={home()}>
          <AppLogoIcon />
      </Link>

      {
        !auth.user && <Button size="sm" onClick={() => url === "/login" ? router.visit(register()) : router.visit(login())}>
        {url === "/login" ? "Sign up" : "Log in"}
      </Button>
      }
    </header>
  )
}

export default AuthHeader