import Typography from '@mui/material/Typography';

//PENDIENTE: Agregue los props apellidos, nombres y paralelo
interface Info {
    lastname: string
    name: string
    paralelo: string
}

export default function Student(info: Info) {
    return (
        <>
            <Typography component="p" variant="h4">

                {/* PENDIENTE: Renderice los props apellidos y nombres */}
                {info.lastname} {info.name}
            </Typography>
            <Typography component="h2" variant="h6"
                color="primary" gutterBottom>

                {/* PENDIENTE: Renderice el paralelo */}

                Paralelo #{info.paralelo}

            </Typography>
        </>
    )
}
