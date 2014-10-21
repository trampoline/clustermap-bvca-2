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
clustermap.components.filter.render = (function render(p__42639,owner,state){var map__42741 = p__42639;var map__42741__$1 = ((cljs.core.seq_QMARK_(map__42741))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42741):map__42741);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42741__$1,cljs.core.constant$keyword$1120);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42741__$1,cljs.core.constant$keyword$1128);return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"filter by view"),React.DOM.div({"className": "tbl-cell"},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__42741,map__42741__$1,bounds,filter_spec){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289], null),val);
});})(map__42741,map__42741__$1,bounds,filter_spec))
}) : sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__42741,map__42741__$1,bounds,filter_spec){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1289], null),val);
});})(map__42741,map__42741__$1,bounds,filter_spec))
})))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__42741,map__42741__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1290,cljs.core.constant$keyword$1291], null),(function (){var pred__42830 = cljs.core._EQ_;var expr__42831 = val;if(cljs.core.truth_((pred__42830.cljs$core$IFn$_invoke$arity$2 ? pred__42830.cljs$core$IFn$_invoke$arity$2("new",expr__42831) : pred__42830.call(null,"new",expr__42831))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1293,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42830.cljs$core$IFn$_invoke$arity$2 ? pred__42830.cljs$core$IFn$_invoke$arity$2("old",expr__42831) : pred__42830.call(null,"old",expr__42831))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1294,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(map__42741,map__42741__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"any") : sablono.interpreter.option.call(null,{"value": ""},"any")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "new"},"< 5 years old") : sablono.interpreter.option.call(null,{"value": "new"},"< 5 years old")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "old"},">= 5 years old") : sablono.interpreter.option.call(null,{"value": "old"},">= 5 years old"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__42741,map__42741__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1290,cljs.core.constant$keyword$1295], null),(function (){var pred__42833 = cljs.core._EQ_;var expr__42834 = val;if(cljs.core.truth_((pred__42833.cljs$core$IFn$_invoke$arity$2 ? pred__42833.cljs$core$IFn$_invoke$arity$2("group",expr__42834) : pred__42833.call(null,"group",expr__42834))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1296,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((pred__42833.cljs$core$IFn$_invoke$arity$2 ? pred__42833.cljs$core$IFn$_invoke$arity$2("notgroup",expr__42834) : pred__42833.call(null,"notgroup",expr__42834))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1296,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(map__42741,map__42741__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"any") : sablono.interpreter.option.call(null,{"value": ""},"any")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "group"},"group") : sablono.interpreter.option.call(null,{"value": "group"},"group")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "notgroup"},"not group") : sablono.interpreter.option.call(null,{"value": "notgroup"},"not group"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__42741,map__42741__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1290,cljs.core.constant$keyword$1297], null),(function (){var pred__42836 = cljs.core._EQ_;var expr__42837 = val;if(cljs.core.truth_((pred__42836.cljs$core$IFn$_invoke$arity$2 ? pred__42836.cljs$core$IFn$_invoke$arity$2("low",expr__42837) : pred__42836.call(null,"low",expr__42837))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1294,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42836.cljs$core$IFn$_invoke$arity$2 ? pred__42836.cljs$core$IFn$_invoke$arity$2("high",expr__42837) : pred__42836.call(null,"high",expr__42837))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1293,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(map__42741,map__42741__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"any") : sablono.interpreter.option.call(null,{"value": ""},"any")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "low"},"< \u00A31 million") : sablono.interpreter.option.call(null,{"value": "low"},"< \u00A31 million")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "high"},">= \u00A31 million") : sablono.interpreter.option.call(null,{"value": "high"},">= \u00A31 million"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (map__42741,map__42741__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1290,cljs.core.constant$keyword$1298], null),(function (){var pred__42839 = cljs.core._EQ_;var expr__42840 = val;if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("A",expr__42840) : pred__42839.call(null,"A",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"01110",cljs.core.constant$keyword$1299,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("B",expr__42840) : pred__42839.call(null,"B",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"05101",cljs.core.constant$keyword$1299,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("C",expr__42840) : pred__42839.call(null,"C",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"10110",cljs.core.constant$keyword$1299,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("D",expr__42840) : pred__42839.call(null,"D",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"35110",cljs.core.constant$keyword$1299,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("E",expr__42840) : pred__42839.call(null,"E",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"36000",cljs.core.constant$keyword$1299,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("F",expr__42840) : pred__42839.call(null,"F",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"41100",cljs.core.constant$keyword$1299,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("G",expr__42840) : pred__42839.call(null,"G",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"45111",cljs.core.constant$keyword$1299,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("H",expr__42840) : pred__42839.call(null,"H",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"49100",cljs.core.constant$keyword$1299,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("I",expr__42840) : pred__42839.call(null,"I",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"55100",cljs.core.constant$keyword$1299,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("J",expr__42840) : pred__42839.call(null,"J",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"58110",cljs.core.constant$keyword$1299,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("K",expr__42840) : pred__42839.call(null,"K",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"64110",cljs.core.constant$keyword$1299,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("L",expr__42840) : pred__42839.call(null,"L",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"68100",cljs.core.constant$keyword$1299,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("M",expr__42840) : pred__42839.call(null,"M",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"69101",cljs.core.constant$keyword$1299,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("N",expr__42840) : pred__42839.call(null,"N",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"77110",cljs.core.constant$keyword$1299,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("O",expr__42840) : pred__42839.call(null,"O",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"84110",cljs.core.constant$keyword$1299,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("P",expr__42840) : pred__42839.call(null,"P",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"85100",cljs.core.constant$keyword$1299,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("Q",expr__42840) : pred__42839.call(null,"Q",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"86101",cljs.core.constant$keyword$1299,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("R",expr__42840) : pred__42839.call(null,"R",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"90010",cljs.core.constant$keyword$1299,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("S",expr__42840) : pred__42839.call(null,"S",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"94110",cljs.core.constant$keyword$1299,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("T",expr__42840) : pred__42839.call(null,"T",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"97000",cljs.core.constant$keyword$1299,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__42839.cljs$core$IFn$_invoke$arity$2 ? pred__42839.cljs$core$IFn$_invoke$arity$2("U",expr__42840) : pred__42839.call(null,"U",expr__42840))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1292,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1293,"99000",cljs.core.constant$keyword$1299,"99999"], null)], null)], null);
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
});})(map__42741,map__42741__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"all") : sablono.interpreter.option.call(null,{"value": ""},"all")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "A"},"A : Agriculture, Forestry and Fishing") : sablono.interpreter.option.call(null,{"value": "A"},"A : Agriculture, Forestry and Fishing")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "B"},"B : Mining and Quarrying") : sablono.interpreter.option.call(null,{"value": "B"},"B : Mining and Quarrying")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "C"},"C : Manufacturing") : sablono.interpreter.option.call(null,{"value": "C"},"C : Manufacturing")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "D"},"D : Electricity, gas, steam and air conditioning supply") : sablono.interpreter.option.call(null,{"value": "D"},"D : Electricity, gas, steam and air conditioning supply")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities") : sablono.interpreter.option.call(null,{"value": "E"},"E : Water supply, sewerage, waste management and remediation activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "F"},"F : Construction") : sablono.interpreter.option.call(null,{"value": "F"},"F : Construction")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles") : sablono.interpreter.option.call(null,{"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "H"},"H : Transportation and storage") : sablono.interpreter.option.call(null,{"value": "H"},"H : Transportation and storage")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "I"},"I : Accommodation and food service activities") : sablono.interpreter.option.call(null,{"value": "I"},"I : Accommodation and food service activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "J"},"J : Information and communication") : sablono.interpreter.option.call(null,{"value": "J"},"J : Information and communication")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "K"},"K : Financial and insurance activities") : sablono.interpreter.option.call(null,{"value": "K"},"K : Financial and insurance activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "L"},"L : Real estate activities") : sablono.interpreter.option.call(null,{"value": "L"},"L : Real estate activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "M"},"M : Professional, scientific and technical activities") : sablono.interpreter.option.call(null,{"value": "M"},"M : Professional, scientific and technical activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "N"},"N : Administrative and support service activities") : sablono.interpreter.option.call(null,{"value": "N"},"N : Administrative and support service activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "O"},"O : Public administration and defence; compulsory social security") : sablono.interpreter.option.call(null,{"value": "O"},"O : Public administration and defence; compulsory social security")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "P"},"P : Education") : sablono.interpreter.option.call(null,{"value": "P"},"P : Education")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "Q"},"Q : Human health and social work activities") : sablono.interpreter.option.call(null,{"value": "Q"},"Q : Human health and social work activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "R"},"R : Arts, entertainment and recreation") : sablono.interpreter.option.call(null,{"value": "R"},"R : Arts, entertainment and recreation")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "S"},"S : Other service activities") : sablono.interpreter.option.call(null,{"value": "S"},"S : Other service activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "T"},"T : Activities of households as employers") : sablono.interpreter.option.call(null,{"value": "T"},"T : Activities of households as employers")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "U"},"U : Activities of extraterritorial organisations and bodies") : sablono.interpreter.option.call(null,{"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"ONS sector"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (map__42741,map__42741__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1290,cljs.core.constant$keyword$1300], null),(cljs.core.truth_(cljs.core.not_empty(val))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1301,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1195,"?tags",cljs.core.constant$keyword$1121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1302,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1303,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1296,new cljs.core.PersistentArrayMap(null, 1, ["type","ons_sector"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1296,new cljs.core.PersistentArrayMap(null, 1, ["tag",val], null)], null)], null)], null)], null)], null)], null):null));
});})(map__42741,map__42741__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"all") : sablono.interpreter.option.call(null,{"value": ""},"all")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "other_scitechmanf"},"Other scientific/technological manufacture") : sablono.interpreter.option.call(null,{"value": "other_scitechmanf"},"Other scientific/technological manufacture")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "lifesci_health"},"Life Sciences & Healthcare") : sablono.interpreter.option.call(null,{"value": "lifesci_health"},"Life Sciences & Healthcare")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "digi_tech"},"Digital Technologies") : sablono.interpreter.option.call(null,{"value": "digi_tech"},"Digital Technologies")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "pub_broad"},"Publishing & Broadcasting") : sablono.interpreter.option.call(null,{"value": "pub_broad"},"Publishing & Broadcasting")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "other_scitech_serv"},"Other scientific/technological services") : sablono.interpreter.option.call(null,{"value": "other_scitech_serv"},"Other scientific/technological services")))))));
});
clustermap.components.filter.filter_component = (function filter_component(p__42842,owner){var map__42851 = p__42842;var map__42851__$1 = ((cljs.core.seq_QMARK_(map__42851))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42851):map__42851);var props = map__42851__$1;var map__42852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42851__$1,cljs.core.constant$keyword$1128);var map__42852__$1 = ((cljs.core.seq_QMARK_(map__42852))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42852):map__42852);var filter_spec = map__42852__$1;var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42852__$1,cljs.core.constant$keyword$1290);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42852__$1,cljs.core.constant$keyword$1289);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42852__$1,cljs.core.constant$keyword$1304);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42851__$1,cljs.core.constant$keyword$1120);if(typeof clustermap.components.filter.t42853 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t42853 = (function (filter_component,owner,p__42842,filter_by_view,props,filter_spec,compiled,map__42852,bounds,components,map__42851,meta42854){
this.filter_component = filter_component;
this.owner = owner;
this.p__42842 = p__42842;
this.filter_by_view = filter_by_view;
this.props = props;
this.filter_spec = filter_spec;
this.compiled = compiled;
this.map__42852 = map__42852;
this.bounds = bounds;
this.components = components;
this.map__42851 = map__42851;
this.meta42854 = meta42854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t42853.cljs$lang$type = true;
clustermap.components.filter.t42853.cljs$lang$ctorStr = "clustermap.components.filter/t42853";
clustermap.components.filter.t42853.cljs$lang$ctorPrWriter = ((function (map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.filter/t42853");
});})(map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t42853.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t42853.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,p__42856,next_state){var self__ = this;
var map__42857 = p__42856;var map__42857__$1 = ((cljs.core.seq_QMARK_(map__42857))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42857):map__42857);var map__42858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42857__$1,cljs.core.constant$keyword$1128);var map__42858__$1 = ((cljs.core.seq_QMARK_(map__42858))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42858):map__42858);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,cljs.core.constant$keyword$1290);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,cljs.core.constant$keyword$1289);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42858__$1,cljs.core.constant$keyword$1304);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42857__$1,cljs.core.constant$keyword$1120);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,self__.components);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
})()))
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1304], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t42853.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t42853.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;return clustermap.components.filter.render(self__.props,self__.owner,state);
});})(map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t42853.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_42855){var self__ = this;
var _42855__$1 = this;return self__.meta42854;
});})(map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t42853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_42855,meta42854__$1){var self__ = this;
var _42855__$1 = this;return (new clustermap.components.filter.t42853(self__.filter_component,self__.owner,self__.p__42842,self__.filter_by_view,self__.props,self__.filter_spec,self__.compiled,self__.map__42852,self__.bounds,self__.components,self__.map__42851,meta42854__$1));
});})(map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.__GT_t42853 = ((function (map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function __GT_t42853(filter_component__$1,owner__$1,p__42842__$1,filter_by_view__$1,props__$1,filter_spec__$1,compiled__$1,map__42852__$2,bounds__$1,components__$1,map__42851__$2,meta42854){return (new clustermap.components.filter.t42853(filter_component__$1,owner__$1,p__42842__$1,filter_by_view__$1,props__$1,filter_spec__$1,compiled__$1,map__42852__$2,bounds__$1,components__$1,map__42851__$2,meta42854));
});})(map__42851,map__42851__$1,props,map__42852,map__42852__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
}
return (new clustermap.components.filter.t42853(filter_component,owner,p__42842,filter_by_view,props,filter_spec,compiled,map__42852__$1,bounds,components,map__42851__$1,null));
});
