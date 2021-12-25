# Deployment

Mit Deployment ist die Bereitstellung einer Anwendung gemeint. Es gibt verschiedene Zwecke für diese Bereitstellung, bspw.:
- Entwicklung
- Test
- Abnahme
- Produktivbetrieb

## Prerequisites
- aktuelle Version von docker-compose
  ```bash
  # Ggf. entfernen der bereits installierten Version
  $> sudo apt remove docker-compose
  # Installieren mit dem Install-Skript hier im Repo:
  $> ./install.docker-compose.sh
  ``` 

## Netzwerk
- [IP-Stack](https://de.wikipedia.org/wiki/Internetprotokollfamilie)
- SSH
  - `~/.ssh/config`

## Varianten
- Root Server
    - Baremetal
    - Virtuelle Maschine (VM)
    - Anbieter (Auswahl)
        - *[Kamp](https://www.kamp.de/dhp/preise.html) - dort zum Ausprobieren, das "DHP MINIPAKET" (VM):
            - 1 CPU
            - 1 GB RAM
            - 25 GB Storage
            - 10 GB Traffic pro Tag
            - Linux

        - [Hetzner](https://www.hetzner.com/)
            - drei Rechenzentren (Nürnberg, Falkenstein, Helsinki)
            - sehr guter Support
            - Cloud, VMs, Baremetal, bis Mieten von Racks für eigene Hardware

- [docker](https://www.docker.com/)
  - *[deploy with docker-compose on remote host](https://www.docker.com/blog/how-to-deploy-on-remote-docker-hosts-with-docker-compose/)
    - manual deployment or by configuring a `DOCKER_HOST` for `docker-compose`
  - `docker-machine`
    - [Installation](https://github.com/docker/machine/releases/)
    - [Provision](https://docs.docker.com/machine/get-started-cloud/)

      different [drivers](https://docs.docker.com/machine/drivers/), e. g.:
      - [generic](https://docs.docker.com/machine/drivers/generic/)
      - [Add an already existing docker host (`none`-driver)](https://docs.docker.com/machine/get-started-cloud/):

        ```bash
        $> docker-machine create --driver none --url=tcp://50.134.234.20:2376 custombox
        $> docker-machine ls
        NAME        ACTIVE   DRIVER    STATE     URL
        custombox   *        none      Running   tcp://50.134.234.20:2376

        ```

- [Netlify](https://www.netlify.com/)

- [DigitalOcean](https://www.digitalocean.com/)
    - Droplet (DigitalOcean versteht darunter VM-Instanzen)

- [Heroku](https://www.heroku.com/)
    - Heroku bietet Hosting von Containers unter dem Namen "Dynos" an.
    - 0$ - max.  2 Container und 1000 Betriebsstunden pro Monat
    - 7$ - max. 10 Container, immer verfügbar
    - ...
    ### Deployment
    - [Building Docker Images on Heroku](https://devcenter.heroku.com/articles/build-docker-images-heroku-yml)
    - GitHub Integration
        1. Create App
        2. Connect to GitHub => Heroku wants full access to all public/private repositories - __WILL NOT HAPPEN!__
