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
clustermap.components.filter.filter_component = (function filter_component(p__38561,owner){var map__38653 = p__38561;var map__38653__$1 = ((cljs.core.seq_QMARK_(map__38653))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38653):map__38653);var cursor = map__38653__$1;if(typeof clustermap.components.filter.t38654 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t38654 = (function (cursor,map__38653,owner,p__38561,filter_component,meta38655){
this.cursor = cursor;
this.map__38653 = map__38653;
this.owner = owner;
this.p__38561 = p__38561;
this.filter_component = filter_component;
this.meta38655 = meta38655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t38654.cljs$lang$type = true;
clustermap.components.filter.t38654.cljs$lang$ctorStr = "clustermap.components.filter/t38654";
clustermap.components.filter.t38654.cljs$lang$ctorPrWriter = ((function (map__38653,map__38653__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.filter/t38654");
});})(map__38653,map__38653__$1,cursor))
;
clustermap.components.filter.t38654.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t38654.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38653,map__38653__$1,cursor){
return (function (this$,p__38657,next_state){var self__ = this;
var map__38658 = p__38657;var map__38658__$1 = ((cljs.core.seq_QMARK_(map__38658))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38658):map__38658);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,cljs.core.constant$keyword$1038);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38658__$1,cljs.core.constant$keyword$1039);var this$__$1 = this;var map__38659 = om.core.get_props(self__.owner);var map__38659__$1 = ((cljs.core.seq_QMARK_(map__38659))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38659):map__38659);var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38659__$1,cljs.core.constant$keyword$1038);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38659__$1,cljs.core.constant$keyword$1039);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,components))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1039], null),cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__38653,map__38653__$1,cursor))
;
clustermap.components.filter.t38654.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t38654.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38653,map__38653__$1,cursor){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__38653,map__38653__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1038,cljs.core.constant$keyword$1040], null),(function (){var pred__38732 = cljs.core._EQ_;var expr__38733 = val;if(cljs.core.truth_((pred__38732.cljs$core$IFn$_invoke$arity$2 ? pred__38732.cljs$core$IFn$_invoke$arity$2("new",expr__38733) : pred__38732.call(null,"new",expr__38733))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1042,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38732.cljs$core$IFn$_invoke$arity$2 ? pred__38732.cljs$core$IFn$_invoke$arity$2("old",expr__38733) : pred__38732.call(null,"old",expr__38733))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1043,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__38653,map__38653__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "new"},"< 5 years old"),React.DOM.option({"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__38653,map__38653__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1038,cljs.core.constant$keyword$1044], null),(function (){var pred__38735 = cljs.core._EQ_;var expr__38736 = val;if(cljs.core.truth_((pred__38735.cljs$core$IFn$_invoke$arity$2 ? pred__38735.cljs$core$IFn$_invoke$arity$2("group",expr__38736) : pred__38735.call(null,"group",expr__38736))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1045,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((pred__38735.cljs$core$IFn$_invoke$arity$2 ? pred__38735.cljs$core$IFn$_invoke$arity$2("notgroup",expr__38736) : pred__38735.call(null,"notgroup",expr__38736))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1045,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__38653,map__38653__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "group"},"group"),React.DOM.option({"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__38653,map__38653__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1038,cljs.core.constant$keyword$952], null),(function (){var pred__38738 = cljs.core._EQ_;var expr__38739 = val;if(cljs.core.truth_((pred__38738.cljs$core$IFn$_invoke$arity$2 ? pred__38738.cljs$core$IFn$_invoke$arity$2("low",expr__38739) : pred__38738.call(null,"low",expr__38739))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1043,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38738.cljs$core$IFn$_invoke$arity$2 ? pred__38738.cljs$core$IFn$_invoke$arity$2("high",expr__38739) : pred__38738.call(null,"high",expr__38739))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1042,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__38653,map__38653__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "low"},"< \u00A31 million"),React.DOM.option({"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (this$__$1,map__38653,map__38653__$1,cursor){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1038,cljs.core.constant$keyword$1046], null),(function (){var pred__38741 = cljs.core._EQ_;var expr__38742 = val;if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("A",expr__38742) : pred__38741.call(null,"A",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"01110",cljs.core.constant$keyword$1047,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("B",expr__38742) : pred__38741.call(null,"B",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"05101",cljs.core.constant$keyword$1047,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("C",expr__38742) : pred__38741.call(null,"C",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"10110",cljs.core.constant$keyword$1047,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("D",expr__38742) : pred__38741.call(null,"D",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"35110",cljs.core.constant$keyword$1047,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("E",expr__38742) : pred__38741.call(null,"E",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"36000",cljs.core.constant$keyword$1047,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("F",expr__38742) : pred__38741.call(null,"F",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"41100",cljs.core.constant$keyword$1047,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("G",expr__38742) : pred__38741.call(null,"G",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"45111",cljs.core.constant$keyword$1047,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("H",expr__38742) : pred__38741.call(null,"H",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"49100",cljs.core.constant$keyword$1047,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("I",expr__38742) : pred__38741.call(null,"I",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"55100",cljs.core.constant$keyword$1047,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("J",expr__38742) : pred__38741.call(null,"J",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"58110",cljs.core.constant$keyword$1047,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("K",expr__38742) : pred__38741.call(null,"K",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"64110",cljs.core.constant$keyword$1047,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("L",expr__38742) : pred__38741.call(null,"L",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"68100",cljs.core.constant$keyword$1047,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("M",expr__38742) : pred__38741.call(null,"M",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"69101",cljs.core.constant$keyword$1047,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("N",expr__38742) : pred__38741.call(null,"N",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"77110",cljs.core.constant$keyword$1047,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("O",expr__38742) : pred__38741.call(null,"O",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"84110",cljs.core.constant$keyword$1047,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("P",expr__38742) : pred__38741.call(null,"P",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"85100",cljs.core.constant$keyword$1047,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("Q",expr__38742) : pred__38741.call(null,"Q",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"86101",cljs.core.constant$keyword$1047,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("R",expr__38742) : pred__38741.call(null,"R",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"90010",cljs.core.constant$keyword$1047,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("S",expr__38742) : pred__38741.call(null,"S",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"94110",cljs.core.constant$keyword$1047,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("T",expr__38742) : pred__38741.call(null,"T",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"97000",cljs.core.constant$keyword$1047,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38741.cljs$core$IFn$_invoke$arity$2 ? pred__38741.cljs$core$IFn$_invoke$arity$2("U",expr__38742) : pred__38741.call(null,"U",expr__38742))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1042,"99000",cljs.core.constant$keyword$1047,"99999"], null)], null)], null);
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
});})(this$__$1,map__38653,map__38653__$1,cursor))
},React.DOM.option({"value": ""},"all"),React.DOM.option({"value": "A"},"A : Agriculture, Forestry and Fishing"),React.DOM.option({"value": "B"},"B : Mining and Quarrying"),React.DOM.option({"value": "C"},"C : Manufacturing"),React.DOM.option({"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),React.DOM.option({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),React.DOM.option({"value": "F"},"F : Construction"),React.DOM.option({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),React.DOM.option({"value": "H"},"H : Transportation and storage"),React.DOM.option({"value": "I"},"I : Accommodation and food service activities"),React.DOM.option({"value": "J"},"J : Information and communication"),React.DOM.option({"value": "K"},"K : Financial and insurance activities"),React.DOM.option({"value": "L"},"L : Real estate activities"),React.DOM.option({"value": "M"},"M : Professional, scientific and technical activities"),React.DOM.option({"value": "N"},"N : Administrative and support service activities"),React.DOM.option({"value": "O"},"O : Public administration and defence; compulsory social security"),React.DOM.option({"value": "P"},"P : Education"),React.DOM.option({"value": "Q"},"Q : Human health and social work activities"),React.DOM.option({"value": "R"},"R : Arts, entertainment and recreation"),React.DOM.option({"value": "S"},"S : Other service activities"),React.DOM.option({"value": "T"},"T : Activities of households as employers"),React.DOM.option({"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))));
});})(map__38653,map__38653__$1,cursor))
;
clustermap.components.filter.t38654.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38653,map__38653__$1,cursor){
return (function (_38656){var self__ = this;
var _38656__$1 = this;return self__.meta38655;
});})(map__38653,map__38653__$1,cursor))
;
clustermap.components.filter.t38654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38653,map__38653__$1,cursor){
return (function (_38656,meta38655__$1){var self__ = this;
var _38656__$1 = this;return (new clustermap.components.filter.t38654(self__.cursor,self__.map__38653,self__.owner,self__.p__38561,self__.filter_component,meta38655__$1));
});})(map__38653,map__38653__$1,cursor))
;
clustermap.components.filter.__GT_t38654 = ((function (map__38653,map__38653__$1,cursor){
return (function __GT_t38654(cursor__$1,map__38653__$2,owner__$1,p__38561__$1,filter_component__$1,meta38655){return (new clustermap.components.filter.t38654(cursor__$1,map__38653__$2,owner__$1,p__38561__$1,filter_component__$1,meta38655));
});})(map__38653,map__38653__$1,cursor))
;
}
return (new clustermap.components.filter.t38654(cursor,map__38653__$1,owner,p__38561,filter_component,null));
});
clustermap.components.filter.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.filter.filter_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$884,shared,cljs.core.constant$keyword$887,document.getElementById(elem_id),cljs.core.constant$keyword$859,path], null));
});
