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
clustermap.components.filter.render = (function render(p__46310,owner,state){var map__46412 = p__46310;var map__46412__$1 = ((cljs.core.seq_QMARK_(map__46412))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46412):map__46412);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412__$1,cljs.core.constant$keyword$1114);var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46412__$1,cljs.core.constant$keyword$1122);return React.DOM.div({"className": "filter-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},React.DOM.h3(null,"Filter"))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"filter by view"),React.DOM.div({"className": "tbl-cell"},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__46412,map__46412__$1,bounds,filter_spec){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1271], null),val);
});})(map__46412,map__46412__$1,bounds,filter_spec))
}) : sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__46412,map__46412__$1,bounds,filter_spec){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1271], null),val);
});})(map__46412,map__46412__$1,bounds,filter_spec))
})))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"age"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__46412,map__46412__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1499,cljs.core.constant$keyword$1500], null),(function (){var pred__46501 = cljs.core._EQ_;var expr__46502 = val;if(cljs.core.truth_((pred__46501.cljs$core$IFn$_invoke$arity$2 ? pred__46501.cljs$core$IFn$_invoke$arity$2("new",expr__46502) : pred__46501.call(null,"new",expr__46502))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1502,"2009-01-01"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46501.cljs$core$IFn$_invoke$arity$2 ? pred__46501.cljs$core$IFn$_invoke$arity$2("old",expr__46502) : pred__46501.call(null,"old",expr__46502))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!formation_date",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1503,"2009-01-01"], null)], null)], null);
} else
{return null;
}
}
})());
});})(map__46412,map__46412__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"any") : sablono.interpreter.option.call(null,{"value": ""},"any")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "new"},"< 5 years old") : sablono.interpreter.option.call(null,{"value": "new"},"< 5 years old")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "old"},">= 5 years old") : sablono.interpreter.option.call(null,{"value": "old"},">= 5 years old"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"group ?"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__46412,map__46412__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1499,cljs.core.constant$keyword$1504], null),(function (){var pred__46504 = cljs.core._EQ_;var expr__46505 = val;if(cljs.core.truth_((pred__46504.cljs$core$IFn$_invoke$arity$2 ? pred__46504.cljs$core$IFn$_invoke$arity$2("group",expr__46505) : pred__46504.call(null,"group",expr__46505))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1505,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",true], null)], null);
} else
{if(cljs.core.truth_((pred__46504.cljs$core$IFn$_invoke$arity$2 ? pred__46504.cljs$core$IFn$_invoke$arity$2("notgroup",expr__46505) : pred__46504.call(null,"notgroup",expr__46505))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1505,new cljs.core.PersistentArrayMap(null, 1, ["!is_group",false], null)], null);
} else
{return null;
}
}
})());
});})(map__46412,map__46412__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"any") : sablono.interpreter.option.call(null,{"value": ""},"any")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "group"},"group") : sablono.interpreter.option.call(null,{"value": "group"},"group")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "notgroup"},"not group") : sablono.interpreter.option.call(null,{"value": "notgroup"},"not group"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"turnover"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"onChange": ((function (map__46412,map__46412__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(val);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1499,cljs.core.constant$keyword$1408], null),(function (){var pred__46507 = cljs.core._EQ_;var expr__46508 = val;if(cljs.core.truth_((pred__46507.cljs$core$IFn$_invoke$arity$2 ? pred__46507.cljs$core$IFn$_invoke$arity$2("low",expr__46508) : pred__46507.call(null,"low",expr__46508))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1503,(1000000)], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46507.cljs$core$IFn$_invoke$arity$2 ? pred__46507.cljs$core$IFn$_invoke$arity$2("high",expr__46508) : pred__46507.call(null,"high",expr__46508))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!latest_turnover",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1502,(1000000)], null)], null)], null);
} else
{return null;
}
}
})());
});})(map__46412,map__46412__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"any") : sablono.interpreter.option.call(null,{"value": ""},"any")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "low"},"< \u00A31 million") : sablono.interpreter.option.call(null,{"value": "low"},"< \u00A31 million")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "high"},">= \u00A31 million") : sablono.interpreter.option.call(null,{"value": "high"},">= \u00A31 million"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"SIC section"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (map__46412,map__46412__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1499,cljs.core.constant$keyword$1506], null),(function (){var pred__46510 = cljs.core._EQ_;var expr__46511 = val;if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("A",expr__46511) : pred__46510.call(null,"A",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"01110",cljs.core.constant$keyword$1507,"03220"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("B",expr__46511) : pred__46510.call(null,"B",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"05101",cljs.core.constant$keyword$1507,"09900"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("C",expr__46511) : pred__46510.call(null,"C",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"10110",cljs.core.constant$keyword$1507,"33200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("D",expr__46511) : pred__46510.call(null,"D",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"35110",cljs.core.constant$keyword$1507,"35300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("E",expr__46511) : pred__46510.call(null,"E",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"36000",cljs.core.constant$keyword$1507,"39000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("F",expr__46511) : pred__46510.call(null,"F",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"41100",cljs.core.constant$keyword$1507,"43999"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("G",expr__46511) : pred__46510.call(null,"G",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"45111",cljs.core.constant$keyword$1507,"47990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("H",expr__46511) : pred__46510.call(null,"H",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"49100",cljs.core.constant$keyword$1507,"53202"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("I",expr__46511) : pred__46510.call(null,"I",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"55100",cljs.core.constant$keyword$1507,"56302"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("J",expr__46511) : pred__46510.call(null,"J",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"58110",cljs.core.constant$keyword$1507,"63990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("K",expr__46511) : pred__46510.call(null,"K",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"64110",cljs.core.constant$keyword$1507,"66300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("L",expr__46511) : pred__46510.call(null,"L",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"68100",cljs.core.constant$keyword$1507,"68320"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("M",expr__46511) : pred__46510.call(null,"M",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"69101",cljs.core.constant$keyword$1507,"75000"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("N",expr__46511) : pred__46510.call(null,"N",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"77110",cljs.core.constant$keyword$1507,"82990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("O",expr__46511) : pred__46510.call(null,"O",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"84110",cljs.core.constant$keyword$1507,"84300"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("P",expr__46511) : pred__46510.call(null,"P",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"85100",cljs.core.constant$keyword$1507,"85600"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("Q",expr__46511) : pred__46510.call(null,"Q",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"86101",cljs.core.constant$keyword$1507,"88990"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("R",expr__46511) : pred__46510.call(null,"R",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"90010",cljs.core.constant$keyword$1507,"93290"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("S",expr__46511) : pred__46510.call(null,"S",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"94110",cljs.core.constant$keyword$1507,"96090"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("T",expr__46511) : pred__46510.call(null,"T",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"97000",cljs.core.constant$keyword$1507,"98200"], null)], null)], null);
} else
{if(cljs.core.truth_((pred__46510.cljs$core$IFn$_invoke$arity$2 ? pred__46510.cljs$core$IFn$_invoke$arity$2("U",expr__46511) : pred__46510.call(null,"U",expr__46511))))
{return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1501,new cljs.core.PersistentArrayMap(null, 1, ["!sic07",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1502,"99000",cljs.core.constant$keyword$1507,"99999"], null)], null)], null);
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
});})(map__46412,map__46412__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"all") : sablono.interpreter.option.call(null,{"value": ""},"all")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "A"},"A : Agriculture, Forestry and Fishing") : sablono.interpreter.option.call(null,{"value": "A"},"A : Agriculture, Forestry and Fishing")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "B"},"B : Mining and Quarrying") : sablono.interpreter.option.call(null,{"value": "B"},"B : Mining and Quarrying")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "C"},"C : Manufacturing") : sablono.interpreter.option.call(null,{"value": "C"},"C : Manufacturing")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "D"},"D : Electricity, gas, steam and air conditioning supply") : sablono.interpreter.option.call(null,{"value": "D"},"D : Electricity, gas, steam and air conditioning supply")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "E"},"E : Water supply, sewerage, waste management and remediation activities") : sablono.interpreter.option.call(null,{"value": "E"},"E : Water supply, sewerage, waste management and remediation activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "F"},"F : Construction") : sablono.interpreter.option.call(null,{"value": "F"},"F : Construction")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles") : sablono.interpreter.option.call(null,{"value": "G"},"G : Wholesale and retail trade; repair of motor vehicles and motorcycles")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "H"},"H : Transportation and storage") : sablono.interpreter.option.call(null,{"value": "H"},"H : Transportation and storage")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "I"},"I : Accommodation and food service activities") : sablono.interpreter.option.call(null,{"value": "I"},"I : Accommodation and food service activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "J"},"J : Information and communication") : sablono.interpreter.option.call(null,{"value": "J"},"J : Information and communication")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "K"},"K : Financial and insurance activities") : sablono.interpreter.option.call(null,{"value": "K"},"K : Financial and insurance activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "L"},"L : Real estate activities") : sablono.interpreter.option.call(null,{"value": "L"},"L : Real estate activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "M"},"M : Professional, scientific and technical activities") : sablono.interpreter.option.call(null,{"value": "M"},"M : Professional, scientific and technical activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "N"},"N : Administrative and support service activities") : sablono.interpreter.option.call(null,{"value": "N"},"N : Administrative and support service activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "O"},"O : Public administration and defence; compulsory social security") : sablono.interpreter.option.call(null,{"value": "O"},"O : Public administration and defence; compulsory social security")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "P"},"P : Education") : sablono.interpreter.option.call(null,{"value": "P"},"P : Education")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "Q"},"Q : Human health and social work activities") : sablono.interpreter.option.call(null,{"value": "Q"},"Q : Human health and social work activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "R"},"R : Arts, entertainment and recreation") : sablono.interpreter.option.call(null,{"value": "R"},"R : Arts, entertainment and recreation")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "S"},"S : Other service activities") : sablono.interpreter.option.call(null,{"value": "S"},"S : Other service activities")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "T"},"T : Activities of households as employers") : sablono.interpreter.option.call(null,{"value": "T"},"T : Activities of households as employers")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "U"},"U : Activities of extraterritorial organisations and bodies") : sablono.interpreter.option.call(null,{"value": "U"},"U : Activities of extraterritorial organisations and bodies"))))),React.DOM.div({"className": "tbl-row"},React.DOM.div({"className": "tbl-cell"},"ONS sector"),React.DOM.div({"className": "tbl-cell"},React.DOM.select({"style": {"width": "100%"}, "onChange": ((function (map__46412,map__46412__$1,bounds,filter_spec){
return (function (e){var val = e.target.value;console.log(e.target.value);
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1499,cljs.core.constant$keyword$1508], null),(cljs.core.truth_(cljs.core.not_empty(val))?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1509,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1177,"?tags",cljs.core.constant$keyword$1115,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1510,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1505,new cljs.core.PersistentArrayMap(null, 1, ["type","ons_sector"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1505,new cljs.core.PersistentArrayMap(null, 1, ["tag",val], null)], null)], null)], null)], null)], null)], null):null));
});})(map__46412,map__46412__$1,bounds,filter_spec))
},(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": ""},"all") : sablono.interpreter.option.call(null,{"value": ""},"all")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "other_scitechmanf"},"Other scientific/technological manufacture") : sablono.interpreter.option.call(null,{"value": "other_scitechmanf"},"Other scientific/technological manufacture")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "lifesci_health"},"Life Sciences & Healthcare") : sablono.interpreter.option.call(null,{"value": "lifesci_health"},"Life Sciences & Healthcare")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "digi_tech"},"Digital Technologies") : sablono.interpreter.option.call(null,{"value": "digi_tech"},"Digital Technologies")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "pub_broad"},"Publishing & Broadcasting") : sablono.interpreter.option.call(null,{"value": "pub_broad"},"Publishing & Broadcasting")),(sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2 ? sablono.interpreter.option.cljs$core$IFn$_invoke$arity$2({"value": "other_scitech_serv"},"Other scientific/technological services") : sablono.interpreter.option.call(null,{"value": "other_scitech_serv"},"Other scientific/technological services")))))));
});
clustermap.components.filter.filter_component = (function filter_component(p__46513,owner){var map__46522 = p__46513;var map__46522__$1 = ((cljs.core.seq_QMARK_(map__46522))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46522):map__46522);var props = map__46522__$1;var map__46523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46522__$1,cljs.core.constant$keyword$1122);var map__46523__$1 = ((cljs.core.seq_QMARK_(map__46523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46523):map__46523);var filter_spec = map__46523__$1;var components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46523__$1,cljs.core.constant$keyword$1499);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46523__$1,cljs.core.constant$keyword$1271);var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46523__$1,cljs.core.constant$keyword$1272);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46522__$1,cljs.core.constant$keyword$1114);if(typeof clustermap.components.filter.t46524 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.filter.t46524 = (function (filter_component,owner,filter_by_view,props,map__46523,filter_spec,compiled,bounds,components,p__46513,map__46522,meta46525){
this.filter_component = filter_component;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.props = props;
this.map__46523 = map__46523;
this.filter_spec = filter_spec;
this.compiled = compiled;
this.bounds = bounds;
this.components = components;
this.p__46513 = p__46513;
this.map__46522 = map__46522;
this.meta46525 = meta46525;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.filter.t46524.cljs$lang$type = true;
clustermap.components.filter.t46524.cljs$lang$ctorStr = "clustermap.components.filter/t46524";
clustermap.components.filter.t46524.cljs$lang$ctorPrWriter = ((function (map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.filter/t46524");
});})(map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t46524.prototype.om$core$IWillUpdate$ = true;
clustermap.components.filter.t46524.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,p__46527,next_state){var self__ = this;
var map__46528 = p__46527;var map__46528__$1 = ((cljs.core.seq_QMARK_(map__46528))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46528):map__46528);var map__46529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46528__$1,cljs.core.constant$keyword$1122);var map__46529__$1 = ((cljs.core.seq_QMARK_(map__46529))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46529):map__46529);var next_components = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,cljs.core.constant$keyword$1499);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,cljs.core.constant$keyword$1271);var next_compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46529__$1,cljs.core.constant$keyword$1272);var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46528__$1,cljs.core.constant$keyword$1114);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_components,self__.components);if(or__3558__auto__)
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
{return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.filter_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1272], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2(om.core._value,cljs.core.vals(next_components)))));
} else
{return null;
}
});})(map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t46524.prototype.om$core$IRenderState$ = true;
clustermap.components.filter.t46524.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;return clustermap.components.filter.render(self__.props,self__.owner,state);
});})(map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t46524.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_46526){var self__ = this;
var _46526__$1 = this;return self__.meta46525;
});})(map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.t46524.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function (_46526,meta46525__$1){var self__ = this;
var _46526__$1 = this;return (new clustermap.components.filter.t46524(self__.filter_component,self__.owner,self__.filter_by_view,self__.props,self__.map__46523,self__.filter_spec,self__.compiled,self__.bounds,self__.components,self__.p__46513,self__.map__46522,meta46525__$1));
});})(map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
clustermap.components.filter.__GT_t46524 = ((function (map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds){
return (function __GT_t46524(filter_component__$1,owner__$1,filter_by_view__$1,props__$1,map__46523__$2,filter_spec__$1,compiled__$1,bounds__$1,components__$1,p__46513__$1,map__46522__$2,meta46525){return (new clustermap.components.filter.t46524(filter_component__$1,owner__$1,filter_by_view__$1,props__$1,map__46523__$2,filter_spec__$1,compiled__$1,bounds__$1,components__$1,p__46513__$1,map__46522__$2,meta46525));
});})(map__46522,map__46522__$1,props,map__46523,map__46523__$1,filter_spec,components,filter_by_view,compiled,bounds))
;
}
return (new clustermap.components.filter.t46524(filter_component,owner,filter_by_view,props,map__46523__$1,filter_spec,compiled,bounds,components,p__46513,map__46522__$1,null));
});
