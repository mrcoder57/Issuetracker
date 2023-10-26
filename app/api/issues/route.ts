import { NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import prisma from "@/prisma/client";

const schema=z.object({
    title:z.string().min(1).max(255),
    description:z.string().min(1)
})
export async function POST(request: NextRequest) {
    const body = await request.text();
    let json;
    try {
      json = JSON.parse(body);
    } catch (error) {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }
  
    const validation = schema.safeParse(json);
    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }
  
    const newIssue = await prisma.issue.create({
      data: { title: json.title, description: json.description },
    });
  
    return NextResponse.json(newIssue, { status: 201 });
  }
  