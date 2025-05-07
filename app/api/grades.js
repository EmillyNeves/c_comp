import { storage } from './storage.js';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method === 'GET') {
      const courses = await storage.getCourses();
      const assessments = await storage.getAssessments();
      
      // Add assessments to each course
      const coursesWithAssessments = courses.map(course => {
        const courseAssessments = assessments.filter(a => a.courseId === course.id);
        return {
          ...course,
          assessments: courseAssessments
        };
      });
      
      return res.status(200).json({ courses: coursesWithAssessments });
    } else {
      return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("Error fetching grades:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}