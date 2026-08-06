import sharp from 'sharp'

const dir = "public/PROJECT LOGO'S/"
const files = ['codera.jpeg','divyam.png','greensprouts.webp','IITB.png','webro-logo.png','xgrova.jpeg']

for (const file of files) {
  const img = sharp(dir + file)
  const meta = await img.metadata()
  const rgba = await img.ensureAlpha().raw().toBuffer()
  const w = meta.width, h = meta.height
  const px = (x,y) => { const i=(y*w+x)*4; return [rgba[i],rgba[i+1],rgba[i+2],rgba[i+3]] }
  const c0=px(0,0), c1=px(w-1,0), c2=px(0,h-1), c3=px(w-1,h-1)
  const hasAlpha = meta.hasAlpha || meta.channels===4
  const dist = (a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1],a[2]-b[2])
  const bg = c0
  let minX=w,minY=h,maxX=-1,maxY=-1, nonBg=0, transparent=0
  const stepX=Math.max(1,w>>8), stepY=Math.max(1,h>>8)
  for (let y=0;y<h;y+=stepY) for (let x=0;x<w;x+=stepX) {
    const p=px(x,y)
    if (hasAlpha && p[3]<20) { transparent++; continue }
    if (!hasAlpha && dist(p,bg)>40) { nonBg++; if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y }
    else if (hasAlpha && p[3]>=20) { if(x<minX)minX=x;if(y<minY)minY=y;if(x>maxX)maxX=x;if(y>maxY)maxY=y }
  }
  const cw=maxX-minX+1, ch=maxY-minY+1
  console.log(file, {format:meta.format, w, h, hasAlpha, channels:meta.channels,
    corners:[c0,c1,c2,c3].map(c=>c.slice(0,3)),
    contentBox: hasAlpha||nonBg?{x:minX,y:minY,w:cw,h:ch}:null,
    contentAreaPct: hasAlpha||nonBg? Math.round(cw*ch/(w*h)*100):0,
    transparentSamplePct: hasAlpha? Math.round(transparent/((w/stepX)*(h/stepY))*100):0,
  })
}
