import { createContext } from "react";

export const TarjetasContext = createContext({
    tarjetas: [],
    setTarjetas: () => {}
})