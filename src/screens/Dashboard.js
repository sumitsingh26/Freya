import React, {useEffect} from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './tabScreens/Home';
// import AI from './tabScreens/AI';
import imagepath from '../images/Images';
import ViewAllClinics from './ViewAllClinics';
import BookingAppointment from './BookingAppointment';
import MyProfile from './MyProfile';
import EditProfile from './EditProfile';
import {hasNotch, scaleSize} from '../utils/screenUtils';
import {appColors, appScreens} from '../utils/constant';
import ClinicDetailsScreen from './ClinicDetailsScreen';

const RenderTabBarIcon = props => {
  const {lable, isFocused, active_tab_icon, inactive_tab_icon} = props;

  return (
    <View
      style={[
        {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        isFocused
          ? {
              borderTopWidth: 5,
              borderBottomWidth: 5,
              borderColor: appColors.Secondary,
            }
          : {},
      ]}>
      <Image
        style={style.tabIconCrate}
        resizeMode={'contain'}
        source={isFocused ? active_tab_icon : inactive_tab_icon}
      />
    </View>
  );
};
const HomeStack = createStackNavigator();
function HomeScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name={appScreens.home}
        component={Home}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={appScreens.viewAllClinics}
        component={ViewAllClinics}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={appScreens.clinicDetails}
        component={ClinicDetailsScreen}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name={appScreens.bookingAppointment}
        component={BookingAppointment}
        options={{headerShown: false}}
      />
    </HomeStack.Navigator>
  );
}

const AppointmentStack = createStackNavigator();
function AppointmentScreen() {
  return (
    <AppointmentStack.Navigator>
      {/* <AppointmentStack.Screen name="Appointment" component={Appointment} options={{ headerShown: false, }} /> */}
      <HomeStack.Screen
        name={appScreens.bookingAppointment}
        component={BookingAppointment}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
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
      <PersonStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: false}}
      />
      <PersonStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </PersonStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const Dashboard = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 65,
            marginHorizontal: scaleSize(25),
            borderRadius: 40,
            backgroundColor: appColors.Primary,
            marginTop: 10,
            marginBottom: !hasNotch() ? 10 : 0,
          },
          tabBarItemStyle: {
            height: 65,
          },
        }}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return (
                <RenderTabBarIcon
                  isFocused={focused}
                  active_tab_icon={imagepath.activeHomeIcon}
                  inactive_tab_icon={imagepath.homeIcon}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="AppointmentScreen"
          component={AppointmentScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({focused}) => {
              return (
                <RenderTabBarIcon
                  isFocused={focused}
                  active_tab_icon={imagepath.activeAppointmentIcon}
                  inactive_tab_icon={imagepath.appointmentIcon}
                />
              );
            },
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
            tabBarIcon: ({focused}) => {
              return (
                <RenderTabBarIcon
                  isFocused={focused}
                  active_tab_icon={imagepath.activePersonIcon}
                  inactive_tab_icon={imagepath.persionIcon}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  tabIconCrate: {
    width: 30,
    height: 30,
  },
});
export default Dashboard;
