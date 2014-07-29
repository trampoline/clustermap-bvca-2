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
clustermap.components.filter.filter_component = (function filter_component(p__37236,owner){var map__37328 = p__37236;var map__37328__$1 = ((cljs.core.seq_QMARK_(map__37328))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37328):map__37328);var cursor = map__37328__$1;if(typeof clustermap.components.filter.t37329 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t37329 = (function (cursor,map__37328,owner,p__37236,filter_component,meta37330){
this.cursor = cursor;
this.map__37328 = map__37328;
this.owner = owner;
this.p__37236 = p__37236;
this.filter_component = filter_component;
this.meta37330 = meta37330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t37329.cljs$lang$type = true;
clustermap.components.filter.t37329.cljs$lang$ctorStr = "clustermap.components.filter/t37329";
clustermap.components.filter.t37329.cljs$lang$ctorPrWriter = ((function (map__37328,map__37328__$1,cursor){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.filter/t37329");
});})(map__37328,map__37328__$1,cursor))
;
clustermap.components.filter.t37329.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t37329.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37328,map__37328__$1,cursor){
return (function (this$,p__37332,next_state){var self__ = this;
var map__37333 = p__37332;var map__37333__$1 = ((cljs.core.seq_QMARK_(map__37333))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37333):map__37333);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37333__$1,cljs.core.constant$keyword$1048);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37333__$1,cljs.core.constant$keyword$1049);var this$__$1 = this;var map__37334 = om.core.get_props(self__.owner);var map__37334__$1 = ((cljs.core.seq_QMARK_(map__37334))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37334):map__37334);var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37334__$1,cljs.core.constant$keyword$1048);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37334__$1,cljs.core.constant$keyword$1049);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,components))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1049], null),cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__37328,map__37328__$1,cursor))
;
clustermap.components.filter.t37329.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t37329.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37328,map__37328__$1,cursor){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__37328,map__37328__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,cljs.core.constant$keyword$1050], null),(function (){var pred__37407 = cljs.core._EQ_;var expr__37408 = val;if(cljs.core.truth_((pred__37407.cljs$core$IFn$_invoke$arity$2 ? pred__37407.cljs$core$IFn$_invoke$arity$2("new",expr__37408) : pred__37407.call(null,"new",expr__37408))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1052,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37407.cljs$core$IFn$_invoke$arity$2 ? pred__37407.cljs$core$IFn$_invoke$arity$2("old",expr__37408) : pred__37407.call(null,"old",expr__37408))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1053,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__37328,map__37328__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "new"},"< 5 years old"),React.DOM.option({"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__37328,map__37328__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,cljs.core.constant$keyword$1054], null),(function (){var pred__37410 = cljs.core._EQ_;var expr__37411 = val;if(cljs.core.truth_((pred__37410.cljs$core$IFn$_invoke$arity$2 ? pred__37410.cljs$core$IFn$_invoke$arity$2("group",expr__37411) : pred__37410.call(null,"group",expr__37411))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((pred__37410.cljs$core$IFn$_invoke$arity$2 ? pred__37410.cljs$core$IFn$_invoke$arity$2("notgroup",expr__37411) : pred__37410.call(null,"notgroup",expr__37411))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1055,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__37328,map__37328__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "group"},"group"),React.DOM.option({"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__37328,map__37328__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,cljs.core.constant$keyword$962], null),(function (){var pred__37413 = cljs.core._EQ_;var expr__37414 = val;if(cljs.core.truth_((pred__37413.cljs$core$IFn$_invoke$arity$2 ? pred__37413.cljs$core$IFn$_invoke$arity$2("low",expr__37414) : pred__37413.call(null,"low",expr__37414))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1053,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37413.cljs$core$IFn$_invoke$arity$2 ? pred__37413.cljs$core$IFn$_invoke$arity$2("high",expr__37414) : pred__37413.call(null,"high",expr__37414))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1052,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__37328,map__37328__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "low"},"< \u00A31 million"),React.DOM.option({"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (this$__$1,map__37328,map__37328__$1,cursor){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,cljs.core.constant$keyword$1056], null),(function (){var pred__37416 = cljs.core._EQ_;var expr__37417 = val;if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("A",expr__37417) : pred__37416.call(null,"A",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"01110",cljs.core.constant$keyword$1057,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("B",expr__37417) : pred__37416.call(null,"B",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"05101",cljs.core.constant$keyword$1057,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("C",expr__37417) : pred__37416.call(null,"C",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"10110",cljs.core.constant$keyword$1057,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("D",expr__37417) : pred__37416.call(null,"D",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"35110",cljs.core.constant$keyword$1057,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("E",expr__37417) : pred__37416.call(null,"E",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"36000",cljs.core.constant$keyword$1057,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("F",expr__37417) : pred__37416.call(null,"F",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"41100",cljs.core.constant$keyword$1057,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("G",expr__37417) : pred__37416.call(null,"G",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"45111",cljs.core.constant$keyword$1057,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("H",expr__37417) : pred__37416.call(null,"H",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"49100",cljs.core.constant$keyword$1057,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("I",expr__37417) : pred__37416.call(null,"I",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"55100",cljs.core.constant$keyword$1057,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("J",expr__37417) : pred__37416.call(null,"J",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"58110",cljs.core.constant$keyword$1057,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("K",expr__37417) : pred__37416.call(null,"K",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"64110",cljs.core.constant$keyword$1057,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("L",expr__37417) : pred__37416.call(null,"L",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"68100",cljs.core.constant$keyword$1057,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("M",expr__37417) : pred__37416.call(null,"M",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"69101",cljs.core.constant$keyword$1057,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("N",expr__37417) : pred__37416.call(null,"N",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"77110",cljs.core.constant$keyword$1057,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("O",expr__37417) : pred__37416.call(null,"O",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"84110",cljs.core.constant$keyword$1057,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("P",expr__37417) : pred__37416.call(null,"P",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"85100",cljs.core.constant$keyword$1057,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("Q",expr__37417) : pred__37416.call(null,"Q",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"86101",cljs.core.constant$keyword$1057,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("R",expr__37417) : pred__37416.call(null,"R",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"90010",cljs.core.constant$keyword$1057,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("S",expr__37417) : pred__37416.call(null,"S",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"94110",cljs.core.constant$keyword$1057,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("T",expr__37417) : pred__37416.call(null,"T",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"97000",cljs.core.constant$keyword$1057,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37416.cljs$core$IFn$_invoke$arity$2 ? pred__37416.cljs$core$IFn$_invoke$arity$2("U",expr__37417) : pred__37416.call(null,"U",expr__37417))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1051,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1052,"99000",cljs.core.constant$keyword$1057,"99999"], null)], null)], null);
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
});})(this$__$1,map__37328,map__37328__$1,cursor))
},React.DOM.option({"value": ""},"all"),React.DOM.option({"value": "A"},"A : Agriculture, Forestry and Fishing"),React.DOM.option({"value": "B"},"B : Mining and Quarrying"),React.DOM.option({"value": "C"},"C : Manufacturing"),React.DOM.option({"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),React.DOM.option({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),React.DOM.option({"value": "F"},"F : Construction"),React.DOM.option({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),React.DOM.option({"value": "H"},"H : Transportation and storage"),React.DOM.option({"value": "I"},"I : Accommodation and food service activities"),React.DOM.option({"value": "J"},"J : Information and communication"),React.DOM.option({"value": "K"},"K : Financial and insurance activities"),React.DOM.option({"value": "L"},"L : Real estate activities"),React.DOM.option({"value": "M"},"M : Professional, scientific and technical activities"),React.DOM.option({"value": "N"},"N : Administrative and support service activities"),React.DOM.option({"value": "O"},"O : Public administration and defence; compulsory social security"),React.DOM.option({"value": "P"},"P : Education"),React.DOM.option({"value": "Q"},"Q : Human health and social work activities"),React.DOM.option({"value": "R"},"R : Arts, entertainment and recreation"),React.DOM.option({"value": "S"},"S : Other service activities"),React.DOM.option({"value": "T"},"T : Activities of households as employers"),React.DOM.option({"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))));
});})(map__37328,map__37328__$1,cursor))
;
clustermap.components.filter.t37329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37328,map__37328__$1,cursor){
return (function (_37331){var self__ = this;
var _37331__$1 = this;return self__.meta37330;
});})(map__37328,map__37328__$1,cursor))
;
clustermap.components.filter.t37329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37328,map__37328__$1,cursor){
return (function (_37331,meta37330__$1){var self__ = this;
var _37331__$1 = this;return (new clustermap.components.filter.t37329(self__.cursor,self__.map__37328,self__.owner,self__.p__37236,self__.filter_component,meta37330__$1));
});})(map__37328,map__37328__$1,cursor))
;
clustermap.components.filter.__GT_t37329 = ((function (map__37328,map__37328__$1,cursor){
return (function __GT_t37329(cursor__$1,map__37328__$2,owner__$1,p__37236__$1,filter_component__$1,meta37330){return (new clustermap.components.filter.t37329(cursor__$1,map__37328__$2,owner__$1,p__37236__$1,filter_component__$1,meta37330));
});})(map__37328,map__37328__$1,cursor))
;
}
return (new clustermap.components.filter.t37329(cursor,map__37328__$1,owner,p__37236,filter_component,null));
});
clustermap.components.filter.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.filter.filter_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$894,shared,cljs.core.constant$keyword$897,document.getElementById(elem_id),cljs.core.constant$keyword$869,path], null));
});
