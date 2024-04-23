const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Event 1
  await prisma.event.create({
    data: {
      title: "Tech Expo 2024",
      description: 'Join us for the latest in technology innovation at the Tech Expo 2024. Explore cutting-edge gadgets, attend insightful talks, and network with industry leaders.',
      location: 'Convention Center, San Francisco',
      startTime: '2024-04-25T10:00:00',
      image: null
    }
  })

  // Event 2
  await prisma.event.create({
    data: {
      title: "Artisanal Food Festival",
      description: 'Savor the flavors of local artisans at the Artisanal Food Festival. Taste gourmet treats, enjoy live music, and discover unique culinary creations.',
      location: 'Town Square, Portland',
      startTime: '2024-05-08T11:30:00',
      image: null
    }
  })

  // Event 3
  await prisma.event.create({
    data: {
      title: "Music in the Park",
      description: 'Relax and unwind with live music at Music in the Park. Bring your picnic blanket, enjoy a variety of musical genres, and soak in the beautiful surroundings.',
      location: 'Central Park, New York City',
      startTime: '2024-06-12T18:00:00',
      image: null
    }
  })

  // Event 4
  await prisma.event.create({
    data: {
      title: "Fitness Bootcamp",
      description: 'Get ready to sweat at our Fitness Bootcamp! Join us for a high-intensity workout session led by certified trainers. All fitness levels welcome.',
      location: 'City Gym, Los Angeles',
      startTime: '2024-07-03T07:00:00',
      image: null
    }
  })

  // Event 5
  await prisma.event.create({
    data: {
      title: "Film Screening: Classic Cinema",
      description: 'Experience the magic of classic cinema at our Film Screening event. Sit back, relax, and enjoy timeless movies on the big screen.',
      location: 'Old Theater, Chicago',
      startTime: '2024-08-15T20:00:00',
      image: null
    }
  })

  // Event 6
  await prisma.event.create({
    data: {
      title: "Green Living Expo",
      description: 'Discover eco-friendly solutions at the Green Living Expo. Explore sustainable products, attend workshops, and learn how to live a greener lifestyle.',
      location: 'Exhibition Hall, Seattle',
      startTime: '2024-09-22T09:30:00',
      image: null
    }
  })

  // Event 7
  await prisma.event.create({
    data: {
      title: "Fashion Show: Fall Collection",
      description: 'Be inspired by the latest trends at our Fashion Show featuring the Fall Collection. Witness stunning runway looks and celebrate fashion creativity.',
      location: 'Fashion Center, Miami',
      startTime: '2024-10-10T19:00:00',
      image: null
    }
  })

  // Event 8
  await prisma.event.create({
    data: {
      title: "Startup Pitch Competition",
      description: 'Witness innovation in action at the Startup Pitch Competition. Cheer on aspiring entrepreneurs as they present their groundbreaking ideas to a panel of judges.',
      location: 'Innovation Hub, Austin',
      startTime: '2024-11-05T14:00:00',
      image: null
    }
  })

  // Event 9
  await prisma.event.create({
    data: {
      title: "Holiday Market",
      description: 'Experience the festive spirit at our Holiday Market. Shop for unique gifts, indulge in holiday treats, and enjoy live entertainment.',
      location: 'Market Square, Boston',
      startTime: '2024-12-01T11:00:00',
      image: null
    }
  })

  // Event 10
  await prisma.event.create({
    data: {
      title: "Culinary Masterclass",
      description: 'Elevate your cooking skills at our Culinary Masterclass. Learn from top chefs, explore culinary techniques, and create gourmet dishes.',
      location: 'Cooking School, San Diego',
      startTime: '2025-01-20T18:30:00',
      image: null
    }
  })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  