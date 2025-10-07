import React from 'react'
import { View, Text, Image } from 'react-native'

import profileImage from '../../../assets/pictures/me.jpg'

import { styles } from './Profile.styles'

export const Profile = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <View style={{alignItems: "center", marginBottom: 20}}>
        <View style={styles.imageContainer}>
          <Image source={profileImage} style={styles.imageProfile} />
        </View>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>GB</Text>
        </View>
      </View>
      <Text style={styles.name}>Guilherme Barbosa</Text>
      <Text style={styles.role}>
        Front-end Developer | React & React Native
      </Text>
      <Text style={styles.resume}>
        Apaixonado por tecnologia e por criar soluções com React & React Native
      </Text>
    </View>
  );
}