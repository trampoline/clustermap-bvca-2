// Compiled by ClojureScript 0.0-2268
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
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.filter.filter_component = (function filter_component(p__12862,owner){var map__12954 = p__12862;var map__12954__$1 = ((cljs.core.seq_QMARK_.call(null,map__12954))?cljs.core.apply.call(null,cljs.core.hash_map,map__12954):map__12954);var cursor = map__12954__$1;if(typeof clustermap.components.filter.t12955 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t12955 = (function (cursor,map__12954,owner,p__12862,filter_component,meta12956){
this.cursor = cursor;
this.map__12954 = map__12954;
this.owner = owner;
this.p__12862 = p__12862;
this.filter_component = filter_component;
this.meta12956 = meta12956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t12955.cljs$lang$type = true;
clustermap.components.filter.t12955.cljs$lang$ctorStr = "clustermap.components.filter/t12955";
clustermap.components.filter.t12955.cljs$lang$ctorPrWriter = ((function (map__12954,map__12954__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.filter/t12955");
});})(map__12954,map__12954__$1,cursor))
;
clustermap.components.filter.t12955.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t12955.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__12954,map__12954__$1,cursor){
return (function (this$,p__12958,next_state){var self__ = this;
var map__12959 = p__12958;var map__12959__$1 = ((cljs.core.seq_QMARK_.call(null,map__12959))?cljs.core.apply.call(null,cljs.core.hash_map,map__12959):map__12959);var next_components = cljs.core.get.call(null,map__12959__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var next_compiled = cljs.core.get.call(null,map__12959__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var this$__$1 = this;var map__12960 = om.core.get_props.call(null,self__.owner);var map__12960__$1 = ((cljs.core.seq_QMARK_.call(null,map__12960))?cljs.core.apply.call(null,cljs.core.hash_map,map__12960):map__12960);var components = cljs.core.get.call(null,map__12960__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var compiled = cljs.core.get.call(null,map__12960__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));if(cljs.core.not_EQ_.call(null,next_components,components))
{return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiled","compiled",850043082)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,om.core._value,cljs.core.vals.call(null,next_components)))));
} else
{return null;
}
});})(map__12954,map__12954__$1,cursor))
;
clustermap.components.filter.t12955.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t12955.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__12954,map__12954__$1,cursor){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__12954,map__12954__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"age","age",-604307804)], null),(function (){var pred__13033 = cljs.core._EQ_;var expr__13034 = val;if(cljs.core.truth_(pred__13033.call(null,"new",expr__13034)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13033.call(null,"old",expr__13034)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__12954,map__12954__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "new"},"< 5 years old"),React.DOM.option({"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__12954,map__12954__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"group","group",582596132)], null),(function (){var pred__13036 = cljs.core._EQ_;var expr__13037 = val;if(cljs.core.truth_(pred__13036.call(null,"group",expr__13037)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_(pred__13036.call(null,"notgroup",expr__13037)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__12954,map__12954__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "group"},"group"),React.DOM.option({"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__12954,map__12954__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"turnover","turnover",-1778310555)], null),(function (){var pred__13039 = cljs.core._EQ_;var expr__13040 = val;if(cljs.core.truth_(pred__13039.call(null,"low",expr__13040)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13039.call(null,"high",expr__13040)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__12954,map__12954__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "low"},"< \u00A31 million"),React.DOM.option({"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (this$__$1,map__12954,map__12954__$1,cursor){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"sic","sic",589884826)], null),(function (){var pred__13042 = cljs.core._EQ_;var expr__13043 = val;if(cljs.core.truth_(pred__13042.call(null,"A",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"01110",new cljs.core.Keyword(null,"lte","lte",1005402135),"03220"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"B",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"05101",new cljs.core.Keyword(null,"lte","lte",1005402135),"09900"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"C",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"10110",new cljs.core.Keyword(null,"lte","lte",1005402135),"33200"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"D",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"35110",new cljs.core.Keyword(null,"lte","lte",1005402135),"35300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"E",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"36000",new cljs.core.Keyword(null,"lte","lte",1005402135),"39000"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"F",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"41100",new cljs.core.Keyword(null,"lte","lte",1005402135),"43999"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"G",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"45111",new cljs.core.Keyword(null,"lte","lte",1005402135),"47990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"H",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"49100",new cljs.core.Keyword(null,"lte","lte",1005402135),"53202"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"I",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"55100",new cljs.core.Keyword(null,"lte","lte",1005402135),"56302"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"J",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"58110",new cljs.core.Keyword(null,"lte","lte",1005402135),"63990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"K",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"64110",new cljs.core.Keyword(null,"lte","lte",1005402135),"66300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"L",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"68100",new cljs.core.Keyword(null,"lte","lte",1005402135),"68320"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"M",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"69101",new cljs.core.Keyword(null,"lte","lte",1005402135),"75000"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"N",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"77110",new cljs.core.Keyword(null,"lte","lte",1005402135),"82990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"O",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"84110",new cljs.core.Keyword(null,"lte","lte",1005402135),"84300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"P",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"85100",new cljs.core.Keyword(null,"lte","lte",1005402135),"85600"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"Q",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"86101",new cljs.core.Keyword(null,"lte","lte",1005402135),"88990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"R",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"90010",new cljs.core.Keyword(null,"lte","lte",1005402135),"93290"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"S",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"94110",new cljs.core.Keyword(null,"lte","lte",1005402135),"96090"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"T",expr__13043)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"97000",new cljs.core.Keyword(null,"lte","lte",1005402135),"98200"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__13042.call(null,"U",expr__13043)))
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
});})(this$__$1,map__12954,map__12954__$1,cursor))
},React.DOM.option({"value": ""},"all"),React.DOM.option({"value": "A"},"A : Agriculture, Forestry and Fishing"),React.DOM.option({"value": "B"},"B : Mining and Quarrying"),React.DOM.option({"value": "C"},"C : Manufacturing"),React.DOM.option({"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),React.DOM.option({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),React.DOM.option({"value": "F"},"F : Construction"),React.DOM.option({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),React.DOM.option({"value": "H"},"H : Transportation and storage"),React.DOM.option({"value": "I"},"I : Accommodation and food service activities"),React.DOM.option({"value": "J"},"J : Information and communication"),React.DOM.option({"value": "K"},"K : Financial and insurance activities"),React.DOM.option({"value": "L"},"L : Real estate activities"),React.DOM.option({"value": "M"},"M : Professional, scientific and technical activities"),React.DOM.option({"value": "N"},"N : Administrative and support service activities"),React.DOM.option({"value": "O"},"O : Public administration and defence; compulsory social security"),React.DOM.option({"value": "P"},"P : Education"),React.DOM.option({"value": "Q"},"Q : Human health and social work activities"),React.DOM.option({"value": "R"},"R : Arts, entertainment and recreation"),React.DOM.option({"value": "S"},"S : Other service activities"),React.DOM.option({"value": "T"},"T : Activities of households as employers"),React.DOM.option({"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))));
});})(map__12954,map__12954__$1,cursor))
;
clustermap.components.filter.t12955.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12954,map__12954__$1,cursor){
return (function (_12957){var self__ = this;
var _12957__$1 = this;return self__.meta12956;
});})(map__12954,map__12954__$1,cursor))
;
clustermap.components.filter.t12955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12954,map__12954__$1,cursor){
return (function (_12957,meta12956__$1){var self__ = this;
var _12957__$1 = this;return (new clustermap.components.filter.t12955(self__.cursor,self__.map__12954,self__.owner,self__.p__12862,self__.filter_component,meta12956__$1));
});})(map__12954,map__12954__$1,cursor))
;
clustermap.components.filter.__GT_t12955 = ((function (map__12954,map__12954__$1,cursor){
return (function __GT_t12955(cursor__$1,map__12954__$2,owner__$1,p__12862__$1,filter_component__$1,meta12956){return (new clustermap.components.filter.t12955(cursor__$1,map__12954__$2,owner__$1,p__12862__$1,filter_component__$1,meta12956));
});})(map__12954,map__12954__$1,cursor))
;
}
return (new clustermap.components.filter.t12955(cursor,map__12954__$1,owner,p__12862,filter_component,null));
});
clustermap.components.filter.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.filter.filter_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
