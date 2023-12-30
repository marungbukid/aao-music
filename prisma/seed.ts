import prisma from 'db';

async function main() {
  const taytay = await prisma.location.upsert({
    where: {
      id: 1,
      address: '18th Genesis St. Brgy. San Juan, Taytay, Rizal 1920',
      lat: 14.578714192393432,
      long: 121.14154446609302,
    },
    update: {},
    create: {
      address: '18th Genesis St. Brgy. San Juan, Taytay, Rizal 1920',
      lat: 14.578714192393432,
      long: 121.14154446609302,
    },
  });

  const binangonan = await prisma.location.upsert({
    where: {
      id: 2,
      address: 'Sitio Mata, Brgy. Palangoy, Binangonan, Rizal',
      lat: 14.540971933202233,
      long: 121.19568835581764,
    },
    update: {},
    create: {
      address: 'Sitio Mata, Brgy. Palangoy, Binangonan, Rizal',
      lat: 14.540971933202233,
      long: 121.14154446609302,
    },
  });

  const bulacan = await prisma.location.upsert({
    where: {
      id: 3,
      address: 'Sitio 2 Bahay Pare, Manggahan St. City of Meycauayan Bulacan',
      lat: 14.768652113448997,
      long: 121.01080972883642,
    },
    update: {},
    create: {
      address: 'Sitio 2 Bahay Pare, Manggahan St. City of Meycauayan Bulacan',
      lat: 14.768652113448997,
      long: 121.01080972883642,
    },
  });

  const sharie = await prisma.songLead.upsert({
    where: {
      id: 1,
      firstName: 'Sharie',
      lastName: 'Omlang',
    },
    update: {},
    create: {
      firstName: 'Sharie',
      lastName: 'Omlang',
    },
  });

  console.log({ taytay, binangonan, bulacan });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
