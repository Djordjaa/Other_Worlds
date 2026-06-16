'use strict';

/* ── DATA ───────────────────────────────────────────────────── */
const PLANETS = [
  {
    id: 0,
    name: 'KELT-9 b',
    type: 'Ultra-Hot Jupiter',
    color: '#F4A83A',
    tempK: 4600, radiusEarth: 21.2, massEarth: 915.8,
    tagline: 'Hotter than most stars. Its atmosphere is evaporating',
    data: [
      { label: 'TEMPERATURE',  value: "4<span class=\"ts\">'</span>600 K",       valueAlt: "+4<span class=\"ts\">'</span>327°C", human: 'Hotter than many stars where iron exists only as gas' },
      { label: 'RADIUS',       value: '21.2 R⊕',       human: 'Over twice the size of Jupiter and one of the largest known exoplanets' },
      { label: 'MASS',         value: '915.8 M⊕',        human: '' },
      { label: 'ORBITAL PERIOD', value: '1.5 days',   human: '' },
      { label: 'DISTANCE',     value: '667 ly',        human: 'Light from this system left before the Black Death' },
      { label: 'DISCOVERED',   value: '2017',          human: 'Discovered via the Transit method by the KELT survey' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/kelt-9-b/',
    atmosphere: 'glow',
  },
  {
    id: 1,
    name: 'WASP-76 b',
    type: 'Hot Jupiter',
    color: '#E05A2B',
    tempK: 2400, radiusEarth: 20.8, massEarth: 284,
    tagline: 'On the night side it rains molten iron',
    data: [
      { label: 'TEMPERATURE',  value: "2<span class=\"ts\">'</span>400 K",       valueAlt: "+2<span class=\"ts\">'</span>127°C", human: 'Iron vaporises on the day side and rains on the night side' },
      { label: 'RADIUS',       value: '20.8 R⊕',       human: '' },
      { label: 'MASS',         value: '284 M⊕',        human: 'Slightly lighter than our own gas giant' },
      { label: 'ORBITAL PERIOD', value: '1.8 days',   human: 'Tidally locked with one face always pointing toward its star' },
      { label: 'DISTANCE',     value: '634 ly',        human: '' },
      { label: 'DISCOVERED',   value: '2016',          human: 'Found using the Transit method by the WASP project' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/wasp-76-b/',
    atmosphere: 'iron-rain',
  },
  {
    id: 2,
    name: 'HD 189733 b',
    type: 'Hot Jupiter',
    color: '#4A7FD4',
    tempK: 1200, radiusEarth: 12.7, massEarth: 359,
    tagline: 'The most beautiful planet we know, but it will kill you in seconds with its glass rain',
    data: [
      { label: 'TEMPERATURE',  value: "1<span class=\"ts\">'</span>200 K",       valueAlt: '+927°C', human: 'Silicate glass rains sideways at extreme speeds' },
      { label: 'RADIUS',       value: '12.7 R⊕',       human: 'Slightly larger than Jupiter with a confirmed deep cobalt blue colour' },
      { label: 'MASS',         value: '359 M⊕',        human: '' },
      { label: 'ORBITAL PERIOD', value: '2.2 days',   human: '' },
      { label: 'DISTANCE',     value: '64.5 ly',       human: '' },
      { label: 'DISCOVERED',   value: '2005',          human: 'Detected using the Radial Velocity method' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/hd-189733-b/',
    atmosphere: 'glass-wind',
  },
  {
    id: 3,
    name: 'TrES-2 b',
    type: 'Hot Jupiter',
    color: '#661111',    
    colorDisplay: '#D93829',
    tempK: 1200, radiusEarth: 15.3, massEarth: 474,
    tagline: 'Darker than anything we can make on Earth',
    data: [
      { label: 'TEMPERATURE',  value: "1<span class=\"ts\">'</span>200 K",       valueAlt: '+927°C', human: 'An inexplicably dark and hot abyss' },
      { label: 'ALBEDO',       value: '< 0.01',        human: 'Reflects almost no light' },
      { label: 'RADIUS',       value: '15.3 R⊕',       human: '' },
      { label: 'MASS',         value: '474 M⊕',        human: '' },
      { label: 'ORBITAL PERIOD', value: '2.5 days',   human: 'Orbits incredibly close to its host star' },
      { label: 'DISTANCE',     value: '702 ly',        human: '' },
      { label: 'DISCOVERED',   value: '2006',          human: 'Found via the Transit method by the Trans Atlantic Survey' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/tres-2-b/',
    atmosphere: 'darkness',
  },
  {
    id: 4,
    name: 'WASP-12 b',
    type: 'Hot Jupiter',
    color: '#E8A020',
    tempK: 2590, radiusEarth: 22, massEarth: 467,
    tagline: 'Its star is eating it alive. Every hour it loses mass it will never get back',
    data: [
      { label: 'TEMPERATURE',  value: "2<span class=\"ts\">'</span>590 K",       valueAlt: "+2<span class=\"ts\">'</span>317°C", human: 'Tidally distorted into an egg shape by the gravity of its star' },
      { label: 'RADIUS',       value: '22 R⊕',       human: 'Inflated by extreme tidal heating' },
      { label: 'MASS',         value: '467 M⊕',        human: '' },
      { label: 'ORBITAL PERIOD', value: '1.1 days',   human: 'One year lasts just over a single Earth day' },
      { label: 'DISTANCE',     value: "1<span class=\"ts\">'</span>393 ly",      human: '' },
      { label: 'DISCOVERED',   value: '2008',          human: 'Found via the Transit method by the WASP consortium' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/wasp-12-b/',
    atmosphere: 'glow',
  },
  {
    id: 5,
    name: '55 Cancri e',
    type: 'Super-Earth',
    color: '#CC3A1A',
    tempK: 2700, radiusEarth: 1.88, massEarth: 8.0,
    tagline: 'A year here lasts 18 hours. The surface is molten lava',
    data: [
      { label: 'TEMPERATURE',  value: "2<span class=\"ts\">'</span>700 K",       valueAlt: "+2<span class=\"ts\">'</span>427°C", human: 'Surface rock is permanently molten creating a lava ocean' },
      { label: 'RADIUS',       value: '1.88 R⊕',       human: 'A rocky super-Earth denser and heavier than our planet' },
      { label: 'MASS',         value: '8.0 M⊕',        human: '' },
      { label: 'ORBITAL PERIOD', value: '0.7 days',    human: '' },
      { label: 'DISTANCE',     value: '41 ly',         human: 'One of the closest rocky exoplanets to our solar system' },
      { label: 'DISCOVERED',   value: '2004',          human: 'Detected using the Radial Velocity method' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/55-cancri-e/',
    atmosphere: 'glow',
  },
  {
    id: 6,
    name: 'TOI-3757 b',
    type: 'Gas Giant',
    color: '#7A9DB8',
    tempK: 759, radiusEarth: 12.0, massEarth: 85,
    tagline: 'Less dense than water, a planet that would float',
    data: [
      { label: 'TEMPERATURE',  value: '759 K',         valueAlt: '+486°C', human: '' },
      { label: 'DENSITY',      value: '0.27 g/cm³',    human: '' },
      { label: 'RADIUS',       value: '12.0 R⊕',       human: '' },
      { label: 'MASS',         value: '85 M⊕',         human: 'So lightweight that it has the density of a marshmallow' },
      { label: 'ORBITAL PERIOD', value: '3.4 days',   human: '' },
      { label: 'DISTANCE',     value: '591 ly',        human: '' },
      { label: 'DISCOVERED',   value: '2022',          human: 'Found using the Transit method by the TESS mission' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/toi-3757-b/',
    atmosphere: 'glow',
  },
  {
    id: 7,
    name: 'Kepler-16 b',
    type: 'Gas Giant',
    color: '#9B72C8',
    tempK: 188, radiusEarth: 8.4, massEarth: 105,
    tagline: 'It orbits two stars. Every sunset here is double',
    data: [
      { label: 'TEMPERATURE',  value: '188 K',         valueAlt: '−85°C', human: '' },
      { label: 'STARS',        value: '2',             human: 'A real Tatooine and the first confirmed circumbinary planet' },
      { label: 'RADIUS',       value: '8.4 R⊕',        human: 'Slightly smaller than Saturn' },
      { label: 'MASS',         value: '105 M⊕',        human: '' },
      { label: 'ORBITAL PERIOD', value: '229 days',    human: '' },
      { label: 'DISTANCE',     value: '245 ly',        human: '' },
      { label: 'DISCOVERED',   value: '2011',          human: 'Spotted using the Transit method by the Kepler telescope' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/kepler-16b/',
    atmosphere: 'double-sun',
  },
  {
    id: 8,
    name: 'TRAPPIST-1 e',
    type: 'Terrestrial',
    color: '#5BBFA0',
    tempK: 251, radiusEarth: 0.92, massEarth: 0.69,
    tagline: 'Rocky exoplanet with the right temperature and in the habitable zone. The strongest candidate for liquid water',
    data: [
      { label: 'TEMPERATURE',  value: '251 K',         valueAlt: '−22°C', human: 'Close to the average temperature of Earth and could support liquid water' },
      { label: 'RADIUS',       value: '0.92 R⊕',       human: 'Slightly smaller than Earth and likely rocky' },
      { label: 'MASS',         value: '0.69 M⊕',       human: '' },
      { label: 'ORBITAL PERIOD', value: '6.1 days',    human: '' },
      { label: 'DISTANCE',     value: '41 ly',         human: '' },
      { label: 'DISCOVERED',   value: '2017',          human: 'Discovered via Transit method, TRAPPIST telescope' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/trappist-1-e/',
    atmosphere: 'glow',
  },
  {
    id: 9,
    name: 'Kepler-186 f',
    type: 'Terrestrial',
    color: '#8AAB6A',
    tempK: 188, radiusEarth: 1.17, massEarth: 1.7,
    tagline: 'Earth-sized and in the habitable zone. We just do not know enough yet',
    data: [
      { label: 'TEMPERATURE',  value: '188 K',         valueAlt: '−85°C', human: 'Sits on the cooler outer edge of the habitable zone' },
      { label: 'RADIUS',       value: '1.17 R⊕',       human: '' },
      { label: 'MASS',         value: '1.7 M⊕',        human: 'Mathematical estimate, it cannot be directly weighed yet' },
      { label: 'ORBITAL PERIOD', value: '129.9 days',    human: '' },
      { label: 'DISTANCE',     value: '579 ly',        human: '' },
      { label: 'DISCOVERED',   value: '2014',          human: 'The first Earth-sized planet found in a habitable zone via the Transit method' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/kepler-186-f/',
    atmosphere: 'glow',
  },
  {
    id: 10,
    name: 'Gliese 1214 b',
    type: 'Mini-Neptune',
    color: '#5B8FB9',
    tempK: 547, radiusEarth: 2.74, massEarth: 8.17,
    tagline: 'The ultimate water world. A boiling abyss crushed under a thick steamy atmosphere',
    data: [
      { label: 'TEMPERATURE',  value: '547 K',         valueAlt: '+274°C', human: 'Too hot for normal water but high pressure creates exotic hot ice' },
      { label: 'RADIUS',       value: '2.74 R⊕',       human: 'The most common type of planet in the galaxy yet absent from our Solar System' },
      { label: 'MASS',         value: '8.17 M⊕',       human: '' },
      { label: 'ORBITAL PERIOD', value: '1.58 days',   human: '' },
      { label: 'DISTANCE',     value: '48 ly',       human: '' },
      { label: 'DISCOVERED',   value: '2009',          human: 'Detected using the Transit method by the MEarth Project' },
    ],
    nasa: 'https://science.nasa.gov/exoplanet-catalog/gj-1214-b/',
    atmosphere: 'glow',
  },
];

/* ── HELPERS ────────────────────────────────────────────────── */
function kToCDisplay(k) {
  const c = Math.round(k - 273);
  const formatted = String(Math.abs(c)).replace(/\B(?=(\d{3})+(?!\d))/g, "'");
  return c >= 0 ? `+${formatted}°C` : `-${formatted}°C`;
}

/* ── STATE ──────────────────────────────────────────────────── */
const state = {
  introComplete: false,
  activePlanet: null,
  exploredCount: 0,
  mouseX: 0, mouseY: 0,
};

/* ── THREE.JS SETUP ─────────────────────────────────────────── */
const canvas   = document.getElementById('three-canvas');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x010108, 1);

const scene  = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.01, 1000);

camera.position.z = 5.0;

const camTarget   = { x: 0, y: 0, z: 5.0 };
const camCurrent  = { x: 0, y: 0, z: 5.0 };
const lookTarget  = new THREE.Vector3(0, 0, 0);
const lookCurrent = new THREE.Vector3(0, 0, 0);

/* ── PROCEDURAL PLANET TEXTURES ─────────────────────────────── */
const GLSL_NOISE = `
vec3 mod289v3(vec3 x){return x-floor(x*(1./289.))*289.;}
vec4 mod289v4(vec4 x){return x-floor(x*(1./289.))*289.;}
vec4 permute(vec4 x){return mod289v4(((x*34.)+1.)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1./6.,1./3.);const vec4 D=vec4(0.,.5,1.,2.);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.-g;
  vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289v3(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.,i1.z,i2.z,1.))+i.y+vec4(0.,i1.y,i2.y,1.))+i.x+vec4(0.,i1.x,i2.x,1.));
  float n_=.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.+1.;vec4 s1=floor(b1)*2.+1.;vec4 sh=-step(h,vec4(0.));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.);m=m*m;
  return 42.*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}
float fbm(vec3 p,int oct){float v=0.,a=.5,f=1.;for(int i=0;i<8;i++){if(i>=oct)break;v+=a*snoise(p*f);a*=.5;f*=2.;}return v;}
`;

const VERT = `
varying vec3 vN; varying vec3 vP; varying vec2 vUv;
void main(){vN=normalize(normalMatrix*normal);vP=position;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`;

const LIGHTING = `
float diffuse(vec3 n){return max(0.,dot(n,normalize(vec3(1.,.5,1.))));}
float limb(vec3 n){float r=1.-abs(dot(n,vec3(0.,0.,1.)));return 1.-r*r*.72;}
`;

function makeMat(frag, uniforms={}) {
  return new THREE.ShaderMaterial({
    uniforms: { uT:{value:0.}, uOp:{value:1.}, uEm:{value:0.05}, ...uniforms },
    vertexShader: VERT,
    fragmentShader: GLSL_NOISE + LIGHTING + frag,
    transparent: true,
  });
}

function createPlanetMaterial(planet) {
  const id = planet.id;

  if (id === 0) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*4.+uT*.04; float n=fbm(p,6)*.5+.5; float n2=fbm(p*2.1+1.3,4)*.5+.5;
      vec3 core=vec3(1.,.95,.7); vec3 mid=vec3(1.,.65,.1); vec3 edge=vec3(.9,.3,.05);
      vec3 col=mix(core,mid,n); col=mix(col,edge,n2*.5); col+=vec3(.3,.2,.0)*fbm(p*5.,3)*.4; 
      col*=(diffuse(vN)*.6+.5)*limb(vN); float rim=1.-abs(dot(vN,vec3(0.,0.,1.))); col+=vec3(.8,.5,.1)*pow(rim,2.)*1.2;
      gl_FragColor=vec4(col+vec3(.9,.6,.1)*uEm,uOp);
    }
  `);

if (id === 1) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*3.5+vec3(uT*.015,0.,0.);
      float n=fbm(p,5)*.5+.5;
      float n2=fbm(p*2.+.8,4)*.5+.5;
      float iron=smoothstep(.58,.82,fbm(p*5.+vec3(uT*.02,0.,0.),4)*.5+.5);
      float dayFace=smoothstep(-.2,.4,vP.x);
      vec3 day=mix(vec3(.75,.28,.04),vec3(1.,.58,.12),n);
      day+=vec3(.15,.08,.0)*n2*.4;
      vec3 night=mix(vec3(.18,.03,.01),vec3(.38,.08,.03),n);
      night=mix(night,vec3(.58,.48,.38),iron*.65);
      vec3 col=mix(night,day,dayFace);
      col*=(diffuse(vN)*.72+.38)*limb(vN);
      float rim=1.-abs(dot(vN,vec3(0.,0.,1.)));
      col+=mix(vec3(.4,.12,.02),vec3(.85,.42,.08),dayFace)*pow(rim,2.5)*.85;
      gl_FragColor=vec4(col+vec3(.65,.18,.04)*uEm,uOp);
    }
  `);
if (id === 2) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 pWind = vec3(vP.x * 2.0, vP.y * 6.0, vP.z * 2.0);
      float wind = fbm(pWind + vec3(uT * 0.04, 0.0, 0.0), 5) * 0.5 + 0.5;
      
      vec3 pStorm = vP * 4.0 + vec3(uT * 0.015, wind * 1.5, 0.0);
      float clouds = fbm(pStorm, 5) * 0.5 + 0.5;
      
      vec3 deepBlue = vec3(0.02, 0.1, 0.45);   
      vec3 azure    = vec3(0.15, 0.45, 0.9);   
      vec3 whiteGlass = vec3(0.9, 0.95, 1.0); 
      
      vec3 col = mix(deepBlue, azure, smoothstep(0.3, 0.7, wind));
      
      float cloudMask = smoothstep(0.55, 0.85, clouds * (wind + 0.5)); 
      col = mix(col, whiteGlass, cloudMask);
      
      col *= (diffuse(vN) * 0.6 + 0.4) * limb(vN);
      float rim = 1.0 - abs(dot(vN, vec3(0.0, 0.0, 1.0)));
      col += vec3(0.2, 0.5, 0.9) * pow(rim, 2.5) * 0.7; 
      
      gl_FragColor = vec4(col + vec3(0.0, 0.1, 0.3) * uEm, uOp);
    }
  `);

if (id === 3) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      float n=fbm(vP*3.+uT*.005,4)*.5+.5; 
      vec3 base=vec3(.015,.012,.02)*n; base+=vec3(.04,.03,.06)*fbm(vP*6.,3)*.3;
      float rim=1.-abs(dot(vN,vec3(0.,0.,1.))); 
      vec3 heatGlow=vec3(.55,.08,.02)*pow(rim,2.5)*1.8; 
      vec3 col=(base*(diffuse(vN)*.3+.15)*limb(vN)) + heatGlow;
      gl_FragColor=vec4(col+vec3(.2,.02,.0)*uEm,uOp);
    }
  `);

  if (id === 4) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*3.5+uT*.012; float n=fbm(p,5)*.5+.5; float bands=sin(vP.y*8.+fbm(p*1.5,3)*2.+uT*.03)*0.5+0.5;
      vec3 base=mix(vec3(.6,.2,.02),vec3(.95,.55,.05),n); base=mix(base,vec3(1.,.8,.2),bands*.5);
      float tidal=smoothstep(0.,.6,vP.x+fbm(vP*4.,3)*.4); base=mix(base,vec3(1.,.9,.4),tidal*.4);
      base*=(diffuse(vN)*.7+.4)*limb(vN); float rim=1.-abs(dot(vN,vec3(0.,0.,1.))); base+=vec3(.8,.45,.1)*pow(rim,2.5)*.8;
      gl_FragColor=vec4(base+vec3(.7,.35,.05)*uEm,uOp);
    }
  `);

if (id === 5) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*6.+vec3(uT*.025,0.,uT*.015);
      float lava=fbm(p,6)*.5+.5;
      float cracks=fbm(p*3.+uT*.01,5)*.5+.5;
      float hot=fbm(p*5.+uT*.02,4)*.5+.5;
      vec3 darkRock=vec3(.12,.02,.01);
      vec3 midLava=vec3(.45,.06,.02);
      vec3 brightLava=vec3(.85,.18,.02);
      vec3 glowLava=vec3(1.,.45,.05);
      vec3 col=mix(darkRock,midLava,lava);
      col=mix(col,brightLava,smoothstep(.55,.75,cracks));
      col=mix(col,glowLava,smoothstep(.72,.90,hot)*.7);
      col+=vec3(.3,.05,.0)*pow(smoothstep(.6,.9,hot),2.)*.5;
      col*=(diffuse(vN)*.5+.55)*limb(vN);
      float rim=1.-abs(dot(vN,vec3(0.,0.,1.)));
      col+=vec3(.8,.25,.05)*pow(rim,3.)*.6;
      gl_FragColor=vec4(col+vec3(.6,.12,.02)*uEm,uOp);
    }
  `);

if (id === 6) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*3.+vec3(uT*.015,0.,0.);
      float bands=sin(vP.y*12.+fbm(p*0.5,3)*3.0+uT*.02)*0.5+0.5;
      float turb=fbm(p*2.0,5)*0.5+0.5;
      float noise=fbm(vP*10.0+uT*.005,4)*0.5+0.5;
      vec2 stormCenter=vec2(.2,-.05);
      float stormDist=length(vec2(vP.x-stormCenter.x,(vP.y-stormCenter.y)*1.8));
      float storm=smoothstep(.2,.0,stormDist);
      vec3 pale=vec3(.55,.70,.85);
      vec3 mid=vec3(.25,.40,.60);
      vec3 deep=vec3(.10,.22,.40);
      vec3 col=mix(deep,mid,turb);
      col=mix(col,pale,bands*0.8);
      col=mix(col,vec3(1.0),smoothstep(0.7,0.9,noise)*0.3);
      col=mix(col,vec3(.7,.8,.9),storm*0.9);
      col*=(diffuse(vN)*.6+.5)*limb(vN);
      float rim=1.-abs(dot(vN,vec3(0.,0.,1.)));
      col+=vec3(.4,.6,.9)*pow(rim,3.0)*0.5;
      gl_FragColor=vec4(col+vec3(.1,.2,.4)*uEm,uOp);
    }
  `);

if (id === 7) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*3.5+vec3(0.,0.,uT*.006);
      float bands=sin(vP.y*10.+fbm(p*1.2,3)*3.5)*0.5+0.5;
      float bands2=sin(vP.y*18.+fbm(p*.8,3)*2.5+uT*.004)*0.5+0.5;
      float turb=fbm(p,5)*.5+.5;
      float detail=fbm(p*4.+uT*.003,5)*.5+.5;
      vec3 deep=vec3(.12,.05,.22);
      vec3 mid=vec3(.32,.14,.48);
      vec3 light=vec3(.52,.28,.58);
      vec3 warm=vec3(.48,.22,.35);
      vec3 col=mix(deep,mid,turb);
      col=mix(col,light,bands*.7);
      col=mix(col,warm,bands2*.45);
      col+=vec3(.08,.04,.12)*detail*.6;
      col*=(diffuse(vN)*.65+.42)*limb(vN);
      vec3 lightA=normalize(vec3(1.,.3,.8));
      float hA=max(0.,dot(vN,lightA));
      col+=vec3(.7,.4,.1)*pow(hA,6.)*.45;
      vec3 lightB=normalize(vec3(-.5,.2,.7));
      float hB=max(0.,dot(vN,lightB));
      col+=vec3(.5,.1,.05)*pow(hB,9.)*.25;
      float rim=1.-abs(dot(vN,vec3(0.,0.,1.)));
      col+=vec3(.4,.2,.55)*pow(rim,2.5)*.5;
      gl_FragColor=vec4(col+vec3(.3,.15,.4)*uEm,uOp);
    }
  `);

if (id === 8) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*8.+vec3(0.,0.,uT*.003);
      float terrain=fbm(p,7)*.5+.5;
      float detail=fbm(p*3.5+.8,6)*.5+.5;
      float clouds=fbm(p*2.8+uT*.005,5)*.5+.5;
      vec3 ocean=vec3(.06,.18,.30);
      vec3 shallowOcean=vec3(.10,.26,.38);
      vec3 rock=mix(vec3(.22,.30,.18),vec3(.34,.42,.26),detail);
      vec3 ice=vec3(.70,.78,.72);
      vec3 cloudCol=vec3(.62,.68,.64);
      float oceanZone=smoothstep(.42,.30,terrain);
      float iceZone=smoothstep(.64,.80,terrain);
      float cloudZone=smoothstep(.52,.72,clouds);
      float polarIce=smoothstep(.72,.90,abs(vP.y)*1.3);
      vec3 col=mix(ocean,shallowOcean,smoothstep(.28,.42,terrain));
      col=mix(col,rock,smoothstep(.38,.52,terrain));
      col=mix(col,ice,iceZone*.65);
      col=mix(col,cloudCol,cloudZone*.5);
      col=mix(col,ice,polarIce);
      col*=(diffuse(vN)*.68+.38)*limb(vN);
      float rim=1.-abs(dot(vN,vec3(0.,0.,1.)));
      col+=vec3(.28,.55,.45)*pow(rim,3.)*.45;
      gl_FragColor=vec4(col+vec3(.12,.28,.22)*uEm,uOp);
    }
  `);

if (id === 9) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p = vP;
      
      vec3 q = vec3(fbm(p, 4)*.5+.5, fbm(p + vec3(1.7), 4)*.5+.5, fbm(p + vec3(1.3), 4)*.5+.5);
      vec3 r = vec3(fbm(p + 1.2*q, 4)*.5+.5, fbm(p + 1.2*q + vec3(0.7), 4)*.5+.5, fbm(p + 1.2*q + vec3(0.3), 4)*.5+.5);
      
      float baseNoise = fbm(p + 1.5*r + uT * 0.005, 6)*.5+.5;
      float spotNoise = fbm(p * 2.5 + r, 5)*.5+.5;

      vec3 cC = vec3(0.96, 0.84, 0.50); 
      vec3 cM = vec3(0.73, 0.64, 0.38); 
      vec3 cS = vec3(0.34, 0.29, 0.18); 
      
      vec3 col = cC;
      col = mix(col, cM, smoothstep(0.35, 0.42, baseNoise));
      col = mix(col, cS, smoothstep(0.55, 0.62, baseNoise + spotNoise * 0.15));
      col = mix(col, cM, smoothstep(0.70, 0.78, spotNoise));

      vec3 pCloud = vec3(p.x * 2.0, p.y * 1.5, p.z * 2.0) + 2.0*r;
      float dTurb = fbm(pCloud * 4.0 + uT * 0.03, 5)*.5+.5;
      
      float cMask = smoothstep(0.45, 0.95, dTurb);
      
      float cDetail = fbm(vP * 12.0 + uT * 0.01, 3)*.5+.5;
      col = mix(col, vec3(0.96, 0.96, 0.94), clamp(cMask + cDetail * cMask * 0.2, 0.0, 1.0) * 0.8);
      
      float dff = diffuse(vN) * 0.7 + 0.3;
      col *= dff * limb(vN);
      float rm = 1.0 - abs(dot(vN, vec3(0.0, 0.0, 1.0)));
      col += vec3(0.6, 0.5, 0.2) * pow(rm, 3.5) * 0.45;
      
      gl_FragColor = vec4(col + vec3(0.08, 0.06, 0.0) * uEm, uOp);
    }
  `);

if (id === 10) return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){
      vec3 p=vP*4.+vec3(uT*.010,0.,0.);
      float ocean=fbm(p,6)*.5+.5;
      float steam=fbm(p*2.2+uT*.008,5)*.5+.5;
      float deep=fbm(p*.6,3)*.5+.5;
      float vortex=fbm(p*3.5+uT*.006,4)*.5+.5;
      vec3 abyss=vec3(.02,.06,.18);
      vec3 darkOcean=vec3(.05,.14,.32);
      vec3 midOcean=vec3(.12,.26,.48);
      vec3 steamCol=vec3(.28,.40,.55);
      vec3 hotSteam=vec3(.42,.52,.62);
      vec3 col=mix(abyss,darkOcean,deep);
      col=mix(col,midOcean,ocean*.6);
      col=mix(col,steamCol,smoothstep(.45,.72,steam)*.7);
      col=mix(col,hotSteam,smoothstep(.68,.88,vortex)*.5);
      col*=(diffuse(vN)*.65+.55)*limb(vN);
      float rim=1.-abs(dot(vN,vec3(0.,0.,1.)));
      col+=vec3(.18,.35,.58)*pow(rim,2.2)*.85;
      gl_FragColor=vec4(col+vec3(.06,.18,.38)*uEm,uOp);
    }
  `);

  return makeMat(`
    uniform float uT,uOp,uEm; varying vec3 vN,vP;
    void main(){ float n=fbm(vP*3.,4)*.5+.5; vec3 col=vec3(.5)*n*(diffuse(vN)*.7+.3)*limb(vN); gl_FragColor=vec4(col,uOp); }
  `);
}

/* ── STAR FIELD ─────────────────────────────────────────────── */
(function buildStarField() {
  const count = 2200, geo = new THREE.BufferGeometry(), pos = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 100;
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.05, transparent: true, opacity: 0.35 })));
})();

const TOTAL = 6298;
const pGeo = new THREE.BufferGeometry();
const pPos = new Float32Array(TOTAL * 3), pCol = new Float32Array(TOTAL * 3), pSz = new Float32Array(TOTAL);
for (let i = 0; i < TOTAL; i++) {
  const theta = Math.acos(2 * Math.random() - 1), phi = Math.random() * Math.PI * 2, r = 3.0 + Math.random() * 1.5;
  pPos[i*3] = r * Math.sin(theta) * Math.cos(phi); pPos[i*3+1] = r * Math.sin(theta) * Math.sin(phi); pPos[i*3+2] = r * Math.cos(theta);
  pCol[i*3] = pCol[i*3+1] = pCol[i*3+2] = 0.88; pSz[i] = 0.027;
}
pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
pGeo.setAttribute('color',    new THREE.BufferAttribute(pCol, 3));
pGeo.setAttribute('size',     new THREE.BufferAttribute(pSz, 1));
const particleMat = new THREE.ShaderMaterial({
  vertexColors: true, transparent: true, uniforms: { opacity: { value: 0.0 } },
  vertexShader: `attribute float size; varying vec3 vColor; void main() { vColor = color; vec4 mvPos = modelViewMatrix * vec4(position, 1.0); gl_PointSize = size * (300.0 / -mvPos.z); gl_Position = projectionMatrix * mvPos; }`,
  fragmentShader: `varying vec3 vColor; uniform float opacity; void main() { float d = length(gl_PointCoord - 0.5); if (d > 0.45) discard; float a = smoothstep(0.45, 0.05, d) * opacity; gl_FragColor = vec4(vColor, a); }`,
});
const particleCloud = new THREE.Points(pGeo, particleMat);
scene.add(particleCloud);

/* ── LIGHTING ───────────────────────────────────────────────── */
scene.add(new THREE.AmbientLight(0xffffff, 0.02));
const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
keyLight.position.set(5, 3, 5); scene.add(keyLight);
const fillLight = new THREE.DirectionalLight(0x3333ff, 0.3);
fillLight.position.set(-5, -3, -5); scene.add(fillLight);

function getVisualScale(r) {
  return 0.18;
}

const PERFECT_X = {
  7: -2.50,  // Kepler-16 b 
  9: -2.00,  // Kepler-186 f 
  8: -1.50,  // TRAPPIST-1 e 
  10: -1.00, // Gliese 1214 b
  6: -0.50,  // TOI-3757 b
  2:  0.00,  // HD 189733 b
  3:  0.50,  // TrES-2 b
  1:  1.00,  // WASP-76 b
  4:  1.55,  // WASP-12 b
  5:  2.10,  // 55 Cancri e
  0:  2.60   // KELT-9 b
};

const PLANET_POSITIONS = PLANETS.map((p) => {
  return new THREE.Vector3(PERFECT_X[p.id], 0, 0);
});

const planetMeshes = [];
PLANETS.forEach((planet, i) => {
  const visualRadius = getVisualScale(planet.radiusEarth);
  
  const geo = new THREE.SphereGeometry(visualRadius, 96, 96);
  if (planet.id === 4) {
    geo.scale(1.35, 0.85, 0.85);
    geo.computeVertexNormals();
  }

  const mat = createPlanetMaterial(planet);
  const colorObj = new THREE.Color(planet.colorDisplay || planet.color);

  const mesh = new THREE.Mesh(geo, mat);
  mesh.position.copy(PLANET_POSITIONS[i]);
  mesh.userData.planetIndex = i;
  mesh.visible = false;

  const atmGeo = new THREE.SphereGeometry(visualRadius * 1.06, 48, 48);
  if (planet.id === 4) {
    atmGeo.scale(1.35, 0.85, 0.85);
    atmGeo.computeVertexNormals(); 
  }
  const atmMat = new THREE.ShaderMaterial({
    vertexShader: `varying vec3 vNormal; void main() { vNormal = normalize(normalMatrix * normal); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
    fragmentShader: `varying vec3 vNormal; uniform vec3 glowColor; uniform float globalOpacity; void main() { float intensity = pow(0.50 - dot(vNormal, vec3(0,0,1.0)), 4.0); gl_FragColor = vec4(glowColor, intensity * globalOpacity); }`,
    uniforms: { glowColor: { value: colorObj }, globalOpacity: { value: 0.0 } },
    blending: THREE.AdditiveBlending, side: THREE.BackSide, transparent: true, depthWrite: false
  });
  mesh.add(new THREE.Mesh(atmGeo, atmMat));
  scene.add(mesh);
  planetMeshes.push(mesh);
});

/* ── DOM SETUP ──────────────────────────────────────────────── */
const tooltip = document.createElement('div');
tooltip.id = 'planet-tooltip';
tooltip.innerHTML = '<div class="tooltip-name"></div><div class="tooltip-phrase"></div>';
document.body.appendChild(tooltip);

/* ── GLOSSARY (ANSWERS & TYPES) ──────────────────────── */
const glossaryData = {
  'Ultra-Hot Jupiter': '<strong>ULTRA-HOT JUPITER</strong>Gas giants orbiting so close to their star that molecules are torn apart. You cannot land on them; you would vaporise before reaching the clouds.',
  'Hot Jupiter': '<strong>HOT JUPITER</strong>Massive gas giants (like our Jupiter, but blazing hot). A common question is "Are they tiny suns?" No, they are planets, but their extreme proximity to their star makes them hot enough to melt rock.',
  'Super-Earth': '<strong>SUPER-EARTH</strong>Rocky planets larger than Earth. Despite the name, they aren\'t necessarily habitable. On many, the crushing gravity would make it impossible to walk.',
  'Gas Giant': '<strong>GAS GIANT</strong>Worlds made mostly of hydrogen and helium (like Saturn). You cannot fly a ship through them: the immense pressure deeper inside would crush any probe into solid metal.',
  'Terrestrial': '<strong>TERRESTRIAL</strong>Rocky worlds with a solid surface. Being terrestrial is the first requirement to walk on a planet, but extreme temperatures often make them deadly.',
  'Mini-Neptune': '<strong>MINI-NEPTUNE / WATER WORLD</strong>Planets smaller than Neptune but larger than Earth. Often covered in extremely deep, high-pressure oceans beneath thick, steamy atmospheres.',
  
  'NAME': '<strong>NAMING CONVENTION</strong>Exoplanet names look like passwords, but they are just addresses. Usually, the first part is the star or telescope name (like WASP). The lowercase letter (b, c...) tells us the discovery order.',
  'MASS': '<strong>HOW DO WE WEIGH THEM?</strong>We cannot put planets on a scale. Instead, we measure the "wobble" of the host star. As the planet orbits, its gravity slightly pulls the star back and forth.',
  
  'Transit method': '<strong>TRANSIT METHOD</strong>Telescopes watch a star and measure the tiny dip in brightness when a planet passes in front of it. It\'s like spotting a fly passing in front of a streetlamp from miles away.',
  'Radial Velocity': '<strong>RADIAL VELOCITY</strong>We look for shifts in a star\'s light color (Doppler effect) caused by a hidden planet pulling it back and forth. This "wobble" reveals the planet\'s existence and mass.',
  'DISCOVERED': '<strong>HOW DO WE FIND THEM?</strong>Exoplanets are too far away to photograph directly. We use indirect methods based on the host star\'s light to detect them.'
};

const glossaryTooltip = document.createElement('div');
glossaryTooltip.id = 'glossary-tooltip';
document.body.appendChild(glossaryTooltip);

function handleGlossaryHover(e) {
  const target = document.elementFromPoint(e.clientX, e.clientY);
  if (!target) return;

  let term = null;
  if (target.id === 'hud-name') {
    term = 'NAME';
  } else if (target.classList.contains('glossary-term')) {
    
    if (target.dataset.term === 'DISCOVERED') {
      const rowNode = target.closest('.hud-row');
      const humanNode = rowNode ? rowNode.querySelector('.hud-human') : null;
      if (humanNode) {
        if (humanNode.textContent.includes('Transit')) term = 'Transit method';
        else if (humanNode.textContent.includes('Radial')) term = 'Radial Velocity';
        else term = 'DISCOVERED';
      } else {
        term = 'DISCOVERED';
      }
    } else {
      term = target.dataset.term || target.textContent.replace('// ', '').trim();
    }
  }

  if (term && glossaryData[term]) {
    glossaryTooltip.innerHTML = glossaryData[term];
    const tooltipWidth = 300;
    let leftPos = e.clientX + 20;
    if (leftPos + tooltipWidth > window.innerWidth) leftPos = e.clientX - tooltipWidth - 20;
    glossaryTooltip.style.left = leftPos + 'px';
    glossaryTooltip.style.top = (e.clientY + 20) + 'px';
    glossaryTooltip.classList.add('visible');
  } else {
    glossaryTooltip.classList.remove('visible');
  }
}
document.addEventListener('mousemove', handleGlossaryHover);
document.addEventListener('click', handleGlossaryHover);

// ── BOTTOM NAVIGATION  ──────────────────
const radarContainer = document.getElementById('radar-dots');
const radarOrder = [...PLANETS].sort((a, b) => a.tempK - b.tempK);
const radarIndicator = document.createElement('div');
radarIndicator.id = 'radar-indicator';
radarContainer.appendChild(radarIndicator);
radarOrder.forEach(planet => {
  const item = document.createElement('button');
  item.className = 'radar-item';
  item.dataset.planetId = planet.id;
item.innerHTML = `<span class="radar-name">${planet.name}</span><span class="radar-temp">${String(planet.tempK).replace(/\B(?=(\d{3})+(?!\d))/g, "<span class='ts'>'</span>")} K</span>`;
  item.setAttribute('title', `${planet.name} — ${planet.type}`);
  item.addEventListener('click', () => openPlanet(planet.id));
  radarContainer.appendChild(item);
});

// ── AXIS LEGEND ──────────────────────────────────────────────
const axisLegend = document.createElement('div');
axisLegend.id = 'axis-legend';
axisLegend.classList.add('hidden');
axisLegend.innerHTML = `
  <div class="axis-x-wrap">
    <div class="axis-line-x"></div>
    <div class="axis-labels-x">
      <span>← Cooler</span>
      <span class="axis-title">Surface Temperature</span>
      <span>Hotter →</span>
    </div>
  </div>
`;
document.body.appendChild(axisLegend);

(function buildCloseBtn() {
  const btn = document.createElement('button');
  btn.id = 'hud-close-btn';
  btn.setAttribute('aria-label', 'Close planet detail');
  btn.innerHTML = '&#x2715;';
  btn.addEventListener('click', closePlanet);
  document.getElementById('planet-detail').appendChild(btn);
})();

const aboutOverlay = document.createElement('div');
aboutOverlay.id = 'about-overlay';
aboutOverlay.classList.add('hidden');
aboutOverlay.innerHTML = `
  <div class="overlay-inner">
    <button class="overlay-close" id="about-close">&#x2715;</button>
    <div class="overlay-content">
      <div class="overlay-label">// ABOUT</div>
      <h2 class="overlay-title">Other Worlds</h2>
      <p class="overlay-body">
        A commemorative interactive data visualisation designed for <strong>NASA's 70th Anniversary (1958-2028)</strong>, using data directly from the NASA Exoplanet Archive.
      </p>
      <p class="overlay-body">
        Each planet is positioned on the horizontal axis based on its surface temperature. The 11 planets shown were selected to represent the extraordinary diversity of worlds found: from rocky planets in the habitable zone to ultra-hot gas giants.
      </p>
      <div class="overlay-stat">
        <span class="overlay-stat-number">6<span class=\"ts\">'</span>298</span>
        <span class="overlay-stat-label">confirmed exoplanets<br>(Data: April 2026)</span>
      </div>
    </div>
  </div>
`;
document.body.appendChild(aboutOverlay);
  
document.getElementById('about-close').addEventListener('click', () => aboutOverlay.classList.add('hidden'));
document.getElementById('nav-about').addEventListener('click', e => { e.preventDefault(); aboutOverlay.classList.remove('hidden'); });

const sourcesOverlay = document.createElement('div');
sourcesOverlay.id = 'sources-overlay';
sourcesOverlay.classList.add('hidden');
sourcesOverlay.innerHTML = `
  <div class="overlay-inner">
    <button class="overlay-close" id="sources-close">&#x2715;</button>
    <div class="overlay-content">
      <div class="overlay-label">// DATA SOURCES</div>
      <h2 class="overlay-title">Sources</h2>
      <div class="source-list">
        <div class="source-item">
          <span class="source-apa">Charbonneau, D., et al. (2009). A super-Earth transiting a nearby low-mass star. <em>Nature, 462</em>, 891-894. https://doi.org/10.1038/nature08679</span>
          <a class="source-link" href="https://doi.org/10.1038/nature08679" target="_blank" rel="noopener">doi.org/10.1038/nature08679 ↗</a>
        </div>
        <div class="source-item">
          <span class="source-apa">de Wit, J., et al. (2018). Atmospheric reconnaissance of the habitable-zone Earth-sized planets orbiting TRAPPIST-1. <em>Nature Astronomy, 2</em>(3), 214-219. https://doi.org/10.1038/s41550-017-0374-z</span>
          <a class="source-link" href="https://doi.org/10.1038/s41550-017-0374-z" target="_blank" rel="noopener">doi.org/10.1038/s41550-017-0374-z ↗</a>
        </div>
        <div class="source-item">
          <span class="source-apa">Esteves, L. J., De Mooij, E. J. W., &amp; Jayawardhana, R. (2015). Changing phases of alien worlds. <em>The Astrophysical Journal, 804</em>(2), 150. https://doi.org/10.1088/0004-637X/804/2/150</span>
          <a class="source-link" href="https://doi.org/10.1088/0004-637X/804/2/150" target="_blank" rel="noopener">doi.org/10.1088/0004-637X/804/2/150 ↗</a>
        </div>
        <div class="source-item">
          <span class="source-apa">NASA. (2024). <em>Exoplanet catalog</em>. NASA Science. https://science.nasa.gov/exoplanets/exoplanet-catalog/</span>
          <a class="source-link" href="https://science.nasa.gov/exoplanets/exoplanet-catalog/" target="_blank" rel="noopener">science.nasa.gov/exoplanets ↗</a>
        </div>
        <div class="source-item">
          <span class="source-apa">NASA Exoplanet Science Institute. (2024). <em>NASA Exoplanet Archive</em>. California Institute of Technology. https://exoplanetarchive.ipac.caltech.edu</span>
          <a class="source-link" href="https://exoplanetarchive.ipac.caltech.edu" target="_blank" rel="noopener">exoplanetarchive.ipac.caltech.edu ↗</a>
        </div>
        <div class="source-item">
          <span class="source-apa">Pollacco, D. L., et al. (2006). The WASP project and the SuperWASP cameras. <em>Publications of the Astronomical Society of the Pacific, 118</em>(848), 1407-1418. https://doi.org/10.1086/508556</span>
          <a class="source-link" href="https://iopscience.iop.org/article/10.1086/508556" target="_blank" rel="noopener">doi.org/10.1086/508556 ↗</a>
        </div>
      </div>
      <p class="overlay-note">
        Temperature values represent equilibrium temperature or best-available dayside measurements.
        Some parameters (especially mass for smaller planets) are estimated from radius-mass relations
        and carry significant uncertainty. Always refer to the NASA Archive for the most current data.
      </p>
    </div>
  </div>
`;
document.body.appendChild(sourcesOverlay);
document.getElementById('sources-close').addEventListener('click', () => sourcesOverlay.classList.add('hidden'));
document.getElementById('nav-sources').addEventListener('click', e => { e.preventDefault(); sourcesOverlay.classList.remove('hidden'); });

[aboutOverlay, sourcesOverlay].forEach(ov => {
  ov.addEventListener('click', e => { if (e.target === ov) ov.classList.add('hidden'); });
});

/* ── INTRO ──────────────────────────────────────────────────── */
const introLines = [
  { el: document.getElementById('line-1'), text: "6'298 confirmed exoplanets" },
  { el: document.getElementById('line-2'), text: '11 distinct worlds were isolated' },
  { el: document.getElementById('line-3'), text: 'To map the true scale of galactic diversity' },
  { el: document.getElementById('line-4'), text: 'From habitable zones to extreme environments' },
];

function typeWriter(el, text, delayMs = 0, speed = 54) {
  return new Promise(resolve => {
    setTimeout(() => {
      el.classList.add('visible'); let i = 0;
      const tick = setInterval(() => {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) {
          clearInterval(tick);
          el.innerHTML = text.replace(/(\d)'(\d)/g, '$1<span class="ts">\'</span>$2');
          resolve();
        }
      }, speed);
    }, delayMs);
  });
}

async function runIntro() {
  canvas.style.pointerEvents = 'none';
  await delay(400);
  animateValue(particleMat.uniforms.opacity, 'value', 0, 0.75, 2400);
  await delay(2000);
  await typeWriter(introLines[0].el, introLines[0].text, 0);
  await typeWriter(introLines[1].el, introLines[1].text, 500);
  await typeWriter(introLines[2].el, introLines[2].text, 500);
  await typeWriter(introLines[3].el, introLines[3].text, 700);
  await delay(1800);
  planetMeshes.forEach((mesh, i) => {
    setTimeout(() => { mesh.visible = true; mesh.scale.set(0.0, 0.01, 0.01); animateScale(mesh, 1, 700 + i * 60); }, i * 130);
  });
  await delay(2000); finishIntro();
}

function finishIntro() {
  state.introComplete = true; sessionStorage.setItem('ow_intro_seen', '1');
  canvas.style.pointerEvents = 'auto';
  gsap.to('#intro-text-container', { opacity: 0, duration: 1 });
  gsap.to('#intro-overlay', { opacity: 0, duration: 1.2, delay: 0.5, onComplete: () => {
    document.getElementById('intro-overlay').style.display = 'none';
  }});
  document.getElementById('navbar').classList.add('visible');
  document.getElementById('radar-dots').classList.remove('hidden');
  document.getElementById('axis-legend').classList.remove('hidden');
  gsap.to(particleMat.uniforms.opacity, { value: 0.18, duration: 1.8, delay: 0.8 });
  initCursorEvents();
}

/* ── OPEN / CLOSE PLANET ────────────────────────────────────── */
function openPlanet(index) {
  if (state.activePlanet === index) return;
  state.activePlanet = index;
  const planet = PLANETS[index];
  const displayColor = planet.colorDisplay || planet.color;
  document.documentElement.style.setProperty('--planet-color', displayColor);
  document.getElementById('hud-nasa-link').href = planet.nasa;

  document.getElementById('navbar').style.opacity = '0';
  document.getElementById('axis-legend').style.opacity = '0';
  document.getElementById('navbar').style.pointerEvents = 'none';
  document.getElementById('radar-dots').style.opacity = '0';
  document.getElementById('radar-dots').style.pointerEvents = 'none';
  document.getElementById('hud-name').textContent = planet.name;
  document.getElementById('hud-tagline').textContent = planet.tagline;
  document.getElementById('hud-name').classList.add('glossary-term'); 
  document.getElementById('hud-name').dataset.term = 'NAME'; 

  const pos = PLANET_POSITIONS[index];
  
  const baseRadius = getVisualScale(planet.radiusEarth);
  const TARGET_ZOOM_RADIUS = 0.42; 
  const DYNAMIC_ZOOM = TARGET_ZOOM_RADIUS / baseRadius;
  
  const camDist = 3.0; 
  
  lookTarget.set(pos.x - 0.6, pos.y, pos.z);
  camTarget.x = pos.x - 0.6; 
  camTarget.y = pos.y; 
  camTarget.z = pos.z + camDist;

planetMeshes.forEach((m, i) => {
    if (i === index) {
      m.visible = true; 
      gsap.to(m.scale, { x: DYNAMIC_ZOOM, y: DYNAMIC_ZOOM, z: DYNAMIC_ZOOM, duration: 1.2, ease: 'power2.out' });
      gsap.to(m.material.uniforms.uEm, { value: 0.05, duration: 0.8 });
      gsap.to(m.material.uniforms.uOp, { value: 1.0, duration: 0.8 });
      if (m.children[0]) gsap.to(m.children[0].material.uniforms.globalOpacity, { value: 0.3, duration: 0.8 });
    } else {
      gsap.to(m.scale, { x: 1, y: 1, z: 1, duration: 0.6 });
      gsap.to(m.material.uniforms.uOp, { value: 0.0, duration: 0.25, onComplete: () => { m.visible = false; } });
      if (m.children[0]) gsap.to(m.children[0].material.uniforms.globalOpacity, { value: 0.0, duration: 0.25 });
    }
  });

 document.getElementById('hud-type').textContent = `// ${planet.type}`;
  document.getElementById('hud-type').classList.add('glossary-term'); 
  document.getElementById('hud-name').textContent = planet.name;
  document.getElementById('hud-name').classList.add('glossary-term'); 

  const hudData = document.getElementById('hud-data');
  hudData.innerHTML = '';
  planet.data.forEach(row => {
    const div = document.createElement('div'); div.className = 'hud-row';
    const valHtml = row.valueAlt
      ? `<div class="hud-values"><span class="hud-value">${row.value}</span><span class="hud-value-alt">${row.valueAlt}</span></div>`
      : `<div class="hud-values"><span class="hud-value">${row.value}</span></div>`;
    
    const isGlossary = ['MASS', 'DISCOVERED'].includes(row.label);
    const labelHtml = isGlossary 
      ? `<span class="hud-label glossary-term" data-term="${row.label}">${row.label}</span>` 
      : `<span class="hud-label">${row.label}</span>`;

    div.innerHTML = `<div class="hud-data-main">${labelHtml}${valHtml}</div>${row.human ? `<div class="hud-human">${row.human}</div>` : ''}`;
    hudData.appendChild(div);
  });
  const detail = document.getElementById('planet-detail');
  detail.classList.remove('hidden');
  gsap.fromTo(detail, { opacity: 0 }, { opacity: 1, duration: 0.9, delay: 0.35 });
  hideTooltip(); updateRadar(index); buildHudVisuals(planet);
  state.exploredCount++;
}

/* ── CLOSE PLANET ───────────────────────────────────────────── */
function closePlanet() {
  if (state.activePlanet === null) return;
  
  const closingIndex = state.activePlanet; 
  state.activePlanet = null;
  
  const detail = document.getElementById('planet-detail');
  gsap.to(detail, { opacity: 0, duration: 0.45, onComplete: () => detail.classList.add('hidden') });

  document.getElementById('navbar').style.opacity = '1';
  document.getElementById('axis-legend').style.opacity = '1';
  document.getElementById('navbar').style.pointerEvents = 'all';
  document.getElementById('radar-dots').style.opacity = '1';
  document.getElementById('radar-dots').style.pointerEvents = 'all';

  camTarget.x = 0; camTarget.y = 0; camTarget.z = 5.0;
  lookTarget.set(0, 0, 0);

  planetMeshes.forEach((m, i) => {
    if (i === closingIndex) {
      gsap.to(m.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'power2.inOut' });
      gsap.to(m.material.uniforms.uEm, { value: 0.02, duration: 0.6 });
      gsap.to(m.material.uniforms.uOp, { value: 1.0, duration: 0.6 });
      if (m.children[0]) gsap.to(m.children[0].material.uniforms.globalOpacity, { value: 0.0, duration: 0.6 });
    } else {
      gsap.to(m.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'power2.inOut' });
      
      gsap.to(m.material.uniforms.uOp, { 
        value: 1.0, 
        duration: 0.6, 
        delay: 0.35,
        onStart: () => { m.visible = true; } 
      });
      gsap.to(m.material.uniforms.uEm, { value: 0.02, duration: 0.6, delay: 0.35 });
      if (m.children[0]) gsap.to(m.children[0].material.uniforms.globalOpacity, { value: 0.0, duration: 0.6, delay: 0.35 });
    }
  });

  document.documentElement.style.setProperty('--planet-color', '#e8e8e0');
  updateRadar(null);
}

/* ── HUD VISUALS ────────────────────────────────────────────── */
function buildHudVisuals(planet) {
  const container = document.getElementById('hud-data');

  const MIN_T = 188, MAX_T = 4600, EARTH_T = 288;
  const pctPlanet = Math.min(((planet.tempK - MIN_T) / (MAX_T - MIN_T)) * 100, 96);
  const pctEarth  = ((EARTH_T - MIN_T) / (MAX_T - MIN_T)) * 100;

  let labelOffset = `left: 50%; transform: translateX(-50%);`; 

  if (Math.abs(pctPlanet - pctEarth) < 10) {
    labelOffset = `left: 8px; transform: none;`;
  } else if (pctPlanet > 85) {
    labelOffset = `right: 8px; left: auto; transform: none;`;
  } else if (pctPlanet < 5) {
    labelOffset = `left: 8px; transform: none;`;
  }

  const tempBlock = document.createElement('div');
  tempBlock.className = 'hud-visual-block';
  tempBlock.innerHTML = `
    <span class="hud-visual-label">TEMPERATURE SCALE</span>
    <div class="temp-track">
      <div class="temp-earth-line" style="left:${pctEarth}%">
        <span class="temp-earth-label">Earth</span>
      </div>
      <div class="temp-planet-needle" style="left:${pctPlanet}%">
        <span class="temp-planet-label" style="${labelOffset}">${planet.name}</span>
      </div>
    </div>
  `;
  container.appendChild(tempBlock);
  
  if (planet.radiusEarth) {
    const r = planet.radiusEarth;
    const EARTH_PX = 20;
    const planetPx = r <= 1
      ? Math.max(EARTH_PX * r, 8)
      : Math.min(EARTH_PX * Math.pow(r, 0.6), 130);
    const col = planet.colorDisplay || planet.color;

    const sizeBlock = document.createElement('div');
    sizeBlock.className = 'hud-visual-block';
    sizeBlock.innerHTML = `
      <span class="hud-visual-label">SIZE vs EARTH</span>
      <div class="size-circles">
        <div class="size-label-wrap">
          <div class="size-circle earth-circle" style="width:${EARTH_PX}px;height:${EARTH_PX}px;"></div>
          <span class="size-sublabel">Earth</span>
        </div>
        <div class="size-label-wrap">
          <div class="size-circle planet-circle"
               style="width:${planetPx}px;height:${planetPx}px;
                      border-color:${col};
                      box-shadow:inset 0 0 ${Math.round(planetPx*0.4)}px ${col}40, 0 0 ${Math.round(planetPx*0.3)}px ${col}60;">
          </div>
          <span class="size-sublabel" style="color:${col}">${planet.name}</span>
        </div>
        <div class="size-details">
          <span class="size-value">${r < 2 ? r.toFixed(2) : r.toFixed(1)}×</span>
          <span class="size-sub">Earth radius</span>
        </div>
      </div>
    `;
    container.appendChild(sizeBlock);
  }
}

/* ── RADAR / NAV ────────────────────────────────────────────── */
function updateRadar(activeIndex) {
  document.querySelectorAll('.radar-item').forEach(item => {
    const id = parseInt(item.dataset.planetId);
    const isActive = id === activeIndex;
    item.classList.toggle('active', isActive);
    if (isActive) {
      const col = PLANETS[id].colorDisplay || PLANETS[id].color;
      item.style.setProperty('--planet-color', col);
      const indicator = document.getElementById('radar-indicator');
      if (indicator) {
        const iRect = item.getBoundingClientRect();
        const cRect = radarContainer.getBoundingClientRect();
        indicator.style.left   = (iRect.left - cRect.left) + 'px';
        indicator.style.width  = iRect.width + 'px';
        indicator.style.background = col;
        indicator.style.boxShadow  = `0 0 8px ${col}`;
        indicator.style.opacity = '1';
      }
    } else {
      item.style.removeProperty('--planet-color');
    }
  });
  if (activeIndex === null) {
    const indicator = document.getElementById('radar-indicator');
    if (indicator) indicator.style.opacity = '0';
  }
}

/* ── CURSOR & INTERACTIONS ──────────────────────────────────── */
const raycaster = new THREE.Raycaster(); const mouse2D = new THREE.Vector2(); let hoveredIndex = null;
function initCursorEvents() {
  document.querySelectorAll('a, button, .radar-item').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
  });
}
window.addEventListener('mousedown', () => document.body.classList.add('clicking'));
window.addEventListener('mouseup',   () => document.body.classList.remove('clicking'));

