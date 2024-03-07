
import "@styles/global.css"

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className=" min-h-[100vh] px-4 py-2 w-full overflow-x-hidden bg-[#fdfdfd] text-[#343434] font-[calistoga]">
        {
          children
        }

      </body>
    </html>
  )
}

export default layout
