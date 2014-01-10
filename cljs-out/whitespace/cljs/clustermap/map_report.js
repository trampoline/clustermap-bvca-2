// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
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
goog.require('clustermap.formats.number');
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t28674 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28674 = (function (empty_report,meta28675){
this.empty_report = empty_report;
this.meta28675 = meta28675;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28674.cljs$lang$type = true;
clustermap.map_report.t28674.cljs$lang$ctorStr = "clustermap.map-report/t28674";
clustermap.map_report.t28674.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28674");
});
clustermap.map_report.t28674.prototype.om$core$IRender$ = true;
clustermap.map_report.t28674.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t28674.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28676){var self__ = this;
var _28676__$1 = this;return self__.meta28675;
});
clustermap.map_report.t28674.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28676,meta28675__$1){var self__ = this;
var _28676__$1 = this;return (new clustermap.map_report.t28674(self__.empty_report,meta28675__$1));
});
clustermap.map_report.__GT_t28674 = (function __GT_t28674(empty_report__$1,meta28675){return (new clustermap.map_report.t28674(empty_report__$1,meta28675));
});
}
return (new clustermap.map_report.t28674(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data);var ic_summ = new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789).cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t28708 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28708 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta28709){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta28709 = meta28709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28708.cljs$lang$type = true;
clustermap.map_report.t28708.cljs$lang$ctorStr = "clustermap.map-report/t28708";
clustermap.map_report.t28708.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28708");
});
clustermap.map_report.t28708.prototype.om$core$IRender$ = true;
clustermap.map_report.t28708.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs28713 = clustermap.formats.number.fnum.call(null,(function (){var G__28733 = self__.pc_summ;var G__28733__$1 = (((G__28733 == null))?null:(G__28733["count"]));return G__28733__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28713))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28713)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28713),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs28718 = clustermap.formats.number.fnum.call(null,(function (){var G__28734 = self__.ic_summ;var G__28734__$1 = (((G__28734 == null))?null:(G__28734["count"]));return G__28734__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28718))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28718)),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28718),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs28723 = clustermap.formats.money.fmoney.call(null,(function (){var G__28735 = self__.pc_summ;var G__28735__$1 = (((G__28735 == null))?null:(G__28735["latest_turnover_stats"]["total"]));return G__28735__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28723))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28723)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28723),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs28728 = clustermap.formats.number.fnum.call(null,(function (){var G__28736 = self__.pc_summ;var G__28736__$1 = (((G__28736 == null))?null:(G__28736["latest_employee_count_stats"]["total"]));return G__28736__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs28728))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28728)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28728),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t28708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28710){var self__ = this;
var _28710__$1 = this;return self__.meta28709;
});
clustermap.map_report.t28708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28710,meta28709__$1){var self__ = this;
var _28710__$1 = this;return (new clustermap.map_report.t28708(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta28709__$1));
});
clustermap.map_report.__GT_t28708 = (function __GT_t28708(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28709){return (new clustermap.map_report.t28708(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta28709));
});
}
return (new clustermap.map_report.t28708(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t28742 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28742 = (function (data,selection_report,meta28743){
this.data = data;
this.selection_report = selection_report;
this.meta28743 = meta28743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28742.cljs$lang$type = true;
clustermap.map_report.t28742.cljs$lang$ctorStr = "clustermap.map-report/t28742";
clustermap.map_report.t28742.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28742");
});
clustermap.map_report.t28742.prototype.om$core$IRender$ = true;
clustermap.map_report.t28742.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t28742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28744){var self__ = this;
var _28744__$1 = this;return self__.meta28743;
});
clustermap.map_report.t28742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28744,meta28743__$1){var self__ = this;
var _28744__$1 = this;return (new clustermap.map_report.t28742(self__.data,self__.selection_report,meta28743__$1));
});
clustermap.map_report.__GT_t28742 = (function __GT_t28742(data__$1,selection_report__$1,meta28743){return (new clustermap.map_report.t28742(data__$1,selection_report__$1,meta28743));
});
}
return (new clustermap.map_report.t28742(data,selection_report,null));
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
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
