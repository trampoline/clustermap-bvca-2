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
clustermap.components.full_report.overview.describe_selection = (function describe_selection(data){var sel = new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data);var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(sel);var pred__11086 = cljs.core._EQ_;var expr__11087 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(sel);if(cljs.core.truth_(pred__11086.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11087)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages for the selected Portfolio Company"], null)], null);
} else
{if(cljs.core.truth_(pred__11086.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11087)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Total",new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over the Portfolio Companies of the selected Investor"], null)], null);
} else
{if(cljs.core.truth_(pred__11086.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11087)))
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
})();var sel_descrs = clustermap.components.full_report.overview.describe_selection.call(null,data);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),clustermap.formats.number.fnum.call(null,(function (){var G__11096 = sel_stats;var G__11096__$1 = (((G__11096 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11096));return G__11096__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),clustermap.formats.number.fnum.call(null,(function (){var G__11097 = sel_stats;var G__11097__$1 = (((G__11097 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11097));return G__11097__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),clustermap.formats.number.fnum.call(null,(function (){var G__11098 = sel_stats;var G__11098__$1 = (((G__11098 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__11098));return G__11098__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__11099 = sel_stats;var G__11099__$1 = (((G__11099 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11099));var G__11099__$2 = (((G__11099__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11099__$1));return G__11099__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__11100 = sel_stats;var G__11100__$1 = (((G__11100 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11100));var G__11100__$2 = (((G__11100__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11100__$1));return G__11100__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)),new cljs.core.Keyword(null,"averages","averages",2913851752),cljs.core.merge.call(null,new cljs.core.Keyword(null,"averages","averages",2913851752).cljs$core$IFn$_invoke$arity$1(sel_descrs),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),"\u00A0",new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),"\u00A0",new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),"\u00A0",new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__11101 = sel_stats;var G__11101__$1 = (((G__11101 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11101));var G__11101__$2 = (((G__11101__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__11101__$1));return G__11101__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__11102 = sel_stats;var G__11102__$1 = (((G__11102 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11102));var G__11102__$2 = (((G__11102__$1 == null))?null:new cljs.core.Keyword(null,"mean","mean",1017251639).cljs$core$IFn$_invoke$arity$1(G__11102__$1));return G__11102__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null))], null);
});
clustermap.components.full_report.overview.overview = (function overview(p__11103){var map__11123 = p__11103;var map__11123__$1 = ((cljs.core.seq_QMARK_.call(null,map__11123))?cljs.core.apply.call(null,cljs.core.hash_map,map__11123):map__11123);var data = map__11123__$1;var selection = cljs.core.get.call(null,map__11123__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__11124 = clustermap.components.full_report.overview.overview_data.call(null,data);var map__11124__$1 = ((cljs.core.seq_QMARK_.call(null,map__11124))?cljs.core.apply.call(null,cljs.core.hash_map,map__11124):map__11124);var averages = cljs.core.get.call(null,map__11124__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection__$1 = cljs.core.get.call(null,map__11124__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.overview.t11125 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t11125 = (function (averages,map__11124,selection,data,map__11123,p__11103,overview,meta11126){
this.averages = averages;
this.map__11124 = map__11124;
this.selection = selection;
this.data = data;
this.map__11123 = map__11123;
this.p__11103 = p__11103;
this.overview = overview;
this.meta11126 = meta11126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t11125.cljs$lang$type = true;
clustermap.components.full_report.overview.t11125.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t11125";
clustermap.components.full_report.overview.t11125.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.overview/t11125");
});
clustermap.components.full_report.overview.t11125.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t11125.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs11132 = self__.selection.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs11132))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11132)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11132));
}
})()),React.DOM.td(null,(function (){var attrs11133 = self__.selection.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs11133))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11133)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11133));
}
})()),React.DOM.td(null,(function (){var attrs11134 = self__.selection.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs11134))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11134)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11134));
}
})()),React.DOM.td(null,(function (){var attrs11135 = self__.selection.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs11135))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11135)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11135));
}
})()),React.DOM.td(null,(function (){var attrs11136 = self__.selection.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs11136))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs11136)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs11136));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs11137 = self__.averages.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs11137))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11137)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11137));
}
})()),React.DOM.td(null,(function (){var attrs11138 = self__.averages.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs11138))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11138)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11138));
}
})()),React.DOM.td(null,(function (){var attrs11139 = self__.averages.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs11139))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11139)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11139));
}
})()),React.DOM.td(null,(function (){var attrs11140 = self__.averages.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs11140))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11140)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11140));
}
})()),React.DOM.td(null,(function (){var attrs11141 = self__.averages.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs11141))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs11141)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs11141));
}
})()))))));
});
clustermap.components.full_report.overview.t11125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11127){var self__ = this;
var _11127__$1 = this;return self__.meta11126;
});
clustermap.components.full_report.overview.t11125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11127,meta11126__$1){var self__ = this;
var _11127__$1 = this;return (new clustermap.components.full_report.overview.t11125(self__.averages,self__.map__11124,self__.selection,self__.data,self__.map__11123,self__.p__11103,self__.overview,meta11126__$1));
});
clustermap.components.full_report.overview.__GT_t11125 = (function __GT_t11125(averages__$1,map__11124__$2,selection__$2,data__$1,map__11123__$2,p__11103__$1,overview__$1,meta11126){return (new clustermap.components.full_report.overview.t11125(averages__$1,map__11124__$2,selection__$2,data__$1,map__11123__$2,p__11103__$1,overview__$1,meta11126));
});
}
return (new clustermap.components.full_report.overview.t11125(averages,map__11124__$1,selection__$1,data,map__11123__$1,p__11103,overview,null));
});

//# sourceMappingURL=overview.js.map