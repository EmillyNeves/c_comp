import { db } from './db.js';
import * as schema from '../shared/schema.js';
import { eq, desc } from 'drizzle-orm';

class Storage {
  // User methods
  async getUser(id) {
    const users = await db.query.users.findMany({
      where: eq(schema.users.id, id),
      limit: 1,
    });
    return users.length > 0 ? users[0] : null;
  }
  
  async updateUserAvatar(id, avatarConfig) {
    const result = await db.update(schema.users)
      .set({ avatarConfig })
      .where(eq(schema.users.id, id))
      .returning();
    
    return result.length > 0 ? result[0] : null;
  }

  // Course methods
  async getCourses() {
    return await db.query.courses.findMany();
  }

  async getCourse(id) {
    const courses = await db.query.courses.findMany({
      where: eq(schema.courses.id, id),
      limit: 1,
    });
    return courses.length > 0 ? courses[0] : null;
  }

  // Task methods
  async getTasks() {
    return await db.query.tasks.findMany();
  }

  async getTask(id) {
    const tasks = await db.query.tasks.findMany({
      where: eq(schema.tasks.id, id),
      limit: 1,
    });
    return tasks.length > 0 ? tasks[0] : null;
  }

  // Schedule methods
  async getSchedule() {
    return await db.query.schedule.findMany();
  }

  // Assessment methods
  async getAssessments() {
    return await db.query.assessments.findMany();
  }

  async getAssessmentsByCourse(courseId) {
    return await db.query.assessments.findMany({
      where: eq(schema.assessments.courseId, courseId),
    });
  }

  // Attendance methods
  async getAttendance() {
    return await db.query.attendance.findMany({
      orderBy: (attendance) => [desc(attendance.date)],
    });
  }

  async getAttendanceByCourse(courseId) {
    return await db.query.attendance.findMany({
      where: eq(schema.attendance.courseId, courseId),
      orderBy: (attendance) => [desc(attendance.date)],
    });
  }

  // Notification methods
  async getNotifications() {
    return await db.select().from(schema.notifications);
  }

  // Achievement methods
  async getAchievements() {
    return await db.query.achievements.findMany();
  }
}

// Export the storage instance
export const storage = new Storage();