const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Event 1
  await prisma.event.create({
    data: {
      title: 'Space Odyssey Exhibition',
      description: 'Embark on a journey through the cosmos at the Space Odyssey Exhibition. Explore fascinating exhibits, learn about the wonders of space exploration, and experience the thrill of discovery.',
      location: 'Galactic Museum, Houston',
      startTime: '2024-04-30T10:00:00',
      image: 'https://anglais-pedagogie.web.ac-grenoble.fr/sites/anglais-pedagogie.web.ac-grenoble.fr/files/space_conquest_astronaut-g5460bef68_1920.jpg'
    }
  })

  // Event 2
  await prisma.event.create({
    data: {
      title: 'Artisanal Food Festival',
      description: 'Savor the flavors of local artisans at the Artisanal Food Festival. Taste gourmet treats, enjoy live music, and discover unique culinary creations.',
      location: 'Town Square, Portland',
      startTime: '2024-05-08T11:30:00',
      image: 'https://images.pexels.com/photos/2345976/pexels-photo-2345976.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  })

  // Event 3
  await prisma.event.create({
    data: {
      title: 'Music in the Park',
      description: 'Relax and unwind with live music at Music in the Park. Bring your picnic blanket, enjoy a variety of musical genres, and soak in the beautiful surroundings.',
      location: 'Central Park, New York City',
      startTime: '2024-06-12T18:00:00',
      image: 'https://images.pexels.com/photos/1537637/pexels-photo-1537637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  })

  // Event 4
  await prisma.event.create({
    data: {
      title: 'Fitness Bootcamp',
      description: 'Get ready to sweat at our Fitness Bootcamp! Join us for a high-intensity workout session led by certified trainers. All fitness levels welcome.',
      location: 'City Gym, Los Angeles',
      startTime: '2024-07-03T07:00:00',
      image: 'https://images.pexels.com/photos/1472887/pexels-photo-1472887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  })

  // Event 5
  await prisma.event.create({
    data: {
      title: 'Film Screening: Classic Cinema',
      description: 'Experience the magic of classic cinema at our Film Screening event. Sit back, relax, and enjoy timeless movies on the big screen.',
      location: 'Old Theater, Chicago',
      startTime: '2024-08-15T20:00:00',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  })

  // Event 6
  await prisma.event.create({
    data: {
      title: 'Retro Gaming Tournament',
      description: 'Join us for the ultimate gaming showdown at the Retro Gaming Tournament. Compete in your favorite games, challenge fellow gamers, and win amazing prizes!',
      location: 'Gamer\'s Arena, Los Angeles',
      startTime: '2024-09-22T12:00:00',
      image: 'https://cdn.pixabay.com/photo/2019/07/06/20/28/amiga-4321211_1280.jpg'
    }
  })

  // Event 7
  await prisma.event.create({
    data: {
      title: 'Fashion Show: Fall Collection',
      description: 'Be inspired by the latest trends at our Fashion Show featuring the Fall Collection. Witness stunning runway looks and celebrate fashion creativity.',
      location: 'Fashion Center, Miami',
      startTime: '2024-10-10T19:00:00',
      image: 'https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_1280.jpg'
    }
  })

  // Event 8
  await prisma.event.create({
    data: {
      title: 'Startup Pitch Competition',
      description: 'Witness innovation in action at the Startup Pitch Competition. Cheer on aspiring entrepreneurs as they present their groundbreaking ideas to a panel of judges.',
      location: 'Innovation Hub, Austin',
      startTime: '2024-11-05T14:00:00',
      image: 'https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_1280.jpg'
    }
  })

  // Event 9
  await prisma.event.create({
    data: {
      title: 'Christmas Market',
      description: 'Experience the festive spirit at our Christmas Market. Shop for unique gifts, indulge in holiday treats, and enjoy live entertainment.',
      location: 'Market Square, Boston',
      startTime: '2024-12-01T11:00:00',
      image: 'https://cdn.pixabay.com/photo/2021/12/06/08/55/christmas-market-6849578_1280.jpg'
    }
  })

  // Event 10
  await prisma.event.create({
    data: {
      title: 'Culinary Masterclass',
      description: 'Elevate your cooking skills at our Culinary Masterclass. Learn from top chefs, explore culinary techniques, and create gourmet dishes.',
      location: 'Cooking School, San Diego',
      startTime: '2025-01-20T18:30:00',
      image: 'https://cdn.pixabay.com/photo/2016/03/27/21/34/restaurant-1284351_1280.jpg'
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
