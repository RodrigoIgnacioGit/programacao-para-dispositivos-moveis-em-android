import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    color: '#C5C5C5',
    opacity: 0.7, 
    fontWeight: 'bold',
    
   textAlign: 'center' ,
  },
  defaultSemiBold: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: 'bold',
    color: '#c5c5c5',
    backgroundColor: 'black',
    padding: 0,
    borderWidth:  8,
    paddingRight: 4,
    right: 5,
    paddingLeft: 4,
    paddingHorizontal: 40,
    borderRadius: 12,
    paddingTop: 0,
    marginTop: 15,
    opacity: 0.8,
    elevation:20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 36,
    color: '#F4C32E',
    fontStyle: 'italic',
    opacity: 0.85,
    left: 127,
    width:"100%"
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
});
