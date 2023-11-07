import { useEffect, useState } from 'react';

export default function useFetch<T>({ url }: { url: string }) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState('');

    let apiUrl = process.env.API_URL ? process.env.API_URL : 'http://localhost:8080/';

    useEffect(() => {
        fetch(`${apiUrl}${url}`)
            .then(resposta => resposta.json())
            .then(dados => setDados(dados))
            .catch(erro => setErro(erro));
    }, [url]);

    return { dados, erro };
}