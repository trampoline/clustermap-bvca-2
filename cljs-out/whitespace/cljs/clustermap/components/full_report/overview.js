// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__30408){var map__30413 = p__30408;var map__30413__$1 = ((cljs.core.seq_QMARK_.call(null,map__30413))?cljs.core.apply.call(null,cljs.core.hash_map,map__30413):map__30413);var value = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"type","type",1017479852));var pred__30414 = cljs.core._EQ_;var expr__30415 = type;if(cljs.core.truth_(pred__30414.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30415)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_(pred__30414.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30415)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_(pred__30414.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30415)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__30417){var map__30426 = p__30417;var map__30426__$1 = ((cljs.core.seq_QMARK_.call(null,map__30426))?cljs.core.apply.call(null,cljs.core.hash_map,map__30426):map__30426);var selection_portfolio_company_stats = cljs.core.get.call(null,map__30426__$1,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587));var selection = cljs.core.get.call(null,map__30426__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var all_portfolio_company_stats = cljs.core.get.call(null,map__30426__$1,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704));var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,selection);var use_stats = (function (){var or__3406__auto__ = selection_portfolio_company_stats;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return all_portfolio_company_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),clustermap.formats.number.fnum.call(null,(function (){var G__30427 = use_stats;var G__30427__$1 = (((G__30427 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__30427));return G__30427__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),clustermap.formats.number.fnum.call(null,(function (){var G__30428 = use_stats;var G__30428__$1 = (((G__30428 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__30428));return G__30428__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),clustermap.formats.number.fnum.call(null,(function (){var G__30429 = use_stats;var G__30429__$1 = (((G__30429 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__30429));return G__30429__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__30430 = use_stats;var G__30430__$1 = (((G__30430 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__30430));var G__30430__$2 = (((G__30430__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30430__$1));return G__30430__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__30431 = use_stats;var G__30431__$1 = (((G__30431 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__30431));var G__30431__$2 = (((G__30431__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30431__$1));return G__30431__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),"\u00A0",new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),"\u00A0",new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),"\u00A0",new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__30432 = use_stats;var G__30432__$1 = (((G__30432 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__30432));var G__30432__$2 = (((G__30432__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__30432__$1));return G__30432__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__30433 = use_stats;var G__30433__$1 = (((G__30433 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__30433));var G__30433__$2 = (((G__30433__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__30433__$1));return G__30433__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null))], null);
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__30452 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__30452__$1 = ((cljs.core.seq_QMARK_.call(null,map__30452))?cljs.core.apply.call(null,cljs.core.hash_map,map__30452):map__30452);var averages = cljs.core.get.call(null,map__30452__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection = cljs.core.get.call(null,map__30452__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t30453 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t30453 = (function (selection,averages,map__30452,data,overview,meta30454){
this.selection = selection;
this.averages = averages;
this.map__30452 = map__30452;
this.data = data;
this.overview = overview;
this.meta30454 = meta30454;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t30453.cljs$lang$type = true;
clustermap.components.full_report.overview.t30453.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t30453";
clustermap.components.full_report.overview.t30453.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.overview/t30453");
});
clustermap.components.full_report.overview.t30453.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t30453.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs30460 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs30460))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30460)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30460));
}
})()),React.DOM.td(null,(function (){var attrs30461 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs30461))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30461)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30461));
}
})()),React.DOM.td(null,(function (){var attrs30462 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs30462))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30462)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30462));
}
})()),React.DOM.td(null,(function (){var attrs30463 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs30463))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30463)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30463));
}
})()),React.DOM.td(null,(function (){var attrs30464 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_.call(null,attrs30464))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30464)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30464));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs30465 = new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs30465))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30465)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30465));
}
})()),React.DOM.td(null,(function (){var attrs30466 = new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs30466))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30466)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30466));
}
})()),React.DOM.td(null,(function (){var attrs30467 = new cljs.core.Keyword(null,"constituencies","constituencies",2756015190).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs30467))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30467)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30467));
}
})()),React.DOM.td(null,(function (){var attrs30468 = new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs30468))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30468)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30468));
}
})()),React.DOM.td(null,(function (){var attrs30469 = new cljs.core.Keyword(null,"employee-count","employee-count",1111164066).cljs$core$IFn$_invoke$arity$1(self__.averages);if(cljs.core.map_QMARK_.call(null,attrs30469))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30469)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30469));
}
})()))))));
});
clustermap.components.full_report.overview.t30453.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30455){var self__ = this;
var _30455__$1 = this;return self__.meta30454;
});
clustermap.components.full_report.overview.t30453.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30455,meta30454__$1){var self__ = this;
var _30455__$1 = this;return (new clustermap.components.full_report.overview.t30453(self__.selection,self__.averages,self__.map__30452,self__.data,self__.overview,meta30454__$1));
});
clustermap.components.full_report.overview.__GT_t30453 = (function __GT_t30453(selection__$1,averages__$1,map__30452__$2,data__$1,overview__$1,meta30454){return (new clustermap.components.full_report.overview.t30453(selection__$1,averages__$1,map__30452__$2,data__$1,overview__$1,meta30454));
});
}
return (new clustermap.components.full_report.overview.t30453(selection,averages,map__30452__$1,data,overview,null));
});
