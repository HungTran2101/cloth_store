import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

export const InfoData = {
  brandName: "Wolfesta",
  address: "999 Cach Mang Thang 9, Quan Tan Binh, TP. Ho Chi Minh",
  phone: "+84 939 199 067",
  email: "wolfesta@gmail.com",
  open: "Monday - Saturday : 9:00 - 20:00",
  socials: [
    {
      icon: <BsFacebook />,
      url: "",
    },
    {
      icon: <BsInstagram />,
      url: "",
    },
    {
      icon: <BsYoutube />,
      url: "",
    },
  ],
};

export const HeaderData = {
  navItems: ["Home", "Collections", "Contact"],
};

export const FooterData = {
  top: {
    socials: {
      title: "Check our social network",
      items: InfoData.socials,
    },
  },
  bottom: [
    {
      title: "address",
      content: InfoData.address,
    },
    {
      title: "email us",
      content: InfoData.email,
      urlLabel: "send mail",
      url: "/contact",
    },
    {
      title: "customer support",
      content: InfoData.phone,
      urlLabel: "call us",
      url: `tel:${InfoData.phone}`,
    },
    {
      title: "opening hours",
      content: InfoData.open,
    },
  ],
};
