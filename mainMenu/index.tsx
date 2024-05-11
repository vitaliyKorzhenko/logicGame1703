import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface MenuProps {
  onSelect: (item: string) => void;
}

const MenuComponent: React.FC<MenuProps> = ({ onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onSelect('Item 1')} style={styles.menuItem}>
        <Text style={styles.menuItemText}>Item 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect('Item 2')} style={styles.menuItem}>
        <Text style={styles.menuItemText}>Item 2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onSelect('Item 3')} style={styles.menuItem}>
        <Text style={styles.menuItemText}>Item 3</Text>
      </TouchableOpacity>
      {/* Добавьте дополнительные пункты меню здесь, если нужно */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 16,
  },
});

export default MenuComponent;
