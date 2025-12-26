import { Link, router } from '@inertiajs/react'
import { home, register } from '@/routes';
import { Button } from '@/components/ui/button'
import AppLogoIcon from '@/components/app-logo-icon'

const AuthHeader = () => {
  return (
    <header className="fixed top-0 right-0 left-0 bg-transparent md:px-20 py-2 px-4 z-50 flex justify-between items-center">
      <Link href={home()}>
          <AppLogoIcon />
      </Link>
      <Button size="sm" onClick={() => router.visit(register()) }>
        Sign Up
      </Button>
    </header>
  )
}

export default AuthHeader