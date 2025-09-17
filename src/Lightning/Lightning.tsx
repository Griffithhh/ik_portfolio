import { useRef, useEffect } from 'react'
import styles from './Lightning.module.scss'

interface Bolt {
  segments: { x: number; y: number }[]
  thickness: number
  alpha: number
  age: number
  maxAge: number
}

export const Lightning = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0

    function resize() {
      W = canvas.clientWidth
      H = canvas.clientHeight
      const dpr = devicePixelRatio || 1
      canvas.width = W * dpr
      canvas.height = H * dpr
      ctx.setTransform(1, 0, 0, 1, 0, 0) // сбрасываем трансформацию перед scale
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    const start = { x: W * 0.5, y: -H * 0.2 }
    const end = { x: W * 0.5, y: H * 1.2 }
    const maxOffset = Math.hypot(end.x - start.x, end.y - start.y) * 0.25

    const bolts: Bolt[] = []
    let lastGroup = 0
    const groupInterval = 3000

    function subdivide(points: { x: number; y: number }[], offset: number): { x: number; y: number }[] {
      if (offset < 1) return points
      const newPts = [points[0]]
      for (let i = 0; i < points.length - 1; i++) {
        const a = points[i], b = points[i + 1]
        const midX = (a.x + b.x) / 2
        const midY = (a.y + b.y) / 2
        const disp = (Math.random() * 2 - 1) * offset
        const perpX = b.y - a.y, perpY = -(b.x - a.x)
        const norm = Math.hypot(perpX, perpY) || 1
        newPts.push({ x: midX + (perpX / norm) * disp, y: midY + (perpY / norm) * disp })
        newPts.push(b)
      }
      return subdivide(newPts, offset * 0.5)
    }

    function spawnGroup(ts: number) {
      const count = 1
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const perturbedEnd = { ...end }
          const mainPts = subdivide([{ ...start }, perturbedEnd], maxOffset * (0.6 + Math.random() * 0.4))
          const mainBolt: Bolt = {
            segments: mainPts,
            thickness: 1 + Math.random() * 0.1,
            age: 0,
            maxAge: 40 + Math.floor(Math.random() * 20),
            alpha: 0
          }
          bolts.push(mainBolt)
        }, i * 200 + Math.random() * 300)
      }
      lastGroup = ts
    }

    let rafId: number
    function animate(ts: number = 0) {
      const dt = ts - lastGroup
      if (dt > groupInterval) spawnGroup(ts)

      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, W, H)

      ctx.globalCompositeOperation = 'lighter'
      ctx.lineCap = ctx.lineJoin = 'round'

      bolts.forEach((b) => {
        b.age++
        const half = b.maxAge * 0.3
        b.alpha = b.age < half ? b.age / half : 1 - (b.age - half) / (b.maxAge - half)
        if (b.age >= b.maxAge) return

        // Glow эффект
        ctx.shadowBlur = 15
        ctx.shadowColor = "rgba(162, 252, 252, 0.9)"

        // адаптивная толщина
        const isMobile = window.innerWidth < 768
        const thicknessFactor = isMobile ? 1 : 2
        const lineWidth = Math.max(0.5, Math.min(b.thickness * thicknessFactor, 4))

        ctx.strokeStyle = `rgba(162, 252, 252, ${b.alpha * 0.85})`
        ctx.lineWidth = lineWidth
        ctx.beginPath()
        ctx.moveTo(b.segments[0].x, b.segments[0].y)
        b.segments.slice(1).forEach(pt => ctx.lineTo(pt.x, pt.y))
        ctx.stroke()
      })

      if (bolts.length > 20) bolts.splice(0, bolts.length - 20)

      rafId = requestAnimationFrame(animate)
    }

    animate()
    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={styles.lightning}>
      <canvas className={styles['lightning--animate']} ref={canvasRef}/>
    </div>
  )
}
