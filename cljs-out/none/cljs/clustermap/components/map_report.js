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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1986847783),(function (){var G__12029 = site_stats;var G__12029__$1 = (((G__12029 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__12029));return G__12029__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",2672077326),(function (){var G__12030 = site_stats;var G__12030__$1 = (((G__12030 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__12030));return G__12030__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",1728788887),(function (){var G__12031 = site_stats;var G__12031__$1 = (((G__12031 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",621528264).cljs$core$IFn$_invoke$arity$1(G__12031));return G__12031__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__12063 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12063__$1 = ((cljs.core.seq_QMARK_.call(null,map__12063))?cljs.core.apply.call(null,cljs.core.hash_map,map__12063):map__12063);var const_count = cljs.core.get.call(null,map__12063__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12063__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12063__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12064 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12064 = (function (pc_count,ic_count,const_count,map__12063,comm,site_stats,all_portfolio_companies_summary_report,meta12065){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12063 = map__12063;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta12065 = meta12065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12064.cljs$lang$type = true;
clustermap.components.map_report.t12064.cljs$lang$ctorStr = "clustermap.components.map-report/t12064";
clustermap.components.map_report.t12064.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12064");
});
clustermap.components.map_report.t12064.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12064.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs12069 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12069))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12069),React.DOM.small(null,"Portfolio Companies listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12069),React.DOM.small(null,"Portfolio Companies listed"));
}
})(),(function (){var attrs12074 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12074))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12074),React.DOM.small(null,"Investors listed"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12074),React.DOM.small(null,"Investors listed"));
}
})(),(function (){var attrs12079 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12079))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12079),(function (){var attrs12080 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12080))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12080),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12080));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12079),(function (){var attrs12081 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12081))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12081),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12081));
}
})());
}
})(),(function (){var attrs12082 = clustermap.formats.money.fmoney.call(null,(function (){var G__12092 = self__.site_stats;var G__12092__$1 = (((G__12092 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12092));var G__12092__$2 = (((G__12092__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12092__$1));return G__12092__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12082))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12082),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12082),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12087 = clustermap.formats.number.fnum.call(null,(function (){var G__12093 = self__.site_stats;var G__12093__$1 = (((G__12093 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12093));var G__12093__$2 = (((G__12093__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12093__$1));return G__12093__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12087))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12087),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12087),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12066){var self__ = this;
var _12066__$1 = this;return self__.meta12065;
});
clustermap.components.map_report.t12064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12066,meta12065__$1){var self__ = this;
var _12066__$1 = this;return (new clustermap.components.map_report.t12064(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12063,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta12065__$1));
});
clustermap.components.map_report.__GT_t12064 = (function __GT_t12064(pc_count__$1,ic_count__$1,const_count__$1,map__12063__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12065){return (new clustermap.components.map_report.t12064(pc_count__$1,ic_count__$1,const_count__$1,map__12063__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta12065));
});
}
return (new clustermap.components.map_report.t12064(pc_count,ic_count,const_count,map__12063__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm){var map__12117 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12117__$1 = ((cljs.core.seq_QMARK_.call(null,map__12117))?cljs.core.apply.call(null,cljs.core.hash_map,map__12117):map__12117);var const_count = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12117__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12118 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12118 = (function (pc_count,ic_count,const_count,map__12117,comm,site_stats,portfolio_company,portfolio_company_report,meta12119){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12117 = map__12117;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta12119 = meta12119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12118.cljs$lang$type = true;
clustermap.components.map_report.t12118.cljs$lang$ctorStr = "clustermap.components.map-report/t12118";
clustermap.components.map_report.t12118.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12118");
});
clustermap.components.map_report.t12118.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12118.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12121 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs12121))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs12121),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs12121));
}
})()),React.DOM.ul(null,(function (){var attrs12122 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12122))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12122),(function (){var attrs12123 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12123))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12123),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12123));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12122),(function (){var attrs12124 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12124))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12124),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12124));
}
})());
}
})(),(function (){var attrs12125 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12125))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12125),(function (){var attrs12126 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12126))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12126),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12126));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12125),(function (){var attrs12127 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12127))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12127),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12127));
}
})());
}
})(),(function (){var attrs12128 = clustermap.formats.money.fmoney.call(null,(function (){var G__12138 = self__.site_stats;var G__12138__$1 = (((G__12138 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12138));var G__12138__$2 = (((G__12138__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12138__$1));return G__12138__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12128))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12128),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12128),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12133 = clustermap.formats.number.fnum.call(null,(function (){var G__12139 = self__.site_stats;var G__12139__$1 = (((G__12139 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12139));var G__12139__$2 = (((G__12139__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12139__$1));return G__12139__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12133))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12133),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12133),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12120){var self__ = this;
var _12120__$1 = this;return self__.meta12119;
});
clustermap.components.map_report.t12118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12120,meta12119__$1){var self__ = this;
var _12120__$1 = this;return (new clustermap.components.map_report.t12118(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12117,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta12119__$1));
});
clustermap.components.map_report.__GT_t12118 = (function __GT_t12118(pc_count__$1,ic_count__$1,const_count__$1,map__12117__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12119){return (new clustermap.components.map_report.t12118(pc_count__$1,ic_count__$1,const_count__$1,map__12117__$2,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta12119));
});
}
return (new clustermap.components.map_report.t12118(pc_count,ic_count,const_count,map__12117__$1,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm){var map__12163 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12163__$1 = ((cljs.core.seq_QMARK_.call(null,map__12163))?cljs.core.apply.call(null,cljs.core.hash_map,map__12163):map__12163);var const_count = cljs.core.get.call(null,map__12163__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12163__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12163__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12164 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12164 = (function (pc_count,ic_count,const_count,map__12163,comm,site_stats,investor_company,investor_company_report,meta12165){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12163 = map__12163;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta12165 = meta12165;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12164.cljs$lang$type = true;
clustermap.components.map_report.t12164.cljs$lang$ctorStr = "clustermap.components.map-report/t12164";
clustermap.components.map_report.t12164.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12164");
});
clustermap.components.map_report.t12164.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12164.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12167 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs12167))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs12167),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs12167));
}
})()),React.DOM.ul(null,(function (){var attrs12168 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12168))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12168),(function (){var attrs12169 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12169))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12169),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12169));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12168),(function (){var attrs12170 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12170))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12170),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12170));
}
})());
}
})(),(function (){var attrs12171 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs12171))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12171),(function (){var attrs12172 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12172))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12172),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12172));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12171),(function (){var attrs12173 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs12173))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12173),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12173));
}
})());
}
})(),(function (){var attrs12174 = clustermap.formats.money.fmoney.call(null,(function (){var G__12184 = self__.site_stats;var G__12184__$1 = (((G__12184 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12184));var G__12184__$2 = (((G__12184__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12184__$1));return G__12184__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12174))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12174),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12174),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12179 = clustermap.formats.number.fnum.call(null,(function (){var G__12185 = self__.site_stats;var G__12185__$1 = (((G__12185 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12185));var G__12185__$2 = (((G__12185__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12185__$1));return G__12185__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12179))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12179),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12179),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12166){var self__ = this;
var _12166__$1 = this;return self__.meta12165;
});
clustermap.components.map_report.t12164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12166,meta12165__$1){var self__ = this;
var _12166__$1 = this;return (new clustermap.components.map_report.t12164(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12163,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta12165__$1));
});
clustermap.components.map_report.__GT_t12164 = (function __GT_t12164(pc_count__$1,ic_count__$1,const_count__$1,map__12163__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12165){return (new clustermap.components.map_report.t12164(pc_count__$1,ic_count__$1,const_count__$1,map__12163__$2,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta12165));
});
}
return (new clustermap.components.map_report.t12164(pc_count,ic_count,const_count,map__12163__$1,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm){var map__12210 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__12210__$1 = ((cljs.core.seq_QMARK_.call(null,map__12210))?cljs.core.apply.call(null,cljs.core.hash_map,map__12210):map__12210);var const_count = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"const-count","const-count",1728788887));var ic_count = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"ic-count","ic-count",2672077326));var pc_count = cljs.core.get.call(null,map__12210__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1986847783));if(typeof clustermap.components.map_report.t12211 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t12211 = (function (pc_count,ic_count,const_count,map__12210,comm,site_stats,constituency,constituency_report,meta12212){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__12210 = map__12210;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta12212 = meta12212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t12211.cljs$lang$type = true;
clustermap.components.map_report.t12211.cljs$lang$ctorStr = "clustermap.components.map-report/t12211";
clustermap.components.map_report.t12211.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t12211");
});
clustermap.components.map_report.t12211.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t12211.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs12214 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12214))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs12214),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs12214));
}
})(),(function (){var attrs12215 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs12215))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs12215),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs12215),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs12216 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs12216))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12216),(function (){var attrs12217 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12217))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12217),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12217));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12216),(function (){var attrs12218 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs12218))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12218),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12218));
}
})());
}
})(),(function (){var attrs12219 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs12219))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12219),(function (){var attrs12220 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12220))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12220),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12220));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12219),(function (){var attrs12221 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs12221))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs12221),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs12221));
}
})());
}
})(),(function (){var attrs12222 = clustermap.formats.money.fmoney.call(null,(function (){var G__12232 = self__.site_stats;var G__12232__$1 = (((G__12232 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__12232));var G__12232__$2 = (((G__12232__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12232__$1));return G__12232__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12222))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12222),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12222),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs12227 = clustermap.formats.number.fnum.call(null,(function (){var G__12233 = self__.site_stats;var G__12233__$1 = (((G__12233 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__12233));var G__12233__$2 = (((G__12233__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__12233__$1));return G__12233__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs12227))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs12227),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs12227),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t12211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12213){var self__ = this;
var _12213__$1 = this;return self__.meta12212;
});
clustermap.components.map_report.t12211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12213,meta12212__$1){var self__ = this;
var _12213__$1 = this;return (new clustermap.components.map_report.t12211(self__.pc_count,self__.ic_count,self__.const_count,self__.map__12210,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta12212__$1));
});
clustermap.components.map_report.__GT_t12211 = (function __GT_t12211(pc_count__$1,ic_count__$1,const_count__$1,map__12210__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12212){return (new clustermap.components.map_report.t12211(pc_count__$1,ic_count__$1,const_count__$1,map__12210__$2,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta12212));
});
}
return (new clustermap.components.map_report.t12211(pc_count,ic_count,const_count,map__12210__$1,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var site_stats = new cljs.core.Keyword(null,"selection-portfolio-company-site-stats","selection-portfolio-company-site-stats",2240402081).cljs$core$IFn$_invoke$arity$1(data);var pred__12237 = cljs.core._EQ__EQ_;var expr__12238 = type;if(cljs.core.truth_(pred__12237.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12238)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12237.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12238)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm);
} else
{if(cljs.core.truth_(pred__12237.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12238)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map