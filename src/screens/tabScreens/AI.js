import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagepath from '../../images/Images'

const AI = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.backgroundImage} source={imagepath.aiBackground}>

        <View style={{
          backgroundColor: 'white', width: '100%', height: 861, marginTop: 250,
          borderRadius: 21
        }}>

          <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Image style={{ width: 100, height: 100 }} source={imagepath.aiProfileImage} />
            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
              <Text style={{
                width: 200, height: 31, fontWeight: "600",
                fontFamily: "Poppins-Regular",
                fontSize: 24,
                color: "#000000"
              }}>Hello I am Freya!</Text>

              <Text style={{
                width: 179, height: 48, fontWeight: "600",
                fontFamily: "Poppins-Regular",
                fontSize: 16,
                color: "#607274"
              }}>What area do you feel need a boost?</Text>
            </View>

          </View>

        <View style={{width: '100%', height: '100%', padding: 30}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <View style={{width: '100%', height: 1, backgroundColor: '#607274'}}/>
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
          <View style={{width: 100, height: 150}}>
            <Image style={{width: '100%', height: 120}} resizeMode= 'center' source={imagepath.chinImage}/> 
            <Text style={{width: 109, height: 30,fontWeight: "500", fontFamily: "Poppins-Regular",
                fontSize: 20,marginTop: 10,
                color: "#607274", textAlign: 'center'}} >Chin</Text>
          </View>
          <View style={{width: 100, height: 150}}> 
            <Image style={{width: '100%', height: 120}} resizeMode= 'center' source={imagepath.neckImage}/> 
            <Text style={{width: 109, height: 30,fontWeight: "500", fontFamily: "Poppins-Regular",
                fontSize: 20,marginTop: 10,
                color: "#607274", textAlign: 'center'}} >Neck</Text>
          </View>
         </View>

         <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}}>
          <View style={{width: 100, height: 150}}>
            <Image style={{width: '100%', height: 120}} resizeMode= 'center' source={imagepath.bodyImage}/> 
            <Text style={{width: 109, height: 30,fontWeight: "500", fontFamily: "Poppins-Regular",
                fontSize: 20,marginTop: 10,
                color: "#607274", textAlign: 'center'}} >Body</Text>
          </View>
          <View style={{width: 100, height: 150}}> 
            <Image style={{width: '100%', height: 120}} resizeMode= 'center' source={imagepath.hair_nailsImage}/> 
            <Text style={{width: 109, height: 30,fontWeight: "500", fontFamily: "Poppins-Regular",
                fontSize: 20,marginTop: 10,
                color: "#607274", textAlign: 'center'}} >Hair & Nails</Text>
          </View>
         </View>
        </View>
           
         
        </View>

      </ImageBackground>
    </View>
  )
}

export default AI

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'

  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
    padding: 29
  },
})