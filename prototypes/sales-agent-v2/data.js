const prospects = [
  {f:'Sarah',l:'Mitchell',co:'Outreach.io',title:'VP of Sales',email:'s.mitchell@outreach.io',score:96,ok:true,c:'#7D62EC'},
  {f:'James',l:"O'Brien",co:'Salesloft',title:'Head of Growth',email:'jobrien@salesloft.com',score:93,ok:true,c:'#22C55E'},
  {f:'Priya',l:'Sharma',co:'Gong.io',title:'CMO',email:'p.sharma@gong.io',score:91,ok:true,c:'#F59E0B'},
  {f:'Tom',l:'Hanks',co:'Apollo.io',title:'VP Sales',email:'tom.h@apollo.io',score:88,ok:true,c:'#EF4444'},
  {f:'Linda',l:'Torres',co:'Seamless.ai',title:'Growth Lead',email:'ltorres@seamless.ai',score:85,ok:true,c:'#8B5CF6'},
  {f:'Mike',l:'Zhang',co:'ZoomInfo',title:'CMO',email:'—',score:80,ok:false,c:'#06B6D4'},
  {f:'Emma',l:'Clarke',co:'HubSpot',title:'VP Marketing',email:'e.clarke@hubspot.com',score:78,ok:true,c:'#D946EF'},
  {f:'David',l:'Kim',co:'Drift',title:'Head of Sales',email:'dkim@drift.com',score:75,ok:true,c:'#F97316'},
];

const enriched = [
  {name:'Sarah Mitchell',title:'VP of Sales · Outreach.io',email:'s.mitchell@outreach.io',phone:'+1 415 882 3041',li:'linkedin.com/in/sarahmitch',size:'201–500',rev:'$50M–200M',tech:'Salesforce, Gong, Slack'},
  {name:"James O'Brien",title:'Head of Growth · Salesloft',email:'jobrien@salesloft.com',phone:'+1 628 440 2199',li:'linkedin.com/in/jamesobrien',size:'201–500',rev:'$100M–200M',tech:'HubSpot, Mixpanel, Segment'},
  {name:'Priya Sharma',title:'CMO · Gong.io',email:'p.sharma@gong.io',phone:'+1 512 306 7800',li:'linkedin.com/in/priyasharma',size:'501–1000',rev:'$200M+',tech:'Salesforce, Marketo, Outreach'},
  {name:'Tom Hanks',title:'VP Sales · Apollo.io',email:'tom.h@apollo.io',phone:'+1 347 991 4520',li:'linkedin.com/in/tomhanks',size:'101–200',rev:'$50M–100M',tech:'Outreach, ZoomInfo, Slack'},
  {name:'Linda Torres',title:'Growth Lead · Seamless.ai',email:'ltorres@seamless.ai',phone:'+1 303 445 8823',li:'linkedin.com/in/lindatorres',size:'51–100',rev:'$10M–50M',tech:'Salesforce, ActiveCampaign'},
  {name:'Emma Clarke',title:'VP Marketing · HubSpot',email:'e.clarke@hubspot.com',phone:'+1 617 228 9020',li:'linkedin.com/in/emmaclarke',size:'5000+',rev:'$1B+',tech:'HubSpot, Datadog, Amplitude'},
];
