// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyABSzb79D7-eTKrui1advsKTJwNiGPJ8ZU",
  authDomain: "pwa-10b-20223tn052.firebaseapp.com",
  projectId: "pwa-10b-20223tn052",
  storageBucket: "pwa-10b-20223tn052.firebasestorage.app",
  messagingSenderId: "411821294795",
  appId: "1:411821294795:web:81cdc6e5ccfc2616f1074e"
});


const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
    icon: "./images/icons/192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('/'));
});