function updateMouse(e) {
  state.mouseX = e.clientX; state.mouseY = e.clientY;
  mouse2D.x =  (e.clientX / window.innerWidth)  * 2 - 1;
  mouse2D.y = -(e.clientY / window.innerHeight) * 2 + 1;
  document.documentElement.style.setProperty('--cx', e.clientX + 'px');
  document.documentElement.style.setProperty('--cy', e.clientY + 'px');

  if (!state.introComplete || state.activePlanet !== null) return;
  camTarget.x = (e.clientX / window.innerWidth  - 0.5) * 0.14;
  camTarget.y = -(e.clientY / window.innerHeight - 0.5) * 0.10;
  camTarget.z = 5.0;

  raycaster.setFromCamera(mouse2D, camera);
  const hits = raycaster.intersectObjects(planetMeshes, true); 
  if (hits.length > 0) {
    document.body.classList.add('hovering');
    let obj = hits[0].object;
    const idx = obj.userData.planetIndex ?? obj.parent?.userData.planetIndex;
    
    if (idx !== undefined && idx !== hoveredIndex) {
      if (hoveredIndex !== null) if(planetMeshes[hoveredIndex].material.uniforms) planetMeshes[hoveredIndex].material.uniforms.uEm.value = 0.02;
      hoveredIndex = idx;
      if(planetMeshes[idx].material.uniforms) planetMeshes[idx].material.uniforms.uEm.value = 0.4;
    }
    if (idx !== undefined) showTooltip(idx, e.clientX, e.clientY);
  } else {
    document.body.classList.remove('hovering');
    if (hoveredIndex !== null) { if(planetMeshes[hoveredIndex].material.uniforms) planetMeshes[hoveredIndex].material.uniforms.uEm.value = 0.02; hoveredIndex = null; }
    hideTooltip();
  }
}

