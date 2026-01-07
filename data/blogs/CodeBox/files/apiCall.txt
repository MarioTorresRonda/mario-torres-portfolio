import { NextResponse } from "next/server";
const fs = require('fs');
const path = require('path');
const { platform } = require('node:process');

export async function POST(request) {
  
  const res = await request.json()

  const filePath = path.resolve(process.cwd(), res.route );

  const relative = path.relative(process.cwd()+"/data", filePath);
  if ( !relative || relative.startsWith('..') || path.isAbsolute(relative) ) {
    return NextResponse.json({ message: "This source is outside project realms" }, { status: 403 });
  } 

  const fileContent = fs.readFileSync(filePath, 'utf8');

  res.plainText = fileContent;
  var isWin = platform === "win32";
  if ( isWin ) {
    res.plainText = res.plainText.replaceAll("\r\n", "\n");
  }


  return NextResponse.json({ message : res }, { status: 200 });
}