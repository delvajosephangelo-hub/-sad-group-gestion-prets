import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

/**
 * Remplacez API_BASE par l'URL de votre API ou de votre appareil:
 * - Si l'appareil est accessible publiquement : par ex. "https://mon-device.example"
 * - Si vous utilisez un backend relais : "http://<votre-serveur>:3000" (pendant le dev local)
 */
const API_BASE = 'https://EXEMPLE_API_URL';

export default function App() {
  const [log, setLog] = useState([]);

  const pushLog = (msg) => setLog((l) => [ `${new Date().toLocaleTimeString()} — ${msg}`, ...l ].slice(0, 200));

  async function send(path, method = 'GET', body = null) {
    const url = API_BASE + path;
    pushLog(`${method} ${url} ...`);
    try {
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: body ? JSON.stringify(body) : null,
      });
      const text = await res.text();
      pushLog(`Réponse ${res.status}: ${text}`);
      return { ok: res.ok, status: res.status, text };
    } catch (err) {
      pushLog(`Erreur: ${err.message ?? String(err)}`);
      return { ok: false, error: String(err) };
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Télécommande</Text>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.on]} onPress={() => send('/on', 'POST', { value: 1 })}>
          <Text style={styles.buttonText}>Allumer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.off]} onPress={() => send('/off', 'POST', { value: 0 })}>
          <Text style={styles.buttonText}>Éteindre</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, styles.status]} onPress={() => send('/status', 'GET')}>
        <Text style={styles.buttonText}>Statut</Text>
      </TouchableOpacity>

      <Text style={styles.logTitle}>Journal</Text>
      <ScrollView style={styles.logBox}>
        {log.map((l, i) => (
          <Text key={i} style={styles.logLine}>{l}</Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, paddingTop: 48, backgroundColor: '#fff' },
  title: { fontSize: 28, textAlign: 'center', marginBottom: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  button: { flex: 1, padding: 16, marginHorizontal: 6, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  on: { backgroundColor: '#2ecc71' },
  off: { backgroundColor: '#e74c3c' },
  status: { backgroundColor: '#3498db', padding: 14, borderRadius: 10, marginHorizontal: 6 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  logTitle: { marginTop: 18, fontWeight: '600' },
  logBox: { marginTop: 8, backgroundColor: '#f6f8fa', padding: 12, borderRadius: 8, height: 220 },
  logLine: { marginBottom: 6, fontSize: 12 },
});
