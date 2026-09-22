// DTE Equipment - content layer for the prototype.
// Swap this module for a real WordPress/WooCommerce feed at build time.

import { greentecProducts } from './products-data.js';
import { virnigProducts } from './virnig-data.js';
import { articles } from './news-data.js';

const U = 'https://www.dte-equipment.com.au/wp-content/uploads/';

export const site = {
  phone: '07 5315 8020',
  phoneHref: 'tel:0753158020',
  email: 'sales@dte-equipment.com.au',
  logoLight: U + '2018/12/DTE-logo_-white-_-yellow.-png-v2.png',
  logoDark: U + '2022/08/DTE-logo.-black-_-yellow-png-cropped-v2.png',
  tagline: "Driven by a desire to always deliver 'Work Smarter' we are constantly rethinking the day-to-day and finding ways to improve our customers' operations.",
  established: 2017,
  youtube: 'https://www.youtube.com/channel/UC-jx3tGIr1XZmE5Qt1RETbg',
  facebook: 'https://www.facebook.com/DTEEquipment/',
  linkedin: 'https://au.linkedin.com/company/dte-equipment'
};

// Simplified from the 15-value HubSpot list - only the segments DTE actually sells into.
export const segments = [
  'Orchard',
  'Council',
  'Mulching / Slashing / Mowing Contractor',
  'Tree Maintenance / Arborist',
  'Landscaping Contractor',
  'Civil / Earthmoving Contractor',
  'Cattle Farmer (Leucaena)',
  'Hire Company',
  'Other'
];

export const vehicles = ['Tractor', 'Excavator', 'Skid Steer', 'Telehandler', 'Loader'];
export const brands = ['Greentec', 'Virnig'];

export const applications = [
  {
    slug: 'orchards',
    name: 'Orchard Hedging & Mulching',
    title: 'Hedging & mulching equipment for orchards',
    kicker: 'Mangoes, citrus, apples, stone fruit, olives, avocados',
    hero: 'uploads/Orchard Image - The Best.jpg',
    thumb: 'uploads/Orchard Image - The Best.jpg',
    lede: 'Hedging shapes the canopy so every branch gets its share of sunlight and air. Mowing keeps the floor clean so nothing competes with the trees. Get both right and the block carries better fruit with less spray.',
    sections: [
      {
        heading: 'Hedging',
        body: 'The Greentec Quadsaw is the orchardist\'s tool of choice. Four independently rotating carbide-tipped blades give a clean, square cut through thick and thin wood alike - no split or flayed branches, which means faster healing and less disease pressure. It replaces hand pruning crews and turns a multi-week job into days.',
        products: ['quadsaw-lrs-2402', 'cutterbar-hs-242', 'hxf-2802-tele']
      },
      {
        heading: 'Mowing',
        body: 'The Greentec Barrier Mower works right up to and around every trunk, post and guardrail without an operator leaving the seat. Cut vegetation becomes mulch, which holds moisture and suppresses weed growth between the rows.',
        products: ['ri80-barrier-mower', 'flail-mower-fr-112']
      },
      {
        heading: 'Mulching',
        body: 'Prunings turned into mulch instead of burned or carted out. Soil health up, weed pressure down, tree roots protected through the dry.',
        products: ['tiger-725', 'v70-drum-mulcher']
      }
    ],
    stats: [
      { v: '90,000', l: 'trees pruned per season, Burdekin mango block' },
      { v: '4', l: 'independently rotating blades on the Quadsaw' },
      { v: '21cm', l: 'maximum branch thickness cut clean' }
    ]
  },
  {
    slug: 'municipality',
    name: 'Roadside Vegetation Management',
    title: 'Roadside & verge maintenance for councils',
    kicker: 'Verges, guardrails, drains, parks, reserves, footpaths',
    hero: 'uploads/Roadside Image.jpg',
    thumb: 'uploads/Roadside Image.jpg',
    lede: 'Council crews get judged on kilometres covered and complaints avoided. Reach mowers that keep the head in the operator\'s sight line, cut clean and survive hitting things are what actually move the needle.',
    sections: [
      {
        heading: 'Reach mowing',
        body: 'The Scorpion and Spider ranges mount front or rear, swap sides of the road without tools, and extend forward so the head stays visible to the driver. Agritechnica Silver Medal engineering, sized from 5,000 kg tractors up.',
        products: ['scorpion-830-plus', 'spider-720-plus']
      },
      {
        heading: 'Verge & guardrail',
        body: 'Barrier mowers follow the line and step around posts and crash barriers automatically. Flail mowers handle grass and thicket in a single pass.',
        products: ['ri80-barrier-mower', 'flail-mower-fr-112']
      },
      {
        heading: 'Vegetation control',
        body: 'Rotary brush cutters on skid steers and mini excavators for laneways, easements and drainage reserves where a tractor can\'t go.',
        products: ['v50-open-front', 'x30-mini-ex']
      }
    ],
    stats: [
      { v: '8,000kg', l: 'minimum tractor weight, Scorpion 830 PLUS' },
      { v: '4-point', l: 'mainframe mounting for fast changeover' },
      { v: 'L or R', l: 'arm repositions to either side of the road' }
    ]
  },
  {
    slug: 'forestry',
    name: 'Land Clearing & Mulching',
    title: 'Land clearing & mulching for forestry',
    kicker: 'Fire breaks, tracks, regrowth, standing timber, stumps',
    hero: 'uploads/land-clearing-mulching.jpg',
    thumb: 'uploads/land-clearing-mulching.jpg',
    lede: 'Clearing is measured in hectares per day and teeth per week. The right mulcher for your loader\'s flow rate is the difference between production and a machine sitting in the shed waiting on parts.',
    sections: [
      {
        heading: 'Drum mulching',
        body: 'Turn 14" timber into fine mulch and grind stumps below grade. Factory-tuned to the loader for optimal drum RPM - no service tech required to set it up.',
        products: ['v70-drum-mulcher']
      },
      {
        heading: 'Disc mulching',
        body: 'When speed beats finish: fully machined, perfectly balanced 60" disc cuts up to 14" trees fast and mulches 6–8" material to a usable finish.',
        products: ['v70-tree-disc-mulcher']
      }
    ],
    stats: [
      { v: '14"', l: 'timber diametre turned to mulch' },
      { v: '30–50', l: 'GPM high flow requirement' },
      { v: '13sec', l: 'flywheel spin-up, bent-axis piston motor' }
    ]
  },
  {
    slug: 'agriculture',
    name: 'Leucaena',
    title: 'Leucaena management',
    kicker: 'Mechanical management of established leucaena',
    hero: 'uploads/Leucaena Image.jpg',
    thumb: 'uploads/Leucaena Image.jpg',
    lede: 'Leucaena that gets away from you stops being feed and starts being timber. Cutting on time, at height, with a machine that will do it again next season is the whole game.',
    sections: [
      {
        heading: 'Leucaena cutting',
        body: 'Rotary mowers with flexible blade configurations cut or mulch depending on how you set them, with on-the-go cutting height so you can lift over rough ground without stopping.',
        products: ['tiger-725', 'flail-mower-fr-112']
      },
      {
        heading: 'Fence lines & windbreaks',
        body: 'Barrier mowers and cutterbars keep fence lines and windbreaks clean without an operator getting off the machine.',
        products: ['ri80-barrier-mower', 'cutterbar-hs-242']
      },
      {
        heading: 'Regrowth & scrub',
        body: 'Rotary brush cutters for woody regrowth on skid steers, and drum mulchers when the material has gone past cutting.',
        products: ['v50-open-front', 'v70-drum-mulcher']
      }
    ],
    stats: [
      { v: 'GreenFlex', l: 'blade system - cut or mulch from one machine' },
      { v: '4-plate', l: 'clutch protecting each rotor' },
      { v: 'On-the-go', l: 'cutting height and wing adjustment' }
    ]
  }
];

