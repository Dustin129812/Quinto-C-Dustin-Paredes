import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import GpsComponent from "./components/gps";
import CameraScreen from "./components/camera";
import MapScreen from "./components/mapa";

export default function App() { 
  const [camera,setCamera]=useState(false);
  const buttonCamera=()=>{
    if(camera)return setCamera(false)
    return setCamera(true)
  }

  return (
    <ScrollView style={styles.container}>
      <Pressable onPress={()=>buttonCamera()} style={{backgroundColor:'red' , padding:10}}><Text>Camara</Text></Pressable>

      <GpsComponent/>
      
      {camera &&<CameraScreen/>}

      <MapScreen/>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical:50

  },
  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
    borderColor: '#fff'
  },
  contentb: {
    width: '100%',
    backgroundColor: '#6A6969',
    paddingHorizontal: 10,
    borderRadius: 15,
    alignItems: 'flex-end',
    paddingVertical: 10,
    marginVertical: 10
  },
  app: {
    maxWidth: 250,
    width: '90%',
    minHeight: 500,
    padding: 20,
    backgroundColor: '#3E3E3E',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  text: {
    color: '#fff',
    borderBottomWidth: 2,
    borderColor: '#9D0F02',
    marginVertical: 5
  },
  textR: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#9D0F02',
    marginVertical: 5
  },
  textO: {
    color: '#CFCFCF',
    fontSize: 18,
    borderBottomWidth: 2,
    borderColor: '#9D0F02',
    marginVertical: 5,
    textAlign: 'right'
  }
});
