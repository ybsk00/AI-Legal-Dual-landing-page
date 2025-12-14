"use client"

import { useEffect, useRef } from "react"

interface Point {
    x: number
    y: number
    z: number
    originalX: number
    originalY: number
}

export function WireframeMesh() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const mouseRef = useRef({ x: 0, y: 0 })
    const pointsRef = useRef<Point[]>([])
    const animationRef = useRef<number>(0)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let width = window.innerWidth
        let height = window.innerHeight

        const resize = () => {
            width = window.innerWidth
            height = window.innerHeight
            canvas.width = width
            canvas.height = height
            initPoints()
        }

        const gridSize = 40
        const cols = Math.ceil(width / gridSize) + 2
        const rows = Math.ceil(height / gridSize) + 2

        const initPoints = () => {
            pointsRef.current = []
            const newCols = Math.ceil(width / gridSize) + 2
            const newRows = Math.ceil(height / gridSize) + 2

            for (let i = 0; i < newRows; i++) {
                for (let j = 0; j < newCols; j++) {
                    const x = j * gridSize - gridSize
                    const y = i * gridSize - gridSize
                    pointsRef.current.push({
                        x,
                        y,
                        z: 0,
                        originalX: x,
                        originalY: y,
                    })
                }
            }
        }

        const handleMouseMove = (e: MouseEvent | TouchEvent) => {
            const clientX = "touches" in e ? e.touches[0]?.clientX ?? 0 : e.clientX
            const clientY = "touches" in e ? e.touches[0]?.clientY ?? 0 : e.clientY
            mouseRef.current = { x: clientX, y: clientY }
        }

        initPoints()
        resize()

        window.addEventListener("resize", resize)
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("touchmove", handleMouseMove, { passive: true })

        let time = 0

        const animate = () => {
            time += 0.01
            ctx.clearRect(0, 0, width, height)

            const points = pointsRef.current
            const currentCols = Math.ceil(width / gridSize) + 2
            const mouse = mouseRef.current

            // Update points with wave animation and mouse interaction
            for (let i = 0; i < points.length; i++) {
                const point = points[i]
                const dx = mouse.x - point.originalX
                const dy = mouse.y - point.originalY
                const dist = Math.sqrt(dx * dx + dy * dy)
                const maxDist = 200

                // Wave animation
                const waveX = Math.sin(time + point.originalX * 0.01) * 5
                const waveY = Math.cos(time + point.originalY * 0.01) * 5
                const waveZ = Math.sin(time * 0.5 + point.originalX * 0.005 + point.originalY * 0.005) * 15

                // Mouse interaction
                let mouseInfluence = 0
                if (dist < maxDist) {
                    mouseInfluence = (1 - dist / maxDist) * 30
                }

                point.x = point.originalX + waveX
                point.y = point.originalY + waveY
                point.z = waveZ + mouseInfluence
            }

            // Draw connections
            ctx.strokeStyle = "rgba(59, 130, 246, 0.15)"
            ctx.lineWidth = 1

            for (let i = 0; i < points.length; i++) {
                const point = points[i]
                const col = i % currentCols
                const row = Math.floor(i / currentCols)

                // Horizontal line
                if (col < currentCols - 1) {
                    const nextPoint = points[i + 1]
                    if (nextPoint) {
                        const perspective1 = 1 + point.z * 0.003
                        const perspective2 = 1 + nextPoint.z * 0.003

                        const gradient = ctx.createLinearGradient(
                            point.x * perspective1,
                            point.y * perspective1,
                            nextPoint.x * perspective2,
                            nextPoint.y * perspective2
                        )
                        gradient.addColorStop(0, `rgba(59, 130, 246, ${0.1 + point.z * 0.005})`)
                        gradient.addColorStop(1, `rgba(99, 102, 241, ${0.1 + nextPoint.z * 0.005})`)

                        ctx.beginPath()
                        ctx.strokeStyle = gradient
                        ctx.moveTo(point.x * perspective1, point.y * perspective1)
                        ctx.lineTo(nextPoint.x * perspective2, nextPoint.y * perspective2)
                        ctx.stroke()
                    }
                }

                // Vertical line
                if (row < Math.floor(points.length / currentCols) - 1) {
                    const belowPoint = points[i + currentCols]
                    if (belowPoint) {
                        const perspective1 = 1 + point.z * 0.003
                        const perspective2 = 1 + belowPoint.z * 0.003

                        const gradient = ctx.createLinearGradient(
                            point.x * perspective1,
                            point.y * perspective1,
                            belowPoint.x * perspective2,
                            belowPoint.y * perspective2
                        )
                        gradient.addColorStop(0, `rgba(59, 130, 246, ${0.1 + point.z * 0.005})`)
                        gradient.addColorStop(1, `rgba(99, 102, 241, ${0.1 + belowPoint.z * 0.005})`)

                        ctx.beginPath()
                        ctx.strokeStyle = gradient
                        ctx.moveTo(point.x * perspective1, point.y * perspective1)
                        ctx.lineTo(belowPoint.x * perspective2, belowPoint.y * perspective2)
                        ctx.stroke()
                    }
                }
            }

            // Draw points at intersections with glow
            for (let i = 0; i < points.length; i++) {
                const point = points[i]
                const perspective = 1 + point.z * 0.003
                const size = 1.5 + point.z * 0.03
                const alpha = 0.3 + point.z * 0.01

                ctx.beginPath()
                ctx.fillStyle = `rgba(147, 197, 253, ${alpha})`
                ctx.arc(point.x * perspective, point.y * perspective, size, 0, Math.PI * 2)
                ctx.fill()
            }

            animationRef.current = requestAnimationFrame(animate)
        }

        animate()

        return () => {
            window.removeEventListener("resize", resize)
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("touchmove", handleMouseMove)
            cancelAnimationFrame(animationRef.current)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #0B0D14 0%, #151932 50%, #0B0D14 100%)" }}
        />
    )
}
