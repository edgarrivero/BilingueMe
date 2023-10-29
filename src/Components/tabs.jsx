 import React from 'react';
 import { View, StyleSheet, Text,Dimensions,Image, TouchableOpacity  } from 'react-native';
 import { useNavigation, useRoute } from '@react-navigation/native';
 import { SettingsSvg } from '../assets/data/svgs';
 import { BlurView } from 'expo-blur';


 const TabItem = ({ screenName, iconActive, iconInactive, label, onPress, isActive }) => (
  <TouchableOpacity
    style={[styles.label, isActive && styles.activeTab]}
    onPress={() => onPress(screenName)}
  >
    <Image source={isActive ? iconActive : iconInactive} style={styles.image} />
    <Text style={[styles.btnlabel, isActive && styles.activeTabText]}>{label}</Text>
  </TouchableOpacity>
);

 const Tabs = () => {
   const windowHeight = Dimensions.get('window').height;
   const bottomViewHeight = 50; 
   const navigation = useNavigation();
   const route = useRoute();

   const handleImagePress = (screenName) => {
     navigation.navigate(screenName);

   };

   return (
       <View style={[styles.bottomView, { top: windowHeight - bottomViewHeight }]}>
         {/* Contenido del elemento View en la parte inferior */}
         <View style={styles.tabs}>
             <View
                style={styles.tabs2}
                intensity={10}
              >
                <TabItem
                  screenName="Sparkles"
                  iconActive={require('../assets/icons/home-solid.png')}
                  iconInactive={require('../assets/icons/home-line.png')}
                  label="Sparkles"
                  onPress={handleImagePress}
                  isActive={route.name === 'Sparkles'}
                />
                <TabItem
                  screenName="Books"
                  iconActive={require('../assets/icons/books-solid.png')}
                  iconInactive={require('../assets/icons/books-line.png')}
                  label="Books"
                  onPress={handleImagePress}
                  isActive={route.name === 'Books'}
                />
                <TabItem
                  screenName="Settings"
                  iconActive={require('../assets/icons/setting-solid.png')}
                  iconInactive={require('../assets/icons/setting-line.png')}
                  label="Settings"
                  onPress={handleImagePress}
                  isActive={route.name === 'Settings'}
                />

                {/* <TouchableOpacity onPress={() => handleImagePress('Sparkles')} style={styles.label} >
                  <Image source={require('../assets/icons/home-solid.png')} style={styles.image} />
                  <Text style={styles.btnlabel}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Books')} style={styles.label} >
                  <Image source={require('../assets/icons/sparkles-line.png')} style={styles.image} />
                  <Text style={styles.btnlabel}>Particles</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Settings')} style={styles.label} >
                  <Image source={require('../assets/icons/books-line.png')} style={styles.image} />
                  <Text style={styles.btnlabel}>Books</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleImagePress('Settings')} style={styles.label} >
                  <Image source={require('../assets/icons/setting-line.png')} style={styles.image} />
                  <Text style={styles.btnlabel}>Settings</Text>
                </TouchableOpacity> */}
              </View>
         </View>
       </View>
   );
 };
 const styles = StyleSheet.create({
   bottomView: {
     position: 'absolute',
     left: 30
     // Otros estilos para el elemento en la parte inferior
   },
   label:{
    alignItems: 'center',
    alignSelf: 'center'
   },
   tabs: {
    width: Dimensions.get('window').width - 60,
    height: 80,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 35,
   },
   tabs2: {
     alignContent: '',
     justifyContent: 'center',
     alignItems: 'center',
     width: Dimensions.get('window').width - 70,
     height: 70,
     borderRadius: 30,
     margin: 5, 
     flexDirection: 'row',
     overflow: 'hidden',
     backgroundColor: 'rgba(255, 255, 255, 0.2)',
   },
   image: {
     width: 40,
     height: 40,
     justifyContent: 'center',
     alignItems: 'center',
     marginHorizontal: 17
   },
   vector: {
    width: '40'
   },
   btnlabel: {
    color: 'white',
    fontSize: 12
   }
 });
 export default Tabs;






