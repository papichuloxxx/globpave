import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('../assets/gallery/**/*.jpg', { eager: true });

function img(path: string): ImageMetadata {
  const mod = images[`../assets/gallery/${path}.jpg`];
  if (!mod) throw new Error(`Gallery image not found: ${path}`);
  return mod.default;
}

export type GalleryCategory = 'driveways' | 'walkways' | 'commercial' | 'site-works' | 'pavers';

export const categories: { id: GalleryCategory; label: string; text: string }[] = [
  { id: 'driveways', label: 'Driveways & Estate Roads', text: 'Residential driveways, frontages and estate roads laid on a compacted base.' },
  { id: 'walkways', label: 'Walkways, Patios & Courtyards', text: 'Side paths, patios, courtyards and entertainment areas around the home.' },
  { id: 'commercial', label: 'Commercial & Industrial Yards', text: 'Heavy-duty paving for warehouse yards and industrial sites.' },
  { id: 'site-works', label: 'Earthworks & Site Preparation', text: 'Clearing, setting out, grading, compaction and geotextile before paving or building.' },
  { id: 'pavers', label: 'Paver Shapes & Colours', text: 'A selection of the paver shapes and colour mixes we lay.' },
];

export type GalleryItem = {
  image: ImageMetadata;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** Service page slug this photo illustrates */
  service: string;
  featured?: boolean;
};

const PAVING = 'paving-external-works';
const CIVIL = 'civil-infrastructure';
const BUILDING = 'building-construction';

