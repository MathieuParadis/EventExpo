// PRISMA IMPORTS
import type { Event } from '@prisma/client'

// DB IMPORTS
import { db } from '@/db'

export async function fetchEvents(startDate: Date | null = null): Promise<Event[]> {
  let whereClause = {}

  if (startDate !== null) {
    whereClause = {
      startTime: {
        // Filtering events where the startTime is greater than or equal to the specified start date
        gte: startDate,
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
