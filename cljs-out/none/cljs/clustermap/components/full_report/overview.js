// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(data){var sel = new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data);var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(sel);var pred__11092 = cljs.core._EQ_;var expr__11093 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(sel);if(cljs.core.truth_(pred__11092.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11093)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_(pred__11092.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11093)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_(pred__11092.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11093)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies with sites in the selected Constituency"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all Portfolio Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(data){var apc_stats = new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data);var sel_stats = (function (){var or__3406__auto__ = new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return apc_stats;
}
})();var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,data);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),clustermap.formats.number.fnum.call(null,(function (){var G__11102 = sel_stats;var G__11102__$1 = (((G__11102 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11102));return G__11102__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),clustermap.formats.number.fnum.call(null,(function (){var G__11103 = sel_stats;var G__11103__$1 = (((G__11103 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11103));return G__11103__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),clustermap.formats.number.fnum.call(null,(function (){var G__11104 = sel_stats;var G__11104__$1 = (((G__11104 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__11104));return G__11104__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__11105 = sel_stats;var G__11105__$1 = (((G__11105 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11105));var G__11105__$2 = (((G__11105__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11105__$1));return G__11105__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__11106 = sel_stats;var G__11106__$1 = (((G__11106 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11106));var G__11106__$2 = (((G__11106__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11106__$1));return G__11106__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),"\u00A0",new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),"\u00A0",new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),"\u00A0",new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__11107 = sel_stats;var G__11107__$1 = (((G__11107 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11107));var G__11107__$2 = (((G__11107__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__11107__$1));return G__11107__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__11108 = sel_stats;var G__11108__$1 = (((G__11108 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11108));var G__11108__$2 = (((G__11108__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__11108__$1));return G__11108__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null))], null);
});
clustermap.components.full_report.overview.overview = (function overview(p__11109){var map__11129 = p__11109;var map__11129__$1 = ((cljs.core.seq_QMARK_.call(null,map__11129))?cljs.core.apply.call(null,cljs.core.hash_map,map__11129):map__11129);var data = map__11129__$1;var selection = cljs.core.get.call(null,map__11129__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__11130 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__11130__$1 = ((cljs.core.seq_QMARK_.call(null,map__11130))?cljs.core.apply.call(null,cljs.core.hash_map,map__11130):map__11130);var averages = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection__$1 = cljs.core.get.call(null,map__11130__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t11131 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t11131 = (function (averages,map__11130,selection,data,map__11129,p__11109,overview,meta11132){
this.averages = averages;
this.map__11130 = map__11130;
this.selection = selection;
this.data = data;
this.map__11129 = map__11129;
this.p__11109 = p__11109;
this.overview = overview;
this.meta11132 = meta11132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t11131.cljs$lang$type = true;
clustermap.components.full_report.overview.t11131.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t11131";
clustermap.components.full_report.overview.t11131.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.overview/t11131");
});
clustermap.components.full_report.overview.t11131.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t11131.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs11138 = self__.selection.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs11138))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11138)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11138));
}
})()),React.DOM.td(null,(function (){var attrs11139 = self__.selection.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs11139))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11139)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11139));
}
})()),React.DOM.td(null,(function (){var attrs11140 = self__.selection.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs11140))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11140)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11140));
}
})()),React.DOM.td(null,(function (){var attrs11141 = self__.selection.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs11141))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11141)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11141));
}
})()),React.DOM.td(null,(function (){var attrs11142 = self__.selection.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs11142))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11142)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11142));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs11143 = self__.averages.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs11143))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11143)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11143));
}
})()),React.DOM.td(null,(function (){var attrs11144 = self__.averages.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs11144))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11144)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11144));
}
})()),React.DOM.td(null,(function (){var attrs11145 = self__.averages.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs11145))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11145)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11145));
}
})()),React.DOM.td(null,(function (){var attrs11146 = self__.averages.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs11146))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11146)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11146));
}
})()),React.DOM.td(null,(function (){var attrs11147 = self__.averages.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs11147))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11147)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11147));
}
})()))))));
});
clustermap.components.full_report.overview.t11131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11133){var self__ = this;
var _11133__$1 = this;return self__.meta11132;
});
clustermap.components.full_report.overview.t11131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11133,meta11132__$1){var self__ = this;
var _11133__$1 = this;return (new clustermap.components.full_report.overview.t11131(self__.averages,self__.map__11130,self__.selection,self__.data,self__.map__11129,self__.p__11109,self__.overview,meta11132__$1));
});
clustermap.components.full_report.overview.__GT_t11131 = (function __GT_t11131(averages__$1,map__11130__$2,selection__$2,data__$1,map__11129__$2,p__11109__$1,overview__$1,meta11132){return (new clustermap.components.full_report.overview.t11131(averages__$1,map__11130__$2,selection__$2,data__$1,map__11129__$2,p__11109__$1,overview__$1,meta11132));
});
}
return (new clustermap.components.full_report.overview.t11131(averages,map__11130__$1,selection__$1,data,map__11129__$1,p__11109,overview,null));
});

//# sourceMappingURL=overview.js.map