export const gallery: GalleryItem[] = [
  // Driveways & estate roads
  { image: img('driveways/driveway-red-charcoal-herringbone'), alt: 'Red and charcoal herringbone paver driveway at a double-storey home', caption: 'Red & charcoal herringbone driveway', category: 'driveways', service: PAVING, featured: true },
  { image: img('driveways/driveway-terracotta-pavers-new-home'), alt: 'Finished terracotta paver driveway at a new home, Globpave team vehicle parked on it', caption: 'Terracotta driveway, new home', category: 'driveways', service: PAVING, featured: true },
  { image: img('driveways/estate-road-charcoal-pavers-terracotta-bands'), alt: 'Paved estate road in charcoal pavers with terracotta border bands between houses', caption: 'Estate road with terracotta bands', category: 'driveways', service: PAVING, featured: true },
  { image: img('driveways/driveway-red-herringbone-curved-garden'), alt: 'Curved red herringbone paver driveway through a garden lawn', caption: 'Curved red herringbone driveway', category: 'driveways', service: PAVING },
  { image: img('driveways/driveway-multicolour-pavers-garage'), alt: 'Multicolour paver driveway leading to a garage, with brick pillars and a parked bakkie', caption: 'Multicolour driveway to garage', category: 'driveways', service: PAVING },
  { image: img('driveways/driveway-red-charcoal-chevron-brick-edging'), alt: 'Red and charcoal chevron pattern paver driveway with brick edging', caption: 'Chevron driveway with brick edging', category: 'driveways', service: PAVING },
  { image: img('driveways/driveway-grey-charcoal-pavers-garden-loop'), alt: 'Grey and charcoal paver driveway looping around a garden bed', caption: 'Driveway loop around garden', category: 'driveways', service: PAVING },
  { image: img('driveways/driveway-charcoal-grey-banded-pavers'), alt: 'Long driveway paved in alternating charcoal and grey bands beside a lawn', caption: 'Banded charcoal & grey driveway', category: 'driveways', service: PAVING },
  { image: img('driveways/driveway-charcoal-pavers-lawn-edges'), alt: 'Charcoal paver driveway running between lawns', caption: 'Charcoal driveway between lawns', category: 'driveways', service: PAVING },
  { image: img('driveways/frontage-terracotta-paving-boundary-wall'), alt: 'Terracotta paving along the frontage of a new home with a modern boundary wall and gate', caption: 'Frontage paving at boundary wall', category: 'driveways', service: PAVING },
  { image: img('driveways/driveway-grey-pavers-residence'), alt: 'Grey interlocking paver driveway in front of a residence', caption: 'Grey paver driveway', category: 'driveways', service: PAVING },
  { image: img('driveways/driveway-terracotta-pavers-in-progress'), alt: 'Terracotta paver driveway being completed beside a precast wall', caption: 'Driveway nearing completion', category: 'driveways', service: PAVING },

  // Walkways, patios & courtyards
  { image: img('walkways/courtyard-hexagon-pavers-grey-charcoal'), alt: 'Courtyard paved with grey and charcoal hexagon pavers', caption: 'Hexagon paver courtyard', category: 'walkways', service: PAVING, featured: true },
  { image: img('walkways/entertainment-area-3d-cube-pavers-in-progress'), alt: 'Entertainment area being paved in a 3D cube pattern under a shade port', caption: '3D cube pattern entertainment area', category: 'walkways', service: PAVING, featured: true },
  { image: img('walkways/forecourt-yellow-charcoal-pavers-lodge'), alt: 'Forecourt paved in yellow and charcoal pavers in front of a thatched lodge', caption: 'Lodge forecourt', category: 'walkways', service: PAVING },
  { image: img('walkways/entrance-yellow-charcoal-pavers-lawn'), alt: 'Yellow and charcoal pavers at a home entrance beside artificial lawn and glass balustrade', caption: 'Entrance paving with lawn inlay', category: 'walkways', service: PAVING },
  { image: img('walkways/courtyard-hexagon-pavers-pastel-mix'), alt: 'Courtyard paved in a mix of pastel hexagon pavers', caption: 'Pastel hexagon courtyard', category: 'walkways', service: PAVING },
  { image: img('walkways/courtyard-red-orange-charcoal-pavers'), alt: 'Red, orange and charcoal pavers laid in a courtyard', caption: 'Red, orange & charcoal courtyard', category: 'walkways', service: PAVING },
  { image: img('walkways/walkway-red-charcoal-pavers-garden-edge'), alt: 'Red and charcoal paver walkway with a kerbed garden edge and palms', caption: 'Walkway with garden edge', category: 'walkways', service: PAVING },
  { image: img('walkways/curved-walkway-grey-pavers-brick-kerb'), alt: 'Curved grey paver walkway with a red brick kerb', caption: 'Curved walkway with brick kerb', category: 'walkways', service: PAVING },
  { image: img('walkways/patio-pavers-feature-wall'), alt: 'Paved patio in front of a white feature wall with green panels', caption: 'Patio with feature wall', category: 'walkways', service: PAVING },
  { image: img('walkways/walkway-red-charcoal-pavers-kerb-edging'), alt: 'Red and charcoal paver walkway with charcoal kerb edging around a house', caption: 'Walkway with kerb edging', category: 'walkways', service: PAVING },
  { image: img('walkways/courtyard-grey-pavers-walled-yard'), alt: 'Walled yard paved in grey interlocking pavers', caption: 'Walled yard paving', category: 'walkways', service: PAVING },
  { image: img('walkways/side-path-grey-pavers-house'), alt: 'Grey paver side path between a house and boundary wall', caption: 'Side path', category: 'walkways', service: PAVING },
  { image: img('walkways/side-path-pavers-drainage-channel'), alt: 'Paved side path beside an open stormwater drainage channel', caption: 'Side path with drainage channel', category: 'walkways', service: PAVING },
  { image: img('walkways/walkway-pavers-drainage-channel-lawn'), alt: 'Paved walkway alongside a drainage channel and lawn with garden lights', caption: 'Walkway, channel & lawn', category: 'walkways', service: PAVING },
  { image: img('walkways/side-path-pavers-drainage-channel-finishing'), alt: 'Team finishing paving beside a drainage channel, wheelbarrows on site', caption: 'Finishing along drainage channel', category: 'walkways', service: PAVING },
  { image: img('walkways/kerbside-paving-roadside-gate'), alt: 'Kerbside paving outside a property gate with painted kerbs and road markings', caption: 'Kerbside paving outside a gate', category: 'walkways', service: PAVING },
  { image: img('walkways/walkway-laying-pavers-with-border'), alt: 'Paving team laying a patterned walkway with a terracotta border', caption: 'Laying a bordered walkway', category: 'walkways', service: PAVING },
  { image: img('walkways/side-path-red-charcoal-pavers-in-progress'), alt: 'Red and charcoal paver side path being laid next to a house', caption: 'Side path in progress', category: 'walkways', service: PAVING },
  { image: img('walkways/walkway-charcoal-grey-pavers-laying'), alt: 'Charcoal and grey pavers being laid by the paving team', caption: 'Laying charcoal & grey pavers', category: 'walkways', service: PAVING },
  { image: img('walkways/walkway-grey-pavers-laying-in-progress'), alt: 'Grey paver walkway with a charcoal border being laid, pavers stacked on site', caption: 'Walkway in progress', category: 'walkways', service: PAVING },
  { image: img('walkways/courtyard-curved-paver-edging-in-progress'), alt: 'Curved charcoal paver edging being set out in a courtyard', caption: 'Setting curved edging', category: 'walkways', service: PAVING },
  { image: img('walkways/service-yard-grey-pavers-in-progress'), alt: 'Service yard being paved in grey pavers beside a sliding gate', caption: 'Service yard in progress', category: 'walkways', service: PAVING },
  { image: img('walkways/walkway-paver-border-setting-out'), alt: 'Paver border being set out on a levelled sand bed', caption: 'Setting out a paver border', category: 'walkways', service: PAVING },

  // Commercial & industrial yards
  { image: img('commercial/warehouse-yard-3d-pattern-pavers'), alt: 'Large warehouse yard paved in a 3D pattern of grey, white and charcoal pavers', caption: 'Warehouse yard, 3D pattern', category: 'commercial', service: PAVING, featured: true },
  { image: img('commercial/warehouse-yard-laying-pavers-team'), alt: 'Globpave team in hi-vis laying pavers in a warehouse yard', caption: 'Laying the warehouse yard', category: 'commercial', service: PAVING },
  { image: img('commercial/industrial-yard-paving-finished'), alt: 'Finished paved industrial yard in front of warehouses', caption: 'Finished industrial yard', category: 'commercial', service: PAVING },

  // Earthworks & site preparation
  { image: img('site-works/warehouse-yard-surveyor-setting-out'), alt: 'Surveyor with a total station setting out levels on an industrial site', caption: 'Setting out with a total station', category: 'site-works', service: CIVIL, featured: true },
  { image: img('site-works/warehouse-yard-earthworks-water-bowser'), alt: 'Water bowser and grader working the layer works of a warehouse yard', caption: 'Layer works & watering', category: 'site-works', service: CIVIL },
  { image: img('site-works/warehouse-yard-grading-compaction'), alt: 'Graded and compacted base across a warehouse yard with plant working', caption: 'Grading & compaction', category: 'site-works', service: CIVIL },
  { image: img('site-works/warehouse-yard-site-clearing-plant'), alt: 'Grader arriving on a lowbed truck at a cleared industrial site', caption: 'Plant arriving on site', category: 'site-works', service: CIVIL },
  { image: img('site-works/warehouse-yard-excavation-front-end-loader'), alt: 'Front-end loader excavating alongside a warehouse wall', caption: 'Excavation with front-end loader', category: 'site-works', service: CIVIL },
  { image: img('site-works/warehouse-yard-geotextile-membrane'), alt: 'Geotextile membrane laid over the prepared base of a warehouse yard', caption: 'Geotextile membrane', category: 'site-works', service: CIVIL },
  { image: img('site-works/warehouse-yard-geotextile-layer'), alt: 'Wide view of geotextile layer covering an industrial yard before paving', caption: 'Geotextile across the yard', category: 'site-works', service: CIVIL },
  { image: img('site-works/warehouse-yard-geotextile-base-prep'), alt: 'Geotextile and base preparation along a brick warehouse', caption: 'Base preparation along warehouse', category: 'site-works', service: CIVIL },
  { image: img('site-works/house-construction-setting-out-survey'), alt: 'Surveyor setting out on a residential construction site with new houses behind', caption: 'Setting out on a housing site', category: 'site-works', service: BUILDING },

  // Paver shapes & colours
  { image: img('pavers/paver-samples-y-shape-colours'), alt: 'Y-shaped paver samples in yellow, red, grey and charcoal colour mixes', caption: 'Y-shape colour options', category: 'pavers', service: PAVING, featured: true },
  { image: img('pavers/paver-sample-3d-y-yellow-grey'), alt: 'Close-up of 3D Y-pattern pavers in yellow, white and grey', caption: '3D Y-pattern', category: 'pavers', service: PAVING },
  { image: img('pavers/paver-sample-clover-charcoal-yellow'), alt: 'Clover-shaped pavers in charcoal and yellow', caption: 'Clover pavers', category: 'pavers', service: PAVING },
  { image: img('pavers/paver-sample-trihex-grey'), alt: 'Tri-lobed pavers in shades of grey and white', caption: 'Tri-lobe pavers', category: 'pavers', service: PAVING },
  { image: img('pavers/paver-shapes-assorted'), alt: 'Assorted paver shapes and colours stacked together', caption: 'Assorted paver shapes', category: 'pavers', service: PAVING },
];