function handleClick(e) {
  if (!state.introComplete || state.activePlanet !== null) return;
  raycaster.setFromCamera(mouse2D, camera);
  const hits = raycaster.intersectObjects(planetMeshes, true);
  if (hits.length > 0) {
    let obj = hits[0].object;
    const idx = obj.userData.planetIndex ?? obj.parent?.userData.planetIndex;
    if (idx !== undefined) openPlanet(idx);
  }
}
function showTooltip(index, x, y) {
  const planet = PLANETS[index]; const color = planet.colorDisplay || planet.color;
  tooltip.querySelector('.tooltip-name').textContent = planet.name;
  tooltip.querySelector('.tooltip-name').style.color = color;
  tooltip.querySelector('.tooltip-phrase').textContent = planet.tagline;
  const halfWidth = 120, margin = 16;
  const clampedX = Math.min(Math.max(x, halfWidth + margin), window.innerWidth - halfWidth - margin);
  tooltip.style.left = clampedX + 'px'; tooltip.style.top = y + 'px';
  tooltip.classList.add('visible');
}
function hideTooltip() { tooltip.classList.remove('visible'); }
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closePlanet();
    aboutOverlay.classList.add('hidden');
    sourcesOverlay.classList.add('hidden');
  }
});

/* ── RENDER LOOP ────────────────────────────────────────────── */
const clock = new THREE.Clock();
function animate() {
  requestAnimationFrame(animate);
  const t = clock.getElapsedTime();
  particleCloud.rotation.y = t * 0.035;
  particleCloud.rotation.x = Math.sin(t * 0.012) * 0.04;

  if (state.activePlanet === null) {
    planetMeshes.forEach((mesh, i) => {
      const base = PLANET_POSITIONS[i];
      mesh.position.x = base.x + Math.sin(t * 0.18 + i * 1.1) * 0.010;
      mesh.position.y = base.y + Math.cos(t * 0.13 + i * 0.9) * 0.008;
      mesh.rotation.y += 0.002;
      if (mesh.material.uniforms && mesh.material.uniforms.uT) {
        mesh.material.uniforms.uT.value = t;
      }
      if (i !== 4) {
        mesh.children[0].rotation.y -= 0.001;
      }
    });
  } else {
    planetMeshes[state.activePlanet].rotation.y += 0.003;
    if (planetMeshes[state.activePlanet].material.uniforms && planetMeshes[state.activePlanet].material.uniforms.uT) {
        planetMeshes[state.activePlanet].material.uniforms.uT.value = t;
    }
    if (state.activePlanet !== 4) {
      planetMeshes[state.activePlanet].children[0].rotation.y -= 0.001;
    }
  }

  const spd = 0.05;
  camCurrent.x += (camTarget.x - camCurrent.x) * spd;
  camCurrent.y += (camTarget.y - camCurrent.y) * spd;
  camCurrent.z += (camTarget.z - camCurrent.z) * spd;
  camera.position.set(camCurrent.x, camCurrent.y, camCurrent.z);
  lookCurrent.lerp(lookTarget, spd);
  camera.lookAt(lookCurrent);
  renderer.render(scene, camera);
}

