"use client";

import { createTheme } from "@mantine/core";

export const theme = createTheme({
    primaryColor: "dark",
    fontFamily: "var(--font-sans)",
    defaultRadius: "md",
    shadows: {
        md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    },
    components: {
        Button: {
            defaultProps: {
                size: "lg",
            },
        },
        Container: {
            defaultProps: {
                size: "xl",
            },
        },
    },
});
