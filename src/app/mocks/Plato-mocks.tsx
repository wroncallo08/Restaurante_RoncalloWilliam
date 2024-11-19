import { Plato } from "../modelos/Plato";

export const ARREGLO_PLATOS: Array<Plato> = [
  new Plato(
    1,
    "Bandeja paisa",
    "2",
    "35000",
    "Bandeja_Paisa.jpg",
    " data:image/jpeg;base64,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"
  ),
  new Plato(2, "Mute Santendereano", "4", "31000", "", ""),
  new Plato(3, "Mote de queso", "5", "25000", "", ""),
  new Plato(4, "Mojarra frita", "3", "25000", "", ""),
  new Plato(5, "Camarones al ajillo", "3", "35000", "", ""),
  new Plato(6, "Ajiaco", "1", "15000", "", ""),
];
