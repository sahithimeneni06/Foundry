import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Basic validation
    if (!data.name || !data.email) {
      return NextResponse.json(
        { success: false, error: 'Name and Email are required!' },
        { status: 400 }
      );
    }
    
    // Define path to submissions.json in the project root
    const filePath = path.join(process.cwd(), 'submissions.json');
    let submissions = [];
    
    // Read existing file if it exists
    if (fs.existsSync(filePath)) {
      try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        submissions = JSON.parse(fileContent || '[]');
      } catch (readError) {
        console.error('Error parsing submissions file, initializing fresh:', readError);
        submissions = [];
      }
    }
    
    // Construct new submission object
    const newSubmission = {
      id: Math.random().toString(36).substring(2, 9),
      name: data.name,
      phone: data.phone || '',
      email: data.email,
      projectType: data.projectType || 'Other',
      budget: data.budget || 'Broke',
      mood: data.mood || 'Chill',
      message: data.message || '',
      timestamp: new Date().toISOString()
    };
    
    submissions.push(newSubmission);
    
    // Write updated array back to file
    fs.writeFileSync(filePath, JSON.stringify(submissions, null, 2), 'utf8');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Client details saved successfully!',
      submission: newSubmission
    });
  } catch (error) {
    console.error('Error saving client details:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error occurred while saving details.' },
      { status: 500 }
    );
  }
}
