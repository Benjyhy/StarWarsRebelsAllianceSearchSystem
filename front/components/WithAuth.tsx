'use client';

import React, { useEffect, ComponentType } from 'react';
import { useRouter } from 'next/navigation';

export default function withAuth<T extends object>(Component: ComponentType<T>) {
    return function ProtectedPage(props: T) {
        const router = useRouter();

        useEffect(() => {
            const username = sessionStorage.getItem('username');
            const password = sessionStorage.getItem('password');

            if (!username || !password) {
                router.push('/login');
            }
        }, [router]);

        return <Component {...props} />;
    };
}
