import useFetch from './useFetch';
import IConsulta from './types/IConsulta';

const useDadosConsultas = () => {
    return useFetch<IConsulta[]>({ url: 'consultas' });
}

export default useDadosConsultas;