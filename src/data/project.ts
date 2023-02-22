import { MyProject } from "../models/MyProject"
import previewCard from '../images/previewCard.png'
import selfCareCenter from '../images/selfCareCenter.png'
import pricingComponent from '../images/pricingComponent.png'
import cardDetailsForm from '../images/cardDetailsForm.png'
import orderSummary from '../images/orderSummary.png'
import faqCard from '../images/faqCard.png'
import moviesApp from '../images/moviesApp.png'
import landingPage from '../images/landingPage.png'

export const projects: MyProject[] = [
    {
        id: 1,
        title: 'Interactive card details form',
        image: cardDetailsForm,
        url: 'https://github.com/Raftouch/interactive-card-details-form'
    },
    {
        id: 2,
        title: 'Huddle landing page',
        image: landingPage,
        url: 'https://github.com/Raftouch/huddle-landing-page'
    },
    {
        id: 3,
        title: '3-column preview card component',
        image: previewCard,
        url: 'https://github.com/Raftouch/3-column-preview-card-component'
    },
    {
        id: 4,
        title: 'Self care center',
        image: selfCareCenter,
        url: 'https://github.com/Raftouch/self-care-center'
    },
    {
        id: 5,
        title: 'Order summary component',
        image: orderSummary,
        url: 'https://github.com/Raftouch/order_summary_component'
    },
    {
        id: 6,
        title: 'Maquette Simplon',
        image: '',
        url: 'https://github.com/Raftouch/Maquette'
    },
    {
        id: 7,
        title: 'Interactive pricing component',
        image: pricingComponent,
        url: 'https://github.com/Raftouch/interactive-pricing-component'
    },
    {
        id: 8,
        title: 'Movies app',
        image: moviesApp,
        url: 'https://github.com/Raftouch/movie-project-react-app'
    },
    {
        id: 9,
        title: 'FAQ accordeon card',
        image: faqCard,
        url: 'https://github.com/Raftouch/faq-accordeon-card'
    }
]