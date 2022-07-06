const update = {
  care: {
    image: {
      alternate: "cart&money",
      source: "https://firebasestorage.googleapis.com/v0/b/zen-96fc7.appspot.com/o/images%2Fimage3.jpg?alt=media&token=74395b72-196e-4c4d-a39d-8f72141aa3c3"
    },
    name: "care",
    texts: [
      "Shopping online is usually a delightful experience. Until its not.",
      "Until something you buy, proves to be faulty, missing or a totally wrong item, youre in for long product return procedures.",
      "But, here comes ZEN Care: a free, built-in shopping protection."
    ],
    title: {
      data: "ZEN Care",
      priority: 2
    }
  },
  cashback: {
    buttonText: "Order a consultation",
    name: "cashback",
    texts: [
      "It saves a little bit of money while youre shopping, but in many cases it takes ages to get anything out of it.",
      "We gave it a thought and made cashback way more friendly.",
      "Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase."
    ],
    title: {
      data: "and cashback!",
      priority: 2
    }
  },
  clients: {
    clients: [
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/1.svg"
      },
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/2.svg"
      },
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/3.svg"
      },
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/4.svg"
      },
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/5.svg"
      },
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/6.svg"
      },
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/7.svg"
      },
      {
        alternate: "cart&money",
        source: "img/icons/clients/light/8.svg"
      }
    ],
    name: "clients"
  },
  download: {
    buttons: [
      {
        type: "apple",
        url: "https://apple.com"
      },
      {
        type: "google",
        url: "https://google.com"
      }
    ],
    image: {
      alternate: "some text",
      source: "https://firebasestorage.googleapis.com/v0/b/zen-96fc7.appspot.com/o/images%2Fimage1.jpg?alt=media&token=1c665ea7-f3a1-4810-a3ce-ba8b832b4285"
    },
    name: "download",
    texts: [
      "See how we can help with making your shopping experience and money management more ZEN."
    ],
    title: {
      data: "Peaceful shopping mindful money",
      priority: 1
    }
  },
  footer: {
    columns: [
      {
        links: [
          {
            data: "Help center",
            url: "https://google.com"
          },
          {
            data: "Join ZEN team",
            url: "https://google.com"
          },
          {
            data: "Privacy Policy",
            url: "https://google.com"
          },
          {
            data: "Cookies",
            url: "https://google.com"
          },
          {
            data: "Terms of use",
            url: "https://google.com"
          }
        ],
        name: "learn",
        title: {
          data: "Learn",
          priority: 3
        }
      },
      {
        links: [
          {
            data: "For developers",
            url: "https://google.com"
          },
          {
            data: "Apple Pay",
            url: "https://google.com"
          },
          {
            data: "Google Pay",
            url: "https://google.com"
          }
        ],
        name: "discover",
        title: {
          data: "Discover",
          priority: 3
        }
      },
      {
        links: [
          {
            data: "Business",
            url: "https://google.com"
          },
          {
            data: "Personal",
            url: "https://google.com"
          }
        ],
        name: "offer",
        title: {
          data: "Offer",
          priority: 3
        }
      },
      {
        links: [
          {
            data: "English",
            url: "https://google.com"
          },
          {
            data: "Polish",
            url: "https://google.com"
          }
        ],
        name: "language",
        title: {
          data: "Language",
          priority: 3
        }
      },
      {
        links: [
          {
            data: "img/icons/in.svg",
            url: "https://google.com"
          }
        ],
        name: "follow",
        title: {
          data: "Follow us",
          priority: 3
        }
      },
      {
        links: [
          {
            data: "hello@zen.com",
            url: "hello@zen.com"
          }
        ],
        name: "contact",
        title: {
          data: "Contact",
          priority: 3
        }
      }
    ],
    info: {
      copyright: {
        alternate: "some text",
        source: "img/icons/copyright.svg",
        url: "https://google.com"
      },
      footerLogo: {
        alternate: "ZEN Company",
        source: "img/icons/logo_footer.svg",
        target: "root"
      },
      texts: [
        "ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.",
        "Registration number of the company 304749651, VAT ID LT100011714916.",
        "License of electronic money institutions number LB000457.",
        "Share capital 2.185.000,00 EUR.",
        "Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.",
        "Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland."
      ]
    },
    name: "footer"
  },
  header: {
    name: "header",
    navigations: [
      {
        data: "Download",
        target: "download"
      },
      {
        data: "Warranty",
        target: "warranty"
      },
      {
        data: "Care",
        target: "care"
      },
      {
        data: "Cashback",
        target: "cashback"
      },
      {
        data: "Clients",
        target: "clients"
      }
    ]
  },
  modal: {
    form: {
      buttonText: "Submit",
      inputs: [
        {
          placeholder: "Name",
          type: "text"
        },
        {
          placeholder: "Tel",
          type: "tel"
        },
        {
          placeholder: "E-mail",
          type: "email"
        }
      ],
      name: "form",
      policy: {
        data: "Privacy policy",
        url: "policy.html"
      },
      select: {
        label: "Connection",
        options: [
          {
            data: "Instagram",
            value: "instagram"
          },
          {
            data: "Telegram",
            value: "telegram"
          },
          {
            data: "Facebook",
            value: "facebook"
          }
        ]
      }
    },
    name: "modal",
    title: {
      data: "Order a consultation",
      priority: 2
    }
  },
  warranty: {
    image: {
      alternate: "cart&money",
      source: "https://firebasestorage.googleapis.com/v0/b/zen-96fc7.appspot.com/o/images%2Fimage2.jpg?alt=media&token=3211134e-474c-4899-9c08-09a621321754"
    },
    name: "warranty",
    texts: [
      "ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.",
      "When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically."
    ],
    title: {
      data: "1-year warranty boost",
      priority: 2
    }
  }
}