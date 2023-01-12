import toast, { Toast } from 'react-hot-toast';

const defaultToastOptions: Partial<Toast> = {
    position: 'top-right',
    duration: 4000
}

export const successToast = (message: string) => {
    toast.success(message, defaultToastOptions);
}

export const errorToast = (message: string) => {
    toast.error(message, defaultToastOptions);
}