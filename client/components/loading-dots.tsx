interface LoadingDotsProps {
  className?: string
}

export function LoadingDots({ className = '' }: LoadingDotsProps) {
  return (
    <div className={`flex items-center justify-center space-x-2 ${className}`}>
      <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
      <div className="w-2 h-2 bg-secondary rounded-full animate-bounce [animation-delay:0.2s]" />
      <div className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.4s]" />
    </div>
  )
}

