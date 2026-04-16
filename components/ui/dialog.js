import { useState } from 'react'

export function Dialog({ children }) {
  const [open, setOpen] = useState(false)
  return children({ open, setOpen })
}

export function DialogTrigger({ children, onOpen }) {
  return <span onClick={onOpen}>{children}</span>
}

export function DialogContent({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="menu-sheet" onClick={onClose}>
      <div className="menu-panel" onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
