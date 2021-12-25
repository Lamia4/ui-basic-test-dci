# Generiere

Das Script `hash.js` gibt für jede Zahl von 0 bis 999 jeweils eine Zeile mit der jeweiligen Zahl und dem zugehörigen Hash (`sha256`) auf dem Terminal aus.

```bash
$> node hash.js
0 HASHWERT_VON_0
1 HASHWERT_VON_1
...
999 HASHWERT_VON_999
```

Leite die Terminalausgabe des Programs mit Hilfe des Terminals (IO-Redirect) in eine Datei `hash.table` um.

Die Standardausgabe eines Terminal-Programms kann mit Hilfe des `>` Terminaloperators in eine Datei umgeleitet werden. Achtung sollte die Datei bereits existieren, wird diese überschrieben.
```bash
$> node hash.js > DATEINAME
```
