// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t11138 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t11138 = (function (empty_report,meta11139){
this.empty_report = empty_report;
this.meta11139 = meta11139;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t11138.cljs$lang$type = true;
clustermap.map_report.t11138.cljs$lang$ctorStr = "clustermap.map-report/t11138";
clustermap.map_report.t11138.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t11138");
});
clustermap.map_report.t11138.prototype.om$core$IRender$ = true;
clustermap.map_report.t11138.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t11138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11140){var self__ = this;
var _11140__$1 = this;return self__.meta11139;
});
clustermap.map_report.t11138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11140,meta11139__$1){var self__ = this;
var _11140__$1 = this;return (new clustermap.map_report.t11138(self__.empty_report,meta11139__$1));
});
clustermap.map_report.__GT_t11138 = (function __GT_t11138(empty_report__$1,meta11139){return (new clustermap.map_report.t11138(empty_report__$1,meta11139));
});
}
return (new clustermap.map_report.t11138(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t11172 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t11172 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta11173){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11173 = meta11173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t11172.cljs$lang$type = true;
clustermap.map_report.t11172.cljs$lang$ctorStr = "clustermap.map-report/t11172";
clustermap.map_report.t11172.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t11172");
});
clustermap.map_report.t11172.prototype.om$core$IRender$ = true;
clustermap.map_report.t11172.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11177 = clustermap.formats.number.readable.call(null,(function (){var G__11197 = self__.pc_summ;var G__11197__$1 = (((G__11197 == null))?null:(G__11197["count"]));return G__11197__$1;
})());if(cljs.core.map_QMARK_.call(null,attrs11177))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs11177)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11177),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs11182 = clustermap.formats.number.readable.call(null,(function (){var G__11198 = self__.ic_summ;var G__11198__$1 = (((G__11198 == null))?null:(G__11198["count"]));return G__11198__$1;
})());if(cljs.core.map_QMARK_.call(null,attrs11182))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs11182)),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11182),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs11187 = clustermap.formats.money.readable.call(null,(function (){var G__11199 = self__.pc_summ;var G__11199__$1 = (((G__11199 == null))?null:(G__11199["latest_turnover_stats"]["total"]));return G__11199__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2);if(cljs.core.map_QMARK_.call(null,attrs11187))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs11187)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11187),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11192 = clustermap.formats.number.readable.call(null,(function (){var G__11200 = self__.pc_summ;var G__11200__$1 = (((G__11200 == null))?null:(G__11200["latest_employee_count_stats"]["total"]));return G__11200__$1;
})());if(cljs.core.map_QMARK_.call(null,attrs11192))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs11192)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11192),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t11172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11174){var self__ = this;
var _11174__$1 = this;return self__.meta11173;
});
clustermap.map_report.t11172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11174,meta11173__$1){var self__ = this;
var _11174__$1 = this;return (new clustermap.map_report.t11172(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta11173__$1));
});
clustermap.map_report.__GT_t11172 = (function __GT_t11172(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11173){return (new clustermap.map_report.t11172(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11173));
});
}
return (new clustermap.map_report.t11172(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t11206 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t11206 = (function (data,selection_report,meta11207){
this.data = data;
this.selection_report = selection_report;
this.meta11207 = meta11207;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t11206.cljs$lang$type = true;
clustermap.map_report.t11206.cljs$lang$ctorStr = "clustermap.map-report/t11206";
clustermap.map_report.t11206.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t11206");
});
clustermap.map_report.t11206.prototype.om$core$IRender$ = true;
clustermap.map_report.t11206.prototype.om$core$IRender$render$arity$1 = (function (this__9133__auto__){var self__ = this;
var this__9133__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t11206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11208){var self__ = this;
var _11208__$1 = this;return self__.meta11207;
});
clustermap.map_report.t11206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11208,meta11207__$1){var self__ = this;
var _11208__$1 = this;return (new clustermap.map_report.t11206(self__.data,self__.selection_report,meta11207__$1));
});
clustermap.map_report.__GT_t11206 = (function __GT_t11206(data__$1,selection_report__$1,meta11207){return (new clustermap.map_report.t11206(data__$1,selection_report__$1,meta11207));
});
}
return (new clustermap.map_report.t11206(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if((new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,data);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null))))
{return clustermap.map_report.selection_report.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
});
clustermap.map_report.mount = (function mount(app_state){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById("map-report-content"));
});

//# sourceMappingURL=map_report.js.map