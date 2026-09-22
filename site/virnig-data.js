// Virnig range - transcribed from dte-equipment.com.au/product-category/virnig/
// Specification tables for models other than the V60 come from the Virnig spec sheets linked on each entry.

const IMG = 'https://www.dte-equipment.com.au/wp-content/uploads/2025/07/';
const SPEC = 'https://www.virnigmfg.com/wp-content/uploads/spec-sheets/';
const CAB = 'Do not operate the cutter without a shatterproof cab on the loader.';

// The Virnig-wide FAQ set that appears on every product page.
const SHARED_FAQS = [
  { q: 'What is the recommended loader capacity?', a: 'Virnig attachments are rated to give maximum performance and protection against damage when paired with an appropriately sized loader. Contact DTE Equipment for the most accurate attachment specs.' },
  { q: 'What attachment interface does Virnig use?', a: 'All Virnig skid steer attachments are built with a universal mount to fit most skid steer loaders, to ISO 24410 and SAE J2513 standards. Mini skid steer attachments use a Toro®/mini universal, Bobcat® or ASV® mount.' },
  { q: 'What is the setup time?', a: 'Most Virnig attachments are ready to work right off the pallet. Virnig requires the machine brand and model on every order with hydraulic components so hose length, routing and coupler sizing are correct, and every hydraulic attachment is tested for leaks and operation before it leaves the factory.' },
  { q: 'How quickly can I get replacement parts?', a: 'Most parts are held in stock and can ship the day the order is received. Fabricated and back-ordered parts carry a reasonable lead time. Check with DTE Equipment for availability.' },
  { q: 'What warranty does Virnig offer?', a: 'All Virnig parts and attachments are warranted for one year from the end user\'s date of purchase, or the dealer\'s date of first rental or demonstration.' },
  { q: 'Why does Virnig use NitroSteel® cylinder rods?', a: 'NitroSteel® outperforms chrome plating - better corrosion resistance and grease retention. Chrome plating can flake or pit and destroy seals and internal components, causing downtime and expensive repairs.' },
  { q: 'Where can I find pricing?', a: 'Contact DTE Equipment on 07 5315 8020 for pricing and availability in Australia.' }
];

