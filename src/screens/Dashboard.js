import React, { useEffect } from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './tabScreens/Home';
// import AI from './tabScreens/AI';
import imagepath from '../images/Images';
import ClinicsDetailsScreen from './ClinicsDetailsScreen';
import BookingAppointment from './BookingAppointment';
import MyProfile from './MyProfile';
import EditProfile from './EditProfile';






const RenderTabBarIcon = (props) => {
  const { lable, isFocused, active_tab_icon, inactive_tab_icon } = props;



  return (
      <View style={{flex: 1, width: 25, justifyContent: 'space-between', alignItems: 'center'}}>
      {isFocused ?
        <View style={{ width: 25, height: 5, backgroundColor: '#DED0B6', borderRadius: 5}}></View>
        : null}
      <Image
        style={style.tabIconCrate}
        resizeMode={'contain'}
        source={isFocused ? active_tab_icon : inactive_tab_icon} />

      {isFocused ?
        <View style={{ width: 25, height: 5, backgroundColor: '#DED0B6', borderRadius: 5, marginTop: 14}}></View>
        : null}
    </View>
      
  );
}
const HomeStack = createStackNavigator();
function HomeScreen() {
  return (
    <HomeStack.Navigator>

      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false, }} />
      <HomeStack.Screen name="ClinicsDetailsScreen"  component={ClinicsDetailsScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false}} />
      <HomeStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false}} />
    </HomeStack.Navigator>
  );
}

const AppointmentStack = createStackNavigator();
function AppointmentScreen() {
  return (
    <AppointmentStack.Navigator>
      {/* <AppointmentStack.Screen name="Appointment" component={Appointment} options={{ headerShown: false, }} /> */}
      <HomeStack.Screen name="BookingAppointment"  component={BookingAppointment} options={{headerShown: false}}/>
      <HomeStack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false}} />
      <HomeStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false}} />

    </AppointmentStack.Navigator>
  );
}

// const AIStack = createStackNavigator();
// function AIScreen() {
//   return (
//     <AIStack.Navigator>
//       <AIStack.Screen name="AI" component={AI} options={{ headerShown: false, }} />
//     </AIStack.Navigator>
//   );
// }

const PersonStack = createStackNavigator();
function PersionScreen() {
  return (
    <PersonStack.Navigator>
      <PersonStack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false}} />
      <PersonStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false}} />
    </PersonStack.Navigator>
  );
}




const Tab = createBottomTabNavigator();
const Dashboard = (props) => {


  useEffect(() => {

  }, [])






  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: '1%', backgroundColor: 'white' }}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            width: '90%',
            height: 69,
            backgroundColor: '#607274',
            borderRadius: 40,
            elevation: 5,
            marginLeft: 16,
            justifyContent: 'space-evenly'
          },
        }}>


        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <RenderTabBarIcon
                  isFocused={focused}
                  lable=''
                  active_tab_icon={imagepath.activeHomeIcon}
                  inactive_tab_icon={imagepath.homeIcon}
                />
              )
            }

          }}
        />

        <Tab.Screen
          name="AppointmentScreen"
          component={AppointmentScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <RenderTabBarIcon
                  isFocused={focused}
                  lable=''
                  active_tab_icon={imagepath.activeAppointmentIcon}
                  inactive_tab_icon={imagepath.appointmentIcon}
                />
              )
            }
          }}
        />

        {/* <Tab.Screen
          name="AIScreen"
          component={AIScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <RenderTabBarIcon
                  isFocused={focused}
                  lable=''
                  active_tab_icon={imagepath.activeAiIcon}
                  inactive_tab_icon={imagepath.aiIcon}
                />
              )
            }
          }}
        /> */}

        <Tab.Screen
          name="PersionScreen"
          component={PersionScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({ focused }) => {
              return (
                <RenderTabBarIcon
                  isFocused={focused}
                  lable=''
                  active_tab_icon={imagepath.activePersonIcon}
                  inactive_tab_icon={imagepath.persionIcon}
                />
              )
            }
          }}
        />


      </Tab.Navigator>
    </View>
    </SafeAreaView>

  );
}
const style = StyleSheet.create({
  tabIconCrate: { 
               width: 30, 
               height: 30 ,
               marginTop: 14
            },

});
export default Dashboard