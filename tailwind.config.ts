import type { Config } from 'tailwindcss'

export default {
    content: [
        "./src/pages//*.{js,ts,jsx,tsx,mdx}",
        "./src/components//*.{js,ts,jsx,tsx,mdx}",
        "./src/app//*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontSize: {
                'heading1' : '2.986rem',
                'heading2' : '2.488rem',
                'heading3' : '2.074rem',
                'heading4' : '1.728rem',
                'heading5' : '1.44rem', 
                'heading6' : '1.2rem',
                'paragraph' : '1rem',
                'small' : '0.833rem',
                'tiny' : '0.694rem'
            },
            spacing: {
                '2.5': '0.15625rem',
                '5': '0.3125rem',
                '10': '0.625rem',
                '10.5': '0.65625rem',
                '14': '0.875rem',
                '12': '0.75rem',
                '15': '0.9375rem',
                '19': '1.1875rem',
                '20': '1.25rem',
                '22': '1.375rem',
                '25': '1.5625rem',
                '28': '1.75rem',
                '30': '1.875rem',
                '36': '2.25rem',
                '40': '2.5rem',
                '45': '2.8125rem',
                '47': '2.9375rem',
                '50': '3.125rem',
                '58': '3.625rem',
                '60': '3.75rem',
                '75': '4.6875rem',
                '87': '5.4375rem',
                '91': '5.6875rem',
                '100': '6.25rem',
                '120': '7.5rem',
                '124': '7.75rem',
                '150': '9.375rem',
                '538': '33.625rem',
                '11.56': '0.7225rem',
                '33.5': '2.09375rem',
                '35.5': '2.21875rem',
                '41.5': '2.59375rem',
                '60.5': '3.78125rem',
                '125.5': '7.84375rem',
                '110': '6.875rem',
                '148': '9.25rem',
                '250': '15.625rem',
                '180': '11.25rem',
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                dark: {
                    primary: '#171717',
                    secondary: {
                        light_grey: '#BFBFC5',
                        dark_grey: '#6D6D6E',
                    }, 
                    circle: {
                        dark_red: "#800000",
                        dark_blue: "#00008B",
                    }
                },
                light: {
                    primary: '#ffffffff',
                    secondary: {
                        black: '#171717',
                        white: '#FFFFFF'
                    },
                    third: '#459B9E',
                    red: '#FF2F32',
                    dark_red: '#9E4546',
                    dark_green: '#115254',
                    light_green: '#146C6F',
                    light_grey: '#6c6c70ff',
                    green: '#28d119',
                    grey: '#f5f6f7',
                    black: '#000000ff',
                    dark_grey: '#575859'
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
