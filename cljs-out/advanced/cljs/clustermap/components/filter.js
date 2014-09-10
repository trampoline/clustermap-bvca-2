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
clustermap.components.filter.filter_component = (function filter_component(p__37582,owner){var map__37674 = p__37582;var map__37674__$1 = ((cljs.core.seq_QMARK_(map__37674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37674):map__37674);var cursor = map__37674__$1;if(typeof clustermap.components.filter.t37675 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t37675 = (function (cursor,map__37674,owner,p__37582,filter_component,meta37676){
this.cursor = cursor;
this.map__37674 = map__37674;
this.owner = owner;
this.p__37582 = p__37582;
this.filter_component = filter_component;
this.meta37676 = meta37676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t37675.cljs$lang$type = true;
clustermap.components.filter.t37675.cljs$lang$ctorStr = "clustermap.components.filter/t37675";
clustermap.components.filter.t37675.cljs$lang$ctorPrWriter = ((function (map__37674,map__37674__$1,cursor){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.filter/t37675");
});})(map__37674,map__37674__$1,cursor))
;
clustermap.components.filter.t37675.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t37675.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37674,map__37674__$1,cursor){
return (function (this$,p__37678,next_state){var self__ = this;
var map__37679 = p__37678;var map__37679__$1 = ((cljs.core.seq_QMARK_(map__37679))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37679):map__37679);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37679__$1,cljs.core.constant$keyword$1054);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37679__$1,cljs.core.constant$keyword$1055);var this$__$1 = this;var map__37680 = om.core.get_props(self__.owner);var map__37680__$1 = ((cljs.core.seq_QMARK_(map__37680))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37680):map__37680);var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,cljs.core.constant$keyword$1054);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37680__$1,cljs.core.constant$keyword$1055);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,components))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1055], null),cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.filter(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__37674,map__37674__$1,cursor))
;
clustermap.components.filter.t37675.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t37675.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37674,map__37674__$1,cursor){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__37674,map__37674__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1056], null),(function (){var pred__37753 = cljs.core._EQ_;var expr__37754 = val;if(cljs.core.truth_((pred__37753.cljs$core$IFn$_invoke$arity$2 ? pred__37753.cljs$core$IFn$_invoke$arity$2("new",expr__37754) : pred__37753.call(null,"new",expr__37754))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1058,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37753.cljs$core$IFn$_invoke$arity$2 ? pred__37753.cljs$core$IFn$_invoke$arity$2("old",expr__37754) : pred__37753.call(null,"old",expr__37754))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1059,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__37674,map__37674__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "new"},"< 5 years old"),React.DOM.option({"value": "old"},">= 5 years old")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__37674,map__37674__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1060], null),(function (){var pred__37756 = cljs.core._EQ_;var expr__37757 = val;if(cljs.core.truth_((pred__37756.cljs$core$IFn$_invoke$arity$2 ? pred__37756.cljs$core$IFn$_invoke$arity$2("group",expr__37757) : pred__37756.call(null,"group",expr__37757))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1061,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((pred__37756.cljs$core$IFn$_invoke$arity$2 ? pred__37756.cljs$core$IFn$_invoke$arity$2("notgroup",expr__37757) : pred__37756.call(null,"notgroup",expr__37757))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1061,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__37674,map__37674__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "group"},"group"),React.DOM.option({"value": "notgroup"},"not group")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (this$__$1,map__37674,map__37674__$1,cursor){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,cljs.core.constant$keyword$968], null),(function (){var pred__37759 = cljs.core._EQ_;var expr__37760 = val;if(cljs.core.truth_((pred__37759.cljs$core$IFn$_invoke$arity$2 ? pred__37759.cljs$core$IFn$_invoke$arity$2("low",expr__37760) : pred__37759.call(null,"low",expr__37760))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1059,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37759.cljs$core$IFn$_invoke$arity$2 ? pred__37759.cljs$core$IFn$_invoke$arity$2("high",expr__37760) : pred__37759.call(null,"high",expr__37760))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1058,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(this$__$1,map__37674,map__37674__$1,cursor))
},React.DOM.option({"value": ""},"any"),React.DOM.option({"value": "low"},"< \u00A31 million"),React.DOM.option({"value": "high"},">= \u00A31 million")))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (this$__$1,map__37674,map__37674__$1,cursor){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,cljs.core.constant$keyword$1062], null),(function (){var pred__37762 = cljs.core._EQ_;var expr__37763 = val;if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("A",expr__37763) : pred__37762.call(null,"A",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"01110",cljs.core.constant$keyword$1063,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("B",expr__37763) : pred__37762.call(null,"B",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"05101",cljs.core.constant$keyword$1063,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("C",expr__37763) : pred__37762.call(null,"C",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"10110",cljs.core.constant$keyword$1063,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("D",expr__37763) : pred__37762.call(null,"D",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"35110",cljs.core.constant$keyword$1063,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("E",expr__37763) : pred__37762.call(null,"E",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"36000",cljs.core.constant$keyword$1063,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("F",expr__37763) : pred__37762.call(null,"F",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"41100",cljs.core.constant$keyword$1063,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("G",expr__37763) : pred__37762.call(null,"G",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"45111",cljs.core.constant$keyword$1063,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("H",expr__37763) : pred__37762.call(null,"H",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"49100",cljs.core.constant$keyword$1063,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("I",expr__37763) : pred__37762.call(null,"I",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"55100",cljs.core.constant$keyword$1063,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("J",expr__37763) : pred__37762.call(null,"J",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"58110",cljs.core.constant$keyword$1063,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("K",expr__37763) : pred__37762.call(null,"K",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"64110",cljs.core.constant$keyword$1063,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("L",expr__37763) : pred__37762.call(null,"L",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"68100",cljs.core.constant$keyword$1063,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("M",expr__37763) : pred__37762.call(null,"M",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"69101",cljs.core.constant$keyword$1063,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("N",expr__37763) : pred__37762.call(null,"N",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"77110",cljs.core.constant$keyword$1063,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("O",expr__37763) : pred__37762.call(null,"O",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"84110",cljs.core.constant$keyword$1063,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("P",expr__37763) : pred__37762.call(null,"P",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"85100",cljs.core.constant$keyword$1063,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("Q",expr__37763) : pred__37762.call(null,"Q",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"86101",cljs.core.constant$keyword$1063,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("R",expr__37763) : pred__37762.call(null,"R",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"90010",cljs.core.constant$keyword$1063,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("S",expr__37763) : pred__37762.call(null,"S",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"94110",cljs.core.constant$keyword$1063,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("T",expr__37763) : pred__37762.call(null,"T",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"97000",cljs.core.constant$keyword$1063,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__37762.cljs$core$IFn$_invoke$arity$2 ? pred__37762.cljs$core$IFn$_invoke$arity$2("U",expr__37763) : pred__37762.call(null,"U",expr__37763))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1058,"99000",cljs.core.constant$keyword$1063,"99999"], null)], null)], null);
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
});})(this$__$1,map__37674,map__37674__$1,cursor))
},React.DOM.option({"value": ""},"all"),React.DOM.option({"value": "A"},"A : Agriculture, Forestry and Fishing"),React.DOM.option({"value": "B"},"B : Mining and Quarrying"),React.DOM.option({"value": "C"},"C : Manufacturing"),React.DOM.option({"value": "D"},"D : Electricity, gas, steam and air conditioning supply"),React.DOM.option({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities"),React.DOM.option({"value": "F"},"F : Construction"),React.DOM.option({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles"),React.DOM.option({"value": "H"},"H : Transportation and storage"),React.DOM.option({"value": "I"},"I : Accommodation and food service activities"),React.DOM.option({"value": "J"},"J : Information and communication"),React.DOM.option({"value": "K"},"K : Financial and insurance activities"),React.DOM.option({"value": "L"},"L : Real estate activities"),React.DOM.option({"value": "M"},"M : Professional, scientific and technical activities"),React.DOM.option({"value": "N"},"N : Administrative and support service activities"),React.DOM.option({"value": "O"},"O : Public administration and defence; compulsory social security"),React.DOM.option({"value": "P"},"P : Education"),React.DOM.option({"value": "Q"},"Q : Human health and social work activities"),React.DOM.option({"value": "R"},"R : Arts, entertainment and recreation"),React.DOM.option({"value": "S"},"S : Other service activities"),React.DOM.option({"value": "T"},"T : Activities of households as employers"),React.DOM.option({"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))));
});})(map__37674,map__37674__$1,cursor))
;
clustermap.components.filter.t37675.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37674,map__37674__$1,cursor){
return (function (_37677){var self__ = this;
var _37677__$1 = this;return self__.meta37676;
});})(map__37674,map__37674__$1,cursor))
;
clustermap.components.filter.t37675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37674,map__37674__$1,cursor){
return (function (_37677,meta37676__$1){var self__ = this;
var _37677__$1 = this;return (new clustermap.components.filter.t37675(self__.cursor,self__.map__37674,self__.owner,self__.p__37582,self__.filter_component,meta37676__$1));
});})(map__37674,map__37674__$1,cursor))
;
clustermap.components.filter.__GT_t37675 = ((function (map__37674,map__37674__$1,cursor){
return (function __GT_t37675(cursor__$1,map__37674__$2,owner__$1,p__37582__$1,filter_component__$1,meta37676){return (new clustermap.components.filter.t37675(cursor__$1,map__37674__$2,owner__$1,p__37582__$1,filter_component__$1,meta37676));
});})(map__37674,map__37674__$1,cursor))
;
}
return (new clustermap.components.filter.t37675(cursor,map__37674__$1,owner,p__37582,filter_component,null));
});
clustermap.components.filter.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.filter.filter_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$900,shared,cljs.core.constant$keyword$903,document.getElementById(elem_id),cljs.core.constant$keyword$875,path], null));
});
