export type PortfolioItem = {
  category: "Portraits" | "Weddings" | "Events" | "Fashion" | "Commercial"
  src: string
  alt: string
}

const make = (category: PortfolioItem["category"], paths: string[], altBase: string): PortfolioItem[] =>
  paths.map((p) => ({ category, src: p, alt: `${altBase}` }))

// Portraits
const portraits = make(
  "Portraits",
  [
    "/protrait/0U6A7418fgdfgfd.jpg",
    "/protrait/BU9A4756.JPG",
    "/protrait/BU9A4757.JPG",
    "/protrait/UHB.jpg",
    "/protrait/IMG_20250220_162233_839.jpg",
    "/protrait/photo_1_2025-08-21_10-20-55.jpg",
    "/protrait/photo_2_2025-08-21_10-20-55.jpg",
    "/protrait/photo_3_2025-08-21_10-20-55.jpg",
    "/protrait/photo_4_2025-08-21_10-20-55.jpg",
  ],
  "Portrait Photography"
)

// Weddings
const weddings = make(
  "Weddings",
  [
    "/wedding/wedding.JPG",
    "/wedding/wedding1.JPG",
    "/wedding/wedding2.JPG",
    "/wedding/wedding4.JPG",
    "/wedding/wedding5.JPG",
    "/wedding/wedding56.JPG",
    "/wedding/wedding45.JPG",
    "/wedding/weddingtr.JPG",
    "/wedding/wedding8.jpg",
    "/wedding/wedding6.jpg",
    "/wedding/wedding5.jpg",
    "/wedding/wedding4.jpg",
    "/wedding/wedding3.jpg",
    "/wedding/wedding1.jpg",
    "/wedding/wedding.PNG",
    "/wedding/weedingmain.jpg",
    "/wedding/wedding.jpg",
  ],
  "Wedding Photography"
)

// Events
const events = make(
  "Events",
  [
    "/event/event.jpg",
    "/event/event1.jpg",
    "/event/event3.jpg",
    "/event/event4.jpg",
    "/event/event6.jpg",
    "/event/event7.jpg",
    "/event/IMG_20250212_161625_737.jpg",
    "/event/IMG_20250212_161625_395.jpg",
    "/event/abiy siltie photo.jpg",
    "/event/aaaa.jpg",
    "/event/490916692_984803117159044_7735416697583791229_n.jpg",
    "/event/490646043_984803270492362_7559961908851710210_n.jpg",
    "/event/490713938_984843753821647_1254069242595345545_n.jpg",
    "/event/490654361_984760160496673_8080778826047704069_n.jpg",
    "/event/490746487_984585443847478_6954984805769542322_n.jpg",
    "/event/490494277_705077311855772_2271960928047846676_n.jpg",
    "/event/490539183_984805400492149_662045774505335763_n.jpg",
    "/event/490740807_984584857180870_3533880382050502293_n.jpg",
    "/event/490775108_984805493825473_2501439772022027960_n.jpg",
    "/event/490504829_705076695189167_4976643278998295376_n.jpg",
    "/event/490667923_984828143823208_2752258419116077242_n.jpg",
    "/event/490469873_984585360514153_3687808476263494443_n.jpg",
    "/event/490481915_984802360492453_8103776163838126517_n.jpg",
    "/event/zone tv program.mp4.00_14_31_19.Still001.png",
    "/event/zone tv program.mp4.01_11_09_17.Still002.png",
  ],
  "Event Coverage"
)

// Fashion
const fashion = make(
  "Fashion",
  [
    "/fashion/fashion.JPG",
    "/fashion/fashion1.JPG",
    "/fashion/fashion2.JPG",
    "/fashion/fashion4.JPG",
    "/fashion/fashion5.JPG",
    "/fashion/fashion6.JPG",
    "/fashion/fashion8.jpg",
    "/fashion/BU9A0116.JPG",
    "/fashion/BU9A0123 (2).jpg",
    "/fashion/BU9A0132.JPG",
    "/fashion/BU9A0174 copy.jpg",
  ],
  "Fashion Photography"
)

// Commercial
const commercial = make(
  "Commercial",
  [
    "/commercial/commercial.jpg",
    "/commercial/commercial0.jpg",
    "/commercial/commercial1.jpg",
    "/commercial/commercial2.jpg",
    "/commercial/commercial3.jpg",
    "/commercial/commercial5.jpg",
    "/commercial/commercial6.jpg",
    "/commercial/commercial8.jpg",
    "/commercial/FB_IMG_1739521348379.jpg",
    "/commercial/FB_IMG_1745268592350.jpg",
    "/commercial/FB_IMG_1745268625201.jpg",
    "/commercial/FB_IMG_1745268631681.jpg",
    "/commercial/FB_IMG_1745268634278.jpg",
    "/commercial/FB_IMG_1745268642220.jpg",
  ],
  "Commercial Photography"
)

export const portfolioImages: PortfolioItem[] = [
  ...portraits,
  ...weddings,
  ...events,
  ...fashion,
  ...commercial,
]