// Legacy hand-written entries. Greentec models now come from the generated catalogueue;
// only the Virnig range and the HXF carrier remain here.
const legacyProducts = [
  {
    slug: 'quadsaw-lrs-2402',
    name: 'Greentec Quadsaw LRS 2402',
    brand: 'Greentec',
    category: 'Quadsaws',
    vehicles: ['Telehandler', 'Excavator', 'Tractor', 'Loader'],
    markets: ['orchards', 'forestry', 'municipality'],
    badge: 'Our #1 seller',
    image: U + '2023/06/Quadsaw-LRS-4202.png',
    action: U + '2023/06/20230215-Greentec-Quadsaw-Marathon-Man-Go-032-Resized.jpg',
    summary: 'Four carbide-tipped circular blades give a smooth cut on branches and limbs up to 21 cm thick.',
    body: 'The Quadsaw LRS 2402 wields four circular blades with carbide tipped teeth that are extremely sharp and provide a smooth cut of branches and limbs up to 21 cm (8.27") in thickness. The circular saw has many uses, such as trimming back hedgerows or maintaining paths and roads in forest areas.',
    features: [
      'Four independently rotating circular blades',
      'Carbide tipped teeth for a clean, non-split cut',
      'Cuts branches up to 21 cm (8.27") thick',
      'Low maintenance cost per hour',
      'Mounts to Greentec multi carriers and boom arms'
    ],
    specs: [
      ['Working width', '2.4 m (7\'10")'],
      ['Blades', '4 × circular, carbide tipped'],
      ['Max cutting thickness', '21 cm (8.27")'],
      ['Recommended carrier', 'HXF multi carrier / Scorpion boom arm'],
      ['Series', 'LRS']
    ]
  },
  {
    slug: 'cutterbar-hs-242',
    name: 'Greentec Cutterbar HS 242',
    brand: 'Greentec',
    category: 'Cutterbars',
    vehicles: ['Tractor', 'Telehandler', 'Excavator'],
    markets: ['orchards', 'agriculture', 'municipality'],
    image: U + '2023/06/HS-172-Featured-image-1.png',
    summary: 'Hydraulic finger-bar cutter for hedge cutting and windbreak maintenance at 5 km/h.',
    body: 'The HS series consists of hydraulic hedge cutter bars with working widths from 1.7 to 2.4 m. The HS 172–242 differs from our other finger bar cutters as it can be used for both hedge cutting and windbreak maintenance. Branches up to 6 cm (2.36") in thickness are cut with ease and high velocity as you can maintain a driving speed of 5 km/h, in line with our Quadsaw LRS series.',
    features: [
      'Doubles as hedge cutter and windbreak maintenance bar',
      'Specially sharpened blades for an impeccable finish',
      'Cuts branches up to 6 cm (2.36") thick',
      'Maintains 5 km/h (3.11 mph) working speed'
    ],
    specs: [
      ['Working width', '2.4 m (7\'10")'],
      ['Series range', '1.7 m – 2.4 m'],
      ['Max cutting thickness', '6 cm (2.36")'],
      ['Working speed', '5 km/h (3.11 mph)'],
      ['Drive', 'Hydraulic']
    ]
  },
  {
    slug: 'hxf-2802-tele',
    name: 'Greentec Multi Carrier HXF 2802 Tele',
    brand: 'Greentec',
    category: 'Multi Carriers',
    vehicles: ['Telehandler', 'Loader', 'Skid Steer'],
    markets: ['orchards', 'forestry'],
    image: U + '2023/04/DSC_4362-Fritlagt-HXF-2802-1-scaled.jpg',
    summary: 'Telescopic carrier arm for tight conditions - forest tracks, bike paths and orchard rows.',
    body: 'Our Multi Carrier HXF 2802 Tele offers great flexibility as you can adjust the arm to the terrain. It suits work where space is tight, such as forest tracks, bike paths and orchards. The HXF 2802 Tele can be installed on front end loaders and large skid steer loaders in a few minutes. A large selection of tools for hedge cutting and tree trimming is available, and it is also possible to mount a barrier mower or weed brush on the frame.',
    features: [
      'Telescopic arm adjusts to the terrain',
      'Fits front end loaders and large skid steer loaders',
      'Installs in minutes',
      'Accepts quadsaws, cutterbars, barrier mowers and weed brushes'
    ],
    specs: [
      ['Model', 'HXF 2802 Tele'],
      ['Mount', 'Front end loader / large skid steer'],
      ['Arm', 'Telescopic'],
      ['Compatible tools', 'Quadsaw, cutterbar, barrier mower, weed brush']
    ]
  },
  {
    slug: 'scorpion-830-plus',
    name: 'Greentec Scorpion 830-8 PLUS Reach Mower',
    brand: 'Greentec',
    category: 'Boom Arms',
    vehicles: ['Tractor'],
    markets: ['municipality', 'forestry', 'agriculture'],
    badge: 'Agritechnica Silver',
    image: U + '2023/06/Scorpion-730-830-Rear-Mounted.png',
    action: U + '2023/09/Scorpion-630-FR-1903x840-1.webp',
    summary: 'Professional rear-mounted reach mower for roadside, verge, hedge and tree work.',
    body: 'The Scorpion 830 PLUS is a professional reach mower used by municipalities, agricultural contractors, forest workers and landscapers. It suits roadside maintenance, verge mowing, hedge cutting and tree trimming, and is designed for large tractors with a minimum operating weight of 8,000 kg (17,637 lb), using a four-point mounting system on the mainframe for fast and reliable installation.',
    features: [
      'Four-point mainframe mounting for fast installation',
      'Arm extends forward so the tool stays in the operator\'s sight',
      'Accepts flail mowers, quadsaws, cutterbars and brushes',
      'Rear mounted for large tractors'
    ],
    specs: [
      ['Model', 'Scorpion 830-8 PLUS'],
      ['Mounting', 'Rear, four-point mainframe'],
      ['Min tractor weight', '8,000 kg (17,637 lb)'],
      ['Applications', 'Roadside, verge, hedge, tree trimming']
    ]
  },
  {
    slug: 'spider-720-plus',
    name: 'Greentec Spider 720 PLUS Reach Mower',
    brand: 'Greentec',
    category: 'Boom Arms',
    vehicles: ['Tractor'],
    markets: ['municipality', 'forestry'],
    image: U + '2023/10/Spider-720-PLUS-featured-image.jpg',
    fit: 'cover',
    summary: 'Front- or rear-mounted reach mower that repositions to either side of the road.',
    body: 'The Spider 720 PLUS is a professional reach mower used by municipalities, agricultural contractors, forest workers and landscapers. It suits roadside maintenance, verge mowing, hedge cutting and tree trimming, and is a highly flexible solution where the arm can be positioned either to the right or left side of the tractor and extended forward so the attachment tool is always visible to the driver. Spider 720 PLUS can be front- or rear-mounted on medium-to-large tractors with a weight of at least 7,000 kg (15,432 lb).',
    features: [
      'Arm repositions to left or right side of the road',
      'Extends forward to keep the tool visible to the driver',
      'Front or rear mounted',
      'Suits medium-to-large tractors'
    ],
    specs: [
      ['Model', 'Spider 720 PLUS'],
      ['Mounting', 'Front or rear'],
      ['Min tractor weight', '7,000 kg (15,432 lb)'],
      ['Arm position', 'Left or right side']
    ]
  },
  {
    slug: 'ri80-barrier-mower',
    name: 'Greentec RI80 Barrier Mower',
    brand: 'Greentec',
    category: 'Barrier Mowers',
    vehicles: ['Tractor', 'Loader'],
    markets: ['orchards', 'agriculture', 'municipality'],
    image: U + '2023/06/Barrier-Mower-RI-60-80.png',
    summary: 'Fence-line mower that steps around every post, barrier and trunk automatically.',
    body: 'The Barrier Mower RI 60 & 80 handles maintenance of fence lines, guardrails, orchards and vineyards. The fence line mower goes around every obstacle whether that be fence posts, crash barriers or trees.',
    features: [
      'Automatically deflects around posts, barriers and trunks',
      'Suits fence lines, guardrails, orchards and vineyards',
      'Mounts on the FOX multi carrier or directly to tractors',
      'Mulches cut material back into the row'
    ],
    specs: [
      ['Model', 'RI 80'],
      ['Series', 'RI 60 / RI 80'],
      ['Carrier', 'FOX multi carrier or tractor mount'],
      ['Applications', 'Fence lines, guardrails, orchards, vineyards']
    ]
  },
  {
    slug: 'flail-mower-fr-112',
    name: 'Greentec Flail Mower FR 112',
    brand: 'Greentec',
    category: 'Flail Mowers',
    vehicles: ['Tractor', 'Excavator'],
    markets: ['municipality', 'agriculture', 'orchards'],
    badge: '30-50 GPM high flow',
    image: U + '2023/06/FR-92-Featured-image.png',
    summary: 'Verge mowing of grass and thicket, plus hedge cutting and windbreak maintenance.',
    body: 'Our Flail Mowers FR 92 & 112 are highly effective for the care of green areas. They can be used for grass mowing, hedge cutting and windbreak maintenance. Their core competency is verge mowing of grass and thicket. Hydraulically driven, they mount on Scorpion reach mowers for tractors or directly on the arm of diggers.',
    features: [
      'Core competency is verge mowing of grass and thicket',
      'Also handles hedge cutting and windbreak maintenance',
      'Hydraulically driven',
      'Adapters available for excavators and other reach mower brands'
    ],
    specs: [
      ['Model', 'FR 112'],
      ['Series', 'FR 92 / FR 112'],
      ['Drive', 'Hydraulic'],
      ['Mounting', 'Scorpion reach mower or excavator arm']
    ]
  },
  {
    slug: 'tiger-725',
    name: 'Greentec Tiger 725 Rotary Mower',
    brand: 'Greentec',
    category: 'Rotary Mowers',
    vehicles: ['Tractor'],
    markets: ['agriculture', 'municipality'],
    badge: 'New',
    image: U + '2025/09/Tiger-2-scaled.png',
    summary: 'GreenFlex blade system optimises the same machine for either cutting or mulching.',
    body: 'The Tiger 510 & 725 rotary mowers use the innovative GreenFlex blade system, which optimises performance for cutting or mulching. Flexible blade configurations reduce power requirements and improve sustainability, while a semi-mounted headstock gives tight turning circles. Cutting height and wing position adjust on the go.',
    features: [
      'GreenFlex blade system - optimise for cutting or mulching',
      'Flexible blade configurations reduce power requirement',
      'Semi-mounted headstock for tight turning circles',
      'On-the-go cutting height and easy wing adjustment',
      'Sandwich deck design for quick cleaning and less downtime',
      'Four-plate clutch protects each rotor'
    ],
    specs: [
      ['Model', 'Tiger 725'],
      ['Series', 'Tiger 510 / 725'],
      ['Blade system', 'GreenFlex'],
      ['Headstock', 'Semi-mounted'],
      ['Deck', 'Sandwich design'],
      ['Rotor protection', 'Four-plate clutch per rotor']
    ]
  },
  {
    slug: 'v70-drum-mulcher',
    name: 'Virnig V70 Drum Mulcher',
    brand: 'Virnig',
    category: 'Skid Steer Drum Mulchers',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['forestry', 'agriculture'],
    badge: '30-50 GPM high flow',
    image: U + '2025/07/V70_Drum-Mulcher_Featured_800px.jpg',
    summary: 'Turns 14" timber into fine mulch and grinds stumps below grade.',
    body: 'Efficiently turn 14" diametre trees and vegetation into a fine mulch and grind stumps below grade. Fixed and variable speed bent-axis piston motor options are available - the variable motor provides more torque for productive stump grinding and mulching below grade. Factory tuned to the loader for optimal drum RPM, so no motor adjustment or service techs are required.',
    features: [
      'Factory tuned to the loader for optimal drum RPM',
      '18" perfectly balanced Quadco drum with greaseable bearings',
      'Anti-wrap drum plates protect against wire and debris entanglement',
      'Interchangeable Quadco bolt-on steel and carbide tooth options',
      'AR400 bolt-on skid shoes, adjustable push bar, replaceable wear liner',
      'Adjustable bottom bite plate controls discharge size',
      'Rear chain curtain reduces debris thrown toward the operator'
    ],
    specs: [
      ['Max material', '14" diametre'],
      ['Drum', '18" balanced Quadco'],
      ['Motor', 'Bent-axis piston, fixed or variable speed'],
      ['Required flow', '30–50 GPM high flow'],
      ['Max pressure', '4,200 PSI'],
      ['Wear parts', 'AR400 skid shoes and wear liner']
    ],
    warning: 'Requires a high flow loader. Do not operate without a shatterproof cab on the loader.'
  },
  {
    slug: 'v70-tree-disc-mulcher',
    name: 'Virnig V70 Tree Disc Mulcher',
    brand: 'Virnig',
    category: 'Skid Steer Disc Mulchers',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['forestry'],
    image: U + '2025/07/V70-Tree-Disc-Mulcher_Featured.jpg',
    summary: 'Mulch 6–8" trees and cut up to 14" fast, with a 60" fully machined disc.',
    body: 'Efficiently mulch 6–8" diametre trees and quickly cut up to 14" diametre trees. A bent-axis piston motor with relief valves drives a 60" fully-machined, perfectly balanced Quadco disc with bolt-on steel tooth mounts carrying four-sided rotatable and replaceable teeth.',
    features: [
      '60" fully machined, perfectly balanced Quadco disc',
      'Four-sided rotatable and replaceable teeth (carbide available)',
      '3 deck mounted teeth and recutter bar for a finer finish',
      '3/8" Grade 80 interior deck weldment',
      'Replaceable push bar, chute and deflector',
      'Two chute styles - standard or open'
    ],
    specs: [
      ['Mulching capacity', '6–8" diametre'],
      ['Cutting capacity', 'Up to 14" diametre'],
      ['Disc', '60" machined Quadco'],
      ['Motor', 'Bent-axis piston with relief valves'],
      ['Required flow', '30–50 GPM high flow'],
      ['Max pressure', '4,200 PSI']
    ],
    warning: 'Do not operate without a shatterproof cab on the loader.'
  },
  {
    slug: 'v50-open-front',
    name: 'Virnig V50 Open Front Rotary Brush Cutter',
    brand: 'Virnig',
    category: 'Skid Steer Slashers',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['municipality', 'agriculture', 'forestry'],
    image: U + '2025/07/V50_Open-Front-Rotary-Brush-Cutter_Featured.jpg',
    summary: 'Cuts up to 6" trees - exposed blades allow faster cutting for a maintained finish.',
    body: 'Cuts up to 6" diametre trees, and exposed blades allow faster cutting for a maintained finish. Five direct drive motor options with relief valves are available: Eaton high flow motors rated for max pressure of 4,100 PSI, and an SAI piston motor up to 4,500 PSI.',
    features: [
      'Five direct drive motor options with relief valves',
      'Rounded flywheel with 3 double-sided blades bounces off stumps',
      'Standard motor guard and spindle guard',
      'Replaceable front skid shoes'
    ],
    specs: [
      ['Max material', '6" diametre'],
      ['Flywheel', 'Rounded, 3 double-sided blades'],
      ['Motor options', '5 direct drive'],
      ['Max pressure', '4,100 PSI (Eaton) / 4,500 PSI (SAI)']
    ],
    warning: 'Do not operate without a shatterproof cab on the loader.'
  },
  {
    slug: 'x30-mini-ex',
    name: 'Virnig X30 Mini Excavator Rotary Brush Cutter',
    brand: 'Virnig',
    category: 'Excavator Slashers',
    vehicles: ['Excavator'],
    markets: ['municipality', 'forestry'],
    image: U + '2025/07/X30-Mini-Ex_Brush-Cutter_Featured-Left.jpg',
    summary: 'Cuts up to 4" trees and reaches the places a loader cannot.',
    body: 'Cut up to 4" diametre trees and access hard to reach areas for a maintained finish. No case drain required - a direct drive Eaton motor with relief valve protection does the work. A unique bolt-on front deck can be removed for 270-degree blade engagement.',
    features: [
      'No case drain required',
      'Bolt-on front deck removes for 270° blade engagement',
      'Bolt-on mounting interface for quick hanger bracket changes',
      'Serrated rear deck for back dragging brush and grubbing stumps',
      'Hanger brackets available to fit most excavator brands'
    ],
    specs: [
      ['Max material', '4" diametre'],
      ['Motor', 'Direct drive Eaton with relief valve'],
      ['Case drain', 'Not required'],
      ['Blade engagement', 'Up to 270° with front deck removed']
    ],
    warning: 'Hanger bracket not included. Do not operate without a shatterproof cab.'
  }
];

