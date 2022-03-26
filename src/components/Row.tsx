import React from 'react'
import { RowProps } from '../types'

const Row = React.memo(({ title, value, ...props }: RowProps) => {
    return (
        <li className="flex align-items-center py-2 px-2 border-top-1 border-300 flex-wrap">
            <div className="text-500 w-6 md:w-2 font-medium">{title}</div>
            <div className="text-900 w-full md:w-8 md:flex-order-0 flex-order-1">{value}</div>
        </li>
    )
})

export default Row