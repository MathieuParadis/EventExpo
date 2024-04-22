'use server'

// LODASH IMPORTS
import { omit } from 'lodash'

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

export async function addEvent(eventData: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>): Promise<Event> {
  return await db.event.create({
    data: omit(eventData, 'id')
  })
}

export async function editEvent(eventData: Omit<Event, 'createdAt' | 'updatedAt'>): Promise<Event> {
  return await db.event.update({
    where: { id: eventData.id },
    data: eventData
  })
}

export async function deleteEvent(id: number): Promise<void> {
  await db.event.delete({
    where: {
      id
    }
  })
}
