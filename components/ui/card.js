export const Card = ({ className = '', children }) => <article className={`card ${className}`}>{children}</article>
export const CardHeader = ({ className = '', children }) => <div className={`card-body ${className}`}>{children}</div>
export const CardTitle = ({ className = '', children }) => <h3 className={className} style={{ margin: 0, fontSize: '1.1rem' }}>{children}</h3>
export const CardDescription = ({ className = '', children }) => <p className={`muted ${className}`} style={{ marginTop: '.5rem' }}>{children}</p>
export const CardContent = ({ className = '', children }) => <div className={`card-body ${className}`}>{children}</div>
export const CardFooter = ({ className = '', children }) => <div className={`card-footer ${className}`}>{children}</div>