export const virnigProducts = [
  {
    slug: 'v40-closed-front',
    name: 'Virnig V40 Closed Front Rotary Brush Cutter',
    brand: 'Virnig', category: 'Skid Steer Slashers', series: 'V40', model: 'BBV60 / BBV72',
    type: 'Rotary brush cutter',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['municipality', 'agriculture', 'forestry'],
    image: IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Featured.jpg', fit: 'cover',
    action: IMG + 'V40-Standard-deck-cutter-action.jpg',
    gallery: [
      IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Flywheel.jpg',
      IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Left-Feature.jpg',
      IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Front.jpg',
      IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Back.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=R4hLnk1NolY',
    videos: ['R4hLnk1NolY', 'zE9BFtBZMJo'],
    summary: 'Cuts up to 3" diametre trees and clears grass and brush for a consistent finished look.',
    body: 'The finish-cut machine at the entry point of the range. The closed deck holds material under the flywheel long enough to cut it twice, so grass, light brush and regrowth up to 3" come out looking maintained rather than knocked over. A direct drive Eaton® motor on a 16–25 GPM standard flow circuit keeps it simple, and hydraulic braking pulls the flywheel up in under ten seconds. Two cut widths, 60" and 72".',
    features: [
      'Direct drive Eaton® motor with relief valves',
      'Hydraulic braking stops the flywheel in less than 10 seconds',
      'Standard motor guard and spindle guard',
      'Circular flywheel with 3 updraft blades bounces off stumps',
      'Updraft 1/2" × 4" blades, shared with the V50 range'
    ],
    featureBlocks: [
      { h: 'Closed front deck', img: IMG + 'V40-Standard-deck-cutter-action.jpg', d: 'Material is held under the flywheel and cut twice for a consistent, maintained finish on grass and light brush.' },
      { h: 'Direct drive Eaton® motor', img: IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Left-Feature.jpg', d: 'Fewer parts between the loader circuit and the flywheel, with relief valves protecting both. Rated 16–25 GPM at 3,500 PSI - standard flow only.' },
      { h: 'Updraft flywheel', img: IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Flywheel.jpg', d: 'Three 1/2" × 4" updraft blades lift material into the cut and bounce off stumps instead of digging in.' },
      { h: 'Hydraulic braking', img: IMG + 'V40_Closed-Front-Rotary-Brush-Cutter_Back.jpg', d: 'Flywheel stops in under ten seconds so the machine is safe to reposition quickly.' }
    ],
    specs: [
      ['Models', 'BBV60 / BBV72'],
      ['Cut width', '60" (1524 mm) / 72" (1829 mm)'],
      ['Overall width', '66" (1676 mm) / 78" (1981 mm)'],
      ['Overall height', '21.4" (544 mm)'],
      ['Overall depth', '74.0" (1880 mm) / 86.0" (2184 mm)'],
      ['Deck height', '7.7" (196 mm)'],
      ['Minimum cut height', '1.9" (48 mm)'],
      ['Cutting capacity', '3" (76 mm) diametre'],
      ['Deck thickness', '0.19" top, 0.25" side, Grade 50 plate'],
      ['Recommended flow', '16–25 GPM (61–95 L/min), standard flow only'],
      ['Max operating pressure', '3,500 PSI (24.1 MPa)'],
      ['Approximate weight', '488 kg (1,075 lb) / 590 kg (1,300 lb)'],
      ['Recommended loader capacity', 'Greater than 680 kg (1,500 lb)'],
      ['Blade tip speed', '9,360 – 17,555 FPM (47.55 – 89.58 m/s)'],
      ['Braking', 'Hydraulic, under 10 seconds']
    ],
    carriers: ['Skid steer loader'],
    standard: [
      { t: 'Direct drive Eaton® motor with relief valves', img: '' },
      { t: 'Hydraulic braking', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: 'Circular flywheel, 3 updraft 1/2" × 4" blades', img: '' },
      { t: 'Universal skid steer mount (ISO 24410 / SAE J2513)', img: '' }
    ],
    optional: [],
    tools: [], appExamples: [],
    faqs: [
      { q: 'Can I run the V40 on high flow?', a: 'No. The motor is rated for 16–25 GPM only. Virnig motors have zero overflow tolerance - running above rated flow will eventually destroy the motor and stress the bearing spindle.' },
      { q: 'V40 or V50?', a: 'The design is similar, but the V40 has no rear roller or swivel caster option, and steel grade, thickness and weld differ in some areas. Virnig uses at least Grade 50 steel on all attachments, with the same one year warranty.' },
      { q: 'Does it use the same blades as the V50?', a: 'Yes - the same 1/2" × 4" single-side updraft blades.' },
      { q: 'Closed front or open front?', a: 'Closed (standard) deck cutters are better at cutting grass and mulching material; open front cutters clear brush and small trees more quickly.' },
      { q: 'Can I fit casters or a roller?', a: 'No - the V40 is not designed to take casters or a rear roller.' },
      { q: 'Does it cut bi-directionally?', a: 'No. It spins counter-clockwise and takes 7–10 seconds to stop. Run in reverse it cuts poorly, stalls easily and can damage blades and motor.' },
      { q: 'Why do I need a shatterproof cab?', a: 'Skid steer brush cutters can throw debris over 200 feet and cause serious injury or death without one.' }
    ],
    docs: { brochure: SPEC + 'V40-Closed-Front-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: CAB
  },
  {
    slug: 'v40-open-front',
    name: 'Virnig V40 Open Front Rotary Brush Cutter',
    brand: 'Virnig', category: 'Skid Steer Slashers', series: 'V40', model: 'BBV60-O / BBV72-O',
    type: 'Rotary brush cutter',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['municipality', 'agriculture', 'forestry'],
    image: IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Featured.jpg', fit: 'cover',
    action: IMG + 'V40-Brush-Cutter-Open-Front-Action-Close.jpg',
    gallery: [
      IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Flywheel.jpg',
      IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Left-Feature.jpg',
      IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Front.jpg',
      IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Back.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=qN41SOp2Kmw',
    videos: ['qN41SOp2Kmw', 'zE9BFtBZMJo'],
    summary: 'Cuts up to 3" diametre trees - exposed blades allow faster cutting for a maintained finish.',
    body: 'The entry point to the Virnig cutter range, and the faster of the two V40s. Blades are exposed at the front of the deck so material is taken on directly instead of being fed under, which is what you want when clearing brush and small trees quickly. A direct drive Eaton® motor keeps the parts count low, and hydraulic braking pulls the flywheel up inside 10 seconds. Two cut widths: 60" and 72", both on a 16–25 GPM standard flow circuit.',
    features: [
      'Direct drive Eaton® motor with relief valves',
      'Hydraulic braking stops the flywheel within 10 seconds',
      'Standard motor guard and spindle guard',
      'Circular flywheel with 3 updraft blades bounces off stumps',
      'Updraft 1/2" × 4" blades'
    ],
    featureBlocks: [
      { h: 'Open front deck', img: IMG + 'V40-Brush-Cutter-Open-Front-Action-Close.jpg', d: 'Exposed blades take material on directly, so the machine keeps moving through standing brush and small trees.' },
      { h: 'Direct drive Eaton® motor', img: IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Left-Feature.jpg', d: 'Fewer parts between the loader circuit and the flywheel, with relief valves protecting both. Rated to 3,500 PSI on 16–25 GPM.' },
      { h: 'Updraft flywheel', img: IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Flywheel.jpg', d: 'Three 1/2" × 4" updraft blades lift material into the cut and bounce off stumps instead of digging in.' },
      { h: 'Hydraulic braking', img: IMG + 'V40_Open-Front-Rotary-Brush-Cutter_Back.jpg', d: 'Flywheel stops within 10 seconds of shutdown - 7 to 10 seconds in practice.' }
    ],
    specs: [
      ['Models', 'BBV60-O / BBV72-O'],
      ['Cut width', '60" (1524 mm) / 72" (1829 mm)'],
      ['Overall width', '66" (1676 mm) / 78" (1981 mm)'],
      ['Overall height', '21.4" (544 mm)'],
      ['Overall depth', '71.1" (1805 mm) / 82.1" (2086 mm)'],
      ['Deck height', '7.7" (196 mm)'],
      ['Push bar height', '19.7" (500 mm)'],
      ['Minimum cut height', '1.9" (48 mm)'],
      ['Cutting capacity', '3" (76 mm) diametre'],
      ['Deck thickness', '0.19" top, 0.25" side, Grade 50 plate'],
      ['Recommended flow', '16–25 GPM (61–95 L/min)'],
      ['Max operating pressure', '3,500 PSI (24.1 MPa)'],
      ['Approximate weight', '495 kg (1,090 lb) / 595 kg (1,310 lb)'],
      ['Recommended loader capacity', 'Greater than 680 kg (1,500 lb)'],
      ['Blade tip speed', '9,360 – 17,555 FPM (47.55 – 89.58 m/s)'],
      ['Braking', 'Hydraulic, within 10 seconds']
    ],
    carriers: ['Skid steer loader'],
    standard: [
      { t: 'Direct drive Eaton® motor with relief valves', img: '' },
      { t: 'Hydraulic braking', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: 'Circular flywheel, 3 updraft 1/2" × 4" blades', img: '' },
      { t: 'Universal skid steer mount (ISO 24410 / SAE J2513)', img: '' }
    ],
    optional: [],
    tools: [], appExamples: [],
    faqs: [
      { q: 'Open front or closed front?', a: 'Closed front cutters are better at cutting grass and mulching material; open front cutters clear brush and small trees more quickly.' },
      { q: 'Can I fit casters or a rear roller?', a: 'No - the V40 is not designed to take casters or a rear roller. Step up to a V50 if you need them.' },
      { q: 'Does it cut bi-directionally?', a: 'No. It spins counter-clockwise and takes 7–10 seconds to stop. Run in reverse it cuts poorly, stalls easily and can damage blades and motor.' },
      { q: 'What cut width should I buy?', a: 'Wider than the tyres or tracks of your loader, but check loader capacity - too wide adds weight, volume and surface area that hurt performance.' },
      { q: 'How important is the spindle?', a: 'It is the most expensive performance component on a brush cutter - it transfers power from motor to flywheel and absorbs the impacts that would otherwise reach the motor.' }
    ],
    docs: { brochure: SPEC + 'V40-Open-Front-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: CAB
  },
  {
    slug: 'v50-closed-front',
    name: 'Virnig V50 Closed Front Rotary Brush Cutter',
    brand: 'Virnig', category: 'Skid Steer Slashers', series: 'V50', model: 'RBV60 / RBV66 / RBV72 / RBV78',
    type: 'Rotary brush cutter',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['municipality', 'agriculture', 'forestry'],
    image: IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Featured.jpg', fit: 'cover',
    action: IMG + 'Virnig-Skid-Steer-Brush-Cutter-Attachment-Standard-Grass-Cutting.jpg',
    gallery: [
      IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Flywheel.jpg',
      IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Left-Feature.jpg',
      IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Front.jpg',
      IMG + 'Brush-Cutter-Rear-Roller.jpg',
      IMG + 'Brush-Cutter-Swivel-Casters.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=X5rjpYptMwQ',
    videos: ['X5rjpYptMwQ', 'zE9BFtBZMJo'],
    summary: 'Cuts up to 4" diametre trees and clears grass and brush for a consistent finished look.',
    body: 'The closed front V50 is the finish machine of the family: the deck holds material under the flywheel and a chain curtain contains what would otherwise be thrown, which is what makes it usable near fences, traffic and buildings. Five direct drive motor options cover everything from a 14 GPM standard flow loader to a 45 GPM high pressure machine, and four cut widths run from 60" to 78". Add a rear roller or swivel casters and it stops gouging and scalping altogether.',
    features: [
      'Five direct drive motor options with relief valves',
      'Eaton® high flow motors rated to 4,100 PSI; SAI® piston motor to 4,500 PSI',
      'Hydraulic braking stops the flywheel within 10 seconds',
      'Standard motor guard and spindle guard',
      'Circular flywheel with 3 updraft blades bounces off stumps',
      'Chain curtain prevents flying debris',
      'Replaceable front skid shoes'
    ],
    featureBlocks: [
      { h: 'Closed front deck', img: IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Front.jpg', d: 'Material is held under the flywheel and cut twice, for the consistent finished look you want on maintained ground.' },
      { h: 'Chain curtain', img: IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Left-Feature.jpg', d: 'Contains thrown debris - the reason this is the model for work near fences, traffic and buildings.' },
      { h: 'Updraft flywheel', img: IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Flywheel.jpg', d: 'Three updraft blades lift material into the cut and bounce off stumps instead of digging in. Hydraulic braking stops it in 7–10 seconds.' },
      { h: 'Rear roller option', img: IMG + 'Brush-Cutter-Rear-Roller-2-600x600.jpg', d: 'Compacts chopped material and limits gouging and scalping. Sits flush with the bottom of the deck.' },
      { h: 'Swivel caster option', img: IMG + 'Brush-Cutter-Swivel-Casters-2-600x600.jpg', d: '360° casters give a smoother ride and a better cut, and take wear off the frame and skid shoes.' },
      { h: 'Five motor options', img: IMG + 'V50_Closed-Front-Rotary-Brush-Cutter_Left-Side.jpg', d: 'Standard flow 14–25 GPM, high flow 25–42 GPM, or high pressure 33–45 GPM up to 4,500 PSI.' }
    ],
    specs: [
      ['Models', 'RBV60 / RBV66 / RBV72 / RBV78'],
      ['Cut width', '60" / 66" / 72" / 78" (1524 – 1981 mm)'],
      ['Overall width', '66" / 72" / 78" / 84" (1676 – 2134 mm)'],
      ['Overall height', '20.9" (531 mm)'],
      ['Overall depth', '81.8" – 99.8" (2078 – 2535 mm)'],
      ['Deck height', '8.8" (224 mm)'],
      ['Minimum cut height', '1.8" (46 mm)'],
      ['Cutting capacity', '4" (102 mm) diametre'],
      ['Deck thickness', '0.25" top and side, Grade 50 plate'],
      ['Recommended flow', '14–25 / 25–42 / 33–45 GPM by motor'],
      ['Max operating pressure', '3,500 / 4,100 / 4,500 PSI by motor'],
      ['Approximate weight', '535 / 601 / 651 / 699 kg (1,180 – 1,540 lb)'],
      ['Recommended loader capacity', 'Greater than 680 kg (1,500 lb)'],
      ['Blade tip speed', '10,060 – 19,700 FPM (51.09 – 99.60 m/s)'],
      ['Braking', 'Hydraulic, within 10 seconds']
    ],
    carriers: ['Skid steer loader'],
    standard: [
      { t: 'Direct drive motor with relief valves (5 options)', img: '' },
      { t: 'Hydraulic braking', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: 'Circular flywheel, 3 updraft blades', img: '' },
      { t: 'Chain curtain', img: '' },
      { t: 'Replaceable front skid shoes', img: '' }
    ],
    optional: [
      { t: 'Rear roller - compacts material, limits gouging and scalping', img: IMG + 'Brush-Cutter-Rear-Roller-2-600x600.jpg' },
      { t: 'Swivel casters - 360° rotation for a smoother ride and better cut', img: IMG + 'Brush-Cutter-Swivel-Casters-2-600x600.jpg' },
      { t: 'Alternative motor configurations - standard flow, high flow or high pressure', img: '' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'What is the V50 rotary brush cutter best at?', a: 'Clearing undergrowth and cutting small trees up to 4" in diametre. Fitted with a floating deck, rear roller or swivel casters it gives a more finished look when mowing grass and brush.' },
      { q: 'Do I need casters or a roller?', a: 'They produce a better cut, a smoother ride and less gouging and scalping, and they take wear off the underside of the frame and skid shoes. Pair with a floating deck to get the most out of them.' },
      { q: 'V50 or V60 open front?', a: 'The V50\'s three-blade flywheel is about 200 lb lighter than the V60\'s four-blade unit, and the machine overall is 300–800 lb lighter. The V50 can take a rear roller or swivel casters; the V60 cannot.' },
      { q: 'Does it cut bi-directionally?', a: 'No. It is designed to spin counter-clockwise and takes 7–10 seconds to stop. Run in reverse it cuts poorly, stalls easily and can damage blades and motor.' },
      { q: 'Standard flow or high flow?', a: 'Generally higher GPM is better - more torque, less power loss, faster recovery. Never run higher GPM than the motor is rated for; it voids the warranty.' },
      { q: 'What protects the hydraulic system from pressure spikes?', a: 'Standard pressure relief valves open at the maximum pressure point to protect the motor and the loader circuit.' },
      { q: 'Why do I need a shatterproof cab?', a: 'Skid steer brush cutters can throw debris over 200 feet and cause serious injury or death without one.' }
    ],
    docs: { brochure: SPEC + 'V50-Closed-Front-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: CAB
  },
  {
    slug: 'v50-floating-deck',
    name: 'Virnig V50 Floating Deck Rotary Brush Cutter',
    brand: 'Virnig', category: 'Skid Steer Slashers', series: 'V50', model: 'RBV60-F / RBV66-F / RBV72-F / RBV78-F',
    type: 'Rotary brush cutter',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['municipality', 'agriculture'],
    image: IMG + 'V50_Floating-Deck-Rotary-Brush-Cutter_Featured.jpg', fit: 'cover',
    action: IMG + 'Virnig-Skid-Steer-Brush-Cutter-Floating-Deck-Floats-Up-CLOSE.jpg',
    gallery: [
      IMG + 'V50_Floating-Deck-Rotary-Brush-Cutter_Flywheel.jpg',
      IMG + 'V50_Floating-Deck-Rotary-Brush-Cutter_Left-Feature.jpg',
      IMG + 'V50_Floating-Deck-Rotary-Brush-Cutter_Front.jpg',
      IMG + 'Brush-Cutter-Rear-Roller.jpg',
      IMG + 'Brush-Cutter-Swivel-Casters.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=7LzIa7JO008',
    videos: ['7LzIa7JO008', 'zE9BFtBZMJo'],
    summary: 'Cuts up to 4" diametre trees and the floating deck provides a consistent cut on uneven terrain.',
    body: 'On broken ground a rigid deck scalps the high spots and misses the hollows. The floating deck follows the contour instead - 4.625" of vertical travel - holding cut height across the pass and keeping the blades out of the dirt. When you do not want it, two supplied bolts lock the float out. Everything else is the V50 platform: five motor options, chain curtain, hydraulic braking, and four cut widths from 60" to 78".',
    features: [
      'Floating deck follows the contour of the ground - 4.625" vertical travel',
      'Locks out with two supplied bolts when float is not wanted',
      'Five direct drive motor options with relief valves',
      'Eaton® high flow motors rated to 4,100 PSI; SAI® piston motor to 4,500 PSI',
      'Hydraulic braking stops the flywheel within 10 seconds',
      'Standard motor guard and spindle guard',
      'Circular flywheel with 3 updraft blades bounces off stumps',
      'Chain curtain prevents flying debris',
      'Replaceable front skid shoes'
    ],
    featureBlocks: [
      { h: 'Floating deck', img: IMG + 'Virnig-Skid-Steer-Brush-Cutter-Floating-Deck-Floats-Up-CLOSE.jpg', d: '4.625" of vertical travel lets the deck follow ground contour rather than the loader arms, preventing scalping and gouging on uneven terrain.' },
      { h: 'Lockable float', img: IMG + 'V50_Floating-Deck-Rotary-Brush-Cutter_Left-Side.jpg', d: 'Two bolts, supplied with the machine, lock the deck rigid when the float is not needed.' },
      { h: 'Updraft flywheel', img: IMG + 'V50_Floating-Deck-Rotary-Brush-Cutter_Flywheel.jpg', d: 'Three updraft blades lift material into the cut and bounce off stumps. Hydraulic braking stops it in 7–10 seconds.' },
      { h: 'Chain curtain', img: IMG + 'V50_Floating-Deck-Rotary-Brush-Cutter_Front.jpg', d: 'Contains thrown debris for work near fences, traffic and buildings.' },
      { h: 'Rear roller option', img: IMG + 'Brush-Cutter-Rear-Roller-1-600x600.jpg', d: 'Compacts chopped material and further limits gouging and scalping. Best paired with the floating deck.' },
      { h: 'Swivel caster option', img: IMG + 'Brush-Cutter-Swivel-Casters-1-600x600.jpg', d: '360° casters give a smoother ride and a better cut, and take wear off the frame and skid shoes.' }
    ],
    specs: [
      ['Models', 'RBV60-F / RBV66-F / RBV72-F / RBV78-F'],
      ['Cut width', '60" / 66" / 72" / 78" (1524 – 1981 mm)'],
      ['Overall width', '66" / 72" / 78" / 84" (1676 – 2134 mm)'],
      ['Overall height', '20.9" (531 mm)'],
      ['Overall depth', '81.8" – 99.8" (2078 – 2535 mm)'],
      ['Deck height', '8.8" (224 mm)'],
      ['Vertical deck travel', '4.625" (117 mm)'],
      ['Minimum cut height', '1.8" (46 mm)'],
      ['Cutting capacity', '4" (102 mm) diametre'],
      ['Deck thickness', '0.25" top and side, Grade 50 plate'],
      ['Recommended flow', '14–25 / 25–42 / 33–45 GPM by motor'],
      ['Max operating pressure', '3,500 / 4,100 / 4,500 PSI by motor'],
      ['Approximate weight', '649 / 708 / 762 / 798 kg (1,430 – 1,760 lb)'],
      ['Recommended loader capacity', 'Greater than 680 kg (1,500 lb)'],
      ['Blade tip speed', '10,060 – 19,700 FPM (51.09 – 99.60 m/s)'],
      ['Braking', 'Hydraulic, within 10 seconds']
    ],
    carriers: ['Skid steer loader'],
    standard: [
      { t: 'Floating deck with lock-out bolts', img: '' },
      { t: 'Direct drive motor with relief valves (5 options)', img: '' },
      { t: 'Hydraulic braking', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: 'Circular flywheel, 3 updraft blades', img: '' },
      { t: 'Chain curtain', img: '' },
      { t: 'Replaceable front skid shoes', img: '' }
    ],
    optional: [
      { t: 'Rear roller - compacts material, limits gouging and scalping', img: IMG + 'Brush-Cutter-Rear-Roller-1-600x600.jpg' },
      { t: 'Swivel casters - 360° rotation for a smoother ride and better cut', img: IMG + 'Brush-Cutter-Swivel-Casters-1-600x600.jpg' },
      { t: 'Alternative motor configurations - standard flow, high flow or high pressure', img: '' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'What is the benefit of the floating deck?', a: 'A more consistent cut on uneven terrain, and it prevents scalping and gouging. Where float is not wanted it locks out with two supplied bolts.' },
      { q: 'Do I need casters or a roller?', a: 'They produce a better cut, a smoother ride and less gouging, and reduce wear on the underside of the frame and skid shoes. Paired with the floating deck they are at their most effective.' },
      { q: 'What is the V50 best at?', a: 'Clearing undergrowth and cutting small trees up to 4" in diametre, with a finished look on grass and brush when fitted with the floating deck, roller or casters.' },
      { q: 'V50 or V60 open front?', a: 'The V50\'s three-blade flywheel is about 200 lb lighter than the V60\'s four-blade unit and the machine is 300–800 lb lighter overall. Only the V50 can take a rear roller or swivel casters.' },
      { q: 'Does it cut bi-directionally?', a: 'No. It spins counter-clockwise and takes 7–10 seconds to stop. Run in reverse it cuts poorly, stalls easily and can damage blades and motor.' },
      { q: 'Standard flow or high flow?', a: 'Generally higher GPM is better - more torque, less power loss, faster recovery. Never exceed the motor\'s rated flow; it voids the warranty.' },
      { q: 'Why do I need a shatterproof cab?', a: 'Skid steer brush cutters can throw debris over 200 feet and cause serious injury or death without one.' }
    ],
    docs: { brochure: SPEC + 'V50-Floating-Deck-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: CAB
  },
  {
    slug: 'v50-open-front',
    name: 'Virnig V50 Open Front Rotary Brush Cutter',
    brand: 'Virnig', category: 'Skid Steer Slashers', series: 'V50', model: 'RBV66-O / RBV72-O / RBV78-O / RBV84-O',
    type: 'Rotary brush cutter',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['municipality', 'agriculture', 'forestry'],
    image: IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Featured.jpg', fit: 'cover',
    action: IMG + 'V50-Brush-Cutter-Open-Front-Deck-edited.jpg',
    gallery: [
      IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Flywheel.jpg',
      IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Left-Feature.jpg',
      IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Front.jpg',
      IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Back.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=MPzIIXJh4yE',
    videos: ['MPzIIXJh4yE', 'zE9BFtBZMJo'],
    summary: 'Cuts up to 6" diametre trees - exposed blades allow faster cutting for a maintained finish.',
    body: 'The open front V50 is the general-purpose clearing machine of the range: designed to rough cut large, dense brush and trees up to 6" in diametre. A rounded flywheel with three reversible double-sided blades bounces off stumps instead of stalling on them, and five direct drive motor options - standard flow, high flow and high pressure - mean the cutter can be matched to whatever the loader actually flows. Four cut widths from 66" to 84".',
    features: [
      'Five direct drive motor options with relief valves',
      'Eaton® high flow motors rated to 4,100 PSI; SAI® piston motor to 4,500 PSI',
      'Hydraulic braking stops the flywheel within 10 seconds',
      'Standard motor guard and spindle guard',
      'Rounded flywheel with 3 double-sided blades bounces off stumps',
      'Reversible 5" × 5/8" blades for longer life',
      'Replaceable front skid shoes'
    ],
    featureBlocks: [
      { h: 'Rounded flywheel', img: IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Flywheel.jpg', d: 'Three double-sided 5" × 5/8" blades on a rounded flywheel that rides over stumps instead of catching. Blades reverse for a second life.' },
      { h: 'Five motor options', img: IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Left-Feature.jpg', d: 'Standard flow from 14 GPM through to high pressure 45 GPM - Eaton® to 4,100 PSI, SAI® piston to 4,500 PSI, all with relief valves.' },
      { h: 'Open front deck', img: IMG + 'V50-Brush-Cutter-Open-Front-Deck-edited.jpg', d: 'Exposed blades take material on directly for faster cutting through standing brush than a closed front.' },
      { h: 'Hydraulic braking', img: IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Back.jpg', d: 'Flywheel stops within 10 seconds - 7 to 10 seconds in practice - so the machine is safe to reposition quickly.' },
      { h: 'Four cut widths', img: IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Front.jpg', d: '66", 72", 78" and 84". Buy wider than your tyres or tracks, and check loader capacity before going wide.' },
      { h: 'Replaceable skid shoes', img: IMG + 'V50_Open-Front-Rotary-Brush-Cutter_Right-Side.jpg', d: 'Bolt-on wear parts at the front of the deck where the machine takes its punishment.' }
    ],
    specs: [
      ['Models', 'RBV66-O / RBV72-O / RBV78-O / RBV84-O'],
      ['Cut width', '66" / 72" / 78" / 84" (1676 / 1829 / 1981 / 2134 mm)'],
      ['Overall cutter width', '72" / 78" / 84" / 90" (1829 – 2286 mm)'],
      ['Overall height', '21.4" (543 mm)'],
      ['Cutter depth', '76.3" – 94.3" (1938 – 2395 mm)'],
      ['Deck height', '7.3" (185 mm)'],
      ['Minimum cut height', '2.0" (51 mm)'],
      ['Cutting capacity', '6" (152 mm) diametre'],
      ['Blades', '3 × double-sided 5" × 5/8", reversible'],
      ['Deck thickness', '0.25" top and side, Grade 50 plate'],
      ['Recommended flow', '14–25 / 25–42 / 33–45 GPM by motor'],
      ['Max operating pressure', '3,500 / 4,100 / 4,500 PSI by motor'],
      ['Approximate weight', '665 – 771 kg (1,465 – 1,700 lb)'],
      ['Recommended loader capacity', 'Greater than 680 kg (1,500 lb)'],
      ['Blade tip speed', '11,065 – 21,220 FPM (56.23 – 107.85 m/s)'],
      ['Braking', 'Hydraulic, within 10 seconds']
    ],
    carriers: ['Skid steer loader'],
    standard: [
      { t: 'Direct drive motor with relief valves (5 options)', img: '' },
      { t: 'Hydraulic braking', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: 'Rounded flywheel, 3 reversible double-sided blades', img: '' },
      { t: 'Replaceable front skid shoes', img: '' }
    ],
    optional: [
      { t: 'Alternative motor configurations - standard flow, high flow or high pressure', img: '' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'What blades does it use?', a: 'Double-sided 5" × 5/8" blades that are reversible for longer life.' },
      { q: 'Can I get casters or a rear roller?', a: 'No - casters and rear rollers are not options on the open front deck.' },
      { q: 'What is its best application?', a: 'Rough cutting large, dense brush and trees up to 6" in diametre.' },
      { q: 'V50 open front or V60 open front?', a: 'Both are open front, but the V60 is built for heavier material. The V50 runs a lighter three-blade flywheel; the V60 adds a fourth blade and is 300–800 lb heavier overall, needing a bigger loader.' },
      { q: 'Does it cut bi-directionally?', a: 'No. The flywheel is designed to spin counter-clockwise and takes 7–10 seconds to stop. Run in reverse it cuts poorly, stalls easily and can damage blades and motor.' },
      { q: 'Standard flow or high flow?', a: 'Generally higher GPM is better - more torque, less power loss and faster recovery to cutting speed. Running higher GPM than the motor is rated for voids the warranty, so match the motor to the loader.' },
      { q: 'What protects the hydraulic system from pressure spikes?', a: 'Standard pressure relief valves open at the maximum pressure point to protect the motor and the loader circuit from seal and component damage.' },
      { q: 'Why do I need a shatterproof cab?', a: 'Skid steer brush cutters can throw debris over 200 feet and cause serious injury or death without one.' }
    ],
    docs: { brochure: SPEC + 'V50-Open-Front-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: CAB
  },
  {
    slug: 'v60-open-front',
    name: 'Virnig V60 Open Front Rotary Brush Cutter',
    brand: 'Virnig', category: 'Skid Steer Slashers', series: 'V60', model: 'IRC72 / IRC78 / IRC84',
    type: 'Industrial rotary cutter',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['forestry', 'municipality', 'agriculture'],
    badge: 'Top of the range',
    image: IMG + 'V60_Open-Front-Rotary-Brush-Cutter_Featured.jpg', fit: 'cover',
    action: IMG + 'Skid-Steer-Brush-Cutter-Virnig-Manufacturing-Industrial-Rotary-Cutter-Attachment.jpg',
    gallery: [
      IMG + 'V60_Open-Front-Rotary-Brush-Cutter_Flywheel.jpg',
      IMG + 'V60-IRC-TeethAction2.jpg',
      IMG + 'V60-industrial-rotary-cutter-action-4.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=L3PUZubBLaA',
    summary: 'Cuts up to 8" diametre trees - more blades, a heavier flywheel and industrial-grade components for the most demanding jobs.',
    body: 'The V60 is the industrial cutter of the range. Its four-blade flywheel is around 200 lb heavier than any V50 and the blades are double-sided, so the head carries its speed through thick undergrowth instead of bogging. Three cut widths and five motor configurations - standard flow, high flow and a radial piston high-pressure option - let it be matched exactly to the loader. Budget on a loader rated above 2,200 lb.',
    features: [
      'Five direct drive motor options with relief valves',
      'Eaton® high flow motors rated to 4,100 PSI; SAI® piston motor to 4,500 PSI',
      'Hydraulic braking stops the flywheel within 25 seconds',
      'Standard motor guard and spindle guard',
      'Circular flywheel with 4 double-sided blades bounces off stumps',
      'Replaceable AR400 front skid shoes and bolt-on AR400 bottom deck runners'
    ],
    featureBlocks: [
      { h: 'Four-blade heavy flywheel', img: IMG + 'V60_Open-Front-Rotary-Brush-Cutter_Flywheel.jpg', d: 'About 200 lb heavier than a V50 flywheel, with double-sided blades that hold speed through dense material.' },
      { h: 'Three cut widths', img: IMG + 'V60_Open-Front-Rotary-Brush-Cutter_Front.jpg', d: 'IRC72, IRC78 and IRC84 - 72", 78" and 84" cut. Buy wider than your tracks or tyres.' },
      { h: 'AR400 wear package', img: IMG + 'V60_Open-Front-Rotary-Brush-Cutter_Left-Side.jpg', d: 'Replaceable AR400 front skid shoes and bolt-on bottom deck runners take the abrasion instead of the deck.' },
      { h: 'High pressure option', img: IMG + 'V60-IRC-TeethAction1.jpg', d: 'IRC-HP models run a radial piston motor to 4,500 PSI for more torque under sustained load.' }
    ],
    specs: [
      ['Models', 'IRC72 / IRC78 / IRC84'],
      ['Cut width', '72" / 78" / 84" (1829 / 1981 / 2134 mm)'],
      ['Overall width', '78" / 84" / 90" (1981 / 2134 / 2286 mm)'],
      ['Overall height', '27.7" (704 mm)'],
      ['Overall depth', '80.0" / 86.0" / 92.0" (2032 / 2184 / 2337 mm)'],
      ['Deck height', '7.7" (196 mm)'],
      ['Push bar height', '21.7" (551 mm)'],
      ['Cut height', '2.3" (58 mm)'],
      ['Cutting capacity', '8" (203 mm) diametre'],
      ['Teeth (optional)', '20 / 24 / 28'],
      ['Deck thickness', '0.25" top and side, Grade 50 plate'],
      ['Recommended flow', '20–25 / 25–45 / 39–45 GPM by motor'],
      ['Max operating pressure', '3,500 / 4,100 / 4,500 PSI by motor'],
      ['Approximate weight', '969 / 1,041 / 1,120 kg (2,135 / 2,295 / 2,470 lb)'],
      ['Recommended loader capacity', 'Greater than 998 kg (2,200 lb)'],
      ['Blade tip speed', '10,995 – 18,735 FPM (55.86 – 95.49 m/s)'],
      ['Braking', 'Hydraulic, within 25 seconds']
    ],
    carriers: ['Skid steer loader'],
    standard: [
      { t: 'Direct drive motor with relief valves (5 options)', img: '' },
      { t: 'Hydraulic braking', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: 'Replaceable AR400 front skid shoes', img: '' },
      { t: 'Bolt-on AR400 bottom deck runners', img: '' },
      { t: 'Couplers and Eaton® hoses - ready to operate', img: '' }
    ],
    optional: [
      { t: 'Carbide teeth - grind stumps and mulch material for a better finish', img: IMG + 'V60_Open-Front-Rotary-Brush-Cutter_Flywheel-1-600x600.jpg' },
      { t: 'Pressure gauge - monitor operating pressure to stay out of relief', img: IMG + 'V60_Open-Front-Rotary-Brush-Cutter_Pressure-Gauge.jpg' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'V60 or V70 open front?', a: 'The V60 IRC uses an Eaton® Geroler motor on standard flow (3,500 PSI) and high flow (4,100 PSI) models, and a radial piston motor on high pressure IRC-HP models (4,500 PSI). All V70 PRC cutters use a bent-axis piston motor and deliver up to 37% faster blade tip speed - but have no hydraulic brake and need a high flow machine.' },
      { q: 'What is the V60 best at?', a: 'Rough-cutting large, dense brush or trees up to 8" in diametre. Cutting anything larger risks damaging the motor and components.' },
      { q: 'V60 or V50?', a: 'The V60\'s four-blade flywheel is about 200 lb heavier than any V50 and its blades are double-sided. The larger motor holds blade speed through thick undergrowth, but the machine is 300–800 lb heavier and needs a loader rated above 2,200 lb.' },
      { q: 'Does it come ready to operate?', a: 'Yes - it ships with couplers and Eaton® hoses.' },
      { q: 'Does it cut bi-directionally?', a: 'No. It is designed to spin counter-clockwise and takes 7–10 seconds to stop. Run in reverse it cuts poorly, stalls easily and has minimal torque.' },
      { q: 'Can it grind stumps?', a: 'There is no stump grinding flywheel, but tilting the deck slightly forward lets the blades cut stumps down to ground level.' },
      { q: 'Is a floating deck or rollers available?', a: 'No - the V60 open front is a rough-cut machine, not a finish cutter. Floating deck and rollers are not options.' },
      { q: 'What cut width should I buy?', a: 'Wider than the tyres or tracks of your loader, and within its capacity - too wide adds weight, volume and surface area that hurt performance.' },
      { q: 'Why do I need a shatterproof cab?', a: 'Skid steer brush cutters can throw debris over 200 feet and cause serious injury or death without one.' }
    ],
    docs: { brochure: SPEC + 'V60-Open-Front-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: CAB
  },
  {
    slug: 'v70-open-front',
    name: 'Virnig V70 Open Front Rotary Brush Cutter',
    brand: 'Virnig', category: 'Skid Steer Slashers', series: 'V70', model: 'PRC72 / PRC78 / PRC84',
    type: 'Piston rotary cutter',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['forestry', 'municipality'],
    badge: 'High flow only',
    image: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Featured.jpg', fit: 'cover',
    action: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Left-Featured.jpg',
    gallery: [
      IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Flywheel.jpg',
      IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Front.jpg',
      IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Left-Side.jpg',
      IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Back.jpg'
    ],
    summary: 'Cutting up to 8" trees with faster blade tip speed, quick spin-up and rapid recovery.',
    body: 'Every V70 PRC runs a bent-axis piston motor, which is what gives it up to 37% faster blade tip speed than the high-flow V60 and full flywheel speed in about 13 seconds. In dense brush and tall grass it recovers between bites instead of dragging. Two things to know before ordering: it is a high-flow-only machine, and it has no hydraulic brake - the flywheel can spin for minutes after shutdown.',
    features: [
      'Bent-axis piston motor with relief valves - full speed in 13 seconds',
      'Up to 37% faster blade tip speed than the high-flow V60',
      'Standard motor guard and spindle guard',
      'Circular flywheel with 4 double-sided blades bounces off stumps',
      'Replaceable AR400 front skid shoes and bolt-on AR400 bottom deck runners',
      '3-3/8" forged spindle shaft with USA-made bearings',
      'Spindle low pressure oil vent safeguards bearing adapter seals if motor seals fail',
      'Case drain connection indicator confirms a functioning case drain'
    ],
    featureBlocks: [
      { h: 'Bent-axis piston motor', img: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Flywheel.jpg', d: 'Full flywheel speed in about 13 seconds, with the torque to recover immediately after a heavy bite. Two motor options: 30–39 GPM and 39–50 GPM.' },
      { h: '37% faster tip speed', img: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Front.jpg', d: 'Measured against the high-flow V60 - up to 23,210 FPM on the PRC84. The difference shows up in dense brush and tall grass.' },
      { h: '3-3/8" forged spindle', img: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Left-Side.jpg', d: 'The spindle is the most expensive performance component on a brush cutter. Virnig uses a forged shaft with USA-made bearings on every V70 PRC.' },
      { h: 'Case drain indicator', img: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Back.jpg', d: 'Oil at the 90-degree elbow means the case drain is not connected or not working - visual confirmation before you damage a motor.' },
      { h: 'AR400 wear package', img: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Right-Side.jpg', d: 'Replaceable AR400 front skid shoes and bolt-on AR400 bottom deck runners take the abrasion instead of the deck.' },
      { h: 'No hydraulic brake', img: IMG + 'V70-Open-Front-Rotary-Brush-Cutter_Right-Back-Angle.jpg', d: 'The flywheel may take minutes to stop after shutdown. Never leave the cab until it has stopped spinning.' }
    ],
    specs: [
      ['Models', 'PRC72 / PRC78 / PRC84'],
      ['Cut width', '72" / 78" / 84" (1829 / 1981 / 2134 mm)'],
      ['Overall width', '78" / 84" / 90" (1981 / 2134 / 2286 mm)'],
      ['Overall height', '20.1" (511 mm)'],
      ['Overall depth', '80.3" / 86.3" / 92.3" (2040 / 2192 / 2344 mm)'],
      ['Deck height', '8.3" (211 mm)'],
      ['Cut height', '2.3" (58 mm)'],
      ['Cutting capacity', '8" (203 mm) diametre'],
      ['Teeth (optional)', '20 / 24 / 28'],
      ['Deck thickness', '0.25" top and side, Grade 50 plate'],
      ['Recommended flow', '30–50 GPM (114–190 L/min), high flow only'],
      ['Max operating pressure', '4,500 PSI (31.0 MPa)'],
      ['Approximate weight', '978 / 1,050 / 1,130 kg (2,155 / 2,315 / 2,490 lb)'],
      ['Recommended loader capacity', 'Greater than 998 kg (2,200 lb)'],
      ['Blade tip speed', '13,465 – 23,210 FPM (68.43 – 117.68 m/s)'],
      ['Braking', 'None - flywheel free-spins to a stop']
    ],
    carriers: ['High flow skid steer loader'],
    standard: [
      { t: 'Bent-axis piston motor with relief valves', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: '3-3/8" forged spindle shaft with USA-made bearings', img: '' },
      { t: 'Circular flywheel, 4 double-sided blades', img: '' },
      { t: 'Replaceable AR400 front skid shoes', img: '' },
      { t: 'Bolt-on AR400 bottom deck runners', img: '' },
      { t: 'Spindle low pressure oil vent', img: '' },
      { t: 'Case drain connection indicator', img: '' },
      { t: 'Couplers and 1" Eaton® hoses - ready to operate', img: '' }
    ],
    optional: [
      { t: 'Carbide teeth - grind stumps and mulch material for a better finish', img: IMG + 'V70_Open-Front-Rotary-Brush-Cutter_Flywheel.jpg' },
      { t: 'Pressure gauge - monitor operating pressure to stay out of relief', img: IMG + 'V70_Open-Front-Rotary-Brush-Cutter_Pressure-Gauge.jpg' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'V70 open front or V60 open front?', a: 'Every V70 PRC runs a bent-axis piston motor for high torque and fast recovery. The V60 IRC uses an Eaton® Geroler motor on standard (3,500 PSI) and high flow (4,100 PSI) models, and a radial piston motor on high pressure IRC-HP models (4,500 PSI). The V70 delivers up to 37% faster blade tip speed than the V60 IRC-HF, but has no hydraulic brake and suits high flow skid steers only.' },
      { q: 'Which motor flow rate should I order?', a: 'Two options: 30–39 GPM and 39–50 GPM. A 40 GPM skid steer needs the 39–50 GPM motor. Running higher GPM than the motor is rated for can damage it and voids the warranty.' },
      { q: 'What cut width should I buy?', a: 'Wider than the tyres or tracks of your loader. Going too wide adds weight, volume and surface area, all of which affect performance - check loader capacity too.' },
      { q: 'Does it have hydraulic braking?', a: 'No. The flywheel keeps spinning for several minutes after shutdown - never leave the cab until it stops.' },
      { q: 'What is the cutting capacity?', a: 'Trees up to 8" in diametre. Anything larger risks damaging the motor and components.' },
      { q: 'Does it cut bi-directionally?', a: 'No. The flywheel is designed to spin counter-clockwise. Run in reverse it cuts poorly, stalls easily, has minimal torque and can damage blades and motor.' },
      { q: 'What do carbide teeth do?', a: 'Teeth sit between the blades and cut slightly below them for a more manicured finish. They also help grind small stumps.' },
      { q: 'Is a floating deck available?', a: 'No - the V70 open front is a rough-cut machine, not a finish cutter like the V50. Floating deck and rollers are not options.' },
      { q: 'Why do I need a shatterproof cab?', a: 'Skid steer brush cutters can throw debris over 200 feet and cause serious injury or death without one.' }
    ],
    docs: { brochure: SPEC + 'V70-Open-Front-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: 'High flow loaders only. No hydraulic braking - the flywheel may take minutes to come to a complete stop. ' + CAB
  },
  {
    slug: 'v70-drum-mulcher',
    name: 'Virnig V70 Drum Mulcher',
    brand: 'Virnig', category: 'Skid Steer Drum Mulchers', series: 'V70', model: 'DRM60 / DRM72',
    type: 'Drum mulcher',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['forestry', 'agriculture'],
    badge: '30-50 GPM high flow',
    image: IMG + 'V70_Drum-Mulcher_Featured_800px.jpg', fit: 'cover',
    action: IMG + 'Drum-Mulcher-on-Roadside.jpg',
    gallery: [
      IMG + 'Drum-Mulcher-Stump-Grinding_500px.jpg',
      IMG + 'drum_closeup-of-mulch_500px.jpg',
      IMG + 'V70_Drum-Mulcher_Left-Back-Angle.jpg',
      IMG + 'V70_Drum-Mulcher_Front.jpg',
      IMG + 'V70_Drum-Mulcher_Featured_BiteControl_800px.jpg',
      IMG + 'V70_Drum-Mulcher_Bite-Control-Drum.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=31FTgFsBTtE',
    videos: ['31FTgFsBTtE', 'CFJR_Aoy1IE', 'n2cxlrtOOig'],
    summary: 'Efficiently turn 14" diametre trees and vegetation into a fine mulch and grind stumps below grade.',
    body: 'Fixed and variable speed bent-axis piston motor options are available - the variable motor provides more torque for productive stump grinding and mulching below grade. Every unit is factory tuned to the loader for optimal drum RPM using a synchronous timing belt and matched sheave pair, so no motor adjustment, special tools or service tech visit is required. Rolled forward on the skid shoes the drum will mulch 2" below grade.',
    features: [
      'Fixed and variable speed bent-axis piston motor options',
      'Factory tuned to the loader for optimal drum RPM - no service techs required',
      '18" perfectly balanced Quadco® drum with fully enclosed greaseable bearings',
      'Anti-wrap drum plates provide wire and debris entanglement protection',
      'Interchangeable Quadco® bolt-on steel and carbide tooth options',
      'AR400 bolt-on skid shoes, adjustable push bar and replaceable AR400 wear liner',
      'Adjustable bottom bite plate controls material discharge size',
      'Spindle low pressure oil vent safeguards bearing adapter seals if motor seals fail',
      'Case drain connection indicator confirms a functioning case drain',
      'Rear chain curtain reduces debris thrown toward the loader and operator'
    ],
    featureBlocks: [
      { h: 'Factory tuned drum RPM', img: IMG + 'Drum-Mulcher-Tuned-1024x427-1.png', d: 'A synchronous timing belt runs between motor and drum sheaves, with 10 sheave combinations matched to flow rate. Tuned before it ships - no motor adjustment, no special tools, no service tech.' },
      { h: '18" Quadco® drum', img: IMG + 'V70_Drum-Mulcher_Smooth-Drum.jpg', d: 'Perfectly balanced, 1" wall, fully enclosed greaseable bearings, and anti-wrap plates against wire and debris. Max drum speed 2,500 RPM.' },
      { h: 'Bite control option', img: IMG + 'V70_Drum-Mulcher_Bite-Control-Drum.jpg', d: 'AR450 bite control rings limit cut depth to hold drum speed, feed material toward the centre and produce a finer, more consistent chip on the first pass.' },
      { h: 'Adjustable bite plate', img: IMG + 'V70-Drum-Mulcher_Bite-Plate.jpg', d: 'Set anywhere between 3/8" and 1-15/16" from the teeth to control chip size. The steel plate reverses to double its wear life.' },
      { h: 'Case drain protection', img: IMG + 'V70-Drum-Mulcher_Case-Drain.jpg', d: 'A case drain line plus spindle oil vent relieve pressure spikes back to the loader and warn the operator if the third line is not connected.' },
      { h: 'Grinds below grade', img: IMG + 'Drum-Mulcher-Stump-Grinding_500px.jpg', d: 'Rolled forward on the skid shoes the drum mulches 2" below grade - very effective on stumps.' }
    ],
    specs: [
      ['Models', 'DRM60 / DRM72'],
      ['Cut width', '60" (1524 mm) / 72" (1829 mm)'],
      ['Overall width', '73" (1854 mm) / 85" (2159 mm)'],
      ['Height, overall / frame', '59.8" / 25.0" (1519 / 635 mm)'],
      ['Depth, overall / frame', '57.5" / 41.3" (1461 / 1049 mm)'],
      ['Cutting capacity', '14" (356 mm) diametre'],
      ['Maximum cutting depth', '2.0" (51 mm)'],
      ['Number of teeth', '34 (DRM60) / 38 (DRM72)'],
      ['Maximum drum speed', '2,500 RPM (±150)'],
      ['Drum diametre', '18" (457 mm)'],
      ['Drum wall thickness', '1.0" (25 mm)'],
      ['Recommended flow', '30–50 GPM (114–190 L/min)'],
      ['Max operating pressure', '4,500 PSI (31.0 MPa)'],
      ['Approximate weight', '1,241 kg (2,735 lb) / 1,365 kg (3,010 lb)'],
      ['Recommended loader capacity', 'Greater than 1,270 kg (2,800 lb)'],
      ['Blade tip speed', '11,075 – 12,500 FPM (56.26 – 63.50 m/s)']
    ],
    carriers: ['High flow skid steer loader'],
    standard: [
      { t: 'Bent-axis piston motor, factory tuned to your loader', img: '' },
      { t: '18" balanced Quadco® drum with greaseable bearings', img: '' },
      { t: 'Anti-wrap drum plates', img: '' },
      { t: 'AR400 bolt-on skid shoes and replaceable AR400 wear liner', img: '' },
      { t: 'Adjustable push bar - three positions', img: '' },
      { t: 'Adjustable bottom bite plate', img: '' },
      { t: 'Rear chain curtain', img: '' },
      { t: 'Case drain line, connection indicator and spindle oil vent', img: '' }
    ],
    optional: [
      { t: 'Smooth drum - for heavy ground engagement and mulching into the soil', img: IMG + 'V70-Drum-Mulcher_Smooth-Drum.jpg' },
      { t: 'Bite control drum - maintains drum speed by limiting cut depth', img: IMG + 'V70-Drum-Mulcher_Bite-Control-Drum.jpg' },
      { t: 'Pressure gauge - monitor hydraulic operating pressure', img: IMG + 'V70-Drum-Mulcher_Gauge.jpg' },
      { t: 'Steel planer teeth - max productivity, finest mulch, no ground contact', img: IMG + 'V70-Drum-Mulcher_Steel-Planer-Tooth.jpg' },
      { t: 'Carbide planer teeth - high productivity with minimal ground contact', img: IMG + 'V70-Drum-Mulcher_Carbide-Planer-Tooth.jpg' },
      { t: 'Carbide hammer teeth - significant ground engagement in rocky conditions', img: IMG + 'V70-Drum-Mulcher_Carbide-Hammer-Tooth.jpg' },
      { t: 'Variable speed motor (85cc) - more torque for stump grinding', img: '' },
      { t: 'Fixed speed motor (63cc) - economical, lighter vegetation above ground', img: '' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'Can the V70 drum mulcher mulch below grade?', a: 'Yes - it mulches 2" below grade when the mulcher is rolled forward on the skid shoes, and it is very effective at grinding stumps.' },
      { q: 'Is it compatible with my loader?', a: 'It needs a high flow loader with a shatterproof (polycarbonate) cab, 30+ GPM flow and 2,800+ lb operating capacity.' },
      { q: 'Smooth drum or bite control drum?', a: 'Smooth suits heavy ground contact and mulching below grade, gives maximum energy transfer and costs less up front. Bite control uses AR450 rings to limit cut depth, holds drum speed in heavy timber, produces a finer first-pass chip and needs less loader horsepower.' },
      { q: 'Fixed motor or variable motor?', a: 'The fixed 63cc motor is the cheaper option for lighter vegetation above ground and stalls more easily under load. The variable 85cc motor is the popular choice - it shifts to max displacement and slower speed under heavy load for more torque when stump grinding and ground mulching.' },
      { q: 'Which tooth option should I choose?', a: 'Steel planer for maximum productivity and the finest mulch with no ground contact (reversible, needs sharpening). Carbide planer for high productivity with minimal ground contact and no maintenance. Carbide hammer for significant ground engagement in rocky, sandy country - largest chip, most loader power.' },
      { q: 'How long do the teeth last?', a: 'Tooth life varies with conditions. In Virnig testing, steel teeth have lasted upwards of 400 hours and carbide around 600 hours.' },
      { q: 'Can I mix teeth on the drum?', a: 'Yes, as long as they are installed in pairs on opposite sides of the drum to keep it balanced. Machines ship with all 34 or 38 teeth of one type; mixed sets are ordered and fitted separately.' },
      { q: 'Does it have hydraulic braking?', a: 'No. The drum rotor keeps spinning for several minutes after shutdown - never leave the cab until it stops.' },
      { q: '60" or 72"?', a: '60" is more manoeuvrable in tight spaces, draws less horsepower and spins up faster. 72" processes more material per pass, handles larger loads and carries more momentum into stumps, but costs more to buy and run.' },
      { q: 'How does the bite limiter plate work?', a: 'It adjusts between 3/8" and 1-15/16" from the teeth. The smallest chip comes from the tightest setting; a wider gap increases finished particle size. The plate reverses to double wear life.' }
    ],
    docs: { brochure: SPEC + 'V70-Drum-Mulcher.pdf', guide: '', parts: '' },
    warning: 'Requires a high flow loader with a flow rate of 30–50 GPM. Max operating pressure 4,200 PSI. No hydraulic braking - the drum spins for several minutes after shutdown. Do not operate the mulcher without a shatterproof cab on the loader.'
  },
  {
    slug: 'v70-tree-disc-mulcher',
    name: 'Virnig V70 Tree Disc Mulcher',
    brand: 'Virnig', category: 'Skid Steer Disc Mulchers', series: 'V70', model: 'TDM60',
    type: 'Disc mulcher',
    vehicles: ['Skid Steer', 'Loader'],
    markets: ['forestry'],
    badge: '30-50 GPM high flow',
    image: IMG + 'V70-Tree-Disc-Mulcher_Featured.jpg', fit: 'cover',
    action: IMG + 'TDM-stump-grind_800x500.jpg',
    gallery: [
      IMG + 'V70-Tree-Disc-Mulcher_Flywheel.jpg',
      IMG + 'TDM_Beauty-Shot_500px.jpg',
      IMG + 'V70_TDM_Teeth_Disc.jpg',
      IMG + 'V70_TDM_Chute_Exit.jpg',
      IMG + 'V70-Tree-Disc-Mulcher_Left-Side-2.jpg',
      IMG + 'V70-Tree-Disc-Mulcher_Front.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=pe_AHwpQQGY',
    videos: ['pe_AHwpQQGY', 'bKjY6f2JdFQ', '7QFyoJ19baw'],
    summary: 'Efficiently mulch 6–8" diametre trees and quickly cut up to 14" diametre trees.',
    body: 'Where the drum mulcher is about finish, the disc is about pace. A bent-axis piston motor with relief valves drives a 60" fully-machined, perfectly balanced Quadco® disc carrying four-sided rotatable and replaceable teeth. Three deck-mounted teeth and a recutter bar bring the finish back up without giving away the speed, and the interior deck is 3/8" Grade 80 plate.',
    features: [
      'Bent-axis piston motor with relief valves',
      '60" fully-machined, perfectly balanced Quadco® disc',
      'Bolt-on steel tooth mounts with four-sided rotatable and replaceable teeth (carbide available)',
      '3 deck mounted teeth and recutter bar for a finer finish',
      '3/8" Grade 80 interior deck weldment',
      'Replaceable push bar, chute and deflector',
      'Two chute styles - standard or open',
      'Standard motor guard and spindle guard'
    ],
    featureBlocks: [
      { h: '60" machined Quadco® disc', img: IMG + 'V70-Tree-Disc-Mulcher_Flywheel.jpg', d: 'Fully machined and balanced at up to 1.25" thick, so the head carries momentum into 14" timber instead of stalling.' },
      { h: 'Four-sided teeth', img: IMG + 'V70_TDM_Teeth_Disc.jpg', d: '12 top, 20 bottom and 12 outside teeth on bolt-on steel mounts. Rotate a worn tooth three times before replacing it; carbide available for abrasive country.' },
      { h: 'Standard chute', img: IMG + 'TDM-Closed-Chute.jpg', d: 'Tapered design guides trees into the disc, with the bottom edge dropping below the disc to scoop trees.' },
      { h: 'Open chute option', img: IMG + 'TDM-Open-Chute.jpg', d: 'More space between chute and disc for larger, bushy material, with the bottom edge flush to the disc so you can work at or below grade.' },
      { h: 'Grade 80 deck', img: IMG + 'V70-Tree-Disc-Mulcher_Left-Side-2.jpg', d: '3/8" Grade 80 interior deck weldment - 80,000 PSI minimum yield - with a replaceable push bar, chute and deflector.' },
      { h: 'Recutter bar', img: IMG + 'V70_TDM_Chute_Exit.jpg', d: 'Three deck-mounted teeth and a recutter bar work the material a second time for a finer finish on the same pass.' }
    ],
    specs: [
      ['Model', 'TDM60'],
      ['Cut width', '60" (1524 mm)'],
      ['Overall width', '70" (1778 mm)'],
      ['Overall height', '40.5" (1029 mm)'],
      ['Overall depth', '77.5" (1969 mm)'],
      ['Deck height', '11" (279 mm)'],
      ['Minimum cut height', '2.1" (53 mm)'],
      ['Cutting capacity', '14" (356 mm) diametre'],
      ['Mulching capacity', '6–8" (152–203 mm) diametre'],
      ['Teeth: top / bottom / outside', '12 / 20 / 12'],
      ['Maximum disc thickness', '1.25" (32 mm)'],
      ['Interior deck', '3/8" Grade 80 plate'],
      ['Recommended flow', '30–50 GPM (114–190 L/min)'],
      ['Max operating pressure', '4,200 PSI (29.0 MPa)'],
      ['Approximate weight', '1,229 kg (2,710 lb)'],
      ['Recommended loader capacity', 'Greater than 1,270 kg (2,800 lb)'],
      ['Disc tip speed', '11,155 – 16,730 FPM (56.67 – 84.98 m/s)']
    ],
    carriers: ['High flow skid steer loader'],
    standard: [
      { t: 'Bent-axis piston motor with relief valves', img: '' },
      { t: '60" fully-machined Quadco® disc', img: '' },
      { t: 'Bolt-on steel tooth mounts, four-sided rotatable teeth', img: '' },
      { t: '3 deck mounted teeth and recutter bar', img: '' },
      { t: '3/8" Grade 80 interior deck weldment', img: '' },
      { t: 'Replaceable push bar, chute and deflector', img: '' },
      { t: 'Motor guard and spindle guard', img: '' }
    ],
    optional: [
      { t: 'Standard chute - tapered, scoops trees into the disc', img: IMG + 'TDM-Closed-Chute.jpg' },
      { t: 'Open chute - larger bushy material, work at or below grade', img: IMG + 'TDM-Open-Chute.jpg' },
      { t: 'Pressure gauge - monitor operating pressure to stay out of relief', img: IMG + 'V70-Tree-Disc-Mulcher_Option_Pressure-Gauge.jpg' },
      { t: 'Carbide teeth', img: '' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'Standard chute or open chute?', a: 'The standard chute is tapered to guide and scoop trees into the disc, with the bottom edge below the disc line. The open chute leaves more space between chute and disc for larger, bushy material and sits flush with the disc so you can work at or below grade.' },
      { q: 'How does a disc compare to a drum mulcher?', a: 'Discs are for speed - far more productive per hour, able to process a whole tree in a split second, but they throw debris further and leave a rougher finish. Drums are for quality - finer mulch, better debris control, and they can work below grade.' }
    ],
    docs: { brochure: SPEC + 'V70-Tree-Disc-Mulcher.pdf', guide: '', parts: '' },
    warning: 'Requires a high flow loader with a flow rate of 30–50 GPM. Max operating pressure 4,200 PSI. Do not operate the mulcher without a shatterproof cab on the loader.'
  },
  {
    slug: 'x30-mini-ex',
    name: 'Virnig X30 Mini Excavator Rotary Brush Cutter',
    brand: 'Virnig', category: 'Excavator Slashers', series: 'X30', model: 'XBC42 / XBC48',
    type: 'Rotary brush cutter',
    vehicles: ['Excavator'],
    markets: ['municipality', 'forestry'],
    badge: 'No case drain required',
    image: IMG + 'X30-Mini-Ex_Brush-Cutter_Featured-Left.jpg', fit: 'cover',
    action: IMG + 'IMG_0652.jpg',
    gallery: [
      'uploads/x30_photos-1790036476893-1s9b.jpg',
      'uploads/x30_photos-1790036476964-ibn1.jpg',
      IMG + 'X30-Mini-Ex_Brush-Cutter_Bottom-No-Curtains.jpg',
      IMG + 'X30-Mini-Ex_Brush-Cutter_Motor.jpg',
      IMG + 'X30-Mini-Ex_Brush-Cutter_Both-Curtains-and-Front-Bar.jpg',
      IMG + 'DSC_2588.jpg',
      IMG + 'IMG_0777.jpg'
    ],
    video: 'https://www.youtube.com/watch?v=kt-uVigWF80',
    videos: ['kt-uVigWF80', 'ys9gCUJB-yM', 'ef2fpRsTPSg'],
    summary: 'Cut up to 4" diametre trees and reach the places a loader cannot.',
    body: 'Batters, drains, easements and behind guardrail - the X30 puts a rotary cutter where a skid steer cannot go. No case drain is required: an Eaton® Geroler motor made in the USA with relief valve protection does the work, which matters because most mini excavators have no case drain hookup and retrofitting one is slow and expensive. The bolt-on front deck removes for 270-degree blade engagement, and the serrated rear deck back drags brush and grubs stumps. Available in 42" and 48" cut widths to suit excavators from 8,900 to 26,000 lb.',
    features: [
      'No case drain required - Eaton® Geroler motor with relief valve protection',
      'Unique bolt-on front deck removes for 270-degree blade engagement',
      'Bolt-on mounting interface for quickly changing hanger brackets',
      'Rounded flywheel with 3 double-sided blades bounces off stumps',
      'Serrated rear deck for back dragging brush and grubbing stumps',
      'USA-made bearing spindles',
      'Blades forged from American 5160 spring steel, heat treated',
      'Standard motor guard and spindle guard',
      'Hanger brackets available to fit most excavator brands'
    ],
    featureBlocks: [
      { h: 'No case drain required', img: IMG + 'X30-Mini-Ex_Brush-Cutter_Motor.jpg', d: 'The Eaton® Geroler motor relieves excess pressure through a manifold relief valve. Geroler motors also resist contamination and cavitation better than piston motors and cost less to replace.' },
      { h: '270° blade engagement', img: IMG + 'X30-Mini-Ex_Brush-Cutter_Bottom-No-Curtain-or-front-bar.jpg', d: 'Remove the bolt-on front deck and the blades work through 270 degrees. With sides and front bar off the cutter is at its most aggressive - but not for work close to the ground.' },
      { h: 'Side curtain options', img: IMG + 'X30-Mini-Ex_Brush-Cutter_Both-Curtains-and-Front-Bar.jpg', d: 'Both sides for maximum containment on small brush and grass; left side only to cut larger material while keeping discharge away from the operator; none for large-diametre material and hedge trimming.' },
      { h: 'Serrated rear deck', img: IMG + 'X30-Mini-Ex_Brush-Cutter_Back.jpg', d: 'Back drag brush and grub stumps with the same attachment instead of swapping back to a bucket.' },
      { h: 'Bolt-on hanger interface', img: IMG + 'X30-Hanger-Bracket-Options-300px.jpg', d: 'Every Virnig hanger bracket uses the six-hole Epiroc hammer bolt pattern. Pin grabber and wedge styles available for Kubota®, John Deere®, Bobcat®, CAT® and more.' },
      { h: 'USA-made blades and spindle', img: IMG + 'X30-Mini-Ex_Brush-Cutter_Top-w-Guard.jpg', d: 'Blades forged from American 5160 spring steel and heat treated for impact toughness, on a USA-made bearing spindle.' }
    ],
    specs: [
      ['Models', 'XBC42 / XBC48'],
      ['Cut width', '42" (1067 mm) / 48" (1219 mm)'],
      ['Overall width without / with sides', '38.8" / 52.0" (XBC42) · 44.9" / 58.0" (XBC48)'],
      ['Height, overall / deck', '20.5" / 5.8" (XBC42) · 21.5" / 5.8" (XBC48)'],
      ['Overall depth', '52.5" (1334 mm) / 58.5" (1486 mm)'],
      ['Minimum cut height', '2.0" (51 mm) with bolt-on front'],
      ['Cutting capacity', '4" (102 mm) diametre'],
      ['Deck thickness', '0.25" (6.4 mm) top and side'],
      ['Recommended flow', '15–28 GPM (XBC42) · 15–38 GPM (XBC48)'],
      ['Max operating pressure', '3,500 PSI; 4,100 PSI on 28–35 and 35–38 GPM models'],
      ['Weight, no sides / both sides', '318 / 376 kg (XBC42) · 370 / 438 kg (XBC48)'],
      ['Carbide teeth (optional)', '12 qty / 3.6 kg (XBC42) · 18 qty / 5.4 kg (XBC48)'],
      ['Recommended excavator weight', '4,037 – 11,793 kg (8,900 – 26,000 lb)'],
      ['Blade tip speed', '9,010 – 15,965 FPM (45.91 – 81.28 m/s)'],
      ['Auxiliary flow', 'One-way (hammer mode); counter-clockwise rotation'],
      ['Case drain', 'Not required']
    ],
    carriers: ['Mini excavator', 'Midi excavator'],
    standard: [
      { t: 'Eaton® Geroler motor with relief valve protection', img: '' },
      { t: 'Bolt-on front deck', img: '' },
      { t: 'Bolt-on mounting interface', img: '' },
      { t: 'Rounded flywheel, 3 double-sided 5160 spring steel blades', img: '' },
      { t: 'Serrated rear deck', img: '' },
      { t: 'USA-made bearing spindle', img: '' },
      { t: 'Motor guard and spindle guard', img: '' },
      { t: '90" hoses and 1/2" couplers', img: '' }
    ],
    optional: [
      { t: 'One bolt-on side curtain - left side, reduces debris toward the operator', img: IMG + 'X30-Mini-Ex-Cutter-Flywheel-Curtains-Highlight-300px.jpg' },
      { t: 'Two bolt-on side curtains - fully enclose the cutter for max containment', img: IMG + 'X30-Mini-Ex-Cutter-Flywheel-Curtains-Highlight-BOTH-300px.jpg' },
      { t: 'Carbide teeth - shred material for a better finish', img: IMG + 'X30-Mini-Ex_Brush-Cutter_Bottom-No-Curtains-1-600x600.jpg' },
      { t: 'Bolt-on hanger bracket - many options, ordered with or without machined pins', img: IMG + 'X30-Hanger-Bracket-Options-300px.jpg' }
    ],
    tools: [], appExamples: [],
    faqs: [
      { q: 'Does it need a case drain line?', a: 'No. The relief valve in the manifold relieves excessive pressure. Most mini excavators have no case drain hookup and retrofitting one is time consuming and expensive.' },
      { q: 'Does it need two-way auxiliary flow?', a: 'No - one-way (hammer mode) flow is all that is needed. The cutter is designed to spin counter-clockwise only; run clockwise it stalls easily and loses about 75% of its torque.' },
      { q: 'Which motor package should I order?', a: 'Match it to the excavator\'s auxiliary flow, not total pump flow. 42": XBC42-25 for 15–25 GPM, XBC42-28 for 22–28 GPM - in the 22–25 GPM overlap, the -25 gives 40% more speed and the -28 gives 40% more torque. 48": XBC48-22 (15–22), XBC48-28 (22–28), XBC48-35 (28–35), XBC48-38 (35–38).' },
      { q: 'How many side curtains do you recommend?', a: 'Both for the best containment on small brush and grass. One on the left to cut larger material on the open side while reducing material thrown at the operator. None for large-diametre material and hedge trimming. Removing the front frame as well is the most aggressive setup, but not for cutting close to the ground.' },
      { q: 'What excavator size does it suit?', a: 'Mini and midi excavators between 8,900 and 26,000 lb depending on model. The excavator\'s lowest lift capacity over the side at full reach must exceed the cutter operating weight - cutter plus hanger (typically 80–150 lb) plus options.' },
      { q: 'What measurements does Virnig need for a hanger bracket?', a: 'Excavator make and model plus four bucket measurements: distance between bushings (A and B), distance between pin centres (C) and pin diametre (D) - commonly 38, 40, 45 or 50 mm on mini excavators.' },
      { q: 'What bolt pattern do the hanger brackets use?', a: 'All Virnig hanger brackets use a six-hole Epiroc hammer bolt pattern, one of the more common patterns in the industry.' },
      { q: 'Does it have hydraulic braking?', a: 'No - the flywheel can spin for up to a minute. Never exit the cab until it has stopped.' },
      { q: 'What cutting performance should I expect?', a: 'A high torque Eaton® motor and heavy three-blade flywheel power through thick brush and 4" trees. Mini excavators share flow between the attachment and machine functions, so ground speed and boom cycle times can slow while cutting; most 5–8 tonne machines cannot exceed 25 GPM on the primary auxiliary circuit, so performance will not match a skid steer.' },
      { q: 'X20 or X30?', a: 'The 39" X20 suits less aggressive clearing with better debris containment and needs a 6,500–15,000 lb machine. The 42"/48" X30 is built for fast, aggressive cutting with more open blade exposure, a thicker deck, a bolt-on front and stump grubbing - but needs a 9,000–26,000 lb excavator.' },
      { q: 'How do I replace the carbide teeth?', a: 'Remove six bolts on the bottom of the flywheel and take the flywheel off - note it weighs 145 lb or more. For one or two teeth it is faster to leave the flywheel in place and use a crowfoot wrench.' }
    ],
    docs: { brochure: SPEC + 'X30-Mini-Excavator-Rotary-Brush-Cutter.pdf', guide: '', parts: '' },
    warning: 'Hanger bracket not included. No hydraulic braking - the flywheel may spin for up to a minute after shutdown. ' + CAB
  }
];

virnigProducts.forEach((p) => { p.faqs = (p.faqs || []).concat(SHARED_FAQS); });

export default virnigProducts;
