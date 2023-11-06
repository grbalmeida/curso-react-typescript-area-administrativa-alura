import useFetch from './useFetch';
import IProfissional from './types/IProfissional';

const useDadosProfissional = () => {
    return useFetch<IProfissional[]>({ url: 'profissionais' });
}

export default useDadosProfissional;