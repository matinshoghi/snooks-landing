import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Waitlist from '@/app/models/Waitlist';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    await connectDB();

    // Check if email already exists
    const existingEntry = await Waitlist.findOne({ email });
    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 400 }
      );
    }

    // Create new waitlist entry
    const waitlistEntry = await Waitlist.create({ email });

    return NextResponse.json(
      { message: 'Successfully joined waitlist', data: waitlistEntry },
      { status: 201 }
    );

  } catch (error) {
    console.error('Waitlist submission error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist' },
      { status: 500 }
    );
  }
} 