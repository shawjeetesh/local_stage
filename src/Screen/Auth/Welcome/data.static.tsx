import { ImageSourcePropType, ImageStyle } from "react-native";
import colors from "../../../Global/Styles/colors.global"
import Assets from "../../../Global/Styles/images.global"
import { SCREEN_WIDTH, heightPixel } from "../../../Utility/normalizer";

export type GetStartedCardState = {
    title: string;
    image: ImageSourcePropType;
    backgroundColor: Array<string>; 
    textColor: string;
    imageStyle?: ImageStyle;
    
}        

const data:Array<GetStartedCardState>=[
    {
        title: "Making grocery \nshopping easier",
        image: Assets.welcome_first,
        backgroundColor:[colors.light_green,colors.light_green],
        textColor:colors.black
        
    },
    {
        title: "Have your \ngroceries delivered \nat any time",
        image: Assets.welcome_second,
        backgroundColor:[colors.maastricht_blue,colors.maastricht_blue],
        imageStyle:{
            width:heightPixel(SCREEN_WIDTH)
        },
        textColor:colors.white

        
    },
    {
        title: "Get Instant \nRewards on \nevery payment",
        image: Assets.welcome_third,
        backgroundColor:["#603F83","#FFFFFF"],
      
        textColor:colors.black

        
    },
]



export default data