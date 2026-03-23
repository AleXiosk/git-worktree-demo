import { useEffect, useLayoutEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const THEME_STORAGE_KEY = 'salespilot-theme';

function getStoredTheme() {
    if (typeof window === 'undefined') {
        return null;
    }

    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'light' || storedTheme === 'dark' ? storedTheme : null;
}

function getSystemTheme() {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
        return 'light';
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function App() {
    const [theme, setTheme] = useState(() => getStoredTheme() ?? getSystemTheme());
    const [hasStoredThemePreference, setHasStoredThemePreference] = useState(() => getStoredTheme() !== null);

    useLayoutEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
    }, [theme]);

    useEffect(() => {
        if (hasStoredThemePreference) {
            window.localStorage.setItem(THEME_STORAGE_KEY, theme);
            return;
        }

        window.localStorage.removeItem(THEME_STORAGE_KEY);
    }, [hasStoredThemePreference, theme]);

    useEffect(() => {
        if (hasStoredThemePreference || typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
            return undefined;
        }

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => {
            setTheme(event.matches ? 'dark' : 'light');
        };

        if (typeof mediaQuery.addEventListener === 'function') {
            mediaQuery.addEventListener('change', handleChange);
            return () => mediaQuery.removeEventListener('change', handleChange);
        }

        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
    }, [hasStoredThemePreference]);

    const handleToggleTheme = () => {
        setHasStoredThemePreference(true);
        setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
    };

    return (
        <div className="app">
            <Navbar theme={theme} onToggleTheme={handleToggleTheme} />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <UseCases />
                <Pricing />
                <CallToAction />
            </main>
            <Footer />
        </div>
    );
}

export default App;
