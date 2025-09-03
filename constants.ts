import { PageData } from './types';
import { galleryImages, artistImages } from './imageData';

export const pageData: PageData = {
  pageTitle: "Sabor On The Bay - Dia De Los Muertos Cruise",
  heroSection: {
    title: "Día De Los Muertos Cruise",
    subtitle: "America's Largest Latin Boat Cruise Party",
    date: "October 25, 2025 | Boarding at 8:00 PM, Sailing from 9:00 PM - 12:00 AM",
    location: "Inspiration Hornblower Yacht, San Diego, CA",
    videoURL: "https://www.youtube.com/embed/nu7CzQ7G0DA?autoplay=1&mute=1&loop=1&playlist=nu7CzQ7G0DA&controls=0&showinfo=0&autohide=1&modestbranding=1"
  },
  aboutSection: {
    title: "About the Event",
    description: [
      "Sabor on the Bay returns to America’s Finest City for its 3rd annual “Dia de los Muertos” boat party. There is no other event like this in the world! Experience the largest + spookiest yacht in California along with Ocean Rooftop dancing!"
    ],
    callToAction: "GUARANTEED TO SELL OUT– purchase your tickets today!",
    features: [
      "3 hour cruise w/ breathtaking views of San Diego Bay",
      "3 floors of music (Cumbia, Reggaeton + Bachata)",
      "1,200 guests",
      "Multimillion Dollar Luxury Yacht",
      "5 Fully Stocked Bars",
      "Massive Rooftop Sky Deck",
      "Laser Light Show (Reggaeton Floor)",
      "Photographers",
      "Halloween Costume Party w/ Dia de Los Muertos Decor"
    ],
    ticketUrl: "https://www.saboronthebay.com/sabor-on-the-bay-events/sd-dia-de-los-muertos-cruise/",
    googleCalendarLink: "https://www.google.com/calendar/render?action=TEMPLATE&text=Sabor+On+The+Bay+-+D%C3%ADa+De+Los+Muertos+Cruise&dates=20251026T030000Z/20251026T070000Z&details=America%27s+Largest+Latin+Boat+Cruise+Party.+Boarding+at+8%3A00+PM%2C+Sailing+from+9%3A00+PM+-+12%3A00+AM.&location=Inspiration+Hornblower+Yacht%2C+San+Diego%2C+CA"
  },
  gallerySection: {
    title: "Experience The Vibe",
    items: [
      {
        src: galleryImages.gallery1,
        alt: "Vibrant concert with colorful lights and a crowd"
      },
      {
        src: galleryImages.gallery2,
        alt: "Woman with intricate Dia de los Muertos face paint"
      },
      {
        src: galleryImages.gallery3,
        alt: "DJ mixing music at a lively party"
      },
      {
        src: galleryImages.gallery4,
        alt: "Group of friends dancing and enjoying the cruise"
      },
      {
        src: galleryImages.gallery5,
        alt: "Luxury yacht sailing on the water during a beautiful sunset"
      },
      {
        src: galleryImages.gallery6,
        alt: "Guests laughing and having a great time on the boat"
      },
      {
        src: galleryImages.gallery7,
        alt: "A lively party photo from the Sabor on the Bay event"
      }
    ]
  },
  soundsSection: {
    title: "The Sounds of the Night",
    description: "Get ready to move with the best Latin beats from across the region, with each floor offering a unique flavor.",
    liveBand: {
      name: "CUMBIA BRAVA",
      info: "Based in Los Angeles",
      imageUrl: artistImages.cumbiaBrava,
    },
    artists: [
      {
        floor: "Floor 1",
        genre: "Cumbia + Salsa",
        performers: [
          {
            name: "DJ FARLEY",
            info: "Catch him at TangoDelRey",
            imageUrl: artistImages.djFarley,
          }
        ]
      },
      {
        floor: "Floor 2",
        genre: "Reggaeton",
        performers: [
          {
            name: "DJ RAGS",
            info: "One of California's best",
            imageUrl: artistImages.djRags,
          }
        ]
      },
      {
        floor: "Rooftop",
        genre: "Bachata",
        performers: [
          {
            name: "DJ ARGENIS",
            info: "Dominican flavor",
            imageUrl: artistImages.djArgenis,
          }
        ]
      }
    ]
  },
  ctaSection: {
    title: "Don't Miss Out!",
    description: "This event is guaranteed to sell out! Secure your spot on the biggest Halloween cruise party of the year and become part of the celebration."
  },
  socialMedia: [
    {
      platform: "Instagram",
      url: "https://www.instagram.com/saboronthebay/"
    },
    {
      platform: "Website",
      url: "http://www.saboronthebay.com"
    }
  ]
};
