// FastSatta.live Official Firebase Configuration & Realtime Sync Engine (Asia-Southeast1 Region)

const firebaseConfig = {
  apiKey: "AIzaSyBK5Toa7whB9P9leaxDrXTHuhCEm5KdvtM",
  authDomain: "fastsatta-live.firebaseapp.com",
  databaseURL: "https://fastsatta-live-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fastsatta-live",
  storageBucket: "fastsatta-live.firebasestorage.app",
  messagingSenderId: "914026110185",
  appId: "1:914026110185:web:2b682428ecc13baf2ce478",
  measurementId: "G-LF3G115RLP"
};

// Initialize Firebase App
if (typeof firebase !== 'undefined') {
  if (!firebase.apps || !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  // Safe Analytics Initialization
  if (firebase.analytics && typeof firebase.analytics.isSupported === 'function') {
    firebase.analytics.isSupported().then(supported => {
      if (supported) firebase.analytics();
    }).catch(() => {});
  }

  console.log("🔥 Firebase Realtime Database connected to Asia Region (fastsatta-live)!");
}
