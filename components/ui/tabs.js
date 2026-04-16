import { useState } from 'react'

export function Tabs({ defaultValue, children }) {
  const [value, setValue] = useState(defaultValue)
  const mapped = {}
  children.forEach(child => {
    if (!child) return
    if (child.type.displayName === 'TabsList') mapped.list = child
    if (child.type.displayName === 'TabsContent') {
      mapped.contents = mapped.contents || []
      mapped.contents.push(child)
    }
  })

  return (
    <div>
      {mapped.list ? mapped.list.type({ ...mapped.list.props, value, onChange: setValue }) : null}
      {(mapped.contents || []).map(content =>
        content.props.value === value ? <div key={content.props.value} style={{ marginTop: '1rem' }}>{content.props.children}</div> : null
      )}
    </div>
  )
}

export function TabsList({ children, value, onChange }) {
  return (
    <div className="panel" style={{ display: 'inline-flex', gap: '.45rem', padding: '.35rem' }}>
      {children.map(trigger => trigger.type({ ...trigger.props, active: trigger.props.value === value, onChange }))}
    </div>
  )
}
TabsList.displayName = 'TabsList'

export function TabsTrigger({ value, active, onChange, children }) {
  return (
    <button className={`btn ${active ? 'btn-primary' : 'btn-ghost'}`} onClick={() => onChange(value)}>
      {children}
    </button>
  )
}

export function TabsContent() {
  return null
}
TabsContent.displayName = 'TabsContent'
