# Account

## Exercise

- [How To Set Up an Ubuntu 20.04 Server on a DigitalOcean Droplet](https://www.digitalocean.com/community/tutorials/how-to-set-up-an-ubuntu-20-04-server-on-a-digitalocean-droplet)
  - [Account Anlegen](https://cloud.digitalocean.com/registrations/new)

  - Droplet Anlegen mit "Ubuntu 20.04 LTS..."
  - Lokale `.ssh/config` um folgenden Eintrag ergänzen, respektive die Datei neu Anlegen:
    ```
    Host online-magazine
      HostName 207.154.219.15
      User	   root
      IdentityFile ~/.ssh/PRIVATE_KEY # optionale Zeile
    ```

 - VM-Setup:
   - wähle als "vServer Vorlage" `Ubuntu 20.04 LTS Server 64-bit`
   - wenn nicht bereits installiert SSH-Server-Installieren:
     `$> sudo apt install openssh-server`
   - Installieren von `docker` und `docker-compose`:
     ```bash
     $> sudo apt install docker.io # oder ähnlich
     $> sudo apt install docker-compose
     ```
