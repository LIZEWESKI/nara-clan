import AppLogoIcon from './app-logo-icon';

export default function AppLogo() {
    return (
        <div className="relative">
        <AppLogoIcon/>
        <span className="absolute text-xl font-bold leading-relaxed tracking-wide left-[29px] top-1" style={{ WebkitTextStroke: '0.5px hsl(var(--muted-foreground))'}}>
            Nara.
        </span>
        </div>
    );
}
