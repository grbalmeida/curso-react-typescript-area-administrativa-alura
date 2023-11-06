import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import IConsulta from '../../types/IConsulta';

function Tabela({ consultas }: { consultas: IConsulta[] | null }) {
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map(consulta => (
                            <TableRow key={consulta.id}>
                                <TableCell component="th" scope="row">{consulta.data}</TableCell>
                                <TableCell>{consulta.horario}</TableCell>
                                <TableCell>{consulta.profissional[0].nome}</TableCell>
                                <TableCell>{consulta.profissional[0].especialidade}</TableCell>
                                <TableCell>{consulta.paciente}</TableCell>
                                <TableCell>{consulta.modalidade}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;