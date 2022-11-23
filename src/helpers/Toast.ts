import Swal, { SweetAlertIcon, SweetAlertPosition } from 'sweetalert2';

const Toast = (position: SweetAlertPosition, icon: SweetAlertIcon, title: string) => {
    // type position = "top" | "bottom" | "left" | "right" | "center" | "top-end" | "botton-end" | "top-start"
    // | "bottom-start" | "center-start" | "center-end" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center-left" | "center-right" | undefined;
    const toast = Swal.mixin({
        toast: true,
        position: position,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    })

    // type icon = "success" | "error" | "warning" | "info" | "question"
    return toast.fire({
        icon: icon,
        title: title
    })
}

export default Toast;