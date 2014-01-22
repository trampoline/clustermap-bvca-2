// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_stats = new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data);var pc_count = (function (){var G__11145 = pc_stats;var G__11145__$1 = (((G__11145 == null))?null:(G__11145["portfolio_company_count"]));return G__11145__$1;
})();var ic_count = (function (){var G__11146 = pc_stats;var G__11146__$1 = (((G__11146 == null))?null:(G__11146["investor_company_count"]));return G__11146__$1;
})();if(typeof clustermap.components.map_report.t11147 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11147 = (function (ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,meta11148){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.pc_stats = pc_stats;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11148 = meta11148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11147.cljs$lang$type = true;
clustermap.components.map_report.t11147.cljs$lang$ctorStr = "clustermap.components.map-report/t11147";
clustermap.components.map_report.t11147.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11147");
});
clustermap.components.map_report.t11147.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11147.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11152 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11152))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11152),(function (){var attrs11153 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11153))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11153),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11153));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11152),(function (){var attrs11154 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11154))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11154),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11154));
}
})());
}
})(),(function (){var attrs11155 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11155))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11155),(function (){var attrs11156 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11156))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11156),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11156));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11155),(function (){var attrs11157 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11157))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11157),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11157));
}
})());
}
})(),(function (){var attrs11158 = clustermap.formats.money.fmoney.call(null,(function (){var G__11168 = self__.pc_stats;var G__11168__$1 = (((G__11168 == null))?null:(G__11168["turnover"]["total"]));return G__11168__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11158))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11158),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11158),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11163 = clustermap.formats.number.fnum.call(null,(function (){var G__11169 = self__.pc_stats;var G__11169__$1 = (((G__11169 == null))?null:(G__11169["employee_count"]["total"]));return G__11169__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11163))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11163),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11163),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11149){var self__ = this;
var _11149__$1 = this;return self__.meta11148;
});
clustermap.components.map_report.t11147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11149,meta11148__$1){var self__ = this;
var _11149__$1 = this;return (new clustermap.components.map_report.t11147(self__.ic_count,self__.pc_count,self__.pc_stats,self__.data,self__.all_portfolio_companies_summary_report,meta11148__$1));
});
clustermap.components.map_report.__GT_t11147 = (function __GT_t11147(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11148){return (new clustermap.components.map_report.t11147(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta11148));
});
}
return (new clustermap.components.map_report.t11147(ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){var ic_count = (function (){var G__11194 = data;var G__11194__$1 = (((G__11194 == null))?null:(G__11194["investor_companies"]));var G__11194__$2 = (((G__11194__$1 == null))?null:cljs.core.count.call(null,G__11194__$1));return G__11194__$2;
})();var const_count = (function (){var G__11195 = data;var G__11195__$1 = (((G__11195 == null))?null:(G__11195["boundarylinecolls"]["uk_constituencies"]));var G__11195__$2 = (((G__11195__$1 == null))?null:cljs.core.count.call(null,G__11195__$1));return G__11195__$2;
})();if(typeof clustermap.components.map_report.t11196 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11196 = (function (const_count,ic_count,data,portfolio_company_report,meta11197){
this.const_count = const_count;
this.ic_count = ic_count;
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta11197 = meta11197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11196.cljs$lang$type = true;
clustermap.components.map_report.t11196.cljs$lang$ctorStr = "clustermap.components.map-report/t11196";
clustermap.components.map_report.t11196.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11196");
});
clustermap.components.map_report.t11196.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11196.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11199 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11199))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11199),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11199));
}
})()),React.DOM.ul(null,(function (){var attrs11200 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11200))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11200),(function (){var attrs11201 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11201))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11201),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11201));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11200),(function (){var attrs11202 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11202))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11202),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11202));
}
})());
}
})(),(function (){var attrs11203 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11203))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11203),(function (){var attrs11204 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11204))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11204),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11204));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11203),(function (){var attrs11205 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11205))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11205),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11205));
}
})());
}
})(),(function (){var attrs11206 = clustermap.formats.money.fmoney.call(null,(function (){var G__11216 = self__.data;var G__11216__$1 = (((G__11216 == null))?null:(G__11216["latest_turnover"]));return G__11216__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11206))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11206),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11206),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11211 = clustermap.formats.number.fnum.call(null,(function (){var G__11217 = self__.data;var G__11217__$1 = (((G__11217 == null))?null:(G__11217["latest_employee_count"]));return G__11217__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11211))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11211),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11211),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11198){var self__ = this;
var _11198__$1 = this;return self__.meta11197;
});
clustermap.components.map_report.t11196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11198,meta11197__$1){var self__ = this;
var _11198__$1 = this;return (new clustermap.components.map_report.t11196(self__.const_count,self__.ic_count,self__.data,self__.portfolio_company_report,meta11197__$1));
});
clustermap.components.map_report.__GT_t11196 = (function __GT_t11196(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta11197){return (new clustermap.components.map_report.t11196(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta11197));
});
}
return (new clustermap.components.map_report.t11196(const_count,ic_count,data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){var pc_count = (function (){var G__11242 = data;var G__11242__$1 = (((G__11242 == null))?null:(G__11242["portfolio_companies"]));var G__11242__$2 = (((G__11242__$1 == null))?null:cljs.core.count.call(null,G__11242__$1));return G__11242__$2;
})();var const_count = (function (){var G__11243 = data;var G__11243__$1 = (((G__11243 == null))?null:(G__11243["boundarylinecolls"]["uk_constituencies"]));var G__11243__$2 = (((G__11243__$1 == null))?null:cljs.core.count.call(null,G__11243__$1));return G__11243__$2;
})();if(typeof clustermap.components.map_report.t11244 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11244 = (function (const_count,pc_count,data,investor_company_report,meta11245){
this.const_count = const_count;
this.pc_count = pc_count;
this.data = data;
this.investor_company_report = investor_company_report;
this.meta11245 = meta11245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11244.cljs$lang$type = true;
clustermap.components.map_report.t11244.cljs$lang$ctorStr = "clustermap.components.map-report/t11244";
clustermap.components.map_report.t11244.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11244");
});
clustermap.components.map_report.t11244.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11244.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11247 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11247))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11247),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11247));
}
})()),React.DOM.ul(null,(function (){var attrs11248 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11248))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11248),(function (){var attrs11249 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11249))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11249),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11249));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11248),(function (){var attrs11250 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11250))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11250),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11250));
}
})());
}
})(),(function (){var attrs11251 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11251))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11251),(function (){var attrs11252 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11252))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11252),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11252));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11251),(function (){var attrs11253 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11253))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11253),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11253));
}
})());
}
})(),(function (){var attrs11254 = clustermap.formats.money.fmoney.call(null,(function (){var G__11264 = self__.data;var G__11264__$1 = (((G__11264 == null))?null:(G__11264["total_turnover"]));return G__11264__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11254))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11254),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11254),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11259 = clustermap.formats.number.fnum.call(null,(function (){var G__11265 = self__.data;var G__11265__$1 = (((G__11265 == null))?null:(G__11265["total_employee_count"]));return G__11265__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11259))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11259),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11259),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11246){var self__ = this;
var _11246__$1 = this;return self__.meta11245;
});
clustermap.components.map_report.t11244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11246,meta11245__$1){var self__ = this;
var _11246__$1 = this;return (new clustermap.components.map_report.t11244(self__.const_count,self__.pc_count,self__.data,self__.investor_company_report,meta11245__$1));
});
clustermap.components.map_report.__GT_t11244 = (function __GT_t11244(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta11245){return (new clustermap.components.map_report.t11244(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta11245));
});
}
return (new clustermap.components.map_report.t11244(const_count,pc_count,data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){var pc_count = (function (){var G__11291 = data;var G__11291__$1 = (((G__11291 == null))?null:(G__11291["portfolio_companies"]));var G__11291__$2 = (((G__11291__$1 == null))?null:cljs.core.count.call(null,G__11291__$1));return G__11291__$2;
})();var ic_count = (function (){var G__11292 = data;var G__11292__$1 = (((G__11292 == null))?null:(G__11292["investor_companies"]));var G__11292__$2 = (((G__11292__$1 == null))?null:cljs.core.count.call(null,G__11292__$1));return G__11292__$2;
})();if(typeof clustermap.components.map_report.t11293 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11293 = (function (ic_count,pc_count,data,constituency_report,meta11294){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.data = data;
this.constituency_report = constituency_report;
this.meta11294 = meta11294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11293.cljs$lang$type = true;
clustermap.components.map_report.t11293.cljs$lang$ctorStr = "clustermap.components.map-report/t11293";
clustermap.components.map_report.t11293.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11293");
});
clustermap.components.map_report.t11293.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11293.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11296 = (self__.data["name"]);if(cljs.core.map_QMARK_.call(null,attrs11296))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11296),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11296));
}
})(),(function (){var attrs11297 = (self__.data["mp"]);if(cljs.core.map_QMARK_.call(null,attrs11297))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11297),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11297),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,(self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11298 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11298))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11298),(function (){var attrs11299 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11299))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11299),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11299));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11298),(function (){var attrs11300 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11300))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11300),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11300));
}
})());
}
})(),(function (){var attrs11301 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11301))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11301),(function (){var attrs11302 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11302))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11302),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11302));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11301),(function (){var attrs11303 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11303))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11303),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11303));
}
})());
}
})(),(function (){var attrs11304 = clustermap.formats.money.fmoney.call(null,(function (){var G__11314 = self__.data;var G__11314__$1 = (((G__11314 == null))?null:(G__11314["total_turnover"]));return G__11314__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11304))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11304),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11304),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11309 = clustermap.formats.number.fnum.call(null,(function (){var G__11315 = self__.data;var G__11315__$1 = (((G__11315 == null))?null:(G__11315["total_employee_count"]));return G__11315__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11309))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11309),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11309),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11295){var self__ = this;
var _11295__$1 = this;return self__.meta11294;
});
clustermap.components.map_report.t11293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11295,meta11294__$1){var self__ = this;
var _11295__$1 = this;return (new clustermap.components.map_report.t11293(self__.ic_count,self__.pc_count,self__.data,self__.constituency_report,meta11294__$1));
});
clustermap.components.map_report.__GT_t11293 = (function __GT_t11293(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta11294){return (new clustermap.components.map_report.t11293(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta11294));
});
}
return (new clustermap.components.map_report.t11293(ic_count,pc_count,data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11319 = cljs.core._EQ__EQ_;var expr__11320 = type;if(cljs.core.truth_(pred__11319.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11320)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11319.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11320)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11319.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11320)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map