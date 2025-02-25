import { PropsWithChildren, useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'dark';

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.4}>
        <IconSymbol
          name="chevron.right"
          size={30}
          weight="medium"
          color={theme === 'dark' ? Colors.light.icon : Colors.dark.icon}
          style={{ transform: [{ rotate: isOpen ? '90deg' : '0deg' }],
          opacity: isOpen ? 0.6 : 0.8,
        }}
        />

        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      {isOpen && <ThemedView style={styles.content}>{children}</ThemedView>}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    marginRight: 25,
    paddingBottom: 0,
    bottom: 0,
    top: -31,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    padding: 10,
    paddingTop: 0,
    marginBottom: 5,
     width:"94%"
    
     
    
  },
  content: {
    bottom: 25,
    marginTop:-25,
    marginLeft: 0,
    padding: 20,
    marginBottom: -20,
    elevation:50,
    
    
     
  },
});