// Models the generated Greentec catalogueue now covers in full.
const superseded = ['quadsaw-lrs-2402', 'cutterbar-hs-242', 'scorpion-830-plus', 'spider-720-plus', 'ri80-barrier-mower', 'flail-mower-fr-112', 'tiger-725', 'v70-drum-mulcher', 'v70-tree-disc-mulcher', 'v50-open-front', 'x30-mini-ex'];
export const products = greentecProducts.concat(virnigProducts, legacyProducts.filter((p) => superseded.indexOf(p.slug) < 0));

const legacyNews = [
  {
    slug: 'jack-evans-hedging-at-pinecliff',
    title: 'Jack Evans | Hedging at Pinecliff Freedman Racing',
    date: '28 April 2026',
    category: 'Case study',
    image: 'uploads/DTE Equipment - Jack Evans - Mt Eliza-1.jpg',
    excerpt: 'How the Pinecliffe training facility on the Mornington Peninsula lifted productivity with the Greentec Quadsaw.',
    body: [
      'At Pinecliffe on the Mornington Peninsula, efficiency is everything. The property runs kilometres of hedging around training tracks and paddocks, and until recently every metre of it was cut by hand or with a machine that left the job half done.',
      'Jack Evans went looking for something that would cut clean, cut fast, and keep cutting through a season without a rebuild. The Greentec Quadsaw, mounted on a multi carrier, gave him all three.',
      'The four independently rotating carbide-tipped blades mean branches are cut rather than torn - a difference you can see in how quickly the hedge recovers and how tight it grows back. What used to take a crew weeks is now a job measured in days.'
    ],
    quote: { text: 'What used to take weeks now takes days, and the finish is better than we ever got by hand.', by: 'Jack Evans · Pinecliff, Freedman Racing' },
    products: ['quadsaw-lrs-2402', 'hxf-2802-tele']
  },
  {
    slug: 'telehandler-size-guide',
    title: 'Your guide to finding the right telehandler for your Greentec Quadsaw & Multi Carrier',
    date: '23 March 2026',
    category: 'Buyer guide',
    image: U + '2023/04/DSC_4362-Fritlagt-HXF-2802-1-scaled.jpg',
    excerpt: 'What size telehandler do you actually need? Lift capacity, reach, hydraulic flow and the mistakes that cost people money.',
    body: [
      'Choosing the right telehandler for a Greentec Quadsaw and Multi Carrier is the single decision that determines whether the setup works or frustrates you for years.',
      'Three numbers matter: lift capacity at reach, hydraulic flow rate, and the auxiliary circuit configuration. Get the flow wrong and the saw will not hold blade speed under load. Get the capacity at reach wrong and you will be operating at the edge of the chart all day.',
      'We size this for customers every week. Call us before you buy the carrier - the machine you already own often dictates which model of quadsaw is the right one, not the other way around.'
    ],
    products: ['quadsaw-lrs-2402', 'hxf-2802-tele']
  },
  {
    slug: 'win-a-polaris-ranger-500',
    title: 'WIN a Polaris Ranger 500',
    date: '27 February 2026',
    category: 'Promotion',
    image: 'uploads/Orchards Image.jpg',
    excerpt: 'Upgrade your equipment this season and go into the draw to drive away in a Polaris Ranger 500.',
    body: [
      'Ready to upgrade your equipment - and potentially drive away in a Polaris Ranger 500?',
      'Every qualifying purchase between now and the end of the promotion enters you into the draw. Talk to your DTE specialist about what is eligible.'
    ],
    products: ['tiger-725']
  },
  {
    slug: 'marathon-man-go-burdekin',
    title: 'Alf Pappalardo | 90,000 mango trees a season in the Burdekin',
    date: '12 November 2025',
    category: 'Case study',
    image: 'uploads/Alf Papplardo Image.jpg',
    excerpt: 'Marathon Man Go replaced hand pruning across one of the largest mango operations in North Queensland.',
    body: [
      'Marathon Man Go runs one of the largest mango operations in North Queensland. Pruning 90,000 trees a season by hand was never going to scale, and the crews were getting harder to find every year.',
      'The Greentec Quadsaw changed the arithmetic. Alf Pappalardo now covers the block in a fraction of the time, with a cleaner cut and a canopy that holds its shape through the wet.'
    ],
    quote: { text: "I'd liken it to finding a Gold Nugget.", by: 'Alf Pappalardo · Marathon Man Go, Nth QLD' },
    products: ['quadsaw-lrs-2402', 'ri80-barrier-mower']
  },
  {
    slug: 'yellingbo-olive-grove',
    title: 'Howard Meltzer | Mechanised hedging at Yellingbo Olive Grove',
    date: '3 September 2025',
    category: 'Case study',
    image: 'uploads/Yellingo Olive Grove Image.jpg',
    excerpt: 'Hand pruning eliminated across a Victorian olive grove with a cutterbar setup sized to the existing tractor.',
    body: [
      'Yellingbo Olive Grove had a labour problem and a timing problem: the window for hedging is narrow, and hand crews could not cover the grove inside it.',
      'A Greentec cutterbar sized to the tractor already on the property removed hand pruning from the operation entyrely, and the grove now gets cut inside the window every year.'
    ],
    quote: { text: 'Delivered, set up and followed up a couple of weeks later to see how it was going.', by: 'Mick Andrew · Farmer' },
    products: ['cutterbar-hs-242', 'flail-mower-fr-112']
  }
];

