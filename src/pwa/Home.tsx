import { useState } from "react"
import My from "./My"

const Home = () => {
  const [key, setKey] = useState(0)

  return (
    <div onClick={() => setKey(key + 1)}>
      <My key={key} />
    </div>
  )
}

export default Home
