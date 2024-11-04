"use client"

const ErrorBoundary = ({
  error,
  reset
}:{
  error: Error;
  reset: () => void;
}) => {
  return (
    <>
      <div>
        {error.message} &nbsp;
        <button onClick={reset}>try again</button>
      </div>
    </>
  )
}

export default ErrorBoundary;
