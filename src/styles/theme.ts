import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    fonts: {
        heading: 'Roboto',
        body: 'Roboto'
    },
    colors: {
        gray: {
            "900": "#575757",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#848E8B",
            "500": "#A2A4A5",
            "400": "#DADBD1",
            "300": "#F4F3F6",
            "200": "#F8F9F9",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        },
        red: {
            "300": "#EF9B9A",
            "500": "#F66868",
        },
        yellow: {
            "500": "#FFBE37",
        },
        teal: {
            "500": "#20D0B9",
        }
    },
    styles: {
        global: {
            body: {
                bg: 'red.500',
                color: 'yellow.500'
            }
        }
    }
})