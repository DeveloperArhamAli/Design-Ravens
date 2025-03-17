"use client"

import { useState, useEffect, useRef } from "react"
import { X } from "lucide-react"

export default function MultiItemSlider({ items = [] }) {
  const [position, setPosition] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [isJumping, setIsJumping] = useState(false)
  const [dragStartTime, setDragStartTime] = useState(0)
  const [selectedItem, setSelectedItem] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const sliderRef = useRef(null)
  const animationRef = useRef(null)
  const sliderContentRef = useRef(null)

  // Default items if none provided
  const defaultItems = [
    {
      id: 1,
      image: "/placeholder.svg?height=300&width=400&text=Project+1",
      title: "Project 1",
      description: "Web Design & Development",
      fullDescription:
        "A complete web design and development project featuring responsive design, modern UI/UX principles, and optimized performance.",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=300&width=400&text=Project+2",
      title: "Project 2",
      description: "E-commerce Solution",
      fullDescription:
        "A comprehensive e-commerce platform with secure payment processing, inventory management, and customer relationship tools.",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=300&width=400&text=Project+3",
      title: "Project 3",
      description: "Corporate Website",
      fullDescription:
        "A professional corporate website designed to showcase the company's services, team, and values with a focus on brand consistency.",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=300&width=400&text=Project+4",
      title: "Project 4",
      description: "Portfolio Website",
      fullDescription:
        "A creative portfolio website that highlights work samples, case studies, and achievements with an emphasis on visual presentation.",
    },
    {
      id: 5,
      image: "/placeholder.svg?height=300&width=400&text=Project+5",
      title: "Project 5",
      description: "Landing Page",
      fullDescription:
        "A high-converting landing page designed to capture leads and drive conversions with clear calls-to-action and persuasive content.",
    },
    {
      id: 6,
      image: "/placeholder.svg?height=300&width=400&text=Project+6",
      title: "Project 6",
      description: "Blog Website",
      fullDescription:
        "A content-focused blog platform with categories, search functionality, and social sharing capabilities to engage readers.",
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
    if (isHovering || isDragging || isPopupOpen) return

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
  }, [isHovering, isDragging, isPopupOpen])

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
    // Don't start dragging if we clicked on a button or interactive element
    if (e.target.tagName === "BUTTON") return

    setIsDragging(true)
    setStartX(e.clientX)
    setDragStartTime(Date.now())

    // Prevent default behavior
    e.preventDefault()
  }

  // Handle touch start event for mobile
  const handleTouchStart = (e) => {
    // Don't start dragging if we touched on a button or interactive element
    if (e.target.tagName === "BUTTON") return

    setIsDragging(true)
    setStartX(e.touches[0].clientX)
    setDragStartTime(Date.now())
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
  const handleMouseUp = (e) => {
    if (!isDragging) return

    const dragEndTime = Date.now()
    const dragDuration = dragEndTime - dragStartTime

    setIsDragging(false)
    checkInfiniteJump()

    // If the drag was very short (like a click) and didn't move much, treat it as a click
    if (dragDuration < 200 && Math.abs(e.clientX - startX) < 10) {
      handleItemClick(e)
    }
  }

  // Handle touch end event for mobile
  const handleTouchEnd = () => {
    if (!isDragging) return

    const dragEndTime = Date.now()
    const dragDuration = dragEndTime - dragStartTime

    setIsDragging(false)
    checkInfiniteJump()

    // For touch, we can't easily detect a tap vs. a drag, so we rely on duration
    if (dragDuration < 200) {
      // This is a tap, but we need to find which item was tapped
      // This is handled by the onClick on the item itself
    }
  }

  // Handle item click to open popup
  const handleItemClick = (e) => {
    // Find the closest parent with data-item-index
    let target = e.target
    while (target && !target.dataset.itemIndex) {
      target = target.parentElement
    }

    if (target && target.dataset.itemIndex) {
      const index = Number.parseInt(target.dataset.itemIndex)
      const item = extendedItems[index]

      if (item) {
        setSelectedItem(item)
        setIsPopupOpen(true)
        document.body.style.overflow = "hidden" // Prevent scrolling when popup is open
      }
    }
  }

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false)
    setSelectedItem(null)
    document.body.style.overflow = "" // Restore scrolling
  }

  // Handle escape key to close popup
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isPopupOpen) {
        closePopup()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isPopupOpen])

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
    <>
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
            <div
              key={`${item.id}-${index}`}
              className="flex-shrink-0 px-2"
              style={{ width: `${getItemWidth()}px` }}
              data-item-index={index}
              onClick={!isDragging ? handleItemClick : undefined}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden h-96 transition-transform hover:scale-[1.02] cursor-pointer">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  draggable="false" // Prevent image dragging
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup/Modal */}
      {isPopupOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={closePopup}>
          <div
            className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
          >
            <div className="relative">
              <img
                src={selectedItem.image || "/placeholder.svg"}
                alt={selectedItem.title}
                className="w-full h-full md:h-full object-cover rounded-t-lg"
              />
              <button
                className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
                onClick={closePopup}
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}