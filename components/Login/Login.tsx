import styles from '@/components/Login/login.styles';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // "Beni Hatırla" durumu

  useEffect(() => {
    const checkRememberedUser = async () => {
      const savedUser = await AsyncStorage.getItem('user');
      if (savedUser) {
        navigation.navigate('Home' as never); 
      }
    };
    checkRememberedUser();
  }, []);

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage('Lütfen tüm alanları doldurun.');
      return;
    }

    if (email === '1' && password === '1') {
      if (rememberMe) {
        await AsyncStorage.setItem('user', JSON.stringify({ email }));
      }
      navigation.navigate('Home' as never);
    } else {
      setErrorMessage('E-posta veya şifre yanlış.');
    }
  };

  const handleClear = () => {
    setEmail('');
    setPassword('');
    setErrorMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
    >
      <View style={styles.loginBox}>
        <Image
          source={require('@/assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Giriş Yap</Text>
        <TextInput
          style={styles.input}
          placeholder="E-posta"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        <View style={styles.rememberMeContainer}>
          <Text>Beni Hatırla</Text>
          <Switch value={rememberMe} onValueChange={setRememberMe} />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <FontAwesome name="sign-in" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
          <FontAwesome name="trash" size={20} color="white" style={styles.icon} />
          <Text style={styles.buttonText}>Temizle</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
