# README

## Themen
- Networking
  - [IP Stack](https://de.wikipedia.org:443/wiki/Internetprotokollfamilie)
    - Transport
      - [TCP](https://de.wikipedia.org/wiki/Transmission_Control_Protocol)
      - [UDP](https://de.wikipedia.org/wiki/User_Datagram_Protocol)
      - [QUIC](https://de.wikipedia.org/wiki/QUIC)
    - Routing
      - [IP](https://de.wikipedia.org/wiki/Internet_Protocol)
        - [IPv4](https://de.wikipedia.org/wiki/IPv4#Lokale/Private_Netzwerkadressen)
    - Hardware
      - [Hardware-/MAC-Adresse](https://de.wikipedia.org/wiki/MAC-Adresse#Physikalische_Adresse)
      - [CSMA/CD](https://de.wikipedia.org/wiki/Carrier_Sense_Multiple_Access/Collision_Detection)
  - [Ports](https://de.wikipedia.org/wiki/Port_(Protokoll)) / Sockets
    - /etc/services
  - Network-Admins Toolbox
    - `$> ping`
    - `$> traceroute`
	  - `$> nmap`
      
      https://geotraceroute.com

      Netzwerkinfrastruktur
      https://www.infrapedia.com/app

  - DNS
    - [Root-Nameserver](https://de.wikipedia.org/wiki/Root-Nameserver)
    - `$> nslookup`
    - [denic](https://de.wikipedia.org/wiki/DENIC)
    - Dydns Services

- Docker
  - [Dockerfile](https://docs.docker.com/engine/reference/builder/)
  - [docker-compose.yml](https://docs.docker.com/compose/compose-file/compose-file-v3/)
    - wie Daten außerhalb des Containers persistent machen?
    - entfernen des Seed-Scripts für Produktivbetrieb.

- Deployment
  - Abhängigkeiten
  - Entwicklung der Deployment-Pipeline
    - inkl. Debugging
    - Was ist Bestandteil des eigentlichen Deployments
  - Zusammenfassung der für das Deployment notwendigen Komponenten
    - Zielplatform
    - Konfigurationsdateien
      - ssh
        - config
        - keys
      - Docker
        - Dockerfile
        - docker-compose.yml
    - Deployment-Skript

- Ausblick
  - Wie aufteilen der Services auf verschiedene Server

- ssh
  - config
  - ssh-keys (public/private key)
