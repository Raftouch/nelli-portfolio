import { MyProject } from "../models/MyProject"
import previewCard from '../images/previewCard.png'
import selfCareCenter from '../images/selfCareCenter.png'

export const projects: MyProject[] = [
    {
        id: 1,
        title: 'Interactive card details form',
        image: '',
        languages: 'html css js',
        url: 'https://github.com/Raftouch/interactive-card-details-form'
    },
    {
        id: 2,
        title: 'Interactive pricing component',
        image: '',
        languages: 'html css js',
        url: 'https://github.com/Raftouch/interactive-pricing-component'
    },
    {
        id: 3,
        title: '3-column preview card component',
        image: previewCard,
        languages: 'html css',
        url: 'https://github.com/Raftouch/3-column-preview-card-component'
    },
    {
        id: 4,
        title: 'Self care center',
        image: selfCareCenter,
        languages: 'html css js',
        url: 'https://github.com/Raftouch/self-care-center'
    },
    {
        id: 5,
        title: 'Order summary component',
        image: '',
        languages: 'html css',
        url: 'https://github.com/Raftouch/order_summary_component'
    },
    {
        id: 6,
        title: 'Maquette Simplon',
        image: '',
        languages: 'html css js',
        url: 'https://github.com/Raftouch/Maquette'
    }
]