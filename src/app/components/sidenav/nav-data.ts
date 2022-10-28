import { INavbarData } from "./helper";

export const navbarData : INavbarData[] = [
    { 
        label: 'Inicio',
        icon: 'bx bx-home-alt-2',
        routerLink: ''
    },
    {
        label: 'Pedidos',
        icon: 'bx bx-package',
        routerLink: 'dashboard'
    },
    {
        label: 'Productos',
        icon: 'bx bxl-deezer',
        routerLink: '',
        items: [
            {
                routerLink: '',
                label: 'Agregar Producto'

            },
            {
                routerLink: '',
                label: 'Buscar Producto'
            }

        ]

    },
    {
        label: 'Clientes',
        icon: 'bx bx-user',
        routerLink: ''
    }
];

