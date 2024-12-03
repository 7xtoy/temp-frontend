import clsx from "clsx"

const ContentWrapper = ({children}) => {
  return (
    <main className="w-full flex flex-col items-center py-10 md:px-0 px-4">{children}</main>
  )
}

export default ContentWrapper