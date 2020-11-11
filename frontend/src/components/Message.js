import React from 'react'
import { Toast } from 'react-bootstrap'

const Message = ({ variant, children }) => {
    return (
        <Toast variant={variant}>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
    )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
