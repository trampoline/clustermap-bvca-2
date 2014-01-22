// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report');
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
clustermap.components.full_report.describe_selection = (function describe_selection(data){var sel = new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data);var val = new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(sel);var pred__30153 = cljs.core._EQ_;var expr__30154 = new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(sel);if(cljs.core.truth_(pred__30153.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__30154)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),(val["name"]),new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Portfolio Company"], null);
} else
{if(cljs.core.truth_(pred__30153.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__30154)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),(val["name"]),new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the Portfolio Companies of the selected Investor"], null);
} else
{if(cljs.core.truth_(pred__30153.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__30154)))
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),(val["name"]),new cljs.core.Keyword(null,"description","description",3584325486),"Totals for the selected Constituency"], null);
} else
{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),"All Portfolio Companies",new cljs.core.Keyword(null,"description","description",3584325486),"Totals over all Portfolio Companies"], null);
}
}
}
});
clustermap.components.full_report.overview_data = (function overview_data(data){var apc_stats = new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data);var sel_stats = (function (){var or__3406__auto__ = new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return apc_stats;
}
})();var sel_descr = clustermap.components.full_report.describe_selection.call(null,data);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selection","selection",3592905982),cljs.core.merge.call(null,sel_descr,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),clustermap.formats.number.fnum.call(null,(function (){var G__30163 = sel_stats;var G__30163__$1 = (((G__30163 == null))?null:(G__30163["portfolio_company_count"]));return G__30163__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),clustermap.formats.number.fnum.call(null,(function (){var G__30164 = sel_stats;var G__30164__$1 = (((G__30164 == null))?null:(G__30164["investor_company_count"]));return G__30164__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),clustermap.formats.number.fnum.call(null,(function (){var G__30165 = sel_stats;var G__30165__$1 = (((G__30165 == null))?null:(G__30165["constituency_count"]));return G__30165__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__30166 = sel_stats;var G__30166__$1 = (((G__30166 == null))?null:(G__30166["turnover"]["total"]));return G__30166__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__30167 = sel_stats;var G__30167__$1 = (((G__30167 == null))?null:(G__30167["employee_count"]["total"]));return G__30167__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)),new cljs.core.Keyword(null,"averages","averages",2913851752),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1017277949),"Average",new cljs.core.Keyword(null,"description","description",3584325486),"Averages over all portfolio companies",new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512),"\u00A0",new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288),"\u00A0",new cljs.core.Keyword(null,"constituencies","constituencies",2756015190),"\u00A0",new cljs.core.Keyword(null,"turnover","turnover",1148922435),clustermap.formats.money.fmoney.call(null,(function (){var G__30168 = apc_stats;var G__30168__$1 = (((G__30168 == null))?null:(G__30168["turnover"]["mean"]));return G__30168__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-"),new cljs.core.Keyword(null,"employee-count","employee-count",1111164066),clustermap.formats.number.fnum.call(null,(function (){var G__30169 = apc_stats;var G__30169__$1 = (((G__30169 == null))?null:(G__30169["employee_count"]["mean"]));return G__30169__$1;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-")], null)], null);
});
clustermap.components.full_report.overview = (function overview(p__30170){var map__30190 = p__30170;var map__30190__$1 = ((cljs.core.seq_QMARK_.call(null,map__30190))?cljs.core.apply.call(null,cljs.core.hash_map,map__30190):map__30190);var data = map__30190__$1;var selection = cljs.core.get.call(null,map__30190__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__30191 = clustermap.components.full_report.overview_data.call(null,data);var map__30191__$1 = ((cljs.core.seq_QMARK_.call(null,map__30191))?cljs.core.apply.call(null,cljs.core.hash_map,map__30191):map__30191);var averages = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"averages","averages",2913851752));var selection__$1 = cljs.core.get.call(null,map__30191__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.t30192 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t30192 = (function (averages,map__30191,selection,data,map__30190,p__30170,overview,meta30193){
this.averages = averages;
this.map__30191 = map__30191;
this.selection = selection;
this.data = data;
this.map__30190 = map__30190;
this.p__30170 = p__30170;
this.overview = overview;
this.meta30193 = meta30193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t30192.cljs$lang$type = true;
clustermap.components.full_report.t30192.cljs$lang$ctorStr = "clustermap.components.full-report/t30192";
clustermap.components.full_report.t30192.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t30192");
});
clustermap.components.full_report.t30192.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t30192.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"2012 Overview"),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Portfolio Companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue (\u00A3)"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.selection.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.selection.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs30199 = self__.selection.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs30199))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30199)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30199));
}
})()),React.DOM.td(null,(function (){var attrs30200 = self__.selection.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs30200))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30200)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30200));
}
})()),React.DOM.td(null,(function (){var attrs30201 = self__.selection.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs30201))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30201)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30201));
}
})()),React.DOM.td(null,(function (){var attrs30202 = self__.selection.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs30202))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30202)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30202));
}
})()),React.DOM.td(null,(function (){var attrs30203 = self__.selection.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs30203))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs30203)),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret.call(null,attrs30203));
}
})())),React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": self__.averages.call(null,new cljs.core.Keyword(null,"description","description",3584325486))}),sablono.interpreter.interpret.call(null,self__.averages.call(null,new cljs.core.Keyword(null,"name","name",1017277949)))),React.DOM.td(null,(function (){var attrs30204 = self__.averages.call(null,new cljs.core.Keyword(null,"portfolio-companies","portfolio-companies",1133429512));if(cljs.core.map_QMARK_.call(null,attrs30204))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30204)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30204));
}
})()),React.DOM.td(null,(function (){var attrs30205 = self__.averages.call(null,new cljs.core.Keyword(null,"investor-companies","investor-companies",3164659288));if(cljs.core.map_QMARK_.call(null,attrs30205))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30205)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30205));
}
})()),React.DOM.td(null,(function (){var attrs30206 = self__.averages.call(null,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(cljs.core.map_QMARK_.call(null,attrs30206))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30206)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30206));
}
})()),React.DOM.td(null,(function (){var attrs30207 = self__.averages.call(null,new cljs.core.Keyword(null,"turnover","turnover",1148922435));if(cljs.core.map_QMARK_.call(null,attrs30207))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30207)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30207));
}
})()),React.DOM.td(null,(function (){var attrs30208 = self__.averages.call(null,new cljs.core.Keyword(null,"employee-count","employee-count",1111164066));if(cljs.core.map_QMARK_.call(null,attrs30208))
{return React.DOM.span(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["averages"], null)], null),attrs30208)),null);
} else
{return React.DOM.span({"className": "averages"},sablono.interpreter.interpret.call(null,attrs30208));
}
})()))))));
});
clustermap.components.full_report.t30192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30194){var self__ = this;
var _30194__$1 = this;return self__.meta30193;
});
clustermap.components.full_report.t30192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30194,meta30193__$1){var self__ = this;
var _30194__$1 = this;return (new clustermap.components.full_report.t30192(self__.averages,self__.map__30191,self__.selection,self__.data,self__.map__30190,self__.p__30170,self__.overview,meta30193__$1));
});
clustermap.components.full_report.__GT_t30192 = (function __GT_t30192(averages__$1,map__30191__$2,selection__$2,data__$1,map__30190__$2,p__30170__$1,overview__$1,meta30193){return (new clustermap.components.full_report.t30192(averages__$1,map__30191__$2,selection__$2,data__$1,map__30190__$2,p__30170__$1,overview__$1,meta30193));
});
}
return (new clustermap.components.full_report.t30192(averages,map__30191__$1,selection__$1,data,map__30190__$1,p__30170,overview,null));
});
clustermap.components.full_report.portfolio_company_sites = (function portfolio_company_sites(p__30209){var map__30213 = p__30209;var map__30213__$1 = ((cljs.core.seq_QMARK_.call(null,map__30213))?cljs.core.apply.call(null,cljs.core.hash_map,map__30213):map__30213);var data = map__30213__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__30213__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));return React.DOM.div({"className": "full-report-portfolio-company-sites"},"portfolio-company-sites");
});
clustermap.components.full_report.details = (function details(p__30216){var map__30220 = p__30216;var map__30220__$1 = ((cljs.core.seq_QMARK_.call(null,map__30220))?cljs.core.apply.call(null,cljs.core.hash_map,map__30220):map__30220);var data = map__30220__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__30220__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__30220__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));return React.DOM.div({"className": "full-report-details"},"details");
});
clustermap.components.full_report.full_report_component = (function full_report_component(p__30223,owner){var map__30229 = p__30223;var map__30229__$1 = ((cljs.core.seq_QMARK_.call(null,map__30229))?cljs.core.apply.call(null,cljs.core.hash_map,map__30229):map__30229);var data = map__30229__$1;var all_portfolio_companies_summary = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533));var selection = cljs.core.get.call(null,map__30229__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));if(typeof clustermap.components.full_report.t30230 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.t30230 = (function (selection,all_portfolio_companies_summary,data,map__30229,owner,p__30223,full_report_component,meta30231){
this.selection = selection;
this.all_portfolio_companies_summary = all_portfolio_companies_summary;
this.data = data;
this.map__30229 = map__30229;
this.owner = owner;
this.p__30223 = p__30223;
this.full_report_component = full_report_component;
this.meta30231 = meta30231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.t30230.cljs$lang$type = true;
clustermap.components.full_report.t30230.cljs$lang$ctorStr = "clustermap.components.full-report/t30230";
clustermap.components.full_report.t30230.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report/t30230");
});
clustermap.components.full_report.t30230.prototype.om$core$IDidUpdate$ = true;
clustermap.components.full_report.t30230.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).data("bs.tooltip",false);
return jayq.core.$.call(null,"[data-toggle='tooltip']",root_node).tooltip();
});
clustermap.components.full_report.t30230.prototype.om$core$IRender$ = true;
clustermap.components.full_report.t30230.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var attrs30233 = om.core.build.call(null,clustermap.components.full_report.overview,self__.data);if(cljs.core.map_QMARK_.call(null,attrs30233))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs30233),sablono.interpreter.interpret.call(null,clustermap.components.full_report.portfolio_company_sites.call(null,self__.data)),sablono.interpreter.interpret.call(null,clustermap.components.full_report.details.call(null,self__.data)));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs30233),sablono.interpreter.interpret.call(null,clustermap.components.full_report.portfolio_company_sites.call(null,self__.data)),sablono.interpreter.interpret.call(null,clustermap.components.full_report.details.call(null,self__.data)));
}
});
clustermap.components.full_report.t30230.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30232){var self__ = this;
var _30232__$1 = this;return self__.meta30231;
});
clustermap.components.full_report.t30230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30232,meta30231__$1){var self__ = this;
var _30232__$1 = this;return (new clustermap.components.full_report.t30230(self__.selection,self__.all_portfolio_companies_summary,self__.data,self__.map__30229,self__.owner,self__.p__30223,self__.full_report_component,meta30231__$1));
});
clustermap.components.full_report.__GT_t30230 = (function __GT_t30230(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__30229__$2,owner__$1,p__30223__$1,full_report_component__$1,meta30231){return (new clustermap.components.full_report.t30230(selection__$1,all_portfolio_companies_summary__$1,data__$1,map__30229__$2,owner__$1,p__30223__$1,full_report_component__$1,meta30231));
});
}
return (new clustermap.components.full_report.t30230(selection,all_portfolio_companies_summary,data,map__30229__$1,owner,p__30223,full_report_component,null));
});
clustermap.components.full_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.full_report.full_report_component,document.getElementById(elem_id));
});
