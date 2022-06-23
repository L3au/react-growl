import { useState, useRef, useEffect } from 'react'

type Result = [boolean, (active: boolean) => void]

export function useGrowl(timeout: number = 3000): Result {
  // state of the growl
  const [growlActive, setGrowlActive] = useState(false)
  const timerRef = useRef<number>()

  useEffect(() => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current)
    }

    if (growlActive) {
      timerRef.current = window.setTimeout(() => {
        setGrowlActive(false)
      }, timeout)
    }
  }, [growlActive, timeout])

  return [
    // the first arg is the state
    growlActive,

    // the second arg is a fn that allows you to safely set its state
    (active: boolean) => {
      setGrowlActive(active)
    }
  ]
}
