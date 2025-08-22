'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
    useEffect(() => {
        // Performance monitoring
        if (typeof window !== 'undefined') {
            // Track page load time
            window.addEventListener('load', () => {
                const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
                if (navigation) {
                    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
                    const domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;

                    console.log('🚀 Performance Metrics:', {
                        'Page Load Time': `${loadTime.toFixed(2)}ms`,
                        'DOM Content Loaded': `${domContentLoaded.toFixed(2)}ms`,
                        'Total Load Time': `${(navigation.loadEventEnd - navigation.navigationStart).toFixed(2)}ms`
                    });
                }
            });

            // Track Core Web Vitals
            if ('PerformanceObserver' in window) {
                try {
                    const observer = new PerformanceObserver((list) => {
                        list.getEntries().forEach((entry) => {
                            if (entry.entryType === 'largest-contentful-paint') {
                                console.log('🎯 LCP:', `${entry.startTime.toFixed(2)}ms`);
                            }
                            if (entry.entryType === 'first-input') {
                                console.log('⚡ FID:', `${entry.processingStart.toFixed(2)}ms`);
                            }
                            if (entry.entryType === 'layout-shift') {
                                console.log('📐 CLS:', entry.value.toFixed(3));
                            }
                        });
                    });

                    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
                        } catch {
            console.log('Performance monitoring not supported');
        }
            }
        }
    }, []);

    return null; // This component doesn't render anything
}
