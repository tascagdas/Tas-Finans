const Label = (props) => {
  return (

          <label {...props} className={`text-gray-700 dark:text-gray-300 block ${props.className}`} ></label>

  )
}

export default Label