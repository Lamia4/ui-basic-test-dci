class GithubUserWidget
{
    /**
     * @constructor
     * @param { object } config
     * @param { string } config.container
     * @param { string } config.apiUrl
     * @param { string } config.endpoint
     */
    constructor(config = {})
    {
        this.config = config;
        this.apiUrl = config.apiUrl || "https://api.github.com";
        this.endpoint = config.endpoint || "/users/:username/repos";
        this.elements = {};

        this.init();
    }

    init()
    {
        this.elements.container = document.querySelector(this.config.container);
        this.elements.container.innerHTML = `
            <form class="form-inline widget-form">
                <input
                    type="text"
                    class="form-control mb-2 widget-input"
                    placeholder="Github Username"
                >
                <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </form>
            <div class="widget-list"></div>
        `;
        this.elements.form = this.elements.container.querySelector(".widget-form");
        this.elements.input = this.elements.container.querySelector(".widget-input");
        this.elements.list = this.elements.container.querySelector(".widget-list");

        this.elements.form.addEventListener("submit", (event) =>
        {
            event.preventDefault();
            
            const username = this.elements.input.value;

            this.getRepositories(username, repositories =>
            {
                console.log(repositories);

                this.elements.list.innerHTML = `
                    <div class="list-group">
                    ${
                        repositories.map(repository =>
                        {
                            return `
                                <a
                                    href="${ repository.html_url }"
                                    target="_blank"
                                    class="list-group-item list-group-item-action"
                                >
                                    <h5 class="mb-2">${ repository.name }</h5>
                                    <p>
                                        ${ repository.description }
                                    </p>
                                </a>
                            `;
                        }).join("")
                    }
                    </div>
                `;
            });
        });
    }

    getRepositories(username, callback)
    {
        const url = (this.apiUrl + this.endpoint).replace(":username", username);

        console.log(url); // https://api.github.com/users/FRickReich/repos

        fetch(url)
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.log(error));
    }
}