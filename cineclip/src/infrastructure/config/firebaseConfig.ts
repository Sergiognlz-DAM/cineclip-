// Importa la función para inicializar la app de Firebase
import { initializeApp } from 'firebase/app';

// Importa Firestore (base de datos en la nube)
import { getFirestore } from 'firebase/firestore';

// Importa las funciones de autenticación de Firebase
import { getAuth, initializeAuth } from 'firebase/auth';

// Importa Platform para detectar si la app corre en web o en móvil
import { Platform } from 'react-native';

// Objeto con las credenciales del proyecto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDm0pemAW8nmm7_s2TSeMK-gKWud3NeAG4",
authDomain: "cineclip-24e62.firebaseapp.com",
projectId: "cineclip-24e62",
storageBucket: "cineclip-24e62.firebasestorage.app",
messagingSenderId: "733477124076",
appId: "1:733477124076:web:35fb1d88eef041114db2c9"
};

// Inicializa la app de Firebase con la configuración anterior
const app = initializeApp(firebaseConfig);

// Exporta la instancia de Firestore para usarla en el resto de la app
export const db = getFirestore(app);

// En web usa getAuth estándar con persistencia localStorage automática.
// En Android usa initializeAuth sin persistencia de Firebase.
// La sesión se mantiene mediante el alias y password guardados en AsyncStorage.
export const auth = Platform.OS === 'web'
  ? getAuth(app)
  : initializeAuth(app, {});