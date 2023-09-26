import React, { useContext, useMemo } from 'react'
import { PortfolioContext } from '../context/PortfolioContext'

interface StyleProps {
  children: React.ReactNode
}

export default function Style({ children }: StyleProps) {
  const { dark } = useContext(PortfolioContext)

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    }
  }, [dark])
  return <div style={themeStyles}>{children}</div>
}
