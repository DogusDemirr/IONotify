import { useTheme } from '@/components/ThemeContext';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const notifications = [
  {
    id: 1,
    category: 'Sistem',
    title: 'Yeni Sevkiyat Sevk Emri',
    description: 'Sipariş No: #SHP-20250505-23 için 12 kalem ürün, sevkiyat emri verildi.',
    time: '15:00',
    color: '#EF4444', // Kırmızı
  },
  {
    id: 2,
    category: 'Yönetim',
    title: 'Üretim Departmanı Mesai Bilgilendirmesi',
    description: 'Üretim departmanı için 18:00-22:00 Saatleri arası mesai yapılacaktır.',
    time: '14:45',
    color: '#F59E42', // Turuncu
  },
  {
    id: 3,
    category: 'Sistem',
    title: 'Kalite Kontrol Bildirimi',
    description: 'Üretim Lot No: LOT-20250428-A\nÜretimden çıkan yeni ürünler kalite kontrol alanına yerleştirildi.',
    time: '14:15',
    color: '#22C55E', // Yeşil
  },
];

const Dashboard = () => {
  const { theme, mode, toggleTheme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}> 
      {/* Header */}
      <View style={[styles.header]}> 
        <TouchableOpacity style={styles.headerIcon}>
          <Ionicons name="menu" size={28} color={theme.icon} />
        </TouchableOpacity>
        <Image source={require('@/assets/images/logo.png')} style={styles.logo} resizeMode="contain" />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity style={styles.headerIcon} onPress={toggleTheme}>
            {mode === 'light' ? (
              <Ionicons name="moon" size={26} color={theme.icon} />
            ) : (
              <Ionicons name="sunny" size={26} color={theme.icon} />
            )}
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerIcon}>
            <Ionicons name="person-circle" size={32} color={theme.icon} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Fonksiyonel Kartlar */}
      <View style={styles.cardsRow}>
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.text }]}> 
          <MaterialIcons name="campaign" size={32} color="#F59E42" />
          <Text style={[styles.cardText, { color: theme.text }]}>Duyurular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.text }]}> 
          <MaterialCommunityIcons name="file-chart" size={32} color="#3B82F6" />
          <Text style={[styles.cardText, { color: theme.text }]}>Raporlar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.card, { backgroundColor: theme.card, shadowColor: theme.text }]}> 
          <MaterialCommunityIcons name="clipboard-list" size={32} color="#EF4444" />
          <Text style={[styles.cardText, { color: theme.text }]}>Görevler</Text>
        </TouchableOpacity>
      </View>

      {/* Bildirim Listesi */}
      <ScrollView style={styles.notifications} contentContainerStyle={{ paddingBottom: 16 }}>
        {notifications.map((item) => (
          <View key={item.id} style={[styles.notificationBox, { backgroundColor: theme.notificationBg, shadowColor: theme.text }]}> 
            <View style={{ flex: 1 }}>
              <Text style={[styles.notificationCategory, { color: theme.notificationCategory }]}>{item.category}:</Text>
              <Text style={[styles.notificationTitle, { color: theme.notificationTitle }]}>{item.title}</Text>
              <Text style={[styles.notificationDesc, { color: theme.notificationDesc }]}>{item.description}</Text>
            </View>
            <View style={styles.notificationRight}>
              <Text style={[styles.notificationTime, { color: theme.notificationTime }]}>{item.time}</Text>
              <View style={[styles.statusDot, { backgroundColor: item.color, borderColor: theme.statusDotBorder }]} />
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={[styles.footer, { backgroundColor: 'transparent' }]}> 
        <Text style={[styles.footerText, { color: theme.text }]}>© IOCORE YAZILIM 2025</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingHorizontal: 20,
    paddingBottom: 16,
  },
  headerIcon: {
    padding: 4,
  },
  logo: {
    width: 90,
    height: 40,
  },
  cardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 18,
  },
  card: {
    flex: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    paddingVertical: 18,
    elevation: 3,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
  cardText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  notifications: {
    flex: 1,
    marginHorizontal: 16,
  },
  notificationBox: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    alignItems: 'flex-start',
    shadowOpacity: 0.06,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  notificationCategory: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 2,
  },
  notificationTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 2,
  },
  notificationDesc: {
    fontSize: 13,
    marginBottom: 2,
  },
  notificationRight: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
    height: 48,
  },
  notificationTime: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 8,
  },
  statusDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginTop: 4,
    borderWidth: 2,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 10,
  },
  footerText: {
    fontSize: 13,
    letterSpacing: 1,
  },
});

export default Dashboard;