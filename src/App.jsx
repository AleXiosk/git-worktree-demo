import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import CallToAction from './components/CallToAction';
import CookieConsent from './components/CookieConsent';
import Footer from './components/Footer';

const COOKIE_CONSENT_STORAGE_KEY = 'salespilot-cookie-consent';
const COOKIE_CONSENT_VALUES = new Set(['essential', 'all']);

function getStoredCookieConsent() {
    if (typeof window === 'undefined') {
        return null;
    }

    try {
        const storedConsent = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
        return COOKIE_CONSENT_VALUES.has(storedConsent) ? storedConsent : null;
    } catch {
        return null;
    }
}

function persistCookieConsent(consent) {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, consent);
    } catch {
        // Ignore storage failures and still keep the in-memory decision.
    }
}

function App() {
    const [cookieConsent, setCookieConsent] = useState(() => getStoredCookieConsent());

    const handleCookieDecision = (consent) => {
        setCookieConsent(consent);
        persistCookieConsent(consent);
    };

    return (
        <div className="app">
            <Navbar />
            <main>
                <Hero />
                <SocialProof />
                <Features />
                <UseCases />
                <Pricing />
                <Faq />
                <CallToAction />
            </main>
            <Footer />
            <CookieConsent
                isOpen={!cookieConsent}
                onDecision={handleCookieDecision}
            />
        </div>
    );
}

export default App;
