import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        // Scroll to top on route change
        window.scrollTo(0, 0);

        // --- Intersection Observer for Fade-Up Animations ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Setup observer for fade-up elements
        const setupAnimations = () => {
            const animatedElements = document.querySelectorAll('.fade-up');
            animatedElements.forEach(el => {
                // remove visible class to re-trigger if needed, though typically we just let them stay visible
                observer.observe(el);
            });
        };

        // Small delay to ensure DOM is updated after route change
        setTimeout(setupAnimations, 100);

        return () => {
            observer.disconnect();
        };
    }, [location.pathname]);

    return (
        <>
            <div className="content-wrapper">
                <Navbar />
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
