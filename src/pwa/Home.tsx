import { useState } from "react"
import createContext from "../hooks/createContext"
import My from "./My"

interface PWA {
  refresh: () => void
}

export const [usePWA, PWAProvider] = createContext<PWA>("usePWA")

const Home = () => {
  const [key, setKey] = useState(0)

  return (
    <PWAProvider value={{ refresh: () => setKey((k) => k + 1) }}>
      <My key={key} />
    </PWAProvider>
  )
}

export default Home
