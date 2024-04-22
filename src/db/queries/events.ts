'use server'

// TYPES IMPORTS
import type { Event } from '@prisma/client'

// DB IMPORTS
import { db } from '@/db'

const dynamic = 'force-dynamic'

export async function fetchEvents(startTime: String | null = null): Promise<Event[]> {
  let whereClause = {}

  if (startTime !== null) {
    whereClause = {
      startTime: {
        // Filtering events where the startTime is greater than or equal to the specified start date
        gte: startTime
      }
    }
  }

  return await db.event.findMany({
    where: whereClause,
    orderBy: [
      {
        startTime: 'asc'
      }
    ]
  })
}

export async function deleteEvent(id: number): Promise<void> {
  await db.event.delete({
    where: {
      id
    }
  })
}
