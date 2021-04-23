import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, Dimensions, View} from 'react-native';
import wateringImg from '../../assets/watering.png';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { Feather } from '@expo/vector-icons'
import { Button } from '../../components/Button';
import { useNavigation, useRoute } from '@react-navigation/core';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navigation = useNavigation();
  const route = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = route.params as Params;
  
  function handleMoveOn() {
    navigation.navigate(nextScreen);
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <Button title={buttonTitle} onPress={handleMoveOn} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 30
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})