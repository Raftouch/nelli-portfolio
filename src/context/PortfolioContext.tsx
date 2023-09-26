import { createContext, useState } from 'react'

interface MyPortfolioContext {
  modal: boolean
  dark: boolean
  open: () => void
  close: () => void
  style: () => void
}

export const PortfolioContext = createContext<MyPortfolioContext>({
  modal: false,
  dark: false,
  open: () => {},
  close: () => {},
  style: () => {},
})

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false)
  const [dark, setDark] = useState(false)
  const open = () => setModal(true)
  const close = () => setModal(false)
  const style = () => setDark((prevDark) => !prevDark)

  return (
    <PortfolioContext.Provider value={{ modal, dark, open, close, style }}>
      {children}
    </PortfolioContext.Provider>
  )
}
