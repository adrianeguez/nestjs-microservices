import { RevisarUsuarioIdGuard } from "./revisar-usuario-id-guard";
import { RevisarNombreIdGuard } from "./revisar-nombre-id-guard";
import { RevisarFacultadGuard } from "./revisar-facultad-guard";

export const GUARDS_RUTA_QUERY = [
    RevisarUsuarioIdGuard,
    RevisarNombreIdGuard,
    RevisarFacultadGuard
]