export function Button({ variant = 'primary', className = '', as = 'button', children, ...props }) {
  const classes = `btn ${variant === 'outline' ? 'btn-outline' : variant === 'ghost' ? 'btn-ghost' : 'btn-primary'} ${className}`.trim()
  const Comp = as
  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  )
}
