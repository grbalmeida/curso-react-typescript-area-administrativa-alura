import { useEffect, useState } from 'react';

const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://my-json-server.typicode.com/grbalmeida/voll-api/'
    : 'http://localhost:8080/';

export default function useFetch<T>({ url }: { url: string }) {
    const [dados, setDados] = useState<T | null>(null);
    const [erro, setErro] = useState('');

    useEffect(() => {
        fetch(`${apiUrl}${url}`)
            .then(resposta => resposta.json())
            .then(dados => setDados(dados))
            .catch(erro => setErro(erro));
    }, [url]);

    return { dados, erro };
}