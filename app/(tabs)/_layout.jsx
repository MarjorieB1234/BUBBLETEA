import { View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color }) => {
  return (
    <View>
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 20, height: 20, tintColor: color }}
      />
    </View>
  );
}

const TabLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen 
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.Home}
                color={color}
              />
            )
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
              />
            )
          }}
        />

        <Tabs.Screen
          name="cart"
          options={{
            title: 'Cart',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.cart}
                color={color}
              />
            )
          }}
        />

        <Tabs.Screen
          name="shoppingbag"
          options={{
            title: 'ShoppingBag',
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <TabIcon
                icon={icons.ShoppingBag}
                color={color}
              />
            )
          }}
        />
      </Tabs>
    </>
  );
}

export default TabLayout;
