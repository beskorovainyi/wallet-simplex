import BuyOnlinePage from "../views/BuyOnlinePage";
import HomePage from "../views/HomePage";
import ContactUsPage from "../views/ContactUsPage";

const routesAdmin = [
  {
    path: '/home',
    name: 'Home Page',
    component: HomePage
  },
  {
    path: '/buy-online',
    name: 'Buy Online Page',
    component: BuyOnlinePage
  },
  {
    path: '/contact-us',
    name: 'Contact Us Page',
    component: ContactUsPage
  }
]

export default routesAdmin