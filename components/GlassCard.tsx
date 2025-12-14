"use client"

import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
    children: React.ReactNode
    className?: string
    variant?: "default" | "highlight" | "feature"
    hover?: boolean
}

export function GlassCard({
    children,
    className,
    variant = "default",
    hover = true,
}: GlassCardProps) {
    const baseStyles = `
    relative overflow-hidden rounded-2xl
    backdrop-blur-xl
    border border-white/10
    transition-all duration-500 ease-out
  `

    const variantStyles = {
        default: `
      bg-gradient-to-br from-white/5 to-white/[0.02]
      shadow-[0_8px_32px_rgba(0,0,0,0.3)]
    `,
        highlight: `
      bg-gradient-to-br from-blue-500/10 to-indigo-500/5
      border-blue-500/20
      shadow-[0_8px_32px_rgba(59,130,246,0.15)]
    `,
        feature: `
      bg-gradient-to-br from-white/8 to-white/[0.02]
      border-t-2 border-t-blue-500
      shadow-[0_8px_32px_rgba(0,0,0,0.4)]
    `,
    }

    const hoverStyles = hover
        ? `
      hover:border-blue-500/30
      hover:shadow-[0_12px_40px_rgba(59,130,246,0.2)]
      hover:-translate-y-1
      hover:bg-gradient-to-br hover:from-white/8 hover:to-white/[0.03]
    `
        : ""

    return (
        <div className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}>
            {/* Subtle gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </div>
    )
}

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    variant?: "primary" | "secondary"
    size?: "sm" | "md" | "lg" | "xl"
}

export function GlassButton({
    children,
    className,
    variant = "primary",
    size = "md",
    ...props
}: GlassButtonProps) {
    const baseStyles = `
    relative overflow-hidden rounded-xl
    font-semibold
    transition-all duration-300 ease-out
    backdrop-blur-sm
    active:scale-95
  `

    const variantStyles = {
        primary: `
      bg-gradient-to-r from-blue-600 to-indigo-600
      text-white
      border border-blue-400/30
      shadow-[0_4px_20px_rgba(59,130,246,0.4)]
      hover:shadow-[0_6px_30px_rgba(59,130,246,0.6)]
      hover:-translate-y-0.5
    `,
        secondary: `
      bg-white/5
      text-white
      border border-white/20
      hover:bg-white/10
      hover:border-white/30
    `,
    }

    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
        xl: "px-10 py-5 text-xl",
    }

    return (
        <button
            className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
            {...props}
        >
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700" />

            <span className="relative z-10">{children}</span>
        </button>
    )
}

interface SectionTitleProps {
    badge?: string
    title: string
    subtitle?: string
    highlight?: string
    className?: string
}

export function SectionTitle({
    badge,
    title,
    subtitle,
    highlight,
    className,
}: SectionTitleProps) {
    return (
        <div className={cn("text-center mb-12 md:mb-16", className)}>
            {badge && (
                <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full backdrop-blur-sm">
                    {badge}
                </span>
            )}

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight break-keep">
                {title}
                {highlight && (
                    <>
                        <br />
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {highlight}
                        </span>
                    </>
                )}
            </h2>

            {subtitle && (
                <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed break-keep">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
