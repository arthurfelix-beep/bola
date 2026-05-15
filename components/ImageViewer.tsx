import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

type Props = {
  placeholderImage: any;
};

export default function ImageViewer({ placeholderImage }: Props) {
  return (
    <Image
      source={placeholderImage}
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});