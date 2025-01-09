import { NextResponse } from "next/server";
const fs = require('fs');
const path = require('path');

export async function POST(request) {
  
  const res = await request.json()

  const filePath = path.resolve(process.cwd(), res.route );
  const fileContent = fs.readFileSync(filePath, 'utf8');

  res.plainText = fileContent;

  return NextResponse.json({ message : res }, { status: 200 });
}