import IProfissional from '../../types/IProfissional';
import Card from './Card';

function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {
    return (
        <section>
            {profissionais?.map(profissional => (
                <Card profissional={profissional} />
            ))}
        </section>
    )
}

export default Avaliacao;