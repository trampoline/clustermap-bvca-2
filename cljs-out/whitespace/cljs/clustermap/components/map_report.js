// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__32851 = site_stats;var G__32851__$1 = (((G__32851 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32851));return G__32851__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__32852 = site_stats;var G__32852__$1 = (((G__32852 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32852));return G__32852__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__32853 = site_stats;var G__32853__$1 = (((G__32853 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__32853));return G__32853__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__32885 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32885__$1 = ((cljs.core.seq_QMARK_.call(null,map__32885))?cljs.core.apply.call(null,cljs.core.hash_map,map__32885):map__32885);var const_count = cljs.core.get.call(null,map__32885__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32885__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32885__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32886 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32886 = (function (pc_count,ic_count,const_count,map__32885,comm,site_stats,all_portfolio_companies_summary_report,meta32887){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32885 = map__32885;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32887 = meta32887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32886.cljs$lang$type = true;
clustermap.components.map_report.t32886.cljs$lang$ctorStr = "clustermap.components.map-report/t32886";
clustermap.components.map_report.t32886.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32886");
});
clustermap.components.map_report.t32886.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32886.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32891 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32891))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32891),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32891),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs32896 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32896))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32896),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32896),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs32901 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32901))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32901),(function (){var attrs32902 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32902))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32902),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32902));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32901),(function (){var attrs32903 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32903))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32903),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32903));
}
})());
}
})(),(function (){var attrs32904 = clustermap.formats.money.fmoney.call(null,(function (){var G__32914 = self__.site_stats;var G__32914__$1 = (((G__32914 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32914));var G__32914__$2 = (((G__32914__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32914__$1));return G__32914__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32904))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32904),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32904),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32909 = clustermap.formats.number.fnum.call(null,(function (){var G__32915 = self__.site_stats;var G__32915__$1 = (((G__32915 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32915));var G__32915__$2 = (((G__32915__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32915__$1));return G__32915__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32909))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32909),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32909),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32888){var self__ = this;
var _32888__$1 = this;return self__.meta32887;
});
clustermap.components.map_report.t32886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32888,meta32887__$1){var self__ = this;
var _32888__$1 = this;return (new clustermap.components.map_report.t32886(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32885,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta32887__$1));
});
clustermap.components.map_report.__GT_t32886 = (function __GT_t32886(pc_count__$1,ic_count__$1,const_count__$1,map__32885__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32887){return (new clustermap.components.map_report.t32886(pc_count__$1,ic_count__$1,const_count__$1,map__32885__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32887));
});
}
return (new clustermap.components.map_report.t32886(pc_count,ic_count,const_count,map__32885__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__32939 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32939__$1 = ((cljs.core.seq_QMARK_.call(null,map__32939))?cljs.core.apply.call(null,cljs.core.hash_map,map__32939):map__32939);var const_count = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32940 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32940 = (function (pc_count,ic_count,const_count,map__32939,comm,site_stats,portfolio_company,portfolio_company_report,meta32941){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32939 = map__32939;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta32941 = meta32941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32940.cljs$lang$type = true;
clustermap.components.map_report.t32940.cljs$lang$ctorStr = "clustermap.components.map-report/t32940";
clustermap.components.map_report.t32940.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32940");
});
clustermap.components.map_report.t32940.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32940.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32943 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs32943))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32943),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32943));
}
})()),React.DOM.ul(null,(function (){var attrs32944 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32944))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32944),(function (){var attrs32945 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32945))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32945),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32945));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32944),(function (){var attrs32946 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32946))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32946),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32946));
}
})());
}
})(),(function (){var attrs32947 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32947))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32947),(function (){var attrs32948 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32948))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32948),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32948));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32947),(function (){var attrs32949 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32949))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32949),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32949));
}
})());
}
})(),(function (){var attrs32950 = clustermap.formats.money.fmoney.call(null,(function (){var G__32960 = self__.site_stats;var G__32960__$1 = (((G__32960 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__32960));var G__32960__$2 = (((G__32960__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32960__$1));return G__32960__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32950))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32950),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32950),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32955 = clustermap.formats.number.fnum.call(null,(function (){var G__32961 = self__.site_stats;var G__32961__$1 = (((G__32961 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__32961));var G__32961__$2 = (((G__32961__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__32961__$1));return G__32961__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32955))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32955),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32955),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32942){var self__ = this;
var _32942__$1 = this;return self__.meta32941;
});
clustermap.components.map_report.t32940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32942,meta32941__$1){var self__ = this;
var _32942__$1 = this;return (new clustermap.components.map_report.t32940(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32939,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta32941__$1));
});
clustermap.components.map_report.__GT_t32940 = (function __GT_t32940(pc_count__$1,ic_count__$1,const_count__$1,map__32939__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta32941){return (new clustermap.components.map_report.t32940(pc_count__$1,ic_count__$1,const_count__$1,map__32939__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta32941));
});
}
return (new clustermap.components.map_report.t32940(pc_count,ic_count,const_count,map__32939__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__32985 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32985__$1 = ((cljs.core.seq_QMARK_.call(null,map__32985))?cljs.core.apply.call(null,cljs.core.hash_map,map__32985):map__32985);var const_count = cljs.core.get.call(null,map__32985__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32985__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32985__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32986 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32986 = (function (pc_count,ic_count,const_count,map__32985,comm,site_stats,investor_company,investor_company_report,meta32987){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32985 = map__32985;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32987 = meta32987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32986.cljs$lang$type = true;
clustermap.components.map_report.t32986.cljs$lang$ctorStr = "clustermap.components.map-report/t32986";
clustermap.components.map_report.t32986.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32986");
});
clustermap.components.map_report.t32986.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32986.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32989 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32989))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32989),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32989));
}
})()),React.DOM.ul(null,(function (){var attrs32990 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32990))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32990),(function (){var attrs32991 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32991))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32991),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32991));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32990),(function (){var attrs32992 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32992))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32992),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32992));
}
})());
}
})(),(function (){var attrs32993 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32993))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32993),(function (){var attrs32994 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32994))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32994),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32994));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32993),(function (){var attrs32995 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32995))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32995),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32995));
}
})());
}
})(),(function (){var attrs32996 = clustermap.formats.money.fmoney.call(null,(function (){var G__33006 = self__.site_stats;var G__33006__$1 = (((G__33006 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33006));var G__33006__$2 = (((G__33006__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33006__$1));return G__33006__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32996))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32996),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32996),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33001 = clustermap.formats.number.fnum.call(null,(function (){var G__33007 = self__.site_stats;var G__33007__$1 = (((G__33007 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33007));var G__33007__$2 = (((G__33007__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33007__$1));return G__33007__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33001))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33001),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33001),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32988){var self__ = this;
var _32988__$1 = this;return self__.meta32987;
});
clustermap.components.map_report.t32986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32988,meta32987__$1){var self__ = this;
var _32988__$1 = this;return (new clustermap.components.map_report.t32986(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32985,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta32987__$1));
});
clustermap.components.map_report.__GT_t32986 = (function __GT_t32986(pc_count__$1,ic_count__$1,const_count__$1,map__32985__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta32987){return (new clustermap.components.map_report.t32986(pc_count__$1,ic_count__$1,const_count__$1,map__32985__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta32987));
});
}
return (new clustermap.components.map_report.t32986(pc_count,ic_count,const_count,map__32985__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33032 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33032__$1 = ((cljs.core.seq_QMARK_.call(null,map__33032))?cljs.core.apply.call(null,cljs.core.hash_map,map__33032):map__33032);var const_count = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33033 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33033 = (function (pc_count,ic_count,const_count,map__33032,comm,site_stats,constituency,constituency_report,meta33034){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33032 = map__33032;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33034 = meta33034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33033.cljs$lang$type = true;
clustermap.components.map_report.t33033.cljs$lang$ctorStr = "clustermap.components.map-report/t33033";
clustermap.components.map_report.t33033.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33033");
});
clustermap.components.map_report.t33033.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33033.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs33036 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33036))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33036),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33036));
}
})(),(function (){var attrs33037 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33037))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33037),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33037),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33038 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33038))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33038),(function (){var attrs33039 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33039))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33039),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33039));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33038),(function (){var attrs33040 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33040))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33040),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33040));
}
})());
}
})(),(function (){var attrs33041 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33041))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33041),(function (){var attrs33042 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33042))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33042),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33042));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33041),(function (){var attrs33043 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33043))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33043),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33043));
}
})());
}
})(),(function (){var attrs33044 = clustermap.formats.money.fmoney.call(null,(function (){var G__33054 = self__.site_stats;var G__33054__$1 = (((G__33054 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33054));var G__33054__$2 = (((G__33054__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33054__$1));return G__33054__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33044))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33044),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33044),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33049 = clustermap.formats.number.fnum.call(null,(function (){var G__33055 = self__.site_stats;var G__33055__$1 = (((G__33055 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33055));var G__33055__$2 = (((G__33055__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33055__$1));return G__33055__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33049))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33049),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33049),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33035){var self__ = this;
var _33035__$1 = this;return self__.meta33034;
});
clustermap.components.map_report.t33033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33035,meta33034__$1){var self__ = this;
var _33035__$1 = this;return (new clustermap.components.map_report.t33033(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33032,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33034__$1));
});
clustermap.components.map_report.__GT_t33033 = (function __GT_t33033(pc_count__$1,ic_count__$1,const_count__$1,map__33032__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33034){return (new clustermap.components.map_report.t33033(pc_count__$1,ic_count__$1,const_count__$1,map__33032__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33034));
});
}
return (new clustermap.components.map_report.t33033(pc_count,ic_count,const_count,map__33032__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33059 = cljs.core._EQ__EQ_;var expr__33060 = type;if(cljs.core.truth_(pred__33059.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33060)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33059.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33060)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33059.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33060)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
