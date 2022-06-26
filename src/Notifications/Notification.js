import './Notification.css'
import { useState, createContext, useContext } from "react";
import { PriorityHigh } from '@mui/icons-material';
const Notification = ( {message, severity} ) => {



    const notificationStyle = {
        position: 'absolute',
        color: '#111',
        top: '100px',
        right: '5px',
        zIndex: '9999',
        width: 'auto',
        height: 'auto',
        borderRadius: '5px',
        backgroundColor: '#fff',
        padding: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontSize: '14px',
        fontWeight: '500',
    }

    const config = true ? {
        style: notificationStyle,
        className : `${severity === 'error' ? 'Error' : 'Success'}`,
    } : {}

    if(!message) return null;

    return (
        <div className="notification" >
            <div {...config }>
                <div className="notification_icon">
                <PriorityHigh fontSize="small" color="success" />
                </div>
                <div className="notification_content_text">
                    <p>{ message }</p>
                </div>
            </div>
        </div>

    )
}

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
    const [notification, setNotification] = useState({
        message: '',
        severity: 'sucess'
    })  // estado de la notificacion

    const showNotification = (message, severity) => {
        setNotification({message, severity})
        setTimeout(() => {
        setNotification({...notification, message: '', severity: 'success'})
        }, 3000)
    }

    return (
        <NotificationContext.Provider value={showNotification }>
            {notification.message !== '' && <Notification message={notification.message} severity={notification.severity} />}
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    const showNotification = useContext(NotificationContext);
    return showNotification;
}