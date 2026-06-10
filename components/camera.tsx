import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import {
    Button,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function CameraScreen() {
    const [permission, requestPermission] = useCameraPermissions();

    const [facing, setFacing] = useState<CameraType>('back');

    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const cameraRef = useRef<CameraView>(null);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.center}>
                <Button
                    title="Permitir acceso a la cámara"
                    onPress={requestPermission}
                />
            </View>
        );
    }

    const takePhoto = async () => {
        const photo =
            await cameraRef.current?.takePictureAsync({
                quality: 1,
            });

        if (photo) {
            setPhotoUri(photo.uri);

            console.log('URI:', photo.uri);
            console.log('Width:', photo.width);
            console.log('Height:', photo.height);
        }
    };

    const switchCamera = () => {
        setFacing((current) =>
            current === 'back'
                ? 'front'
                : 'back'
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <CameraView
                ref={cameraRef}
                style={{ flex: 1 ,height:300}}
                facing={facing}
            />

            <View style={styles.buttons}>
                <Button
                    title="Cambiar cámara"
                    onPress={switchCamera}
                />

                <Button
                    title="Tomar foto"
                    onPress={takePhoto}
                />
            </View>

            {photoUri && (
                <Image
                    source={{ uri: photoUri }}
                    style={styles.preview}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
    },
    buttons: {
        padding: 10,
        gap: 10,
    },
    preview: {
        width: '100%',
        height: 250,
    },
});