legacyNews.push({
  slug: 'david-gunson-quadsaw',
  title: 'Strong, Robust and Saves Hours of Work',
  date: '18 June 2025',
  category: 'Case study',
  image: 'uploads/Orchard Image - The Best.jpg',
  excerpt: '"Strong, robust, and it saves us hours of work." David Gunson on the Greentec Quadsaw.',
  body: [
    'David Gunson runs an orchard in New Zealand where the hedging window is short and labour is hard to find.',
    'Since moving to the Greentec Quadsaw the block gets cut inside the window every season, with a cleaner finish than hand crews achieved and hours of work saved on every row.'
  ],
  quote: { text: 'Strong, robust, and it saves us hours of work.', by: 'David Gunson · Orchardist, New Zealand' },
  products: ['quadsaw-lrs-2402', 'hxf-2802-tele']
});

export const news = articles;

// Old prototype slugs kept alive so existing links resolve.
const slugAliases = {
  'jack-evans-hedging-at-pinecliff': 'jack-evans-hedging-at-pinecliff-freedman-racing',
  'telehandler-size-guide': 'what-size-telehandler-do-i-need-for-a-greentec-quadsaw-multi-carrier',
  'marathon-man-go-burdekin': 'mango-pruning-a-gold-nugget',
  'yellingbo-olive-grove': 'saves-time-money-and-physical-strain-howard-meltzer-mechanizes-orchard-hedging',
  'david-gunson-quadsaw': 'greentec-quadsaw-customer-story'
};

