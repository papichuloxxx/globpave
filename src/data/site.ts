export const business = {
  name: 'Globpave Construction',
  legalName: 'Globpave Construction',
  tagline: 'Pavers & Paving Specialists',
  slogan: 'From foundations to a brighter tomorrow',
  url: 'https://www.globpaveconstruction.co.zw',
  email: 'info@globpaveconstruction.co.zw',
  phones: [
    { display: '+263 772 900 562', tel: '+263772900562' },
    { display: '+263 772 552 143', tel: '+263772552143' },
    { display: '+263 242 494 546', tel: '+263242494546' },
  ],
  whatsapp: '263772900562',
  address: {
    street: '684 Glenwood, Glen Lorne',
    locality: 'Harare',
    region: 'Harare Province',
    country: 'ZW',
    countryName: 'Zimbabwe',
  },
  areaServed: [
    'Harare',
    'Borrowdale',
    'Glen Lorne',
    'Mt Pleasant',
    'Avondale',
    'Greendale',
    'Chitungwiza',
    'Ruwa',
    'Norton',
    'Bulawayo',
    'Mutare',
    'Zimbabwe',
  ],
};

export type ServiceCategory = {
  slug: string;
  title: string;
  short: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  icon: string;
  items: { name: string; text: string }[];
  keywords: string[];
};

