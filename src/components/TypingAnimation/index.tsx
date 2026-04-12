import { useEffect, useState } from 'react'

interface TypingAnimationProps {
  strings: string[]
  speed?: number
  deleteSpeed?: number
  pause?: number
}

export default function TypingAnimation({
  strings,
  speed = 80,
  deleteSpeed = 40,
  pause = 2000
}: TypingAnimationProps) {
  const [text, setText] = useState('')
  const [stringIndex, setStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = strings[stringIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.slice(0, text.length + 1))
        if (text.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pause)
        }
      } else {
        setText(current.slice(0, text.length - 1))
        if (text.length === 0) {
          setIsDeleting(false)
          setStringIndex((stringIndex + 1) % strings.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, stringIndex, strings, speed, deleteSpeed, pause])

  return (
    <span className="typing-text">
      {text}
      <span className="typing-cursor">|</span>
    </span>
  )
}
