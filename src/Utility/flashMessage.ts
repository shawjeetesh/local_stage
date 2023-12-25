import { showMessage, hideMessage, MessageType } from "react-native-flash-message";


const ShowSplashMessage = ( message:string,type: MessageType="default", description="")=>{
    showMessage({
        message:message,
        floating: true,
        animationDuration:600,
        animated:true,
        icon:type,
        duration:2500,
        description,
        type,
      })
}

export default ShowSplashMessage