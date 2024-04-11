// PRISMA IMPORTS
import type { Event } from '@prisma/client'

// DB IMPORTS
import { db } from '@/db'

export async function fetchEvents(): Promise<Event[]> {  // Function to fetch all posts from the database.
  return await db.event.findMany({
    orderBy: [
      {
        startTime: 'asc',
      }
    ],
  })
}
