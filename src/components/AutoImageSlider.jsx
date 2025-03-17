import { useState, useEffect, useRef } from "react"

export default function MultiItemSlider({ items = [] }) {
  const [position, setPosition] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [isJumping, setIsJumping] = useState(false)

  const sliderRef = useRef(null)
  const animationRef = useRef(null)
  const sliderContentRef = useRef(null)

  // Default items if none provided
  const defaultItems = [
    {
      image: "/placeholder.svg?height=300&width=400&text=Project+1",
    },
    {
      image: "/placeholder.svg?height=300&width=400&text=Project+2",
    },
    {
      image: "/placeholder.svg?height=300&width=400&text=Project+3",
    },
    {
      image: "/placeholder.svg?height=300&width=400&text=Project+4",
    },
    {
      image: "/placeholder.svg?height=300&width=400&text=Project+5",
    },
    {
      image: "/placeholder.svg?height=300&width=400&text=Project+6",
    },
  ]

  const sliderItems = items.length > 0 ? items : defaultItems

  // Clone items for infinite scrolling - add clones at both beginning and end
  const extendedItems = [
    ...sliderItems.slice(sliderItems.length - 3), // Last 3 items at the beginning
    ...sliderItems,
    ...sliderItems.slice(0, 3), // First 3 items at the end
  ]

  // Calculate item width based on responsive design
  const getItemWidth = () => {
    if (!sliderRef.current) return 0
    const containerWidth = sliderRef.current.offsetWidth
    // Show 3 items on desktop, 2 on tablet, 1 on mobile
    if (containerWidth >= 1024) return containerWidth / 3
    if (containerWidth >= 640) return containerWidth / 2
    return containerWidth
  }

  // Calculate total width of original items
  const getTotalWidth = () => {
    return sliderItems.length * getItemWidth()
  }

  // Calculate width of cloned items at the beginning
  const getCloneWidth = () => {
    return 3 * getItemWidth() // 3 cloned items at the beginning
  }

  // Initialize position to show the first real item (after clones)
  useEffect(() => {
    setPosition(getCloneWidth())
  }, [])

  // Check if we need to jump to maintain the infinite illusion
  const checkInfiniteJump = () => {
    if (isJumping) return

    const itemWidth = getItemWidth()
    const totalWidth = getTotalWidth()
    const cloneWidth = getCloneWidth()

    // If we've scrolled past the end clones
    if (position >= totalWidth + cloneWidth) {
      setIsJumping(true)
      // Jump back to the beginning (after first set of clones)
      setPosition(cloneWidth)
      setTimeout(() => setIsJumping(false), 50)
    }

    // If we've scrolled before the beginning clones
    else if (position <= 0) {
      setIsJumping(true)
      // Jump to the end (before last set of clones)
      setPosition(totalWidth)
      setTimeout(() => setIsJumping(false), 50)
    }
  }

  // Smooth scrolling animation - increased speed
  const animate = () => {
    if (isHovering || isDragging) return

    setPosition((prevPosition) => {
      const newPosition = prevPosition + 1.5 // Increased speed
      return newPosition
    })

    checkInfiniteJump()
    animationRef.current = requestAnimationFrame(animate)
  }

  // Start animation
  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isHovering, isDragging])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      // Reset position to the beginning of real items
      setPosition(getCloneWidth())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Handle mouse down event to start dragging
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.clientX)

    // Prevent default behavior
    e.preventDefault()
  }

  // Handle touch start event for mobile
  const handleTouchStart = (e) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  // Handle mouse move event while dragging
  const handleMouseMove = (e) => {
    if (!isDragging) return

    const currentX = e.clientX
    const diff = startX - currentX

    // Update position based on drag - no boundaries for infinite scrolling
    setPosition((prevPosition) => prevPosition + diff)
    setStartX(currentX)
  }

  // Handle touch move event for mobile
  const handleTouchMove = (e) => {
    if (!isDragging) return

    const currentX = e.touches[0].clientX
    const diff = startX - currentX

    // Update position based on drag - no boundaries for infinite scrolling
    setPosition((prevPosition) => prevPosition + diff)
    setStartX(currentX)
  }

  // Handle mouse up event to stop dragging
  const handleMouseUp = () => {
    setIsDragging(false)
    checkInfiniteJump()
  }

  // Handle touch end event for mobile
  const handleTouchEnd = () => {
    setIsDragging(false)
    checkInfiniteJump()
  }

  // Add event listeners for mouse and touch events
  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    // Add event listeners
    slider.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    // Touch events for mobile
    slider.addEventListener("touchstart", handleTouchStart)
    window.addEventListener("touchmove", handleTouchMove)
    window.addEventListener("touchend", handleTouchEnd)

    // Cleanup
    return () => {
      slider.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)

      slider.removeEventListener("touchstart", handleTouchStart)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("touchend", handleTouchEnd)
    }
  }, [isDragging, startX, position])

  return (
    <div
      className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      ref={sliderRef}
    >
      <div
        ref={sliderContentRef}
        className="flex"
        style={{
          transform: `translateX(-${position}px)`,
          transition: isDragging || isJumping ? "none" : "transform 0.3s ease",
        }}
      >
        {extendedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex-shrink-0 px-2" style={{ width: `${getItemWidth()}px` }}>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover"
                draggable="false" // Prevent image dragging
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

