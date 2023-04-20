import{I as i,O as s,J as t,V as o,F as e,B as r,k as a,g as n,w as h,K as c,L as d,M as l,G as b,o as p,j as u,i as y}from"./tsparticles-engine-3b45a3b7.js";class v{constructor(){this.radius=0,this.mass=0}load(i){i&&(void 0!==i.mass&&(this.mass=i.mass),void 0!==i.radius&&(this.radius=i.radius))}}class g extends i{constructor(){super(),this.density=5,this.value=50,this.limit=new v}load(i){i&&(super.load(i),void 0!==i.density&&(this.density=i.density),"number"==typeof i.limit?this.limit.radius=i.limit:this.limit.load(i.limit))}}class m{constructor(){this.color=new s,this.color.value="#000000",this.draggable=!1,this.opacity=1,this.destroy=!0,this.orbits=!1,this.size=new g}load(i){void 0!==i&&(void 0!==i.color&&(this.color=s.create(this.color,i.color)),void 0!==i.draggable&&(this.draggable=i.draggable),this.name=i.name,void 0!==i.opacity&&(this.opacity=i.opacity),void 0!==i.position&&(this.position={},void 0!==i.position.x&&(this.position.x=t(i.position.x)),void 0!==i.position.y&&(this.position.y=t(i.position.y))),void 0!==i.size&&this.size.load(i.size),void 0!==i.destroy&&(this.destroy=i.destroy),void 0!==i.orbits&&(this.orbits=i.orbits))}}class P{constructor(i,s,t,a){var n,h,c;this.absorbers=i,this.container=s,this.initialPosition=a?o.create(a.x,a.y):void 0,t instanceof m?this.options=t:(this.options=new m,this.options.load(t)),this.dragging=!1,this.name=this.options.name,this.opacity=this.options.opacity,this.size=e(this.options.size.value)*s.retina.pixelRatio,this.mass=this.size*this.options.size.density*s.retina.reduceFactor;const d=this.options.size.limit;this.limit={radius:d.radius*s.retina.pixelRatio*s.retina.reduceFactor,mass:d.mass},this.color=null!==(n=r(this.options.color))&&void 0!==n?n:{b:0,g:0,r:0},this.position=null!==(c=null===(h=this.initialPosition)||void 0===h?void 0:h.copy())&&void 0!==c?c:this.calcPosition()}attract(i){const s=this.container,t=this.options;if(t.draggable){const i=s.interactivity.mouse;if(i.clicking&&i.downPosition){a(this.position,i.downPosition)<=this.size&&(this.dragging=!0)}else this.dragging=!1;this.dragging&&i.position&&(this.position.x=i.position.x,this.position.y=i.position.y)}const e=i.getPosition(),{dx:r,dy:h,distance:c}=n(this.position,e),d=o.create(r,h);if(d.length=this.mass/Math.pow(c,2)*s.retina.reduceFactor,c<this.size+i.getRadius()){const o=.033*i.getRadius()*s.retina.pixelRatio;this.size>i.getRadius()&&c<this.size-i.getRadius()||void 0!==i.absorberOrbit&&i.absorberOrbit.length<0?t.destroy?i.destroy():(i.needsNewPosition=!0,this.updateParticlePosition(i,d)):(t.destroy&&(i.size.value-=o),this.updateParticlePosition(i,d)),(this.limit.radius<=0||this.size<this.limit.radius)&&(this.size+=o),(this.limit.mass<=0||this.mass<this.limit.mass)&&(this.mass+=o*this.options.size.density*s.retina.reduceFactor)}else this.updateParticlePosition(i,d)}draw(i){i.translate(this.position.x,this.position.y),i.beginPath(),i.arc(0,0,this.size,0,2*Math.PI,!1),i.closePath(),i.fillStyle=h(this.color,this.opacity),i.fill()}resize(){const i=this.initialPosition;this.position=i&&c(i,this.container.canvas.size,o.origin)?i:this.calcPosition()}calcPosition(){const i=d({size:this.container.canvas.size,position:this.options.position});return o.create(i.x,i.y)}updateParticlePosition(i,s){var t;if(i.destroyed)return;const e=this.container,r=e.canvas.size;if(i.needsNewPosition){const s=l({size:r});i.position.setTo(s),i.velocity.setTo(i.initialVelocity),i.absorberOrbit=void 0,i.needsNewPosition=!1}if(this.options.orbits){if(void 0===i.absorberOrbit&&(i.absorberOrbit=o.create(0,0),i.absorberOrbit.length=a(i.getPosition(),this.position),i.absorberOrbit.angle=b()*Math.PI*2),i.absorberOrbit.length<=this.size&&!this.options.destroy){const s=Math.min(r.width,r.height);i.absorberOrbit.length=s*(.2*b()-.1+1)}void 0===i.absorberOrbitDirection&&(i.absorberOrbitDirection=i.velocity.x>=0?"clockwise":"counter-clockwise");const n=i.absorberOrbit.length,h=i.absorberOrbit.angle,c=i.absorberOrbitDirection;i.velocity.setTo(o.origin);const d={x:"clockwise"===c?Math.cos:Math.sin,y:"clockwise"===c?Math.sin:Math.cos};i.position.x=this.position.x+n*d.x(h),i.position.y=this.position.y+n*d.y(h),i.absorberOrbit.length-=s.length,i.absorberOrbit.angle+=(null!==(t=i.retina.moveSpeed)&&void 0!==t?t:0)*e.retina.pixelRatio/100*e.retina.reduceFactor}else{const t=o.origin;t.length=s.length,t.angle=s.angle,i.velocity.addTo(t)}}}class z{constructor(i){this.container=i,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],i.getAbsorber=i=>void 0===i||"number"==typeof i?this.array[i||0]:this.array.find((s=>s.name===i)),i.addAbsorber=(i,s)=>this.addAbsorber(i,s)}addAbsorber(i,s){const t=new P(this,this.container,i,s);return this.array.push(t),t}draw(i){for(const s of this.array)s.draw(i)}handleClickMode(i){const s=this.absorbers,t=this.interactivityAbsorbers;if("absorber"===i){const i=p(t),o=null!=i?i:p(s),e=this.container.interactivity.mouse.clickPosition;this.addAbsorber(o,e)}}async init(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers,u(this.absorbers,(i=>{this.addAbsorber(i)}))}particleUpdate(i){for(const s of this.array)if(s.attract(i),i.destroyed)break}removeAbsorber(i){const s=this.array.indexOf(i);s>=0&&this.array.splice(s,1)}resize(){for(const i of this.array)i.resize()}stop(){this.array=[]}}class f{constructor(){this.id="absorbers"}getPlugin(i){return new z(i)}loadOptions(i,s){var t,o;(this.needsPlugin(i)||this.needsPlugin(s))&&((null==s?void 0:s.absorbers)&&(i.absorbers=u(s.absorbers,(i=>{const s=new m;return s.load(i),s}))),i.interactivity.modes.absorbers=u(null===(o=null===(t=null==s?void 0:s.interactivity)||void 0===t?void 0:t.modes)||void 0===o?void 0:o.absorbers,(i=>{const s=new m;return s.load(i),s})))}needsPlugin(i){var s,t,o;if(!i)return!1;const e=i.absorbers;return e instanceof Array?!!e.length:!!e||!(!(null===(o=null===(t=null===(s=i.interactivity)||void 0===s?void 0:s.events)||void 0===t?void 0:t.onClick)||void 0===o?void 0:o.mode)||!y("absorber",i.interactivity.events.onClick.mode))}}async function w(i){const s=new f;await i.addPlugin(s)}export{w as l};
