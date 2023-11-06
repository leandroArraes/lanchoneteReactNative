
import {Tabs} from "expo-router";
import {MaterialIcons} from "@expo/vector-icons"
export default function TabRoutesLayout(){
    return(
        <Tabs screenOptions={{headerShown:false}}>

            <Tabs.Screen 
                name="index" 
                options={{ title: "Inicio",
                           tabBarIcon:({size,color})=> ( <MaterialIcons name="home"
                            size={size} color={color}
                           />)

                        }} 
                
            />

            <Tabs.Screen 
                name="produtos" 
                options={{ title:"produtos",
                abBarIcon:({size,color})=> ( <MaterialIcons name="person"
                            size={size} color={color}
                           />)
            
            
            }} 
            />

        </Tabs>
 
        
    )
}