export const services: ServiceCategory[] = [
  {
    slug: 'paving-external-works',
    title: 'Paving & External Works',
    short: 'Driveways, parking bays, perimeter walls and landscaping that make a first impression.',
    metaTitle: 'Paving Contractors in Harare | Driveways, Pavers & Parking Bays',
    metaDescription:
      'Paving specialists in Harare, Zimbabwe. Interlocking pavers, driveways, parking bays, perimeter walls and landscaping. Free site visit and quote.',
    intro:
      'Paving is where Globpave started and it is still what we are known for. We prepare the base properly, compact in layers and lay pavers to falls that drain, so your driveway stays level for years instead of sinking after the first rainy season.',
    icon: 'paver',
    items: [
      { name: 'Paving', text: 'Interlocking, cobble and brick pavers for homes, estates, schools and commercial sites.' },
      { name: 'Driveways & Parking Bays', text: 'Heavy-duty paved driveways and parking areas built on a properly compacted base with kerbing and drainage.' },
      { name: 'Perimeter Wall Construction', text: 'Durable boundary walls with solid foundations, piers and finishes to suit your property.' },
      { name: 'Landscaping', text: 'Garden layout, lawns, planters, retaining edges and walkways that tie the outdoors together.' },
    ],
    keywords: ['paving Harare', 'pavers Zimbabwe', 'driveway paving Harare', 'parking bays', 'perimeter wall construction', 'landscaping Harare'],
  },
  {
    slug: 'building-construction',
    title: 'Building & Construction',
    short: 'New homes, extensions and renovations built to plan, on budget and on time.',
    metaTitle: 'Building Contractors in Harare | New Houses, Extensions & Renovations',
    metaDescription:
      'Trusted building contractors in Harare. New house construction, house extensions, renovations, brickwork, concrete works and plastering across Zimbabwe.',
    intro:
      'From slab to roof, our building team handles the full structure of your project. We work from approved plans, keep you updated at every stage and finish the job cleanly.',
    icon: 'house',
    items: [
      { name: 'New House Construction', text: 'Complete residential builds from foundations to handover.' },
      { name: 'House Extensions', text: 'Extra bedrooms, cottages, garages and second storeys that blend with your existing home.' },
      { name: 'Renovations & Remodelling', text: 'Kitchens, bathrooms and full-house makeovers that modernise older properties.' },
      { name: 'Brickwork', text: 'Face brick and common brick walling laid square, plumb and true.' },
      { name: 'Concrete Works', text: 'Foundations, slabs, columns, beams and surface beds cast to specification.' },
      { name: 'Plastering', text: 'Smooth internal and external plaster ready for paint.' },
    ],
    keywords: ['building contractors Harare', 'house construction Zimbabwe', 'house extensions Harare', 'renovations Harare', 'brickwork', 'concrete works'],
  },
  {
    slug: 'civil-infrastructure',
    title: 'Civil & Infrastructure',
    short: 'Roads, rehabilitation and stormwater drainage for estates, businesses and councils.',
    metaTitle: 'Civil Works & Road Construction in Zimbabwe | Globpave',
    metaDescription:
      'Civil engineering works, road construction, road rehabilitation and drainage systems in Harare and across Zimbabwe. Reliable civil contractors.',
    intro:
      'We take on civil works for housing developments, commercial sites and access roads, with the plant and experience to move earth, build roads and manage stormwater properly.',
    icon: 'road',
    items: [
      { name: 'Civils', text: 'Earthworks, site clearing, levelling and service trenches for new developments.' },
      { name: 'Road Construction', text: 'Access roads and estate roads built on engineered layer works.' },
      { name: 'Road Rehabilitation', text: 'Pothole repair, resurfacing and reconstruction of failed road sections.' },
      { name: 'Drainage Systems', text: 'Stormwater channels, culverts and subsoil drainage that stop flooding and erosion.' },
    ],
    keywords: ['civil works Zimbabwe', 'road construction Harare', 'road rehabilitation', 'drainage systems Harare', 'civil contractors Zimbabwe'],
  },
  {
    slug: 'plumbing-water-solutions',
    title: 'Plumbing & Water Solutions',
    short: 'Plumbing, boreholes and septic systems for reliable water at home or on site.',
    metaTitle: 'Plumbers & Borehole Installation in Harare | Septic Tanks',
    metaDescription:
      'Plumbing installations and repairs, borehole installation and plumbing, septic tank and soakaway construction in Harare, Zimbabwe.',
    intro:
      'Reliable water is essential in Harare. We install and repair plumbing, connect boreholes to your tanks and home, and build septic systems that meet council requirements.',
    icon: 'water',
    items: [
      { name: 'Plumbing Installations', text: 'Water supply and drainage for new builds and extensions.' },
      { name: 'Plumbing Repairs & Maintenance', text: 'Leaks, blockages, geysers and fittings fixed quickly.' },
      { name: 'Borehole Installation & Plumbing', text: 'Pump, tank stand and reticulation so borehole water reaches every tap.' },
      { name: 'Septic Tank & Soakaway Construction', text: 'Correctly sized septic tanks and soakaways for homes off the sewer line.' },
    ],
    keywords: ['plumbers Harare', 'borehole installation Harare', 'septic tank construction Zimbabwe', 'soakaway', 'plumbing repairs Harare'],
  },
  {
    slug: 'roofing-interiors',
    title: 'Roofing & Interiors',
    short: 'Roofs, ceilings, tiling, painting and waterproofing for a finished, weathertight home.',
    metaTitle: 'Roofing, Ceilings, Tiling & Painting in Harare | Globpave',
    metaDescription:
      'IBR and tile roofing, roof repairs, gypsum and PVC ceilings, floor and wall tiling, interior and exterior painting and waterproofing in Harare.',
    intro:
      'We close up the building and finish it inside. Our teams handle roofing, ceilings, tiling, painting and waterproofing, so one contractor sees the job through to handover.',
    icon: 'roof',
    items: [
      { name: 'Roofing – IBR / Tiles', text: 'New IBR sheet and roof tile installations on properly braced trusses.' },
      { name: 'Roof Repairs', text: 'Leak detection, flashing, sheet replacement and re-tiling.' },
      { name: 'Ceilings – Gypsum / PVC', text: 'Clean, modern gypsum and PVC ceilings with bulkheads and cornices.' },
      { name: 'Tiling – Floor & Wall', text: 'Porcelain and ceramic tiling with straight lines and neat grout.' },
      { name: 'Painting – Interior & Exterior', text: 'Surface preparation and quality paint systems that last.' },
      { name: 'Waterproofing', text: 'Flat roofs, parapets, bathrooms and basements sealed against water.' },
    ],
    keywords: ['roofing Harare', 'IBR roofing Zimbabwe', 'roof repairs Harare', 'gypsum ceilings', 'PVC ceilings Harare', 'tiling', 'painting contractors Harare', 'waterproofing Harare'],
  },
  {
    slug: 'fencing-electrical-maintenance',
    title: 'Fencing, Electrical & Maintenance',
    short: 'Security fencing, electrical installations and ongoing building maintenance.',
    metaTitle: 'Palisade, Razor Wire & Diamond Mesh Fencing in Harare',
    metaDescription:
      'Palisade fencing, razor wire, diamond mesh fencing, electrical installations and general building maintenance in Harare, Zimbabwe.',
    intro:
      'Secure your property and keep it in good order. We install fencing for homes, farms and businesses, carry out electrical installations and look after general building maintenance.',
    icon: 'fence',
    items: [
      { name: 'Fencing – Palisade', text: 'Steel palisade fencing and gates for strong perimeter security.' },
      { name: 'Fencing – Razor Wire', text: 'Razor wire on walls and fences as an extra layer of protection.' },
      { name: 'Fencing – Diamond Mesh', text: 'Cost-effective diamond mesh fencing for plots, farms and sites.' },
      { name: 'Electrical Installations', text: 'Wiring, DB boards, lighting and power points for new and existing buildings.' },
      { name: 'General Building Maintenance', text: 'Repairs, touch-ups and planned maintenance for homes and commercial property.' },
    ],
    keywords: ['palisade fencing Harare', 'razor wire Zimbabwe', 'diamond mesh fencing', 'electrical installations Harare', 'building maintenance Harare'],
  },
];

export const siteKeywords = [
  'Globpave Construction',
  'paving Harare',
  'pavers Zimbabwe',
  'paving contractors Harare',
  'construction company Harare',
  'building contractors Zimbabwe',
  'driveway paving',
  'road construction Zimbabwe',
  'borehole installation Harare',
  'roofing Harare',
  'palisade fencing Harare',
];
