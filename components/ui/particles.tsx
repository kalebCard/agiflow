"use client"

import { useEffect, useRef, useCallback, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  targetX: number
  targetY: number
  size: number
  opacity: number
  color: string
  type: ParticleType
  life: number
  maxLife: number
  trail: { x: number; y: number; opacity: number }[]
  energy: number
  magneticCharge: number
  friction: number
}

type ParticleType = "orbiter" | "floater" | "connector" | "morpher" | "attractor"

interface Formation {
  name: string
  points: { x: number; y: number }[]
  behavior: "static" | "rotating" | "pulsing" | "flowing"
}

interface ForceField {
  x: number
  y: number
  strength: number
  radius: number
  type: "attract" | "repel" | "vortex"
}

export function AdvancedParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([] as Particle[])
  const formationsRef = useRef<Formation[]>([])
  const forceFieldsRef = useRef<ForceField[]>([])
  const animationRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0, isActive: false })
  const currentFormationRef = useRef(0)
  const formationTransitionRef = useRef(0)
  const performanceRef = useRef({ fps: 60, frameCount: 0, lastTime: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  // Utility function to clamp values
  const clamp = useCallback((value: number, min: number, max: number) => {
    return Math.max(min, Math.min(max, value))
  }, [])

  // Utility function to ensure positive radius
  const ensurePositiveRadius = useCallback((radius: number) => {
    return Math.max(0.1, Math.abs(radius))
  }, [])

  // Advanced mathematical functions for shape generation
  const generateFormations = useCallback(
    (width: number, height: number): Formation[] => {
      const centerX = width / 2
      const centerY = height / 2
      const radius = Math.min(width, height) * 0.22 // Aumenta el radio base para mayor separación

      return [
        // DNA Helix
        {
          name: "DNA Helix",
          points: Array.from({ length: 60 }, (_, i) => {
            const t = (i / 60) * Math.PI * 4
            const y = centerY + (i - 30) * 10 // Aumenta el espaciado vertical en DNA Helix
            return {
              x: centerX + Math.cos(t) * radius * 0.8 + Math.sin(t * 2) * 15,
              y: clamp(y, 50, height - 50),
            }
          }),
          behavior: "flowing",
        },
        // Fibonacci Spiral
        {
          name: "Fibonacci Spiral",
          points: Array.from({ length: 80 }, (_, i) => {
            const angle = i * 0.618 * 2 * Math.PI // Golden ratio
            const r = Math.sqrt(i) * 10 // Aumenta el crecimiento del radio en Fibonacci Spiral
            return {
              x: clamp(centerX + Math.cos(angle) * r, 50, width - 50),
              y: clamp(centerY + Math.sin(angle) * r, 50, height - 50),
            }
          }),
          behavior: "rotating",
        },
        // Neural Network
        {
          name: "Neural Network",
          points: (() => {
            const layers = [6, 10, 12, 10, 4] // Reduced node counts
            const points: { x: number; y: number }[] = []
            layers.forEach((nodeCount, layerIndex) => {
              const layerX = clamp(centerX + (layerIndex - 2) * 160, 100, width - 100) // Más separación horizontal en Neural Network
              for (let i = 0; i < nodeCount; i++) {
                const layerY = clamp(centerY + (i - nodeCount / 2) * 55, 50, height - 50) // Más separación vertical en Neural Network
                points.push({ x: layerX, y: layerY })
              }
            })
            return points
          })(),
          behavior: "pulsing",
        },
        // Mandala Pattern
        {
          name: "Mandala",
          points: Array.from({ length: 96 }, (_, i) => {
            const layer = Math.floor(i / 24)
            const angleStep = (Math.PI * 2) / 24
            const angle = (i % 24) * angleStep
            const r = (layer + 1) * 40 // Más separación en Mandala
            const petals = 6
            const petalRadius = Math.sin(angle * petals) * 12
            return {
              x: clamp(centerX + Math.cos(angle) * (r + petalRadius), 50, width - 50),
              y: clamp(centerY + Math.sin(angle) * (r + petalRadius), 50, height - 50),
            }
          }),
          behavior: "rotating",
        },
        // Molecular Structure
        {
          name: "Molecule",
          points: (() => {
            const points: { x: number; y: number }[] = []
            // Central atom
            points.push({ x: centerX, y: centerY })
            // Electron shells
            for (let shell = 1; shell <= 3; shell++) {
              const electrons = shell === 1 ? 2 : shell === 2 ? 6 : 12 // Reduced electron count
              for (let e = 0; e < electrons; e++) {
                const angle = (e / electrons) * Math.PI * 2
                const r = shell * 70 // Más separación en Molecular Structure
                points.push({
                  x: clamp(centerX + Math.cos(angle) * r, 50, width - 50),
                  y: clamp(centerY + Math.sin(angle) * r, 50, height - 50),
                })
              }
            }
            return points
          })(),
          behavior: "rotating",
        },
        // Wave Interference
        {
          name: "Wave Interference",
          points: Array.from({ length: 64 }, (_, i) => {
            const x = (i % 8) * (width / 7) + width / 14 // Menos densidad en Wave Interference
            const y = Math.floor(i / 8) * (height / 7) + height / 14
            const wave1 = Math.sin((x - centerX) * 0.015) * 20 // Reduced amplitude
            const wave2 = Math.sin((y - centerY) * 0.015) * 20
            return {
              x: clamp(x + wave1, 50, width - 50),
              y: clamp(y + wave2, 50, height - 50),
            }
          }),
          behavior: "flowing",
        },
      ]
    },
    [clamp],
  )

  // Utilidad para obtener el valor real de una variable CSS y convertirlo a hsl/hsla
  function getCssHslVariable(variableName: string, alpha?: number): string {
    const root = document.documentElement;
    let value = getComputedStyle(root).getPropertyValue(variableName).trim();
    // value esperado: '222 21% 27%'
    if (!value) return 'hsl(0,0%,0%)';
    // Reemplazar espacios por comas para formato canvas
    value = value.replace(/\s+/g, ', ');
    if (alpha !== undefined) {
      return `hsla(${value}, ${alpha})`;
    }
    return `hsl(${value})`;
  }

  const createParticle = useCallback(
    (x: number, y: number, type: ParticleType): Particle => {
      // Obtener el color real de la variable CSS al crear el partícula
      let color = getCssHslVariable('--brand-neutral', 0.1);
      if (type === 'connector') color = getCssHslVariable('--brand-primary', 0.25);
      // Puedes personalizar más según el tipo si lo deseas
      return {
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        vx: (Math.random() - 0.5) * 1.5, // Reduced velocity
        vy: (Math.random() - 0.5) * 1.5,
        targetX: x,
        targetY: y,
        size: clamp(Math.random() * 2 + 1, 0.5, 4), // Ensure minimum size
        opacity: clamp(Math.random() * 0.8 + 0.2, 0.1, 1),
        color,
        type,
        life: 0,
        maxLife: 1000 + Math.random() * 2000,
        trail: [],
        energy: clamp(Math.random() * 100 + 50, 10, 150),
        magneticCharge: Math.random() > 0.5 ? 1 : -1,
        friction: clamp(0.90 + Math.random() * 0.09, 0.90, 0.99),
      }
    },
    [clamp],
  )

  const updateParticlePhysics: (
    particle: Particle,
    time: number,
    allParticles: Particle[]
  ) => void = useCallback(
    (particle, time, allParticles) => {
      const mouse = mouseRef.current

      // Age the particle
      particle.life++

      // Apply different behaviors based on particle type
      switch (particle.type) {
        case "orbiter":
          // Orbital motion around target
          const orbitRadius = clamp(15 + Math.sin(time * 0.001 + particle.life * 0.01) * 8, 5, 25)
          const orbitAngle = time * 0.002 + particle.life * 0.005
          particle.targetX += Math.cos(orbitAngle) * orbitRadius * 0.08
          particle.targetY += Math.sin(orbitAngle) * orbitRadius * 0.08
          break

        case "floater":
          // Floating motion with perlin-like noise
          particle.targetX += Math.sin(time * 0.001 + particle.life * 0.003) * 0.4
          particle.targetY += Math.cos(time * 0.0015 + particle.life * 0.002) * 0.25
          break

        case "connector":
          // Attracted to nearby particles
          let nearestParticle = null as Particle | null
          let minDistance = Number.POSITIVE_INFINITY
          if (Array.isArray(allParticles)) {
            allParticles.forEach((other: Particle) => {
              if (other !== particle && other.type === "connector") {
                const dx = other.x - particle.x
                const dy = other.y - particle.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                if (distance < minDistance && distance < 80) {
                  minDistance = distance
                  nearestParticle = other
                }
              }
            })
          }
          if (nearestParticle !== null) {
            const attraction = 0.015
            particle.vx += (nearestParticle.x - particle.x) * attraction
            particle.vy += (nearestParticle.y - particle.y) * attraction
          }
          break

        case "morpher":
          // Morphs between different states
          const morphPhase = Math.sin(time * 0.003 + particle.life * 0.001)
          particle.size = clamp(1 + Math.abs(morphPhase) * 2, 0.5, 4)
          particle.opacity = clamp(0.3 + Math.abs(morphPhase) * 0.6, 0.1, 1)
          break

        case "attractor":
          // Attracts other particles
          if (mouse.isActive) {
            const dx = mouse.x - particle.x
            const dy = mouse.y - particle.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            if (distance < 120 && distance > 0) {
              const force = clamp(((120 - distance) / 120) * 0.03, 0, 0.1)
              particle.vx += (dx / distance) * force
              particle.vy += (dy / distance) * force
            }
          }
          break
      }

      // Apply force fields
      forceFieldsRef.current.forEach((field) => {
        const dx = field.x - particle.x
        const dy = field.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < field.radius && distance > 0) {
          const force = clamp(((field.radius - distance) / field.radius) * field.strength, 0, 0.1)
          switch (field.type) {
            case "attract":
              particle.vx += (dx / distance) * force
              particle.vy += (dy / distance) * force
              break
            case "repel":
              particle.vx -= (dx / distance) * force
              particle.vy -= (dy / distance) * force
              break
            case "vortex":
              const perpX = -dy / distance
              const perpY = dx / distance
              particle.vx += perpX * force
              particle.vy += perpY * force
              break
          }
        }
      })

      // Move towards target with spring physics
      const springStrength = 0.015
      const damping = particle.friction
      const dx = particle.targetX - particle.x
      const dy = particle.targetY - particle.y

      particle.vx += dx * springStrength
      particle.vy += dy * springStrength
      particle.vx = clamp(particle.vx * damping, -5, 5)
      particle.vy = clamp(particle.vy * damping, -5, 5)

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Keep particles in bounds
      const canvas = canvasRef.current
      if (canvas) {
        particle.x = clamp(particle.x, 10, canvas.width / window.devicePixelRatio - 10)
        particle.y = clamp(particle.y, 10, canvas.height / window.devicePixelRatio - 10)
      }

      // Update trail
      particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity })
      if (particle.trail.length > 8) {
        particle.trail.shift()
      }

      // Fade trail
      particle.trail.forEach((point) => {
        point.opacity = clamp(point.opacity * 0.9, 0, 1)
      })

      // Lifecycle management
      if (particle.life > particle.maxLife) {
        particle.life = 0
        particle.energy = clamp(Math.random() * 100 + 50, 10, 150)
      }
    },
    [clamp],
  )

  const drawParticle = useCallback(
    (ctx: CanvasRenderingContext2D, particle: Particle, time: number) => {
      // Validate particle properties
      const safeSize = ensurePositiveRadius(particle.size)
      const safeOpacity = clamp(particle.opacity, 0, 1)
      const safeX = clamp(particle.x, 0, ctx.canvas.width)
      const safeY = clamp(particle.y, 0, ctx.canvas.height)

      // Draw trail
      if (particle.trail.length > 1) {
        ctx.beginPath()
        ctx.moveTo(particle.trail[0].x, particle.trail[0].y)
        for (let i = 1; i < particle.trail.length; i++) {
          ctx.lineTo(particle.trail[i].x, particle.trail[i].y)
        }
        ctx.strokeStyle = particle.color
        ctx.lineWidth = 1
        ctx.stroke()
      }

      // Draw particle glow
      const glowSize = ensurePositiveRadius(safeSize * 6)
      const glowGradient = ctx.createRadialGradient(safeX, safeY, 0, safeX, safeY, glowSize)
      glowGradient.addColorStop(0, particle.color)
      glowGradient.addColorStop(1, particle.color.replace(/, [\d.]+\)$/, ', 0)'))

      ctx.beginPath()
      ctx.arc(safeX, safeY, glowSize, 0, Math.PI * 2)
      ctx.fillStyle = glowGradient
      ctx.fill()

      // Draw particle core with type-specific effects
      ctx.beginPath()
      switch (particle.type) {
        case "orbiter":
          ctx.arc(safeX, safeY, safeSize * 2.2, 0, Math.PI * 2)
          break
        case "floater":
          const floatPhase = Math.sin(time * 0.005 + particle.life * 0.01)
          const floatSize = ensurePositiveRadius(safeSize * (1 + floatPhase * 0.2) * 2.2)
          ctx.arc(safeX, safeY, floatSize, 0, Math.PI * 2)
          break
        case "connector":
          const rectSize = safeSize * 2.2
          ctx.rect(safeX - rectSize / 2, safeY - rectSize / 2, rectSize, rectSize)
          break
        case "morpher":
          const sides = clamp(3 + Math.floor(Math.abs(Math.sin(time * 0.003 + particle.life * 0.001)) * 4), 3, 8)
          const angle = (Math.PI * 2) / sides
          ctx.moveTo(safeX + safeSize * 2.2, safeY)
          for (let i = 1; i < sides; i++) {
            const x = safeX + Math.cos(i * angle) * safeSize * 2.2
            const y = safeY + Math.sin(i * angle) * safeSize * 2.2
            ctx.lineTo(x, y)
          }
          ctx.closePath()
          break
        case "attractor":
          // Draw as a star
          const spikes = 5
          const outerRadius = safeSize * 2.2
          const innerRadius = ensurePositiveRadius(safeSize * 1.1)
          let rot = (Math.PI / 2) * 3
          const step = Math.PI / spikes
          ctx.moveTo(safeX, safeY - outerRadius)
          for (let i = 0; i < spikes; i++) {
            const x = safeX + Math.cos(rot) * outerRadius
            const y = safeY + Math.sin(rot) * outerRadius
            ctx.lineTo(x, y)
            rot += step
            const x2 = safeX + Math.cos(rot) * innerRadius
            const y2 = safeY + Math.sin(rot) * innerRadius
            ctx.lineTo(x2, y2)
            rot += step
          }
          ctx.lineTo(safeX, safeY - outerRadius)
          break
      }

      ctx.fillStyle = particle.color
      ctx.fill()

      // Add energy visualization for attractors
      if (particle.type === "attractor") {
        const energyRadius = ensurePositiveRadius(safeSize * 3.2 + Math.sin(time * 0.01) * 6)
        ctx.beginPath()
        ctx.arc(safeX, safeY, energyRadius, 0, Math.PI * 2)
        ctx.strokeStyle = particle.color
        ctx.lineWidth = 2.5
        ctx.stroke()
      }
    },
    [ensurePositiveRadius, clamp],
  )

  const drawConnections = useCallback(
    (ctx: CanvasRenderingContext2D, particles: Particle[]) => {
      particles.forEach((particle, index) => {
        if (particle.type === "connector") {
          particles.slice(index + 1).forEach((otherParticle) => {
            if (otherParticle.type === "connector") {
              const dx = particle.x - otherParticle.x
              const dy = particle.y - otherParticle.y
              const distance = Math.sqrt(dx * dx + dy * dy)

              if (distance < 100 && distance > 0) {
                const opacity = clamp((1 - distance / 100) * 0.25, 0, 1)
                ctx.beginPath()
                ctx.moveTo(particle.x, particle.y)
                ctx.lineTo(otherParticle.x, otherParticle.y)
                ctx.strokeStyle = getCssHslVariable('--brand-primary', opacity)
                ctx.lineWidth = 1.5
                ctx.stroke()
              }
            }
          })
        }
      })
    },
    [clamp],
  )

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let isInitialized = false

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.scale(dpr, dpr)

      if (!isInitialized) {
        initializeSystem()
        isInitialized = true
      }
    }

    const initializeSystem = () => {
      // Generate formations
      formationsRef.current = generateFormations(window.innerWidth, window.innerHeight)

      // Create particles
      const formation = formationsRef.current[0]
      const particleTypes: ParticleType[] = ["orbiter", "floater", "connector", "morpher", "attractor"]

      // Limit particle count for performance
      const maxParticles = Math.min(formation.points.length, window.innerWidth < 768 ? 40 : 80)
      particlesRef.current = formation.points.slice(0, maxParticles).map((point, index) => {
        const type = particleTypes[index % particleTypes.length]
        return createParticle(point.x, point.y, type)
      })

      // Create force fields
      forceFieldsRef.current = [
        {
          x: window.innerWidth * 0.2,
          y: window.innerHeight * 0.3,
          strength: 0.015,
          radius: 80,
          type: "attract",
        },
        {
          x: window.innerWidth * 0.8,
          y: window.innerHeight * 0.7,
          strength: 0.01,
          radius: 60,
          type: "vortex",
        },
      ]

      setIsLoaded(true)
    }

    const animate = (time: number) => {
      try {
        // Performance monitoring
        const perf = performanceRef.current
        perf.frameCount++
        if (time - perf.lastTime >= 1000) {
          perf.fps = Math.round((perf.frameCount * 1000) / (time - perf.lastTime))
          perf.frameCount = 0
          perf.lastTime = time

          // Adaptive quality based on performance
          if (perf.fps < 25 && particlesRef.current.length > 30) {
            particlesRef.current = particlesRef.current.slice(0, Math.floor(particlesRef.current.length * 0.8))
          }
        }

        // Clear canvas
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

        // Formation transition logic
        formationTransitionRef.current += 0.0008 // Slower transitions
        if (formationTransitionRef.current > 1) {
          formationTransitionRef.current = 0
          currentFormationRef.current = (currentFormationRef.current + 1) % formationsRef.current.length

          // Update particle targets to new formation
          const newFormation = formationsRef.current[currentFormationRef.current]
          particlesRef.current.forEach((particle, index) => {
            if (index < newFormation.points.length) {
              particle.targetX = newFormation.points[index].x
              particle.targetY = newFormation.points[index].y
            }
          })
        }

        // Update and draw particles
        particlesRef.current.forEach((particle) => {
          updateParticlePhysics(particle, time, particlesRef.current)
          drawParticle(ctx, particle, time)
        })

        // Draw connections
        drawConnections(ctx, particlesRef.current)

        animationRef.current = requestAnimationFrame(animate)
      } catch (error) {
        console.error("Animation error:", error)
        // Continue animation even if there's an error
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        isActive: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false
    }

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const touch = e.touches[0]
      if (touch) {
        mouseRef.current = {
          x: touch.clientX,
          y: touch.clientY,
          isActive: true,
        }
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current.isActive = false
    }

    resizeCanvas()
    animate(0)

    window.addEventListener("resize", resizeCanvas)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("touchmove", handleTouchMove, { passive: false })
    window.addEventListener("touchend", handleTouchEnd)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [
    generateFormations,
    createParticle,
    updateParticlePhysics,
    drawParticle,
    drawConnections,
    clamp,
    ensurePositiveRadius,
  ])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background: "transparent",
        willChange: "transform",
        opacity: 1,
        transition: undefined,
      }}
    />
  )
}