export const videoArticles = articles.filter((a) => a.isVideo);

export const videos = [
  { id: 'HSmM8IDB8hU', title: 'Greentec Quadsaw hedging a mango orchard', category: 'Orchards', kind: 'field', slug: 'mango-pruning-a-gold-nugget', story: true },
  { id: '8UgUxjPJzAI', title: 'Quadsaw hedging at Pinecliff Freedman Racing', category: 'Orchards', kind: 'field', slug: 'jack-evans-hedging-at-pinecliff-freedman-racing', study: true, story: true },
  { id: 'naEOCZ1FctI', title: 'Quadsaw LRS in canopy management', category: 'Orchards', kind: 'field' },
  { id: 'uSiZGEsKG04', title: 'Multi Carrier HXF on a telehandler', category: 'Orchards', kind: 'field' },
  { id: '8UaOmkqHSjA', title: 'Cutterbar finish quality close-up', category: 'Orchards', kind: 'field' },
  { id: 'FG4H0ug6XRk', title: 'Hedging windbreaks at speed', category: 'Agriculture', kind: 'field' },
  { id: 'jpHXQNnz6C4', title: 'Mulching prunings back into the row', category: 'Orchards', kind: 'field' },
  { id: 'CFJR_Aoy1IE', title: 'Virnig V70 Drum Mulcher walk around', category: 'Forestry', kind: 'walkaround', slug: 'virnig-v70-skid-steer-drum-mulcher' },
  { id: 'bKjY6f2JdFQ', title: 'Virnig V70 Disc Mulcher walk around', category: 'Forestry', kind: 'walkaround', slug: 'virnig-v70-disc-mulcher-performance' },
  { id: '-jZoKaOqOjk', title: 'Virnig V70 mulcher range explained', category: 'Forestry', kind: 'walkaround', slug: 'extreme-skid-steer-mulchers-meet-the-virnig-v70-mulcher-range' },
  { id: 'R6RcS9lkR6s', title: 'Drum mulcher vs disc mulcher', category: 'Forestry', kind: 'walkaround', slug: 'drum-mulcher-vs-disc-mulcher-which-forestry-mulcher-to-buy' },
  { id: 'eJWG4b7j5yE', title: 'David Gunson on the Greentec Quadsaw - Hedging', category: 'Orchards', kind: 'field', slug: 'greentec-quadsaw-customer-story', study: true, story: true },
  { id: '0qS3TxWykOM', title: 'Howard Meltzer Orchard Hedging', category: 'Orchards', kind: 'field', slug: 'saves-time-money-and-physical-strain-howard-meltzer-mechanizes-orchard-hedging', study: true, story: true }
];

