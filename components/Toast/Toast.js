import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';

export class MessageToast {

    success(title, subtitle) {
        return () => {
            Toast.show({
                type: "success",
                text1: title,
                text2: subtitle
            })
        }
    }

    error(title, subtitle) {
        return () => {
            Toast.show({
                type: "error",
                text1: title,
                text2: subtitle
            })
        }
    }

    info(title, subtitle) {
        return () => {
            Toast.show({
                type: "info",
                text1: title,
                text2: subtitle
            })
        }
    }


}
