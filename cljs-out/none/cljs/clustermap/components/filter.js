// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.filter');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.filter.render = (function render(p__56705,owner,state){var map__56807 = p__56705;var map__56807__$1 = ((cljs.core.seq_QMARK_.call(null,map__56807))?cljs.core.apply.call(null,cljs.core.hash_map,map__56807):map__56807);var bounds = cljs.core.get.call(null,map__56807__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var filter_spec = cljs.core.get.call(null,map__56807__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"filter by view"),React.DOM.div({"className": "tbl-cell"},sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__56807,map__56807__$1,bounds,filter_spec){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255)], null),val);
});})(map__56807,map__56807__$1,bounds,filter_spec))
}))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__56807,map__56807__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"age","age",-604307804)], null),(function (){var pred__56896 = cljs.core._EQ_;var expr__56897 = val;if(cljs.core.truth_(pred__56896.call(null,"new",expr__56897)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56896.call(null,"old",expr__56897)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(map__56807,map__56807__$1,bounds,filter_spec))
},sablono.interpreter.option.call(null,{"value": ""},"any"),sablono.interpreter.option.call(null,{"value": "new"},"< 5 years old"),sablono.interpreter.option.call(null,{"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__56807,map__56807__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"group","group",582596132)], null),(function (){var pred__56899 = cljs.core._EQ_;var expr__56900 = val;if(cljs.core.truth_(pred__56899.call(null,"group",expr__56900)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_(pred__56899.call(null,"notgroup",expr__56900)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(map__56807,map__56807__$1,bounds,filter_spec))
},sablono.interpreter.option.call(null,{"value": ""},"any"),sablono.interpreter.option.call(null,{"value": "group"},"group"),sablono.interpreter.option.call(null,{"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__56807,map__56807__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"turnover","turnover",-1778310555)], null),(function (){var pred__56902 = cljs.core._EQ_;var expr__56903 = val;if(cljs.core.truth_(pred__56902.call(null,"low",expr__56903)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56902.call(null,"high",expr__56903)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(map__56807,map__56807__$1,bounds,filter_spec))
},sablono.interpreter.option.call(null,{"value": ""},"any"),sablono.interpreter.option.call(null,{"value": "low"},"< \u00A31 million"),sablono.interpreter.option.call(null,{"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (map__56807,map__56807__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"sic","sic",589884826)], null),(function (){var pred__56905 = cljs.core._EQ_;var expr__56906 = val;if(cljs.core.truth_(pred__56905.call(null,"A",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"01110",new cljs.core.Keyword(null,"lte","lte",1005402135),"03220"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"B",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"05101",new cljs.core.Keyword(null,"lte","lte",1005402135),"09900"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"C",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"10110",new cljs.core.Keyword(null,"lte","lte",1005402135),"33200"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"D",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"35110",new cljs.core.Keyword(null,"lte","lte",1005402135),"35300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"E",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"36000",new cljs.core.Keyword(null,"lte","lte",1005402135),"39000"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"F",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"41100",new cljs.core.Keyword(null,"lte","lte",1005402135),"43999"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"G",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"45111",new cljs.core.Keyword(null,"lte","lte",1005402135),"47990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"H",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"49100",new cljs.core.Keyword(null,"lte","lte",1005402135),"53202"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"I",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"55100",new cljs.core.Keyword(null,"lte","lte",1005402135),"56302"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"J",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"58110",new cljs.core.Keyword(null,"lte","lte",1005402135),"63990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"K",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"64110",new cljs.core.Keyword(null,"lte","lte",1005402135),"66300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"L",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"68100",new cljs.core.Keyword(null,"lte","lte",1005402135),"68320"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"M",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"69101",new cljs.core.Keyword(null,"lte","lte",1005402135),"75000"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"N",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"77110",new cljs.core.Keyword(null,"lte","lte",1005402135),"82990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"O",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"84110",new cljs.core.Keyword(null,"lte","lte",1005402135),"84300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"P",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"85100",new cljs.core.Keyword(null,"lte","lte",1005402135),"85600"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"Q",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"86101",new cljs.core.Keyword(null,"lte","lte",1005402135),"88990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"R",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"90010",new cljs.core.Keyword(null,"lte","lte",1005402135),"93290"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"S",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"94110",new cljs.core.Keyword(null,"lte","lte",1005402135),"96090"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"T",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"97000",new cljs.core.Keyword(null,"lte","lte",1005402135),"98200"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__56905.call(null,"U",expr__56906)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"99000",new cljs.core.Keyword(null,"lte","lte",1005402135),"99999"], null)], null)], null);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
})());
});})(map__56807,map__56807__$1,bounds,filter_spec))
},sablono.interpreter.option.call(null,{"value": ""},"all"),sablono.interpreter.option.call(null,{"value": "A"},"A : Agriculture, Forestry and Fishing"),sablono.interpreter.option.call(null,{"value": "B"},"B : Mining and Quarrying"),sablono.interpreter.option.call(null,{"value": "C"},"C : Manufacturing"),sablono.interpreter.option.call(null,{"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),sablono.interpreter.option.call(null,{"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),sablono.interpreter.option.call(null,{"value": "F"},"F : Construction"),sablono.interpreter.option.call(null,{"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),sablono.interpreter.option.call(null,{"value": "H"},"H : Transportation and storage"),sablono.interpreter.option.call(null,{"value": "I"},"I : Accommodation and food service activities"),sablono.interpreter.option.call(null,{"value": "J"},"J : Information and communication"),sablono.interpreter.option.call(null,{"value": "K"},"K : Financial and insurance activities"),sablono.interpreter.option.call(null,{"value": "L"},"L : Real estate activities"),sablono.interpreter.option.call(null,{"value": "M"},"M : Professional, scientific and technical activities"),sablono.interpreter.option.call(null,{"value": "N"},"N : Administrative and support service activities"),sablono.interpreter.option.call(null,{"value": "O"},"O : Public administration and defence; compulsory social security"),sablono.interpreter.option.call(null,{"value": "P"},"P : Education"),sablono.interpreter.option.call(null,{"value": "Q"},"Q : Human health and social work activities"),sablono.interpreter.option.call(null,{"value": "R"},"R : Arts, entertainment and recreation"),sablono.interpreter.option.call(null,{"value": "S"},"S : Other service activities"),sablono.interpreter.option.call(null,{"value": "T"},"T : Activities of households as employers"),sablono.interpreter.option.call(null,{"value": "U"},"U : Activities of extraterritorial organisations and bodies")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"ONS sector"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (map__56807,map__56807__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.call(null,filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"sector","sector",-1444247062)], null),(cljs.core.truth_(cljs.core.not_empty.call(null,val))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nested","nested",18943849),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),"?tags",new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"must","must",-243952061),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["type","ons_sector"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["tag",val], null)], null)], null)], null)], null)], null)], null):null));
});})(map__56807,map__56807__$1,bounds,filter_spec))
},sablono.interpreter.option.call(null,{"value": ""},"all"),sablono.interpreter.option.call(null,{"value": "other_scitechmanf"},"Other scientific/technological manufacture"),sablono.interpreter.option.call(null,{"value": "lifesci_health"},"Life Sciences & Healthcare"),sablono.interpreter.option.call(null,{"value": "digi_tech"},"Digital Technologies"),sablono.interpreter.option.call(null,{"value": "pub_broad"},"Publishing & Broadcasting"),sablono.interpreter.option.call(null,{"value": "other_scitech_serv"},"Other scientific/technological services"))))));
});
clustermap.components.filter.filter_component = (function filter_component(p__56908,owner){var map__56917 = p__56908;var map__56917__$1 = ((cljs.core.seq_QMARK_.call(null,map__56917))?cljs.core.apply.call(null,cljs.core.hash_map,map__56917):map__56917);var props = map__56917__$1;var map__56918 = cljs.core.get.call(null,map__56917__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__56918__$1 = ((cljs.core.seq_QMARK_.call(null,map__56918))?cljs.core.apply.call(null,cljs.core.hash_map,map__56918):map__56918);var filter_spec = map__56918__$1;var components = cljs.core.get.call(null,map__56918__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var filter_by_view = cljs.core.get.call(null,map__56918__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var compiled = cljs.core.get.call(null,map__56918__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var bounds = cljs.core.get.call(null,map__56917__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.filter.t56919 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t56919 = (function (filter_component,p__56908,map__56918,owner,filter_by_view,props,map__56917,filter_spec,compiled,bounds,components,meta56920){
this.filter_component = filter_component;
this.p__56908 = p__56908;
this.map__56918 = map__56918;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__56917 = map__56917;
this.filter_spec = filter_spec;
this.compiled = compiled;
this.bounds = bounds;
this.components = components;
this.meta56920 = meta56920;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t56919.cljs$lang$type = true;
clustermap.components.filter.t56919.cljs$lang$ctorStr = "clustermap.components.filter/t56919";
clustermap.components.filter.t56919.cljs$lang$ctorPrWriter = ((function (map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.filter/t56919");
});})(map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t56919.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t56919.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,p__56922,next_state){var self__ = this;
var map__56923 = p__56922;var map__56923__$1 = ((cljs.core.seq_QMARK_.call(null,map__56923))?cljs.core.apply.call(null,cljs.core.hash_map,map__56923):map__56923);var map__56924 = cljs.core.get.call(null,map__56923__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__56924__$1 = ((cljs.core.seq_QMARK_.call(null,map__56924))?cljs.core.apply.call(null,cljs.core.hash_map,map__56924):map__56924);var next_components = cljs.core.get.call(null,map__56924__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var next_filter_by_view = cljs.core.get.call(null,map__56924__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_compiled = cljs.core.get.call(null,map__56924__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_bounds = cljs.core.get.call(null,map__56923__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_EQ_.call(null,next_components,self__.components);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
})()))
{return om.core.update_BANG_.call(null,self__.filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiled","compiled",850043082)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,om.core._value,cljs.core.vals.call(null,next_components)))));
} else
{return null;
}
});})(map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t56919.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t56919.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;return clustermap.components.filter.render.call(null,self__.props,self__.owner,state);
});})(map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t56919.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_56921){var self__ = this;
var _56921__$1 = this;return self__.meta56920;
});})(map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t56919.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_56921,meta56920__$1){var self__ = this;
var _56921__$1 = this;return (new clustermap.components.filter.t56919(self__.filter_component,self__.p__56908,self__.map__56918,self__.owner,self__.filter_by_view,self__.props,self__.map__56917,self__.filter_spec,self__.compiled,self__.bounds,self__.components,meta56920__$1));
});})(map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.__GT_t56919 = ((function (map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function __GT_t56919(filter_component__$1,p__56908__$1,map__56918__$2,owner__$1,filter_by_view__$1,props__$1,map__56917__$2,filter_spec__$1,compiled__$1,bounds__$1,components__$1,meta56920){return (new clustermap.components.filter.t56919(filter_component__$1,p__56908__$1,map__56918__$2,owner__$1,filter_by_view__$1,props__$1,map__56917__$2,filter_spec__$1,compiled__$1,bounds__$1,components__$1,meta56920));
});})(map__56917,map__56917__$1,props,map__56918,map__56918__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
}
return (new clustermap.components.filter.t56919(filter_component,p__56908,map__56918__$1,owner,filter_by_view,props,map__56917__$1,filter_spec,compiled,bounds,components,null));
});

//# sourceMappingURL=filter.js.map