/* ── UTILS ──────────────────────────────────────────────────── */
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }
function animateValue(obj, key, from, to, dur) {
  const start = performance.now();
  (function tick(now) { const p = Math.min((now - start) / dur, 1); obj[key] = from + (to - from) * (p < 0.5 ? 2*p*p : -1+(4-2*p)*p); if (p < 1) requestAnimationFrame(tick); })(performance.now());
}
function animateScale(mesh, to, dur) {
  const start = performance.now(); const from = mesh.scale.x;
  (function tick(now) { const p = Math.min((now - start) / dur, 1); const v = from + (to - from) * (1 - Math.pow(1-p, 3)); mesh.scale.set(v, v, v); if (p < 1) requestAnimationFrame(tick); })(performance.now());
}

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
window.addEventListener('mousemove', updateMouse);
window.addEventListener('click', handleClick);

animate();

if (sessionStorage.getItem('ow_intro_seen')) {
  state.introComplete = true;
  canvas.style.pointerEvents = 'auto';
  particleMat.uniforms.opacity.value = 0.18;
  planetMeshes.forEach(m => { m.visible = true; m.scale.set(1,1,1); });
  
  document.getElementById('intro-overlay').style.display = 'none';
  document.getElementById('navbar').classList.add('visible');
  document.getElementById('radar-dots').classList.remove('hidden');
  document.getElementById('axis-legend').classList.remove('hidden');
  
  initCursorEvents();
} else {
  runIntro();
}


/* ── NASA EXOPLANET COUNT ── */
function applyPlanetCount() {
  const statNumber = document.querySelector('.overlay-stat-number');
  const statLabel = document.querySelector('.overlay-stat-label');
  
  if (!statNumber || !statLabel) return;

  statNumber.innerHTML = "6<span class=\"ts\">'</span>298";
  statLabel.innerHTML = `confirmed exoplanets<br>(Data: April 2026)`;
}

applyPlanetCount();