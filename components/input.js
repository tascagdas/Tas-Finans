import { forwardRef } from "react"

export default forwardRef( function Input(props, ref) {
    const styles = {
        'checkbox': 'rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm disabled:opacity-75',
        'file':'file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:opacity-50 dark:textgray-400',
        'default': 'w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 file:dark:bg-gray-100 disabled:opacity-75'
    }
    return <input ref={ref} {...props} className={`${styles[props.type] ?? styles['default']} ${props.className}`} />
})