import { LuArrowLeft, LuArrowRight, LuArrowUp, LuBadgePercent, LuChevronLeft, LuChevronRight, LuCircle, LuFlame, LuGift, LuHome, LuInstagram, LuLogIn, LuMapPin, LuMenu, LuMoreHorizontal, LuSearch, LuShapes, LuShoppingBasket, LuShoppingCart, LuTwitter, LuUser2, LuX, LuYoutube } from "react-icons/lu"

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa"

export const icons = {
    Circle: LuCircle,
    ShoppingCart: LuShoppingCart,
    LogIn: LuLogIn,
    Search: LuSearch,
    MapPin: LuMapPin,
    Menu: LuMenu,
    BedgePercent: LuBadgePercent,
    Flame: LuFlame,
    Gift: LuGift,
    ShoppingBasket: LuShoppingBasket,
    ArrowRight: LuArrowRight,
    ArrowLeft: LuArrowLeft,
    ArrowUp: LuArrowUp,
    MoreHorizontal: LuMoreHorizontal,
    ChevronLeft: LuChevronLeft,
    ChevronRight: LuChevronRight,
    Youtube: FaYoutube,
    Instagram: FaInstagram,
    Twitter: FaTwitter,
    User: LuUser2,
    Shapes: LuShapes,
    Home: LuHome,
}

export type IconKey = keyof typeof icons