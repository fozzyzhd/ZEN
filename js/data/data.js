const data = {
  header: {
    name: 'header',
    navigations: [
      {
        data: 'Download',
        target: 'download'
      },
      {
        data: 'Warranty',
        target: 'warranty'
      },
      {
        data: 'Care',
        target: 'care'
      },
      {
        data: 'Cashback',
        target: 'cashback'
      },
      {
        data: 'Clients',
        target: 'clients'
      }
    ]
  },
  download: {
    name: 'download',
    title: {
      data: 'Peaceful shopping mindful money',
      priority: 1
    },
    texts: ['See how we can help with making your shopping experience and money management more ZEN.'],
    image: {
      source: 'img/image1.jpg',
      alternate: 'some text',
    },
    buttons: [
      {
        url: 'https://apple.com',
        type: 'apple'
      },
      {
        url: 'https://google.com',
        type: 'google'
      }
    ]
  },
  warranty: {
    name: 'warranty',
    title: {
      data: '1-year warranty boost',
      priority: 2
    },
    texts: [
      'ZEN cards have a very neat feature that will help you whenever your electronic devices start failing after the standard warranty ends, which is pretty common.',
      'When you buy any electronics with your ZEN shopping Mastercard, their warranty gets extended by one year. How does it work? It simply does. Automatically.'
    ],
    image: {
      source: 'img/image2.jpg',
      alternate: 'cart&money'
    }
  },
  care: {
    name: 'care',
    title: {
      data: 'ZEN Care',
      priority: 2
    },
    texts: [
      'Shopping online is usually a delightful experience. Until its not.',
      'Until something you buy, proves to be faulty, missing or a totally wrong item, youre in for long product return procedures.',
      'But, here comes ZEN Care: a free, built-in shopping protection.'
    ],
    image: {
      source: 'img/image3.jpg',
      alternate: 'cart&money'
    },
  },
  cashback: {
    name: 'cashback',
    title: {
      data: 'and cashback!',
      priority: 2
    },
    texts: [
      'It saves a little bit of money while youre shopping, but in many cases it takes ages to get anything out of it.',
      'We gave it a thought and made cashback way more friendly.',
      'Up to 14% of what you spend using ZEN Mastercard ® will materialize on your account right after the purchase.'
    ],
    buttonText: 'Order a consultation'
  },
  clients: {
    name: 'clients',
    lightThemeClients: [
    { source: 'img/icons/clients/light/1.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/light/2.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/light/3.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/light/4.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/light/5.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/light/6.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/light/7.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/light/8.svg',
      alternate: 'cart&money'
    }],
    darkThemeClients:[
      { source: 'img/icons/clients/dark/1.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/dark/2.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/dark/3.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/dark/4.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/dark/5.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/dark/6.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/dark/7.svg',
      alternate: 'cart&money'
    },
    { source: 'img/icons/clients/dark/8.svg',
      alternate: 'cart&money'
    } 
    ]
  },
  footer: {
    name: 'footer',
    columns: [
      {
        name: 'learn',
        title: {
          data: 'Learn',
          priority: 3
        },
        links: [
          {
            url: 'https://google.com',
            data: 'Help center'
          },
          {
            url: 'https://google.com',
            data: 'Join ZEN team'
          },
          {
            url: 'https://google.com',
            data: 'Privacy Policy'
          },
          {
            url: 'https://google.com',
            data: 'Cookies'
          },
          {
            url: 'https://google.com',
            data: 'Terms of use'
          }
        ]
      },
      {
        name: 'discover',
        title: {
          data: 'Discover',
          priority: 3
        },
        links: [
          {
            url: 'https://google.com',
            data: 'For developers'
          },
          {
            url: 'https://google.com',
            data: 'Apple Pay'
          },
          {
            url: 'https://google.com',
            data: 'Google Pay'
          }
        ]
      },
      {
        name: 'offer',
        title: {
          data: 'Offer',
          priority: 3
        },
        links: [
          {
            url: 'https://google.com',
            data: 'Business'
          },
          {
            url: 'https://google.com',
            data: 'Personal'
          }
        ]
      },
      {
        name: 'language',
        title: {
          data: 'Language',
          priority: 3
        },
        links: [
          {
            url: 'https://google.com',
            data: 'English'
          },
          {
            url: 'https://google.com',
            data: 'Polish'
          }
        ]
      },
      {
        name: 'follow',
        title: {
          data: 'Follow us',
          priority: 3
        },
        links: [
          {
            url: 'https://google.com',
            data: 'img/icons/in.svg'
          }
        ]
      },
      {
        name: 'contact',
        title: {
          data: 'Contact',
          priority: 3
        },
        links: [
          {
            url: 'hello@zen.com',
            data: 'hello@zen.com'
          }
        ]
      }
    ],
    info: {
      footerLogo: {
        source: 'img/icons/logo_footer.svg',
        alternate: 'ZEN Company',
        target: 'root'
      },
      texts: [
        'ZEN.COM is a licensed financial institution under the supervision of the Central Bank of Lithuania approved by European Banking Authority for 31 countries.',
        'Registration number of the company 304749651, VAT ID LT100011714916.',
        'License of electronic money institutions number LB000457.',
        'Share capital 2.185.000,00 EUR.',
        'Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania.',
        'Sales Office: ul. Emilii Plater 53, 00-113 Warsaw, Poland.'
      ],
      copyright: {
        url: 'https://google.com',
        source: 'img/icons/copyright.svg',
        alternate: 'some text'
      }
    },
  },
  modal: {
    name: 'modal',
    title: {
      data: 'Order a consultation',
      priority: 2
    },
    form: {
      name: 'form',
      inputs: [
        {
          type: 'text',
          placeholder: 'Name'
        },
        {
          type: 'tel',
          placeholder: 'Tel'
        },
        {
          type: 'email',
          placeholder: 'E-mail'
        }
      ],
      select: {
        label: 'Connection',
        options: [
          {
            value: 'instagram',
            data: 'Instagram'
          },
          {
            value: 'telegram',
            data: 'Telegram'
          },
          {
            value: 'facebook',
            data: 'Facebook'
          }
        ]
      },
      policy: {
        url: 'policy.html',
        data: 'Privacy policy'
      },
      buttonText: 'Submit'
    }
  }
}

export default data

