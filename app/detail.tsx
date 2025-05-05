import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from 'react';
import { Info, Materi } from "../components/modules/detail";

const Detail = () => {
  const [activeTabs, setActiveTabs] = useState('info');

  const UIActiveTabs = () => {
    if (activeTabs === 'info') return <Info />;
    if (activeTabs === 'index') return <Materi />;
    return <Info />;
  };

  return (
    <ScrollView style={styles.container}>
      {/* Tab Section */}
      <View style={styles.tabContainer}>
        <View
          style={[styles.tab, activeTabs === 'info' && styles.activeTab]}
          onTouchEnd={() => setActiveTabs('info')}
        >
          <Text
            style={[styles.tabText, activeTabs === 'info' && styles.activeTabText]}
          >
            Info
          </Text>
        </View>

        <View
          style={[styles.tab, activeTabs === 'index' && styles.activeTab]}
          onTouchEnd={() => setActiveTabs('index')}
        >
          <Text
            style={[styles.tabText, activeTabs === 'index' && styles.activeTabText]}
          >
            Materi
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View style={styles.tabContentContainer}>
        <UIActiveTabs />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#8e44ad', // Purple color for active tab
  },
  tabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333', // Default text color
  },
  activeTabText: {
    color: '#8e44ad', // Purple color for active tab text
  },
  tabContentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
});

export default Detail;
