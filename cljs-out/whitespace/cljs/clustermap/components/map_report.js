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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__32946 = site_stats;var G__32946__$1 = (((G__32946 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__32946));return G__32946__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__32947 = site_stats;var G__32947__$1 = (((G__32947 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__32947));return G__32947__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__32948 = site_stats;var G__32948__$1 = (((G__32948 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__32948));return G__32948__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__32980 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__32980__$1 = ((cljs.core.seq_QMARK_.call(null,map__32980))?cljs.core.apply.call(null,cljs.core.hash_map,map__32980):map__32980);var const_count = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__32980__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t32981 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32981 = (function (pc_count,ic_count,const_count,map__32980,comm,site_stats,all_portfolio_companies_summary_report,meta32982){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__32980 = map__32980;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta32982 = meta32982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32981.cljs$lang$type = true;
clustermap.components.map_report.t32981.cljs$lang$ctorStr = "clustermap.components.map-report/t32981";
clustermap.components.map_report.t32981.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32981");
});
clustermap.components.map_report.t32981.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32981.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs32986 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32986))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32986),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32986),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs32991 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32991))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32991),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32991),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs32996 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32996))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32996),(function (){var attrs32997 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32997))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32997),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32997));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32996),(function (){var attrs32998 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32998))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32998),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32998));
}
})());
}
})(),(function (){var attrs32999 = clustermap.formats.money.fmoney.call(null,(function (){var G__33009 = self__.site_stats;var G__33009__$1 = (((G__33009 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33009));var G__33009__$2 = (((G__33009__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33009__$1));return G__33009__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32999))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32999),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32999),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33004 = clustermap.formats.number.fnum.call(null,(function (){var G__33010 = self__.site_stats;var G__33010__$1 = (((G__33010 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33010));var G__33010__$2 = (((G__33010__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33010__$1));return G__33010__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33004))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33004),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33004),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32983){var self__ = this;
var _32983__$1 = this;return self__.meta32982;
});
clustermap.components.map_report.t32981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32983,meta32982__$1){var self__ = this;
var _32983__$1 = this;return (new clustermap.components.map_report.t32981(self__.pc_count,self__.ic_count,self__.const_count,self__.map__32980,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta32982__$1));
});
clustermap.components.map_report.__GT_t32981 = (function __GT_t32981(pc_count__$1,ic_count__$1,const_count__$1,map__32980__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32982){return (new clustermap.components.map_report.t32981(pc_count__$1,ic_count__$1,const_count__$1,map__32980__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta32982));
});
}
return (new clustermap.components.map_report.t32981(pc_count,ic_count,const_count,map__32980__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__33034 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33034__$1 = ((cljs.core.seq_QMARK_.call(null,map__33034))?cljs.core.apply.call(null,cljs.core.hash_map,map__33034):map__33034);var const_count = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33034__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33035 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33035 = (function (pc_count,ic_count,const_count,map__33034,comm,site_stats,portfolio_company,portfolio_company_report,meta33036){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33034 = map__33034;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta33036 = meta33036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33035.cljs$lang$type = true;
clustermap.components.map_report.t33035.cljs$lang$ctorStr = "clustermap.components.map-report/t33035";
clustermap.components.map_report.t33035.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33035");
});
clustermap.components.map_report.t33035.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33035.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs33038 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs33038))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33038),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33038));
}
})()),React.DOM.ul(null,(function (){var attrs33039 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33039))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33039),(function (){var attrs33040 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33040))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33040),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33040));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33039),(function (){var attrs33041 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33041))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33041),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33041));
}
})());
}
})(),(function (){var attrs33042 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33042))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33042),(function (){var attrs33043 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33043))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33043),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33043));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33042),(function (){var attrs33044 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33044))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33044),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33044));
}
})());
}
})(),(function (){var attrs33045 = clustermap.formats.money.fmoney.call(null,(function (){var G__33055 = self__.site_stats;var G__33055__$1 = (((G__33055 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33055));var G__33055__$2 = (((G__33055__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33055__$1));return G__33055__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33045))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33045),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33045),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33050 = clustermap.formats.number.fnum.call(null,(function (){var G__33056 = self__.site_stats;var G__33056__$1 = (((G__33056 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33056));var G__33056__$2 = (((G__33056__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33056__$1));return G__33056__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33050))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33050),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33050),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33037){var self__ = this;
var _33037__$1 = this;return self__.meta33036;
});
clustermap.components.map_report.t33035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33037,meta33036__$1){var self__ = this;
var _33037__$1 = this;return (new clustermap.components.map_report.t33035(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33034,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta33036__$1));
});
clustermap.components.map_report.__GT_t33035 = (function __GT_t33035(pc_count__$1,ic_count__$1,const_count__$1,map__33034__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33036){return (new clustermap.components.map_report.t33035(pc_count__$1,ic_count__$1,const_count__$1,map__33034__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta33036));
});
}
return (new clustermap.components.map_report.t33035(pc_count,ic_count,const_count,map__33034__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__33080 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33080__$1 = ((cljs.core.seq_QMARK_.call(null,map__33080))?cljs.core.apply.call(null,cljs.core.hash_map,map__33080):map__33080);var const_count = cljs.core.get.call(null,map__33080__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33080__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33080__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33081 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33081 = (function (pc_count,ic_count,const_count,map__33080,comm,site_stats,investor_company,investor_company_report,meta33082){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33080 = map__33080;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta33082 = meta33082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33081.cljs$lang$type = true;
clustermap.components.map_report.t33081.cljs$lang$ctorStr = "clustermap.components.map-report/t33081";
clustermap.components.map_report.t33081.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33081");
});
clustermap.components.map_report.t33081.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33081.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs33084 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs33084))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33084),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33084));
}
})()),React.DOM.ul(null,(function (){var attrs33085 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33085))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33085),(function (){var attrs33086 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33086))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33086),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33086));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33085),(function (){var attrs33087 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33087))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33087),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33087));
}
})());
}
})(),(function (){var attrs33088 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs33088))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33088),(function (){var attrs33089 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33089))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33089),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33089));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33088),(function (){var attrs33090 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs33090))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33090),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33090));
}
})());
}
})(),(function (){var attrs33091 = clustermap.formats.money.fmoney.call(null,(function (){var G__33101 = self__.site_stats;var G__33101__$1 = (((G__33101 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33101));var G__33101__$2 = (((G__33101__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33101__$1));return G__33101__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33091))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33091),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33091),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33096 = clustermap.formats.number.fnum.call(null,(function (){var G__33102 = self__.site_stats;var G__33102__$1 = (((G__33102 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33102));var G__33102__$2 = (((G__33102__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33102__$1));return G__33102__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33096))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33096),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33096),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33083){var self__ = this;
var _33083__$1 = this;return self__.meta33082;
});
clustermap.components.map_report.t33081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33083,meta33082__$1){var self__ = this;
var _33083__$1 = this;return (new clustermap.components.map_report.t33081(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33080,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta33082__$1));
});
clustermap.components.map_report.__GT_t33081 = (function __GT_t33081(pc_count__$1,ic_count__$1,const_count__$1,map__33080__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33082){return (new clustermap.components.map_report.t33081(pc_count__$1,ic_count__$1,const_count__$1,map__33080__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta33082));
});
}
return (new clustermap.components.map_report.t33081(pc_count,ic_count,const_count,map__33080__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__33127 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__33127__$1 = ((cljs.core.seq_QMARK_.call(null,map__33127))?cljs.core.apply.call(null,cljs.core.hash_map,map__33127):map__33127);var const_count = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__33127__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t33128 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t33128 = (function (pc_count,ic_count,const_count,map__33127,comm,site_stats,constituency,constituency_report,meta33129){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__33127 = map__33127;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta33129 = meta33129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t33128.cljs$lang$type = true;
clustermap.components.map_report.t33128.cljs$lang$ctorStr = "clustermap.components.map-report/t33128";
clustermap.components.map_report.t33128.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t33128");
});
clustermap.components.map_report.t33128.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t33128.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs33131 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33131))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33131),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33131));
}
})(),(function (){var attrs33132 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs33132))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33132),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33132),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs33133 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs33133))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33133),(function (){var attrs33134 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33134))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33134),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33134));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33133),(function (){var attrs33135 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs33135))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33135),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33135));
}
})());
}
})(),(function (){var attrs33136 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs33136))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33136),(function (){var attrs33137 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33137))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33137),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33137));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33136),(function (){var attrs33138 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs33138))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs33138),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs33138));
}
})());
}
})(),(function (){var attrs33139 = clustermap.formats.money.fmoney.call(null,(function (){var G__33149 = self__.site_stats;var G__33149__$1 = (((G__33149 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__33149));var G__33149__$2 = (((G__33149__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33149__$1));return G__33149__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33139))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33139),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33139),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs33144 = clustermap.formats.number.fnum.call(null,(function (){var G__33150 = self__.site_stats;var G__33150__$1 = (((G__33150 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__33150));var G__33150__$2 = (((G__33150__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__33150__$1));return G__33150__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33144))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs33144),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs33144),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t33128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33130){var self__ = this;
var _33130__$1 = this;return self__.meta33129;
});
clustermap.components.map_report.t33128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33130,meta33129__$1){var self__ = this;
var _33130__$1 = this;return (new clustermap.components.map_report.t33128(self__.pc_count,self__.ic_count,self__.const_count,self__.map__33127,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta33129__$1));
});
clustermap.components.map_report.__GT_t33128 = (function __GT_t33128(pc_count__$1,ic_count__$1,const_count__$1,map__33127__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33129){return (new clustermap.components.map_report.t33128(pc_count__$1,ic_count__$1,const_count__$1,map__33127__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta33129));
});
}
return (new clustermap.components.map_report.t33128(pc_count,ic_count,const_count,map__33127__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__33154 = cljs.core._EQ__EQ_;var expr__33155 = type;if(cljs.core.truth_(pred__33154.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33155)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33154.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33155)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__33154.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33155)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
