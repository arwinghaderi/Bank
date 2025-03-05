import React, { useState, ReactNode, ReactElement } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface SelectBoxProps {
  children: ReactNode
  selectedOption: string
  onSelect: (option: string) => void
}

const SelectBox: React.FC<SelectBoxProps> = ({
  children,
  selectedOption,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: string) => {
    onSelect(option)
    setIsOpen(false)
  }

return (
  <>
    <div className="relative inline-flex xs:w-25.5 xs:h-8 w-29 bg-transparent rounded-lg xs:px-1.5 xs:py-1.5 px-3 py-3 shadow-lg border border-blue-400 shadow-blue-400/50">
      <div
        className="flex gap-1.5 items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <div className="text-gray-1000">{selectedOption}</div>
        <span
          className={`transition-transform duration-300 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        >
          <IoIosArrowDown className="text-2xl text-gray-1000" />
        </span>
      </div>
      <div
        className={`absolute top-full mt-2 right-0 left-0 bg-white shadow-lg border border-blue-400 shadow-blue-400/50 w-full flex-col px-2 py-2 gap-1.5 text-gray-1000 font-shabnam text-base rounded-lg transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen
            ? 'opacity-100 max-h-64'
            : 'opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<{ children: string }>(child)) {
            return React.cloneElement(
              child as ReactElement<unknown> as ReactElement<{
                onClick: () => void
                className: string
              }>,
              {
                onClick: () => handleOptionClick(child.props.children),
                className: `cursor-pointer px-4 py-2 ${
                  child.props.children === selectedOption
                    ? 'bg-red-300 text-black opacity-75'
                    : ''
                }`,
              }
            )
          }
          return child
        })}
      </div>
    </div>
  </>
)

}

export default SelectBox
