import {toAbsoluteUrl} from "../utils";
import {aboutUsRoute, eventRoute, productsRoute} from "../routes/child-routes";

export const CATEGORIES = [
  {
    text: "RESERVE.TITLE",
    desc: "RESERVE.DESC",
    button: "BUTTON.DISCOVER",
    image: toAbsoluteUrl("/media/images/categories/categories1.jpg"),
    path: eventRoute.path
  },
  {
    text: "EVENT.TITLE",
    desc: "EVENT.DESC",
    button: "BUTTON.DISCOVER",
    image: toAbsoluteUrl("/media/images/categories/categories2.jpg"),
    path: eventRoute.path
  },
  {
    text: "SHOPPING.TITLE",
    desc: "SHOPPING.DESC",
    button: "BUTTON.DISCOVER",
    image: toAbsoluteUrl("/media/images/categories/categories3.jpg"),
    path: productsRoute.path
  }
]

export const PARTNERS = [
  {
    url: "/#",
    logo: toAbsoluteUrl("/media/images/partner/partner1.png")
  },
  {
    url: "/#",
    logo: toAbsoluteUrl("/media/images/partner/partner2.png")
  },
  {
    url: "/#",
    logo: toAbsoluteUrl("/media/images/partner/partner3.png")
  },
  {
    url: "/#",
    logo: toAbsoluteUrl("/media/images/partner/partner4.png")
  },
  {
    url: "/#",
    logo: toAbsoluteUrl("/media/images/partner/partner5.png")
  },
  {
    url: "/#",
    logo: toAbsoluteUrl("/media/images/partner/partner6.png")
  }
]

export const INSTAGRAM_LINK = "https://www.instagram.com/page"
export const INSTAGRAM_LINK_TEXT = "Follow us on @Katásti̱ma"
export const INSTAGRAM_PIC = [
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta1.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta2.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta3.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta4.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta5.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta6.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta7.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta8.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta9.jpg")
  },
  {
    url: "/#",
    image: toAbsoluteUrl("/media/images/instagram/insta10.jpg")
  },
]


export const HOME_ABOUT_US = {
  text: "WELECOM.TITLE",
  desc: "WELECOM.DESC",
  button: "BUTTON.DISCOVER",
  image: toAbsoluteUrl("/media/images/offer/offer1.jpg"),
  path: aboutUsRoute.path
}


export const HOME_BANNERS = [
  {
    title: "RESERVE.TITLE",
    desc: "RESERVE.DESC",
    image: toAbsoluteUrl("/media/images/banners/main-banner2.jpg"),
    path: eventRoute.path
  },
  {
    title: "EVENT.TITLE",
    desc: "EVENT.DESC",
    image: toAbsoluteUrl("/media/images/banners/main-banner1.jpg"),
    path: eventRoute.path
  },
  {
    title: "SHOPPING.TITLE",
    desc: "SHOPPING.DESC",
    image: toAbsoluteUrl("/media/images/banners/main-banner3.jpg"),
    path: productsRoute.path
  }
]


