import{_,o as e,c as s,a as t,t as c,F as i,r as o}from"./index.5ec391fb.js";const d={name:"SkillsView",props:{skills_section:{type:Object,required:!0}}},u={class:"container"},p={class:"skills-section p-3"},k={class:"text-center pb-2 pt-2"},m={class:"skills-box-wrapper"};function b(v,f,n,x,y,h){return e(),s("div",u,[t("div",p,[t("h2",k,c(n.skills_section.title),1),(e(!0),s(i,null,o(n.skills_section.items,r=>(e(),s("div",{class:"section-item row mb-3",key:r.title},[t("div",m,[(e(!0),s(i,null,o(r.items,l=>(e(),s("div",{class:"section-subitem col-lg-3 col-md-3 col-sm-4 col-6 mt-3",key:l.name},[t("b",null,c(l.title),1),(e(!0),s(i,null,o(l.items,a=>(e(),s("div",{class:"skill-box",key:a},c(a),1))),128))]))),128))])]))),128))])])}const g=_(d,[["render",b],["__scopeId","data-v-df63b4b2"]]);export{g as default};
