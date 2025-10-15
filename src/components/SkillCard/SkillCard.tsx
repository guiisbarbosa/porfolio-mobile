import React from 'react'
import { View, Text } from 'react-native'

import { styles } from './SkillCard.styles';
import type { SkillCardProps } from '../../types/skillCard.types';

export const SkillCard = ({name, icon}: SkillCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        {icon}
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}