export const PRODUCTS_DETAIL = [
  {
    id: 'silkskin-serum',
    images: [
      'resources/suero-silkSkin/belle-beauty-JPvy3rrWSeM-unsplash.jpg',
      'resources/suero-silkSkin/jazmin-quaynor-FoeIOgztCXo-unsplash.jpg',
      'resources/suero-silkSkin/marco-palumbo-yzDWEjCOItw-unsplash.jpg',
      'resources/suero-silkSkin/miska-sage-5yP4Gz-rpag-unsplash.jpg',
    ],
    category: 'skin-care',
    name: 'Suero SilkSkin',
    rating: 4.8,
    price: 48.0,
    oldPrice: 60.0,
    description:
      'Suero facial hidratante y rejuvenecedor. Que tiene propiedades antioxidantes y humectantes, además de ser una excelente opción para todo tipo de piel. Marca reconocida mundialmente y usada por celebridades.',
    sizes: ['30ml', '60ml', '80ml', '100ml'],
    sku: 'SS-001-60ML',
    tags: ['antiedad', 'hidratante', 'luminosidad', 'suero facial'],
    detail: {
      description: {
        product:
          'El Suero SilkSkin está formulado para combatir los signos del envejecimiento, mejorar la textura y aportar hidratación profunda durante 24 horas.',
        benefits: [
          'Reduce la apariencia de líneas finas y arrugas',
          'Mejora la textura y suavidad de la piel',
          'Estimula la producción natural de colágeno',
          'Hidratación profunda y duradera',
          'Apto para todo tipo de piel',
        ],
        howToUse:
          'Aplicar 2-3 gotas sobre la piel limpia y seca, mañana y noche. Masajear suavemente en rostro y cuello con movimientos ascendentes. Usar después de la limpieza y antes de la crema hidratante.',
      },
      additionalInfo: {
        brand: 'BeautyShop',
        productType: 'Suero antiedad',
        skinType: 'Todo tipo de piel',
        keyIngredients: 'Péptidos, Ácido Hialurónico, Vitamina C',
        volumeOptions: '30ml, 60ml, 80ml, 100ml',
        crueltyFree: true,
        parabenFree: false,
      },
      reviews: {
        rating: 4.8,
        totalReviews: 248,
        stars: {
          one: 3,
          two: 5,
          three: 15,
          four: 50,
          five: 175,
        },
        comments: [
          {
            author: 'María López',
            isVerified: true,
            date: '2025-08-15',
            rating: 4,
            title: '¡Me encantó este suero!',
            description:
              'He notado mi piel mucho más suave y luminosa desde que lo uso. Se absorbe rápido y no deja sensación grasosa.',
            images: [
              'resources/suero-silkSkin/jazmin-quaynor-FoeIOgztCXo-unsplash.jpg',
              'resources/suero-silkSkin/miska-sage-5yP4Gz-rpag-unsplash.jpg',
            ],
          },
          {
            author: 'Lucía Fernández',
            isVerified: true,
            date: '2025-08-10',
            rating: 5,
            title: 'Resultados visibles en poco tiempo',
            description:
              'En solo dos semanas mi piel se ve más firme y radiante. ¡Lo recomiendo totalmente!',
            images: [
              'resources/suero-silkSkin/belle-beauty-JPvy3rrWSeM-unsplash.jpg',
            ],
          },
          {
            author: 'Paula Gómez',
            isVerified: false,
            date: '2025-07-28',
            rating: 5,
            title: 'Perfecto para mi rutina diaria',
            description:
              'Me encanta la textura ligera y el aroma suave. No irrita mi piel sensible.',
            images: [],
          },
          {
            author: 'Andrea Torres',
            isVerified: true,
            date: '2025-07-20',
            rating: 4,
            title: 'Muy buen producto',
            description:
              'He probado varios sueros y este es el que mejores resultados me ha dado. La hidratación dura todo el día.',
            images: [],
          },
          {
            author: 'Sofía Ramírez',
            isVerified: true,
            date: '2025-07-12',
            rating: 5,
            title: '¡Recomendado!',
            description:
              'Mi piel luce más joven y saludable. Lo volveré a comprar sin duda.',
            images: [],
          },
        ],
      },
    },
  },
  {
    id: 'argan-glow',
    name: 'Aceite Facial Argan Glow',
    category: 'skin-care',
    price: 35.0,
    oldPrice: 42.0,
    rating: 4.6,
    sizes: ['30ml', '50ml'],
    sku: 'AG-002-30ML',
    tags: ['aceite facial', 'hidratante', 'nutritivo', 'antioxidante'],
    images: [
      'resources/aceite-facial-argan/elsa-olofsson-wd4FU4S8yqs-unsplash.jpg',
      'resources/aceite-facial-argan/mona-jain-j24HPh0Q84g-unsplash.jpg',
      'resources/aceite-facial-argan/natallia-photo-2N-tGc7r4QQ-unsplash.jpg',
      'resources/aceite-facial-argan/saronita-genopxTaPH8-unsplash.jpg',
    ],
    description:
      'Aceite facial nutritivo con argán prensado en frío que ayuda a restaurar la barrera de la piel, aportar luminosidad y suavizar líneas finas.',
    detail: {
      description: {
        product:
          'Formulado con aceite de argán rico en ácidos grasos y vitamina E para nutrir y proteger la piel seca u opaca.',
        benefits: [
          'Nutre y suaviza la piel',
          'Aporta brillo saludable sin sensación grasa',
          'Ayuda a mejorar elasticidad',
          'Protege contra radicales libres',
          'Fórmula ligera de rápida absorción',
        ],
        howToUse:
          'Aplicar 3-4 gotas sobre rostro limpio después del suero y antes (o mezclado) con la crema hidratante. Usar mañana y noche.',
      },
      additionalInfo: {
        brand: 'BeautyShop',
        productType: 'Aceite facial nutritivo',
        skinType: 'Piel seca, normal, mixta',
        keyIngredients: 'Aceite de Argán, Vitamina E, Escualano',
        volumeOptions: '30ml, 50ml',
        crueltyFree: true,
        parabenFree: true,
      },
      reviews: {
        rating: 4.6,
        totalReviews: 132,
        stars: { one: 4, two: 6, three: 12, four: 40, five: 70 },
        comments: [
          {
            author: 'Elena Ruiz',
            isVerified: true,
            date: '2025-08-05',
            rating: 5,
            title: 'Piel radiante',
            description:
              'Desde que lo uso mi piel luce más luminosa y se siente muy suave.',
            images: [
              'resources/aceite-facial-argan/elsa-olofsson-wd4FU4S8yqs-unsplash.jpg',
            ],
          },
          {
            author: 'Gabriela Soto',
            isVerified: true,
            date: '2025-07-22',
            rating: 4,
            title: 'Muy buen aceite',
            description:
              'Hidrata sin dejar grasoso. Ojalá hubiera una versión con aroma neutro.',
            images: [],
          },
          {
            author: 'Rocío Delgado',
            isVerified: false,
            date: '2025-07-14',
            rating: 5,
            title: 'Recuperó mi piel',
            description:
              'Tenía parches secos y mejoraron muchísimo en una semana. Textura ligera.',
            images: [],
          },
          {
            author: 'Marta Iglesias',
            isVerified: true,
            date: '2025-07-05',
            rating: 4,
            title: 'Luminosidad real',
            description:
              'Da brillo saludable sin verse grasoso. Lo uso mezclado con la crema.',
            images: [
              'resources/aceite-facial-argan/saronita-genopxTaPH8-unsplash.jpg',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'smooth-foundation',
    name: 'Base Suave',
    category: 'makeup',
    price: 28.0,
    rating: 4.4,
    inStock: true,
    isNew: true,
    sku: 'BF-003-30ML',
    tags: ['base', 'acabado natural', 'ligera', 'cobertura media'],
    images: [
      'resources/base-suave/birgith-roosipuu-Pd5JqHgT2Fs-unsplash.jpg',
      'resources/base-suave/harper-sunday-5adPowUq_h0-unsplash.jpg',
      'resources/base-suave/sia-ray-QkAnVbOrvNE-unsplash.jpg',
      'resources/base-suave/vya-naturals-RVg8q37bsAM-unsplash.jpg',
    ],
    description:
      'Base líquida de textura ligera con acabado natural y luminoso que unifica el tono sin obstruir los poros.',
    sizes: ['30ml'],
    detail: {
      description: {
        product:
          'Base fluida desarrollada para proporcionar cobertura media modulable y sensación segunda piel.',
        benefits: [
          'Cobertura media modulable',
          'Acabado natural luminoso',
          'Fórmula ligera que deja respirar la piel',
          'No comedogénica',
          'Difumina imperfecciones',
        ],
        howToUse:
          'Aplicar pequeñas cantidades desde el centro del rostro hacia afuera con brocha, esponja o dedos limpios.',
      },
      additionalInfo: {
        brand: 'BeautyShop',
        productType: 'Base líquida',
        skinType: 'Todo tipo de piel',
        keyIngredients: 'Ácido Hialurónico, Vitamina E, Pigmentos tratados',
        volumeOptions: '30ml',
        crueltyFree: true,
        parabenFree: true,
      },
      reviews: {
        rating: 4.4,
        totalReviews: 98,
        stars: { one: 3, two: 6, three: 14, four: 33, five: 42 },
        comments: [
          {
            author: 'Natalia Herrera',
            isVerified: true,
            date: '2025-08-03',
            rating: 5,
            title: 'Acabado muy natural',
            description:
              'Se integra perfecto y no marca líneas. Me dura toda la jornada.',
            images: [
              'resources/base-suave/harper-sunday-5adPowUq_h0-unsplash.jpg',
            ],
          },
          {
            author: 'Patricia Vega',
            isVerified: false,
            date: '2025-07-18',
            rating: 4,
            title: 'Ligera y cómoda',
            description:
              'Me hubiera gustado más cobertura, pero para diario es ideal.',
            images: [],
          },
          {
            author: 'Silvia Arroyo',
            isVerified: true,
            date: '2025-07-10',
            rating: 5,
            title: 'No se oxida',
            description:
              'Mantiene el tono durante el día y no se asienta en poros. Muy cómoda.',
            images: [],
          },
          {
            author: 'Valeria Montes',
            isVerified: true,
            date: '2025-07-02',
            rating: 4,
            title: 'Natural y ligera',
            description:
              'La uso con esponja húmeda y queda como segunda piel. Cobertura justa.',
            images: [],
          },
        ],
      },
    },
  },
  {
    id: 'oceanmist-moisturizer',
    name: 'Hidratante OceanMist',
    category: 'skin-care',
    price: 32.0,
    oldPrice: 38.0,
    rating: 4.7,
    sizes: ['50ml', '100ml'],
    sku: 'OM-004-50ML',
    tags: ['hidratante', 'refrescante', 'ligera', 'marina'],
    images: [
      'resources/hidratante-oceanMist/collins-lesulie-7lFGxDph5KQ-unsplash.jpg',
      'resources/hidratante-oceanMist/ela-de-pure-0f2NXwDxonQ-unsplash.jpg',
      'resources/hidratante-oceanMist/felicia-buitenwerf-yf5Hff1RHh0-unsplash.jpg',
      'resources/hidratante-oceanMist/lara-muller-rnmOpYXl9bg-unsplash.jpg',
    ],
    description:
      'Crema hidratante de textura gel inspirada en minerales marinos que aporta frescura inmediata y equilibrio.',
    detail: {
      description: {
        product:
          'Fórmula con extractos botánicos marinos para hidratar profundamente sin sensación pesada.',
        benefits: [
          'Hidratación prolongada',
          'Sensación refrescante',
          'Equilibra zonas secas y mixtas',
          'Textura ligera de rápida absorción',
          'Aporta suavidad y confort',
        ],
        howToUse:
          'Aplicar mañana y noche sobre rostro y cuello después del suero.',
      },
      additionalInfo: {
        brand: 'BeautyShop',
        productType: 'Crema hidratante en gel',
        skinType: 'Mixta, normal, grasa',
        keyIngredients: 'Extractos marinos, Glicerina, Provitamina B5',
        volumeOptions: '50ml, 100ml',
        crueltyFree: true,
        parabenFree: true,
      },
      reviews: {
        rating: 4.7,
        totalReviews: 154,
        stars: { one: 4, two: 5, three: 12, four: 40, five: 93 },
        comments: [
          {
            author: 'Laura Méndez',
            isVerified: true,
            date: '2025-08-08',
            rating: 5,
            title: 'Muy refrescante',
            description:
              'Me encanta la sensación fresca y cómo calma la piel después del sol.',
            images: [
              'resources/hidratante-oceanMist/ela-de-pure-0f2NXwDxonQ-unsplash.jpg',
            ],
          },
          {
            author: 'Beatriz Cano',
            isVerified: true,
            date: '2025-07-30',
            rating: 4,
            title: 'Ligera',
            description: 'Hidrata sin dejar brillo. Perfecta para verano.',
            images: [],
          },
          {
            author: 'Sandra Ríos',
            isVerified: false,
            date: '2025-07-16',
            rating: 5,
            title: 'Textura ideal',
            description:
              'Se siente ligera pero mantiene la hidratación todo el día en clima cálido.',
            images: [],
          },
          {
            author: 'Pilar Vázquez',
            isVerified: true,
            date: '2025-07-08',
            rating: 4,
            title: 'Refresca mucho',
            description:
              'La sensación de frescor es inmediata. Me ayuda con zonas deshidratadas.',
            images: [
              'resources/hidratante-oceanMist/lara-muller-rnmOpYXl9bg-unsplash.jpg',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'vitamin-c-serum',
    name: 'Suero Iluminador Vitamina C',
    category: 'skin-care',
    price: 42.0,
    rating: 4.9,
    sizes: ['30ml', '60ml'],
    sku: 'VC-005-30ML',
    tags: ['vitamina c', 'antioxidante', 'iluminador', 'antiedad'],
    images: [
      'resources/suero-iluminador-vitaminaC/tamara-harhai-jYifNBo1j4Y-unsplash.jpg',
      'resources/suero-iluminador-vitaminaC/the-design-lady-SrkxclLL4ps-unsplash.jpg',
      'resources/suero-iluminador-vitaminaC/thebugadi-RY91UF1rAno-unsplash.jpg',
      'resources/suero-iluminador-vitaminaC/viva-luna-studios-GT7JHAp2lug-unsplash.jpg',
    ],
    description:
      'Suero concentrado con vitamina C estable que ilumina, unifica el tono y ayuda a proteger contra el daño oxidativo.',
    detail: {
      description: {
        product:
          'Tratamiento antioxidante diario con vitamina C y activos complementarios que promueven una piel más clara y uniforme.',
        benefits: [
          'Ilumina y revitaliza',
          'Ayuda a disminuir manchas leves',
          'Protege frente a radicales libres',
          'Textura ligera no pegajosa',
          'Aporta apariencia de piel descansada',
        ],
        howToUse:
          'Aplicar por la mañana sobre piel limpia antes de la hidratante y protección solar.',
      },
      additionalInfo: {
        brand: 'BeautyShop',
        productType: 'Suero antioxidante',
        skinType: 'Todo tipo de piel',
        keyIngredients: 'Vitamina C estable, Ácido Ferúlico, Niacinamida',
        volumeOptions: '30ml, 60ml',
        crueltyFree: true,
        parabenFree: true,
      },
      reviews: {
        rating: 4.9,
        totalReviews: 201,
        stars: { one: 2, two: 4, three: 8, four: 32, five: 155 },
        comments: [
          {
            author: 'Daniela P.',
            isVerified: true,
            date: '2025-08-14',
            rating: 5,
            title: 'Brillo inmediato',
            description: 'En pocos días mi piel se ve más uniforme y luminosa.',
            images: [
              'resources/suero-iluminador-vitaminaC/the-design-lady-SrkxclLL4ps-unsplash.jpg',
            ],
          },
          {
            author: 'Irene Salas',
            isVerified: false,
            date: '2025-07-25',
            rating: 5,
            title: 'Excelente textura',
            description: 'Se absorbe rapidísimo y no deja sensación pegajosa.',
            images: [],
          },
          {
            author: 'Marisol C.',
            isVerified: true,
            date: '2025-07-19',
            rating: 5,
            title: 'Tono más uniforme',
            description:
              'Noté reducción ligera de manchas y mucha luminosidad. No irrita.',
            images: [],
          },
          {
            author: 'Isabel Núñez',
            isVerified: true,
            date: '2025-07-07',
            rating: 4,
            title: 'Funciona bien',
            description:
              'Textura muy cómoda. Me gustaría un gotero con dosificación más precisa.',
            images: [
              'resources/suero-iluminador-vitaminaC/viva-luna-studios-GT7JHAp2lug-unsplash.jpg',
            ],
          },
        ],
      },
    },
  },
  {
    id: 'matte-lipstick',
    name: 'Colección de Labiales Mate',
    category: 'makeup',
    price: 18.0,
    rating: 4.3,
    inStock: true,
    sku: 'ML-006-SET',
    tags: ['labial', 'acabado mate', 'larga duración', 'pigmentado'],
    images: [
      'resources/coleccion-labiales-mate/ashley-piszek-L1iTsUBZYDk-unsplash.jpg',
      'resources/coleccion-labiales-mate/jakub-chlouba-LVRgFVLgbK4-unsplash.jpg',
      'resources/coleccion-labiales-mate/lucas-santos-OLp9FmszAAI-unsplash.jpg',
      'resources/coleccion-labiales-mate/sincerely-media-p3YbYUNMB58-unsplash.jpg',
    ],
    description:
      'Set de labiales mate de alta pigmentación con acabado suave y cómodo que no reseca.',
    detail: {
      description: {
        product:
          'Colección curada de tonos versátiles en fórmula mate cremosa diseñada para larga duración.',
        benefits: [
          'Colores intensos en una pasada',
          'Acabado mate cómodo',
          'No reseca los labios',
          'Larga duración',
          'Tonos combinables para looks diarios o de noche',
        ],
        howToUse:
          'Aplicar directamente sobre labios exfoliados e hidratados. Para mayor precisión usar brocha delineadora.',
      },
      additionalInfo: {
        brand: 'BeautyShop',
        productType: 'Set de labiales mate',
        skinType: 'Apto para todo tipo de piel',
        keyIngredients: 'Manteca de Karité, Vitamina E, Pigmentos minerales',
        volumeOptions: 'Set 4 unidades',
        crueltyFree: true,
        parabenFree: true,
      },
      reviews: {
        rating: 4.3,
        totalReviews: 89,
        stars: { one: 5, two: 8, three: 15, four: 28, five: 33 },
        comments: [
          {
            author: 'Carolina Díaz',
            isVerified: true,
            date: '2025-08-11',
            rating: 5,
            title: 'Colores hermosos',
            description:
              'Los tonos son súper favorecedores y duran bastante sin retocar.',
            images: [
              'resources/coleccion-labiales-mate/jakub-chlouba-LVRgFVLgbK4-unsplash.jpg',
            ],
          },
          {
            author: 'Romina L.',
            isVerified: false,
            date: '2025-07-27',
            rating: 4,
            title: 'Buena fórmula',
            description:
              'Cremosos al aplicar y luego se fijan. No resecan como otros mates.',
            images: [],
          },
          {
            author: 'Leticia P.',
            isVerified: true,
            date: '2025-07-15',
            rating: 4,
            title: 'Buenos tonos',
            description:
              'Se difuminan bien y el color se mantiene. Reaplico tras comidas grasas.',
            images: [],
          },
          {
            author: 'Marcela J.',
            isVerified: true,
            date: '2025-07-06',
            rating: 5,
            title: 'Comodidad sorprendente',
            description:
              'Para ser mate no reseca nada. Los llevo todo el día sin problema.',
            images: [],
          },
        ],
      },
    },
  },
];
