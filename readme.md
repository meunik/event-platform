https://rseat.in/lab-graphcms


## Anotações

    CMS = Content Management System

    Traz tanto o painel de ADMIN tanto quanto a parte visual do front-end (temas)

    Headless CMS (GraphCMS): Painel de ADMIN (dados fornecidos através de uma API REST ou GraphQL)
    React que consome essa API do CMS

    query / mutation
    query = buscar dados
    mutation = criar, alterar ou deletar dados

    possivel exemplo de query {
        useEffect(() => {
            client.query({
                query: GET_LESSONS_QUERY
            }).then(response => {
                console.log(response.data)
            })
        }, [])
    }