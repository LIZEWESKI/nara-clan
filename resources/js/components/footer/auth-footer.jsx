import { Link } from "@inertiajs/react"

const AuthFooter = () => {
  const legal = [
    { name: "Legal Information", href: "/legal" },
    { name: "Terms of Service", href: "/terms-of-service" },
  ]
  return (
    <div className="flex items-center justify-center gap-2">
        {legal.map(link => (
            <Link
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
                {link.name}
            </Link>
        ))}
    </div>
  )
}

export default AuthFooter