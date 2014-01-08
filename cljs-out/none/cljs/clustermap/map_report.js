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
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t10721 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10721 = (function (empty_report,meta10722){
this.empty_report = empty_report;
this.meta10722 = meta10722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10721.cljs$lang$type = true;
clustermap.map_report.t10721.cljs$lang$ctorStr = "clustermap.map-report/t10721";
clustermap.map_report.t10721.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10721");
});
clustermap.map_report.t10721.prototype.om$core$IRender$ = true;
clustermap.map_report.t10721.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t10721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10723){var self__ = this;
var _10723__$1 = this;return self__.meta10722;
});
clustermap.map_report.t10721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10723,meta10722__$1){var self__ = this;
var _10723__$1 = this;return (new clustermap.map_report.t10721(self__.empty_report,meta10722__$1));
});
clustermap.map_report.__GT_t10721 = (function __GT_t10721(empty_report__$1,meta10722){return (new clustermap.map_report.t10721(empty_report__$1,meta10722));
});
}
return (new clustermap.map_report.t10721(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(summary){if(typeof clustermap.map_report.t10748 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10748 = (function (summary,all_portfolio_companies_summary_report,meta10749){
this.summary = summary;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta10749 = meta10749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10748.cljs$lang$type = true;
clustermap.map_report.t10748.cljs$lang$ctorStr = "clustermap.map-report/t10748";
clustermap.map_report.t10748.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10748");
});
clustermap.map_report.t10748.prototype.om$core$IRender$ = true;
clustermap.map_report.t10748.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs10753 = clustermap.formats.number.readable.call(null,(self__.summary["count"]));if(cljs.core.map_QMARK_.call(null,attrs10753))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10753)),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10753),React.DOM.small(null,"Companies"));
}
})(),React.DOM.li(null,"2",React.DOM.small(null,"Investors")),(function (){var attrs10760 = clustermap.formats.money.readable.call(null,(self__.summary["latest_turnover_stats"]["total"]),new cljs.core.Keyword(null,"sf","sf",1013907909),2);if(cljs.core.map_QMARK_.call(null,attrs10760))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10760)),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10760),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs10765 = clustermap.formats.number.readable.call(null,(self__.summary["latest_employee_count_stats"]["total"]));if(cljs.core.map_QMARK_.call(null,attrs10765))
{return React.DOM.li(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,cljs.core.PersistentArrayMap.EMPTY,attrs10765)),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs10765),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t10748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10750){var self__ = this;
var _10750__$1 = this;return self__.meta10749;
});
clustermap.map_report.t10748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10750,meta10749__$1){var self__ = this;
var _10750__$1 = this;return (new clustermap.map_report.t10748(self__.summary,self__.all_portfolio_companies_summary_report,meta10749__$1));
});
clustermap.map_report.__GT_t10748 = (function __GT_t10748(summary__$1,all_portfolio_companies_summary_report__$1,meta10749){return (new clustermap.map_report.t10748(summary__$1,all_portfolio_companies_summary_report__$1,meta10749));
});
}
return (new clustermap.map_report.t10748(summary,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t10775 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t10775 = (function (data,selection_report,meta10776){
this.data = data;
this.selection_report = selection_report;
this.meta10776 = meta10776;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t10775.cljs$lang$type = true;
clustermap.map_report.t10775.cljs$lang$ctorStr = "clustermap.map-report/t10775";
clustermap.map_report.t10775.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.map-report/t10775");
});
clustermap.map_report.t10775.prototype.om$core$IRender$ = true;
clustermap.map_report.t10775.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t10775.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10777){var self__ = this;
var _10777__$1 = this;return self__.meta10776;
});
clustermap.map_report.t10775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10777,meta10776__$1){var self__ = this;
var _10777__$1 = this;return (new clustermap.map_report.t10775(self__.data,self__.selection_report,meta10776__$1));
});
clustermap.map_report.__GT_t10775 = (function __GT_t10775(data__$1,selection_report__$1,meta10776){return (new clustermap.map_report.t10775(data__$1,selection_report__$1,meta10776));
});
}
return (new clustermap.map_report.t10775(data,selection_report,null));
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

//# sourceMappingURL=map_report.js.map