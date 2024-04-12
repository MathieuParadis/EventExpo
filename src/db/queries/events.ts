// PRISMA IMPORTS
import type { Event } from '@prisma/client'

// DB IMPORTS
import { db } from '@/db'

export async function fetchEvents(): Promise<Event[]> {  // Function to fetch all posts from the database.
  return await db.event.findMany({
    where: {
      startTime: {
        // Filter events where the startTime is greater than or equal to the current date
        // (i.e., today or in the future)
        gte: new Date(),
      },
    },
    orderBy: [
      {
        startTime: 'asc',
      }
    ],
  })
}
