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
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t28429 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28429 = (function (empty_report,meta28430){
this.empty_report = empty_report;
this.meta28430 = meta28430;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28429.cljs$lang$type = true;
clustermap.map_report.t28429.cljs$lang$ctorStr = "clustermap.map-report/t28429";
clustermap.map_report.t28429.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28429");
});
clustermap.map_report.t28429.prototype.om$core$IRender$ = true;
clustermap.map_report.t28429.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t28429.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28431){var self__ = this;
var _28431__$1 = this;return self__.meta28430;
});
clustermap.map_report.t28429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28431,meta28430__$1){var self__ = this;
var _28431__$1 = this;return (new clustermap.map_report.t28429(self__.empty_report,meta28430__$1));
});
clustermap.map_report.__GT_t28429 = (function __GT_t28429(empty_report__$1,meta28430){return (new clustermap.map_report.t28429(empty_report__$1,meta28430));
});
}
return (new clustermap.map_report.t28429(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(summary){if(typeof clustermap.map_report.t28456 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28456 = (function (summary,all_portfolio_companies_summary_report,meta28457){
this.summary = summary;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta28457 = meta28457;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28456.cljs$lang$type = true;
clustermap.map_report.t28456.cljs$lang$ctorStr = "clustermap.map-report/t28456";
clustermap.map_report.t28456.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28456");
});
clustermap.map_report.t28456.prototype.om$core$IRender$ = true;
clustermap.map_report.t28456.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs28461 = clustermap.formats.number.readable.call(null,(self__.summary["count"]));if(cljs.core.map_QMARK_.call(null,attrs28461))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28461)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28461),React.DOM.small(null,"Companies"));
}
})(),React.DOM.li(null,"2",React.DOM.small(null,"Investors")),(function (){var attrs28468 = clustermap.formats.money.readable.call(null,(self__.summary["latest_turnover_stats"]["total"]),new cljs.core.Keyword(null,"sf","sf",1013907909),2);if(cljs.core.map_QMARK_.call(null,attrs28468))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28468)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28468),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs28473 = clustermap.formats.number.readable.call(null,(self__.summary["latest_employee_count_stats"]["total"]));if(cljs.core.map_QMARK_.call(null,attrs28473))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs28473)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs28473),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t28456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28458){var self__ = this;
var _28458__$1 = this;return self__.meta28457;
});
clustermap.map_report.t28456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28458,meta28457__$1){var self__ = this;
var _28458__$1 = this;return (new clustermap.map_report.t28456(self__.summary,self__.all_portfolio_companies_summary_report,meta28457__$1));
});
clustermap.map_report.__GT_t28456 = (function __GT_t28456(summary__$1,all_portfolio_companies_summary_report__$1,meta28457){return (new clustermap.map_report.t28456(summary__$1,all_portfolio_companies_summary_report__$1,meta28457));
});
}
return (new clustermap.map_report.t28456(summary,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t28483 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t28483 = (function (data,selection_report,meta28484){
this.data = data;
this.selection_report = selection_report;
this.meta28484 = meta28484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t28483.cljs$lang$type = true;
clustermap.map_report.t28483.cljs$lang$ctorStr = "clustermap.map-report/t28483";
clustermap.map_report.t28483.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t28483");
});
clustermap.map_report.t28483.prototype.om$core$IRender$ = true;
clustermap.map_report.t28483.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t28483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28485){var self__ = this;
var _28485__$1 = this;return self__.meta28484;
});
clustermap.map_report.t28483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28485,meta28484__$1){var self__ = this;
var _28485__$1 = this;return (new clustermap.map_report.t28483(self__.data,self__.selection_report,meta28484__$1));
});
clustermap.map_report.__GT_t28483 = (function __GT_t28483(data__$1,selection_report__$1,meta28484){return (new clustermap.map_report.t28483(data__$1,selection_report__$1,meta28484));
});
}
return (new clustermap.map_report.t28483(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if(((new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data) == null)) && ((new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data) == null)))
{return clustermap.map_report.empty_report.call(null);
} else
{if((new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533).cljs$core$IFn$_invoke$arity$1(data));
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null))))
{return clustermap.map_report.selection_report.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982).cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
}
});
clustermap.map_report.mount = (function mount(app_state){return om.core.root.call(null,app_state,clustermap.map_report.widget,document.getElementById("map-report-content"));
});
