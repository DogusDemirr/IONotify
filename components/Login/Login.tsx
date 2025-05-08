import styles from '@/components/Login/login.styles';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, Platform, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const checkRememberedUser = async () => {
      const savedUser = await AsyncStorage.getItem('user');
      if (savedUser) {
        navigation.navigate('Dashboard' as never);
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
      navigation.navigate('Dashboard' as never);
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
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.loginBox}>
        <View style={styles.logoContainer}>
          <Image
            source={require('@/assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Hoş Geldiniz</Text>
          <Text style={styles.subtitle}>Hesabınıza giriş yapın</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>E-posta</Text>
          <TextInput
            style={styles.input}
            placeholder="ornek@email.com"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Şifre</Text>
          <TextInput
            style={styles.input}
            placeholder="••••••••"
            placeholderTextColor="#9CA3AF"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {errorMessage ? (
          <Text style={styles.error}>{errorMessage}</Text>
        ) : null}

        <View style={styles.rememberMeContainer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Switch
              value={rememberMe}
              onValueChange={setRememberMe}
              trackColor={{ false: '#E5E7EB', true: '#4F46E5' }}
              thumbColor={rememberMe ? '#fff' : '#fff'}
            />
            <Text style={styles.rememberMeText}>Beni Hatırla</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleLogin}
          style={styles.loginButton}
        >
          <View style={styles.buttonContent}>
            <FontAwesome name="sign-in" size={20} color="white" />
            <Text style={styles.buttonText}>Giriş Yap</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleClear}
          style={styles.clearButton}
        >
          <View style={styles.buttonContent}>
            <FontAwesome name="trash" size={20} color="#4B5563" />
            <Text style={styles.clearButtonText}>Temizle</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
