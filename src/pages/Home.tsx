import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";

export const Home = () => {
    return <div className = "min-h-screen bg-backgound text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Backgound Effects */}
        <StarBackground />

        {/* Navbar */}

        {/* Main Content */}
    </div>;
};