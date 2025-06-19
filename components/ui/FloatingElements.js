const FloatingElements = () => (
  <>
    <div className="fixed top-20 left-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20 animate-float"></div>
    <div className="fixed bottom-1/4 right-20 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
    <div className="fixed top-1/3 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
  </>
)

export default FloatingElements