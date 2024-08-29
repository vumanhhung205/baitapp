"use client";
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

export default function HomePage() {
    const [selectedLocale, setSelectedLocale] = useState('vi');
    const router = useRouter();
    const t = useTranslations('HomePage');

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;
        setSelectedLocale(newLocale);
        router.push(`/${newLocale}`);
    };

    return (
        <>
            <h1>{t('title')}</h1>
            <select onChange={handleChange} value={selectedLocale}>
                <option value="vi"> Việt</option>
                <option value="en"> Anh</option>
            </select>
        </>
    );
}
