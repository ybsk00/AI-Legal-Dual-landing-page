"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function MetaPixelEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (!(window as any).fbq) return;

        const url = pathname + (searchParams.toString() ? `?${searchParams}` : "");

        // PageView 전송
        (window as any).fbq("track", "PageView");

        // 필요하면 URL도 함께 보내기
        (window as any).fbq("trackCustom", "PageViewWithUrl", { url });
    }, [pathname, searchParams]);

    return null;
}
