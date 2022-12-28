import { toast } from 'react-toastify';

const useToast = (message, type) => {
  const config = {
    position: 'bottom-center',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: false,
    theme: 'dark',
  };

  switch (type) {
    case 'success':
      return toast.success(message, config);
    case 'error':
      return toast.error(message, config);
    case 'warning':
      return toast.warning(message, config);
    default:
      return toast(message, config);
  }
};

export default useToast;
