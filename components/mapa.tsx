import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

import MapView, {
    Marker,
    Polyline,
} from 'react-native-maps';

export default function MapScreen() {
    const [region, setRegion] = useState<any>(null);
    const rutas = [
        {
            "latitude": -0.180653,
            "longitude": -78.467834
        },
        {
            "latitude": -0.180700,
            "longitude": -78.467900
        },
        {
            "latitude": -0.180850,
            "longitude": -78.468200
        }
    ]
    const [selectedPoint, setSelectedPoint] =
        useState<any>(null);

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        const { status } =
            await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            alert('Permiso denegado');
            return;
        }

        const location =
            await Location.getCurrentPositionAsync();

        setRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        });
    };

    if (!region) {
        return (
            <View style={styles.center}>
                <Text>Cargando mapa...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1, paddingVertical: 100 }}>
            <MapView
                style={{ flex: 1, height: 300 }}
                initialRegion={region}
                showsUserLocation
                showsMyLocationButton
                onPress={(event) => {
                    setSelectedPoint(
                        event.nativeEvent.coordinate
                    );
                }}
            >
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    title="Mi ubicación"
                />

                {selectedPoint && (
                    <Marker
                        coordinate={selectedPoint}
                        title="Punto seleccionado"
                    />
                )}

            <Polyline
                coordinates={rutas}
                strokeWidth={5}
            />
            </MapView>
            <View style={styles.info}>
                <Text>
                    Latitud:
                    {' '}
                    {selectedPoint?.latitude ??
                        region.latitude}
                </Text>

                <Text>
                    Longitud:
                    {' '}
                    {selectedPoint?.longitude ??
                        region.longitude}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        padding: 15,
    },
});