export type VideoStage = 'clearing' | 'earthworks' | 'paving' | 'residential';

export const videoStages: { id: VideoStage; label: string; text: string }[] = [
  { id: 'clearing', label: '1. Demolition & clearing', text: 'Breaking out old slabs and loading rubble to open up the site.' },
  { id: 'earthworks', label: '2. Setting out & earthworks', text: 'Surveying levels, then grading, watering and compacting the layer works.' },
  { id: 'paving', label: '3. Laying the pavers', text: 'Our paving team laying the yard on the prepared base.' },
  { id: 'residential', label: 'Residential work', text: 'A walk around a completed home paving job.' },
];

export type GalleryVideo = {
  src: string;
  poster: ImageMetadata;
  title: string;
  stage: VideoStage;
};

function video(slug: string, title: string, stage: VideoStage): GalleryVideo {
  return { src: `/videos/${slug}.mp4`, poster: img(`videos/${slug}`), title, stage };
}

export const videos: GalleryVideo[] = [
  video('demolition-rubble-clearing', 'Clearing broken concrete with a front-end loader', 'clearing'),
  video('demolition-rubble-loading', 'Loading demolition rubble', 'clearing'),
  video('rubble-loading-front-end-loader', 'Front-end loader at work', 'clearing'),
  video('warehouse-yard-site-clearing', 'Site clearing along the warehouse', 'clearing'),
  video('site-clearing-supervision', 'Supervising site clearing', 'clearing'),
  video('warehouse-yard-setting-out-survey', 'Setting out levels with a total station', 'earthworks'),
  video('grader-delivery-lowbed', 'Grader delivered to site', 'earthworks'),
  video('earthworks-grading-water-bowser', 'Grading and watering the base', 'earthworks'),
  video('earthworks-grading-compaction', 'Grading and compaction across the yard', 'earthworks'),
  video('warehouse-yard-prepared-base', 'The prepared base, ready for paving', 'paving'),
  video('warehouse-yard-laying-pavers', 'Laying pavers across the yard', 'paving'),
  video('laying-pavers-alongside-warehouse', 'Paving alongside the warehouse', 'paving'),
  video('laying-pavers-team', 'The paving team at work', 'paving'),
  video('residential-paving-walkthrough', 'Walkthrough of a finished home paving job', 'residential'),
];

/** Photos for a service page, featured shots first */
export const galleryForService = (slug: string) =>
  gallery.filter((g) => g.service === slug).sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
export const featuredGallery = gallery.filter((g) => g.featured);
