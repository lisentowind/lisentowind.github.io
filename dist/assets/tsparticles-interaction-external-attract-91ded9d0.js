import{E as t,m as a,i,C as c,g as e,c as s,a as n,V as r}from"./tsparticles-engine-3b45a3b7.js";class o{constructor(){this.distance=200,this.duration=.4,this.easing="ease-out-quad",this.factor=1,this.maxSpeed=50,this.speed=1}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),void 0!==t.duration&&(this.duration=t.duration),void 0!==t.easing&&(this.easing=t.easing),void 0!==t.factor&&(this.factor=t.factor),void 0!==t.maxSpeed&&(this.maxSpeed=t.maxSpeed),void 0!==t.speed&&(this.speed=t.speed))}}class d extends t{constructor(t,a){super(a),this._engine=t,a.attract||(a.attract={particles:[]}),this.handleClickMode=t=>{const i=this.container.actualOptions.interactivity.modes.attract;if(i&&"attract"===t){a.attract||(a.attract={particles:[]}),a.attract.clicking=!0,a.attract.count=0;for(const t of a.attract.particles)this.isEnabled(t)&&t.velocity.setTo(t.initialVelocity);a.attract.particles=[],a.attract.finish=!1,setTimeout((()=>{a.destroyed||(a.attract||(a.attract={particles:[]}),a.attract.clicking=!1)}),1e3*i.duration)}}}clear(){}init(){const t=this.container,a=t.actualOptions.interactivity.modes.attract;a&&(t.retina.attractModeDistance=a.distance*t.retina.pixelRatio)}async interact(){const t=this.container,c=t.actualOptions,e=t.interactivity.status===a,s=c.interactivity.events,n=s.onHover.enable,r=s.onHover.mode,o=s.onClick.enable,d=s.onClick.mode;e&&n&&i("attract",r)?this.hoverAttract():o&&i("attract",d)&&this.clickAttract()}isEnabled(t){var a;const c=this.container,e=c.actualOptions,s=c.interactivity.mouse,n=(null!==(a=null==t?void 0:t.interactivity)&&void 0!==a?a:e.interactivity).events;if(!(s.position&&n.onHover.enable||s.clickPosition&&n.onClick.enable))return!1;const r=n.onHover.mode,o=n.onClick.mode;return i("attract",r)||i("attract",o)}loadModeOptions(t,...a){t.attract||(t.attract=new o);for(const i of a)t.attract.load(null==i?void 0:i.attract)}reset(){}clickAttract(){const t=this.container;if(t.attract||(t.attract={particles:[]}),t.attract.finish||(t.attract.count||(t.attract.count=0),t.attract.count++,t.attract.count===t.particles.count&&(t.attract.finish=!0)),t.attract.clicking){const a=t.interactivity.mouse.clickPosition,i=t.retina.attractModeDistance;if(!i||i<0||!a)return;this.processAttract(a,i,new c(a.x,a.y,i))}else!1===t.attract.clicking&&(t.attract.particles=[])}hoverAttract(){const t=this.container,a=t.interactivity.mouse.position,i=t.retina.attractModeDistance;!i||i<0||!a||this.processAttract(a,i,new c(a.x,a.y,i))}processAttract(t,a,i){const c=this.container,o=c.actualOptions.interactivity.modes.attract;if(!o)return;const d=c.particles.quadTree.query(i,(t=>this.isEnabled(t)));for(const l of d){const{dx:i,dy:c,distance:d}=e(l.position,t),p=o.speed*o.factor,u=s(n(o.easing)(1-d/a)*p,0,o.maxSpeed),h=r.create(0===d?p:i/d*u,0===d?p:c/d*u);l.position.subFrom(h)}}}async function l(t){await t.addInteractor("externalAttract",(a=>new d(t,a)))}export{l};
