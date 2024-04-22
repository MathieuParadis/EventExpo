// TYPES IMPORTS
import type { Event } from '@prisma/client'

// DB IMPORTS
import { db } from '@/db'

export async function fetchEvents(startTime: String | null = null): Promise<Event[]> {
  let whereClause = {}

  if (startTime !== null) {
    whereClause = {
      startTime: {
        // Filtering events where the startTime is greater than or equal to the specified start date
        gte: startTime,
      },
    }
  }

  return await db.event.findMany({
    where: whereClause,
    orderBy: [
      {
        startTime: 'asc',
      }
    ],
  })
}
