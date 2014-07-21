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
clustermap.components.filter.filter_component = (function filter_component(p__38548,owner){var map__38640 = p__38548;var map__38640__$1 = ((cljs.core.seq_QMARK_(map__38640))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38640):map__38640);var cursor = map__38640__$1;if(typeof clustermap.components.filter.t38641 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t38641 = (function (cursor,map__38640,owner,p__38548,filter_component,meta38642){
this.cursor = cursor;
this.map__38640 = map__38640;
this.owner = owner;
this.p__38548 = p__38548;
this.filter_component = filter_component;
this.meta38642 = meta38642;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t38641.cljs$lang$type = true;
clustermap.components.filter.t38641.cljs$lang$ctorStr = "clustermap.components.filter/t38641";
clustermap.components.filter.t38641.cljs$lang$ctorPrWriter = ((function (map__38640,map__38640__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.filter/t38641");
});})(map__38640,map__38640__$1,cursor))
;
clustermap.components.filter.t38641.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t38641.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38640,map__38640__$1,cursor){
return (function (this$,p__38644,next_state){var self__ = this;
var map__38645 = p__38644;var map__38645__$1 = ((cljs.core.seq_QMARK_(map__38645))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38645):map__38645);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.constant$keyword$1037);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.constant$keyword$1038);var this$__$1 = this;var map__38646 = om.core.get_props(self__.owner);var map__38646__$1 = ((cljs.core.seq_QMARK_(map__38646))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38646):map__38646);var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.constant$keyword$1037);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.constant$keyword$1038);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,components))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1038], null),cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__38640,map__38640__$1,cursor))
;
clustermap.components.filter.t38641.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t38641.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38640,map__38640__$1,cursor){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__38640,map__38640__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1037,cljs.core.constant$keyword$1039], null),(function (){var pred__38719 = cljs.core._EQ_;var expr__38720 = val;if(cljs.core.truth_((pred__38719.cljs$core$IFn$_invoke$arity$2 ? pred__38719.cljs$core$IFn$_invoke$arity$2("new",expr__38720) : pred__38719.call(null,"new",expr__38720))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38719.cljs$core$IFn$_invoke$arity$2 ? pred__38719.cljs$core$IFn$_invoke$arity$2("old",expr__38720) : pred__38719.call(null,"old",expr__38720))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1042,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__38640,map__38640__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "new"},"< 5 years old"),React.DOM.option({"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__38640,map__38640__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1037,cljs.core.constant$keyword$1043], null),(function (){var pred__38722 = cljs.core._EQ_;var expr__38723 = val;if(cljs.core.truth_((pred__38722.cljs$core$IFn$_invoke$arity$2 ? pred__38722.cljs$core$IFn$_invoke$arity$2("group",expr__38723) : pred__38722.call(null,"group",expr__38723))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1044,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((pred__38722.cljs$core$IFn$_invoke$arity$2 ? pred__38722.cljs$core$IFn$_invoke$arity$2("notgroup",expr__38723) : pred__38722.call(null,"notgroup",expr__38723))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1044,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__38640,map__38640__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "group"},"group"),React.DOM.option({"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__38640,map__38640__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1037,cljs.core.constant$keyword$951], null),(function (){var pred__38725 = cljs.core._EQ_;var expr__38726 = val;if(cljs.core.truth_((pred__38725.cljs$core$IFn$_invoke$arity$2 ? pred__38725.cljs$core$IFn$_invoke$arity$2("low",expr__38726) : pred__38725.call(null,"low",expr__38726))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1042,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38725.cljs$core$IFn$_invoke$arity$2 ? pred__38725.cljs$core$IFn$_invoke$arity$2("high",expr__38726) : pred__38725.call(null,"high",expr__38726))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1041,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__38640,map__38640__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "low"},"< \u00A31 million"),React.DOM.option({"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (this$__$1,map__38640,map__38640__$1,cursor){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1037,cljs.core.constant$keyword$1045], null),(function (){var pred__38728 = cljs.core._EQ_;var expr__38729 = val;if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("A",expr__38729) : pred__38728.call(null,"A",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"01110",cljs.core.constant$keyword$1046,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("B",expr__38729) : pred__38728.call(null,"B",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"05101",cljs.core.constant$keyword$1046,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("C",expr__38729) : pred__38728.call(null,"C",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"10110",cljs.core.constant$keyword$1046,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("D",expr__38729) : pred__38728.call(null,"D",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"35110",cljs.core.constant$keyword$1046,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("E",expr__38729) : pred__38728.call(null,"E",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"36000",cljs.core.constant$keyword$1046,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("F",expr__38729) : pred__38728.call(null,"F",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"41100",cljs.core.constant$keyword$1046,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("G",expr__38729) : pred__38728.call(null,"G",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"45111",cljs.core.constant$keyword$1046,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("H",expr__38729) : pred__38728.call(null,"H",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"49100",cljs.core.constant$keyword$1046,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("I",expr__38729) : pred__38728.call(null,"I",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"55100",cljs.core.constant$keyword$1046,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("J",expr__38729) : pred__38728.call(null,"J",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"58110",cljs.core.constant$keyword$1046,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("K",expr__38729) : pred__38728.call(null,"K",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"64110",cljs.core.constant$keyword$1046,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("L",expr__38729) : pred__38728.call(null,"L",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"68100",cljs.core.constant$keyword$1046,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("M",expr__38729) : pred__38728.call(null,"M",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"69101",cljs.core.constant$keyword$1046,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("N",expr__38729) : pred__38728.call(null,"N",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"77110",cljs.core.constant$keyword$1046,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("O",expr__38729) : pred__38728.call(null,"O",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"84110",cljs.core.constant$keyword$1046,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("P",expr__38729) : pred__38728.call(null,"P",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"85100",cljs.core.constant$keyword$1046,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("Q",expr__38729) : pred__38728.call(null,"Q",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"86101",cljs.core.constant$keyword$1046,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("R",expr__38729) : pred__38728.call(null,"R",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"90010",cljs.core.constant$keyword$1046,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("S",expr__38729) : pred__38728.call(null,"S",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"94110",cljs.core.constant$keyword$1046,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("T",expr__38729) : pred__38728.call(null,"T",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"97000",cljs.core.constant$keyword$1046,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__38728.cljs$core$IFn$_invoke$arity$2 ? pred__38728.cljs$core$IFn$_invoke$arity$2("U",expr__38729) : pred__38728.call(null,"U",expr__38729))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1040,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1041,"99000",cljs.core.constant$keyword$1046,"99999"], null)], null)], null);
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
});})(this$__$1,map__38640,map__38640__$1,cursor))
},React.DOM.option({"value": ""},"all"),React.DOM.option({"value": "A"},"A : Agriculture, Forestry and Fishing"),React.DOM.option({"value": "B"},"B : Mining and Quarrying"),React.DOM.option({"value": "C"},"C : Manufacturing"),React.DOM.option({"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),React.DOM.option({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),React.DOM.option({"value": "F"},"F : Construction"),React.DOM.option({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),React.DOM.option({"value": "H"},"H : Transportation and storage"),React.DOM.option({"value": "I"},"I : Accommodation and food service activities"),React.DOM.option({"value": "J"},"J : Information and communication"),React.DOM.option({"value": "K"},"K : Financial and insurance activities"),React.DOM.option({"value": "L"},"L : Real estate activities"),React.DOM.option({"value": "M"},"M : Professional, scientific and technical activities"),React.DOM.option({"value": "N"},"N : Administrative and support service activities"),React.DOM.option({"value": "O"},"O : Public administration and defence; compulsory social security"),React.DOM.option({"value": "P"},"P : Education"),React.DOM.option({"value": "Q"},"Q : Human health and social work activities"),React.DOM.option({"value": "R"},"R : Arts, entertainment and recreation"),React.DOM.option({"value": "S"},"S : Other service activities"),React.DOM.option({"value": "T"},"T : Activities of households as employers"),React.DOM.option({"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))));
});})(map__38640,map__38640__$1,cursor))
;
clustermap.components.filter.t38641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38640,map__38640__$1,cursor){
return (function (_38643){var self__ = this;
var _38643__$1 = this;return self__.meta38642;
});})(map__38640,map__38640__$1,cursor))
;
clustermap.components.filter.t38641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38640,map__38640__$1,cursor){
return (function (_38643,meta38642__$1){var self__ = this;
var _38643__$1 = this;return (new clustermap.components.filter.t38641(self__.cursor,self__.map__38640,self__.owner,self__.p__38548,self__.filter_component,meta38642__$1));
});})(map__38640,map__38640__$1,cursor))
;
clustermap.components.filter.__GT_t38641 = ((function (map__38640,map__38640__$1,cursor){
return (function __GT_t38641(cursor__$1,map__38640__$2,owner__$1,p__38548__$1,filter_component__$1,meta38642){return (new clustermap.components.filter.t38641(cursor__$1,map__38640__$2,owner__$1,p__38548__$1,filter_component__$1,meta38642));
});})(map__38640,map__38640__$1,cursor))
;
}
return (new clustermap.components.filter.t38641(cursor,map__38640__$1,owner,p__38548,filter_component,null));
});
clustermap.components.filter.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.filter.filter_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$883,shared,cljs.core.constant$keyword$886,document.getElementById(elem_id),cljs.core.constant$keyword$858,path], null));
});
