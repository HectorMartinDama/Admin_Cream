import { INavbarData } from "./helper";

export const navbarData : INavbarData[] = [
    { 
        label: 'Inicio',
        icon: 'home-outline',
        routerLink: ''
    },
    {
        label: 'Productos',
        icon: 'archive-outline',
        routerLink: '',
        items: [
            {
                routerLink: '/productos/registro',
                label: 'Agregar Producto'

            },
            {
                routerLink: '/products',
                label: 'Buscar Producto'
            }
        ]
    },
    {
        label: 'Cupones',
        icon: 'ticket-outline',
        routerLink: '/cupones/registro',
        items: [
            {
                routerLink: '/cupones/registro',
                label: 'Agregar Cupon'
            },
            {
                routerLink: '/cupones',
                label: 'Buscar Cupon'
            }
        ]
    },
    {
        label: 'Añadir',
        icon: 'add-outline',
        routerLink: '/cupones/registro',
        items: [
            {
                routerLink: '/marcas/registro',
                label: 'Agregar Marca'
            },
            {
                routerLink: '/cupones',
                label: 'Agregar Talla'
            }
        ]
    }
];

