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
clustermap.components.filter.render = (function render(cursor,owner,state){return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"age","age",-604307804)], null),(function (){var pred__25583 = cljs.core._EQ_;var expr__25584 = val;if(cljs.core.truth_(pred__25583.call(null,"new",expr__25584)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25583.call(null,"old",expr__25584)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
})},sablono.interpreter.option.call(null,{"value": ""},"any"),sablono.interpreter.option.call(null,{"value": "new"},"< 5 years old"),sablono.interpreter.option.call(null,{"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"group","group",582596132)], null),(function (){var pred__25586 = cljs.core._EQ_;var expr__25587 = val;if(cljs.core.truth_(pred__25586.call(null,"group",expr__25587)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_(pred__25586.call(null,"notgroup",expr__25587)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"term","term",-1817390416),new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
})},sablono.interpreter.option.call(null,{"value": ""},"any"),sablono.interpreter.option.call(null,{"value": "group"},"group"),sablono.interpreter.option.call(null,{"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"turnover","turnover",-1778310555)], null),(function (){var pred__25589 = cljs.core._EQ_;var expr__25590 = val;if(cljs.core.truth_(pred__25589.call(null,"low",expr__25590)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lt","lt",421989243),(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25589.call(null,"high",expr__25590)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gte","gte",1000474126),(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
})},sablono.interpreter.option.call(null,{"value": ""},"any"),sablono.interpreter.option.call(null,{"value": "low"},"< \u00A31 million"),sablono.interpreter.option.call(null,{"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.call(null,cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"sic","sic",589884826)], null),(function (){var pred__25592 = cljs.core._EQ_;var expr__25593 = val;if(cljs.core.truth_(pred__25592.call(null,"A",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"01110",new cljs.core.Keyword(null,"lte","lte",1005402135),"03220"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"B",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"05101",new cljs.core.Keyword(null,"lte","lte",1005402135),"09900"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"C",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"10110",new cljs.core.Keyword(null,"lte","lte",1005402135),"33200"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"D",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"35110",new cljs.core.Keyword(null,"lte","lte",1005402135),"35300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"E",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"36000",new cljs.core.Keyword(null,"lte","lte",1005402135),"39000"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"F",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"41100",new cljs.core.Keyword(null,"lte","lte",1005402135),"43999"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"G",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"45111",new cljs.core.Keyword(null,"lte","lte",1005402135),"47990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"H",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"49100",new cljs.core.Keyword(null,"lte","lte",1005402135),"53202"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"I",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"55100",new cljs.core.Keyword(null,"lte","lte",1005402135),"56302"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"J",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"58110",new cljs.core.Keyword(null,"lte","lte",1005402135),"63990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"K",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"64110",new cljs.core.Keyword(null,"lte","lte",1005402135),"66300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"L",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"68100",new cljs.core.Keyword(null,"lte","lte",1005402135),"68320"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"M",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"69101",new cljs.core.Keyword(null,"lte","lte",1005402135),"75000"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"N",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"77110",new cljs.core.Keyword(null,"lte","lte",1005402135),"82990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"O",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"84110",new cljs.core.Keyword(null,"lte","lte",1005402135),"84300"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"P",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"85100",new cljs.core.Keyword(null,"lte","lte",1005402135),"85600"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"Q",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"86101",new cljs.core.Keyword(null,"lte","lte",1005402135),"88990"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"R",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"90010",new cljs.core.Keyword(null,"lte","lte",1005402135),"93290"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"S",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"94110",new cljs.core.Keyword(null,"lte","lte",1005402135),"96090"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"T",expr__25593)))
{return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gte","gte",1000474126),"97000",new cljs.core.Keyword(null,"lte","lte",1005402135),"98200"], null)], null)], null);
} else
{if(cljs.core.truth_(pred__25592.call(null,"U",expr__25593)))
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
})},sablono.interpreter.option.call(null,{"value": ""},"all"),sablono.interpreter.option.call(null,{"value": "A"},"A : Agriculture, Forestry and Fishing"),sablono.interpreter.option.call(null,{"value": "B"},"B : Mining and Quarrying"),sablono.interpreter.option.call(null,{"value": "C"},"C : Manufacturing"),sablono.interpreter.option.call(null,{"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),sablono.interpreter.option.call(null,{"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),sablono.interpreter.option.call(null,{"value": "F"},"F : Construction"),sablono.interpreter.option.call(null,{"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),sablono.interpreter.option.call(null,{"value": "H"},"H : Transportation and storage"),sablono.interpreter.option.call(null,{"value": "I"},"I : Accommodation and food service activities"),sablono.interpreter.option.call(null,{"value": "J"},"J : Information and communication"),sablono.interpreter.option.call(null,{"value": "K"},"K : Financial and insurance activities"),sablono.interpreter.option.call(null,{"value": "L"},"L : Real estate activities"),sablono.interpreter.option.call(null,{"value": "M"},"M : Professional, scientific and technical activities"),sablono.interpreter.option.call(null,{"value": "N"},"N : Administrative and support service activities"),sablono.interpreter.option.call(null,{"value": "O"},"O : Public administration and defence; compulsory social security"),sablono.interpreter.option.call(null,{"value": "P"},"P : Education"),sablono.interpreter.option.call(null,{"value": "Q"},"Q : Human health and social work activities"),sablono.interpreter.option.call(null,{"value": "R"},"R : Arts, entertainment and recreation"),sablono.interpreter.option.call(null,{"value": "S"},"S : Other service activities"),sablono.interpreter.option.call(null,{"value": "T"},"T : Activities of households as employers"),sablono.interpreter.option.call(null,{"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))));
});
clustermap.components.filter.filter_component = (function filter_component(p__25595,owner){var map__25602 = p__25595;var map__25602__$1 = ((cljs.core.seq_QMARK_.call(null,map__25602))?cljs.core.apply.call(null,cljs.core.hash_map,map__25602):map__25602);var cursor = map__25602__$1;var components = cljs.core.get.call(null,map__25602__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var compiled = cljs.core.get.call(null,map__25602__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));if(typeof clustermap.components.filter.t25603 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t25603 = (function (compiled,components,cursor,map__25602,owner,p__25595,filter_component,meta25604){
this.compiled = compiled;
this.components = components;
this.cursor = cursor;
this.map__25602 = map__25602;
this.owner = owner;
this.p__25595 = p__25595;
this.filter_component = filter_component;
this.meta25604 = meta25604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t25603.cljs$lang$type = true;
clustermap.components.filter.t25603.cljs$lang$ctorStr = "clustermap.components.filter/t25603";
clustermap.components.filter.t25603.cljs$lang$ctorPrWriter = ((function (map__25602,map__25602__$1,cursor,components,compiled){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.filter/t25603");
});})(map__25602,map__25602__$1,cursor,components,compiled))
;
clustermap.components.filter.t25603.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t25603.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__25602,map__25602__$1,cursor,components,compiled){
return (function (_,p__25606,next_state){var self__ = this;
var map__25607 = p__25606;var map__25607__$1 = ((cljs.core.seq_QMARK_.call(null,map__25607))?cljs.core.apply.call(null,cljs.core.hash_map,map__25607):map__25607);var next_components = cljs.core.get.call(null,map__25607__$1,new cljs.core.Keyword(null,"components","components",-1073188942));var next_compiled = cljs.core.get.call(null,map__25607__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var ___$1 = this;if(cljs.core.not_EQ_.call(null,next_components,self__.components))
{return om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compiled","compiled",850043082)], null),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,cljs.core.identity,cljs.core.map.call(null,om.core._value,cljs.core.vals.call(null,next_components)))));
} else
{return null;
}
});})(map__25602,map__25602__$1,cursor,components,compiled))
;
clustermap.components.filter.t25603.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t25603.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25602,map__25602__$1,cursor,components,compiled){
return (function (_,state){var self__ = this;
var ___$1 = this;return clustermap.components.filter.render.call(null,self__.cursor,self__.owner,state);
});})(map__25602,map__25602__$1,cursor,components,compiled))
;
clustermap.components.filter.t25603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25602,map__25602__$1,cursor,components,compiled){
return (function (_25605){var self__ = this;
var _25605__$1 = this;return self__.meta25604;
});})(map__25602,map__25602__$1,cursor,components,compiled))
;
clustermap.components.filter.t25603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25602,map__25602__$1,cursor,components,compiled){
return (function (_25605,meta25604__$1){var self__ = this;
var _25605__$1 = this;return (new clustermap.components.filter.t25603(self__.compiled,self__.components,self__.cursor,self__.map__25602,self__.owner,self__.p__25595,self__.filter_component,meta25604__$1));
});})(map__25602,map__25602__$1,cursor,components,compiled))
;
clustermap.components.filter.__GT_t25603 = ((function (map__25602,map__25602__$1,cursor,components,compiled){
return (function __GT_t25603(compiled__$1,components__$1,cursor__$1,map__25602__$2,owner__$1,p__25595__$1,filter_component__$1,meta25604){return (new clustermap.components.filter.t25603(compiled__$1,components__$1,cursor__$1,map__25602__$2,owner__$1,p__25595__$1,filter_component__$1,meta25604));
});})(map__25602,map__25602__$1,cursor,components,compiled))
;
}
return (new clustermap.components.filter.t25603(compiled,components,cursor,map__25602__$1,owner,p__25595,filter_component,null));
});
