import { Group, User } from "@/generated/prisma/client";
import { Priority, Status } from "@/generated/prisma/enums";
import prisma from "@/lib/prisma";
import { faker } from "@faker-js/faker";

async function main() {
  console.log("Starte Seeding...");

  // 1. Benutzer erstellen (15 Stück)
  const users: User[] = [];
  for (let i = 0; i < 15; i++) {
    const user = await prisma.user.create({
      data: {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        emailVerified: faker.datatype.boolean(),
        image: faker.image.avatar(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
      },
    });
    users.push(user);
    console.log(`Benutzer erstellt: ${user.name}`);
  }

  // 2. Gruppen erstellen (5 Stück)
  const groups: Group[] = [];
  for (let i = 0; i < 5; i++) {
    const group = await prisma.group.create({
      data: {
        title: faker.company.buzzPhrase(),
        description: faker.lorem.sentence(),
        // Optional: Weise Benutzern Gruppen zu
        users: {
          connect: [
            {
              id: users[faker.number.int({ min: 0, max: users.length - 1 })].id,
            },
            {
              id: users[faker.number.int({ min: 0, max: users.length - 1 })].id,
            },
          ],
        },
      },
    });
    groups.push(group);
    console.log(`Gruppe erstellt: ${group.title}`);
  }

  // 3. Aufgaben erstellen (50 Stück)
  for (let i = 0; i < 50; i++) {
    const randomGroup =
      groups[faker.number.int({ min: 0, max: groups.length - 1 })];
    const randomUser =
      users[faker.number.int({ min: 0, max: users.length - 1 })];

    await prisma.task.create({
      data: {
        title: faker.lorem.words({ min: 2, max: 5 }),
        description: faker.lorem.sentence(),
        createdAt: faker.date.past(),
        updatedAt: faker.date.recent(),
        status: faker.helpers.arrayElement(Object.values(Status)),
        priority: faker.helpers.arrayElement(Object.values(Priority)),
        dueDate: faker.datatype.boolean() ? faker.date.future() : null, // Zufällig mit oder ohne Fälligkeitsdatum
        groupId: randomGroup.id,
        userId: randomUser.id, // Weise zufällig einen Benutzer als Zuweisung zu
      },
    });
    console.log(`Aufgabe ${i + 1} erstellt.`);
  }

  console.log("Seeding abgeschlossen.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