export const downloads = [
  { title: 'V70 Open Front Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'Attachment Tools - General', type: 'Brochure', size: 'PDF', brand: 'Greentec' },
  { title: 'Multi Carrier Series', type: 'Brochure', size: 'PDF', brand: 'Greentec' },
  { title: 'Mowers - SCORPION Series', type: 'Brochure', size: 'PDF', brand: 'Greentec' },
  { title: 'V70 Drum Mulcher', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V70 Tree Disc Mulcher', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V70 Open Front Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V60 Open Front Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V50 Open Front Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V50 Floating Deck Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V50 Closed Front Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V40 Open Front Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'V40 Closed Front Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' },
  { title: 'X30 Mini Excavator Rotary Brush Cutter', type: 'Spec sheet', size: 'PDF', brand: 'Virnig' }
];

export const categories = [
  'Reach Mowers', 'Multi Carriers', 'Quadsaws & Tree Saws', 'Cutterbars & Trimmers',
  'Rotary Mulchers', 'Flail Mowers', 'Barrier Mowers', 'Brush Cutters', 'Rotary Mowers',
  'Specialist Tools', 'Skid Steer Slashers', 'Skid Steer Drum Mulchers',
  'Skid Steer Disc Mulchers', 'Excavator Slashers'
];

// SEO metadata per product category - each targets one distinct primary keyword.
// slug is the canonical, human-readable identifier used in products.html's
// clean-URL query param (?category=<slug>), replacing the old ?c=<Encoded Name>.
export const categoryMeta = {
  'Reach Mowers': {
    slug: 'reach-mowers',
    h1: 'Reach Mowers',
    title: 'Reach Mower Attachments | DTE Equipment',
    description: 'Greentec reach mower attachments for tractors, sized to your vehicle for roadside, verge and hedge work in Australian conditions.'
  },
  'Multi Carriers': {
    slug: 'multi-carriers',
    h1: 'Multi Carriers',
    title: 'Multi Carrier Attachments for Telehandlers & Loaders | DTE Equipment',
    description: 'Greentec multi carrier attachments matched to telehandlers and loaders, for hedge cutting and canopy work in tight orchard and forestry conditions.'
  },
  'Quadsaws & Tree Saws': {
    slug: 'quadsaws-tree-saws',
    h1: 'Quadsaws & Tree Saws',
    title: 'Quadsaw & Tree Saw Attachments | DTE Equipment',
    description: 'Greentec quadsaw and tree saw attachments for fast, clean hedge and canopy cutting on orchard, forestry and roadside machines.'
  },
  'Cutterbars & Trimmers': {
    slug: 'cutterbars-trimmers',
    h1: 'Cutterbars & Trimmers',
    title: 'Cutterbar & Hedge Trimmer Attachments | DTE Equipment',
    description: 'Greentec cutterbar and hedge trimmer attachments for precise, high-speed hedge maintenance on orchards, windbreaks and fence lines.'
  },
  'Rotary Mulchers': {
    slug: 'rotary-mulchers',
    h1: 'Rotary Mulchers',
    title: 'Rotary Mulcher Attachments | DTE Equipment',
    description: 'Rotary mulcher attachments built for paddock and vegetation management, tried and tested for Australian farm and council conditions.'
  },
  'Flail Mowers': {
    slug: 'flail-mowers',
    h1: 'Flail Mowers',
    title: 'Flail Mower Attachments | DTE Equipment',
    description: 'Greentec flail mower attachments for verge, roadside and paddock mowing, with a clean, controlled cut in grass and light scrub.'
  },
  'Barrier Mowers': {
    slug: 'barrier-mowers',
    h1: 'Barrier Mowers',
    title: 'Barrier Mower Attachments for Fence Lines | DTE Equipment',
    description: 'Greentec barrier mower attachments that mow fence lines, guardrails and orchard rows, stepping around every post and obstacle.'
  },
  'Brush Cutters': {
    slug: 'brush-cutters',
    h1: 'Brush Cutters',
    title: 'Brush Cutter Attachments | DTE Equipment',
    description: 'Virnig brush cutter attachments for skid steers and excavators, built to clear scrub, regrowth and woody vegetation.'
  },
  'Rotary Mowers': {
    slug: 'rotary-mowers',
    h1: 'Rotary Mowers',
    title: 'Rotary Mower Attachments | DTE Equipment',
    description: 'Greentec rotary mower attachments with the GreenFlex blade system, for heavy-duty paddock and land maintenance.'
  },
  'Specialist Tools': {
    slug: 'specialist-tools',
    h1: 'Specialist Tools',
    title: 'Specialist Vegetation Management Attachments | DTE Equipment',
    description: 'Specialist vegetation management attachments distributed by DTE Equipment for jobs the standard range does not cover.'
  },
  'Skid Steer Slashers': {
    slug: 'skid-steer-slashers',
    h1: 'Skid Steer Slashers',
    title: 'Skid Steer Slasher Attachments | DTE Equipment',
    description: 'Virnig skid steer slasher attachments for clearing grass, scrub and regrowth, matched to your loader\u2019s flow rate.'
  },
  'Skid Steer Drum Mulchers': {
    slug: 'skid-steer-drum-mulchers',
    h1: 'Skid Steer Drum Mulchers',
    title: 'Skid Steer Drum Mulcher Attachments | DTE Equipment',
    description: 'Virnig skid steer drum mulcher attachments that turn standing timber into fine mulch and grind stumps below grade.'
  },
  'Skid Steer Disc Mulchers': {
    slug: 'skid-steer-disc-mulchers',
    h1: 'Skid Steer Disc Mulchers',
    title: 'Skid Steer Disc Mulcher Attachments | DTE Equipment',
    description: 'Virnig skid steer disc mulcher attachments for fast, high-production cutting and mulching of trees and heavy scrub.'
  },
  'Excavator Slashers': {
    slug: 'excavator-slashers',
    h1: 'Excavator Slashers',
    title: 'Excavator Slasher Attachments | DTE Equipment',
    description: 'Virnig excavator slasher attachments for clearing vegetation in reach and access conditions a loader cannot manage.'
  }
};

export function categoryBySlug(slug) {
  const name = Object.keys(categoryMeta).find((k) => categoryMeta[k].slug === slug);
  return name || '';
}

export function bySlug(slug) { return products.find(p => p.slug === slug); }
export function appBySlug(slug) { return applications.find(a => a.slug === slug); }
export function newsBySlug(slug) { const s = slugAliases[slug] || slug; return news.find(n => n.slug === s); }

export default { site, segments, vehicles, brands, applications, products, news, newsCategories: [...new Set(articles.map((a) => a.category))], videoArticles, videos, downloads, categories, bySlug, appBySlug, newsBySlug };
