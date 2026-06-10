import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

interface LocationData {
    latitude: number;
    longitude: number;
    altitude: number | null;
    accuracy: number | null;
    heading: number | null;
    speed: number | null;
}

export default function GpsComponent() {
    const [loading, setLoading] = useState(true);

    const [location, setLocation] = useState<LocationData | null>(null);

    const [address, setAddress] =
        useState<Location.LocationGeocodedAddress | null>(null);

    const [timezone, setTimezone] = useState<string>('');

    const loadLocation = async () => {
        try {
            setLoading(true);

            const { status } =
                await Location.requestForegroundPermissionsAsync();

            if (status !== 'granted') {
                alert('Permiso denegado');
                return;
            }

            const current =
                await Location.getCurrentPositionAsync({
                    accuracy: Location.Accuracy.High
                });

            setLocation({
                latitude: current.coords.latitude,
                longitude: current.coords.longitude,
                altitude: current.coords.altitude,
                accuracy: current.coords.accuracy,
                heading: current.coords.heading,
                speed: current.coords.speed
            });

            const addresses =
                await Location.reverseGeocodeAsync({
                    latitude: current.coords.latitude,
                    longitude: current.coords.longitude
                });

            if (addresses.length > 0) {
                setAddress(addresses[0]);
            }

            const tz =
                await Location.getCurrentPositionAsync();

            setTimezone(
                Intl.DateTimeFormat().resolvedOptions().timeZone
            );

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadLocation();

        let subscription: Location.LocationSubscription;

        const watchLocation = async () => {
            subscription =
                await Location.watchPositionAsync(
                    {
                        accuracy: Location.Accuracy.High,
                        distanceInterval: 10,
                        timeInterval: 5000
                    },
                    (newLocation) => {
                        setLocation({
                            latitude: newLocation.coords.latitude,
                            longitude: newLocation.coords.longitude,
                            altitude: newLocation.coords.altitude,
                            accuracy: newLocation.coords.accuracy,
                            heading: newLocation.coords.heading,
                            speed: newLocation.coords.speed
                        });
                    }
                );
        };

        watchLocation();

        return () => {
            subscription?.remove();
        };
    }, []);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>
                Información GPS
            </Text>

            <View style={styles.card}>
                <Text>
                    Latitud:
                    {' '}
                    {location?.latitude}
                </Text>

                <Text>
                    Longitud:
                    {' '}
                    {location?.longitude}
                </Text>

                <Text>
                    Altitud:
                    {' '}
                    {location?.altitude ?? 'No disponible'}
                </Text>

                <Text>
                    Precisión:
                    {' '}
                    {location?.accuracy ?? 'No disponible'}
                    {' '}m
                </Text>

                <Text>
                    Dirección:
                    {' '}
                    {location?.heading ?? 'No disponible'}
                </Text>

                <Text>
                    Velocidad:
                    {' '}
                    {location?.speed ?? 'No disponible'}
                    {' '}m/s
                </Text>
            </View>

            <Text style={styles.title}>
                Dirección
            </Text>

            <View style={styles.card}>
                <Text>
                    Calle:
                    {' '}
                    {address?.street ?? 'No disponible'}
                </Text>

                <Text>
                    Distrito:
                    {' '}
                    {address?.district ?? 'No disponible'}
                </Text>

                <Text>
                    Ciudad:
                    {' '}
                    {address?.city ?? 'No disponible'}
                </Text>

                <Text>
                    Provincia:
                    {' '}
                    {address?.region ?? 'No disponible'}
                </Text>

                <Text>
                    País:
                    {' '}
                    {address?.country ?? 'No disponible'}
                </Text>

                <Text>
                    Código postal:
                    {' '}
                    {address?.postalCode ?? 'No disponible'}
                </Text>
            </View>

            <Text style={styles.title}>
                Sistema
            </Text>

            <View style={styles.card}>
                <Text>
                    Zona horaria:
                    {' '}
                    {timezone}
                </Text>
            </View>

            <Button
                title="Actualizar ubicación"
                onPress={loadLocation}
            />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        gap: 20
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    card: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 10,
        gap: 8
    }
});