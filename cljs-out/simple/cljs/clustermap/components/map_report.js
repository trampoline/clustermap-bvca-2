// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__26008 = site_stats;var G__26008__$1 = (((G__26008 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__26008));return G__26008__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__26009 = site_stats;var G__26009__$1 = (((G__26009 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__26009));return G__26009__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__26010 = site_stats;var G__26010__$1 = (((G__26010 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__26010));return G__26010__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__26042 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26042__$1 = ((cljs.core.seq_QMARK_.call(null,map__26042))?cljs.core.apply.call(null,cljs.core.hash_map,map__26042):map__26042);var const_count = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26043 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26043 = (function (pc_count,ic_count,const_count,map__26042,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta26044){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__26042 = map__26042;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta26044 = meta26044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26043.cljs$lang$type = true;
clustermap.components.map_report.t26043.cljs$lang$ctorStr = "clustermap.components.map-report/t26043";
clustermap.components.map_report.t26043.cljs$lang$ctorPrWriter = ((function (map__26042,map__26042__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t26043");
});})(map__26042,map__26042__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26043.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26043.prototype.om$core$IRender$render$arity$1 = ((function (map__26042,map__26042__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs26048 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26048))?sablono.interpreter.attributes.call(null,attrs26048):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26048))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26048),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs26053 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26053))?sablono.interpreter.attributes.call(null,attrs26053):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26053))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26053),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs26058 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26058))?sablono.interpreter.attributes.call(null,attrs26058):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26058))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26059 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26059))?sablono.interpreter.attributes.call(null,attrs26059):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26059))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26059)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26058),(function (){var attrs26060 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26060))?sablono.interpreter.attributes.call(null,attrs26060):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26060))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26060)], null))));
})()], null))));
})(),(function (){var attrs26061 = clustermap.formats.money.fmoney.call(null,(function (){var G__26071 = self__.site_stats;var G__26071__$1 = (((G__26071 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26071));var G__26071__$2 = (((G__26071__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26071__$1));return G__26071__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26061))?sablono.interpreter.attributes.call(null,attrs26061):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26061))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26061),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26066 = clustermap.formats.number.fnum.call(null,(function (){var G__26072 = self__.site_stats;var G__26072__$1 = (((G__26072 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26072));var G__26072__$2 = (((G__26072__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26072__$1));return G__26072__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26066))?sablono.interpreter.attributes.call(null,attrs26066):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26066))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26066),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26042,map__26042__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26042,map__26042__$1,const_count,ic_count,pc_count){
return (function (_26045){var self__ = this;
var _26045__$1 = this;return self__.meta26044;
});})(map__26042,map__26042__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26042,map__26042__$1,const_count,ic_count,pc_count){
return (function (_26045,meta26044__$1){var self__ = this;
var _26045__$1 = this;return (new clustermap.components.map_report.t26043(self__.pc_count,self__.ic_count,self__.const_count,self__.map__26042,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta26044__$1));
});})(map__26042,map__26042__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26043 = ((function (map__26042,map__26042__$1,const_count,ic_count,pc_count){
return (function __GT_t26043(pc_count__$1,ic_count__$1,const_count__$1,map__26042__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta26044){return (new clustermap.components.map_report.t26043(pc_count__$1,ic_count__$1,const_count__$1,map__26042__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta26044));
});})(map__26042,map__26042__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26043(pc_count,ic_count,const_count,map__26042__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__26098 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26098__$1 = ((cljs.core.seq_QMARK_.call(null,map__26098))?cljs.core.apply.call(null,cljs.core.hash_map,map__26098):map__26098);var const_count = cljs.core.get.call(null,map__26098__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26098__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26098__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26099 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26099 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,map__26098,comm,view_path_fn,portfolio_company_report,site_stats,meta26100){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.map__26098 = map__26098;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta26100 = meta26100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26099.cljs$lang$type = true;
clustermap.components.map_report.t26099.cljs$lang$ctorStr = "clustermap.components.map-report/t26099";
clustermap.components.map_report.t26099.cljs$lang$ctorPrWriter = ((function (map__26098,map__26098__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t26099");
});})(map__26098,map__26098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26099.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26099.prototype.om$core$IRender$render$arity$1 = ((function (map__26098,map__26098__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs26104 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26104))?sablono.interpreter.attributes.call(null,attrs26104):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26104))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26104)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26105 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26105))?sablono.interpreter.attributes.call(null,attrs26105):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26105))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26106 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26106))?sablono.interpreter.attributes.call(null,attrs26106):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26106))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26106)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26105),(function (){var attrs26107 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26107))?sablono.interpreter.attributes.call(null,attrs26107):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26107))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26107)], null))));
})()], null))));
})(),(function (){var attrs26108 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26108))?sablono.interpreter.attributes.call(null,attrs26108):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26108))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26109 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26109))?sablono.interpreter.attributes.call(null,attrs26109):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26109))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26109)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26108),(function (){var attrs26110 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26110))?sablono.interpreter.attributes.call(null,attrs26110):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26110))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26110)], null))));
})()], null))));
})(),(function (){var attrs26111 = clustermap.formats.money.fmoney.call(null,(function (){var G__26121 = self__.site_stats;var G__26121__$1 = (((G__26121 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26121));var G__26121__$2 = (((G__26121__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26121__$1));return G__26121__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26111))?sablono.interpreter.attributes.call(null,attrs26111):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26111))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26111),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26116 = clustermap.formats.number.fnum.call(null,(function (){var G__26122 = self__.site_stats;var G__26122__$1 = (((G__26122 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26122));var G__26122__$2 = (((G__26122__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26122__$1));return G__26122__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26116))?sablono.interpreter.attributes.call(null,attrs26116):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26116))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26116),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26098,map__26098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26098,map__26098__$1,const_count,ic_count,pc_count){
return (function (_26101){var self__ = this;
var _26101__$1 = this;return self__.meta26100;
});})(map__26098,map__26098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26098,map__26098__$1,const_count,ic_count,pc_count){
return (function (_26101,meta26100__$1){var self__ = this;
var _26101__$1 = this;return (new clustermap.components.map_report.t26099(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.map__26098,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta26100__$1));
});})(map__26098,map__26098__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26099 = ((function (map__26098,map__26098__$1,const_count,ic_count,pc_count){
return (function __GT_t26099(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__26098__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta26100){return (new clustermap.components.map_report.t26099(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,map__26098__$2,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta26100));
});})(map__26098,map__26098__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26099(pc_count,path_fn,const_count,portfolio_company,ic_count,map__26098__$1,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__26148 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26148__$1 = ((cljs.core.seq_QMARK_.call(null,map__26148))?cljs.core.apply.call(null,cljs.core.hash_map,map__26148):map__26148);var const_count = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26148__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26149 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26149 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,map__26148,investor_company_report,view_path_fn,site_stats,meta26150){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.map__26148 = map__26148;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta26150 = meta26150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26149.cljs$lang$type = true;
clustermap.components.map_report.t26149.cljs$lang$ctorStr = "clustermap.components.map-report/t26149";
clustermap.components.map_report.t26149.cljs$lang$ctorPrWriter = ((function (map__26148,map__26148__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t26149");
});})(map__26148,map__26148__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26149.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26149.prototype.om$core$IRender$render$arity$1 = ((function (map__26148,map__26148__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs26154 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26154))?sablono.interpreter.attributes.call(null,attrs26154):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26154))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26154)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26155 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26155))?sablono.interpreter.attributes.call(null,attrs26155):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26155))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26156 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26156))?sablono.interpreter.attributes.call(null,attrs26156):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26156))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26156)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26155),(function (){var attrs26157 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26157))?sablono.interpreter.attributes.call(null,attrs26157):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26157))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26157)], null))));
})()], null))));
})(),(function (){var attrs26158 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26158))?sablono.interpreter.attributes.call(null,attrs26158):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26158))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26159 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26159))?sablono.interpreter.attributes.call(null,attrs26159):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26159))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26159)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26158),(function (){var attrs26160 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26160))?sablono.interpreter.attributes.call(null,attrs26160):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26160)], null))));
})()], null))));
})(),(function (){var attrs26161 = clustermap.formats.money.fmoney.call(null,(function (){var G__26171 = self__.site_stats;var G__26171__$1 = (((G__26171 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26171));var G__26171__$2 = (((G__26171__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26171__$1));return G__26171__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26161))?sablono.interpreter.attributes.call(null,attrs26161):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26161))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26161),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26166 = clustermap.formats.number.fnum.call(null,(function (){var G__26172 = self__.site_stats;var G__26172__$1 = (((G__26172 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26172));var G__26172__$2 = (((G__26172__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26172__$1));return G__26172__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26166))?sablono.interpreter.attributes.call(null,attrs26166):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26166))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26166),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26148,map__26148__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26148,map__26148__$1,const_count,ic_count,pc_count){
return (function (_26151){var self__ = this;
var _26151__$1 = this;return self__.meta26150;
});})(map__26148,map__26148__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26148,map__26148__$1,const_count,ic_count,pc_count){
return (function (_26151,meta26150__$1){var self__ = this;
var _26151__$1 = this;return (new clustermap.components.map_report.t26149(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.map__26148,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta26150__$1));
});})(map__26148,map__26148__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26149 = ((function (map__26148,map__26148__$1,const_count,ic_count,pc_count){
return (function __GT_t26149(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,map__26148__$2,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta26150){return (new clustermap.components.map_report.t26149(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,map__26148__$2,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta26150));
});})(map__26148,map__26148__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26149(pc_count,path_fn,const_count,investor_company,ic_count,comm,map__26148__$1,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__26202 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__26202__$1 = ((cljs.core.seq_QMARK_.call(null,map__26202))?cljs.core.apply.call(null,cljs.core.hash_map,map__26202):map__26202);var const_count = cljs.core.get.call(null,map__26202__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__26202__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__26202__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t26203 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26203 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__26202,site_stats,meta26204){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.map__26202 = map__26202;
this.site_stats = site_stats;
this.meta26204 = meta26204;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26203.cljs$lang$type = true;
clustermap.components.map_report.t26203.cljs$lang$ctorStr = "clustermap.components.map-report/t26203";
clustermap.components.map_report.t26203.cljs$lang$ctorPrWriter = ((function (map__26202,map__26202__$1,const_count,ic_count,pc_count){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.map-report/t26203");
});})(map__26202,map__26202__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26203.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t26203.prototype.om$core$IRender$render$arity$1 = ((function (map__26202,map__26202__$1,const_count,ic_count,pc_count){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs26208 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs26208))?sablono.interpreter.attributes.call(null,attrs26208):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26208))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26208),React.DOM.br(null),(cljs.core.truth_((function (){var or__3541__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs26213 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26213))?sablono.interpreter.attributes.call(null,attrs26213):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26213))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26214 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26214))?sablono.interpreter.attributes.call(null,attrs26214):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26214))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26214)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26213),(function (){var attrs26215 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26215))?sablono.interpreter.attributes.call(null,attrs26215):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26215))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26215)], null))));
})()], null))));
})(),(function (){var attrs26216 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26216))?sablono.interpreter.attributes.call(null,attrs26216):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26216))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs26217 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26217))?sablono.interpreter.attributes.call(null,attrs26217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26217))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26217)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26216),(function (){var attrs26218 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs26218))?sablono.interpreter.attributes.call(null,attrs26218):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26218))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26218)], null))));
})()], null))));
})(),(function (){var attrs26219 = clustermap.formats.money.fmoney.call(null,(function (){var G__26229 = self__.site_stats;var G__26229__$1 = (((G__26229 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__26229));var G__26229__$2 = (((G__26229__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26229__$1));return G__26229__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26219))?sablono.interpreter.attributes.call(null,attrs26219):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26219))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26219),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26224 = clustermap.formats.number.fnum.call(null,(function (){var G__26230 = self__.site_stats;var G__26230__$1 = (((G__26230 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__26230));var G__26230__$2 = (((G__26230__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__26230__$1));return G__26230__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26224))?sablono.interpreter.attributes.call(null,attrs26224):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26224))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26224),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__26202,map__26202__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26203.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26202,map__26202__$1,const_count,ic_count,pc_count){
return (function (_26205){var self__ = this;
var _26205__$1 = this;return self__.meta26204;
});})(map__26202,map__26202__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t26203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26202,map__26202__$1,const_count,ic_count,pc_count){
return (function (_26205,meta26204__$1){var self__ = this;
var _26205__$1 = this;return (new clustermap.components.map_report.t26203(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.map__26202,self__.site_stats,meta26204__$1));
});})(map__26202,map__26202__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t26203 = ((function (map__26202,map__26202__$1,const_count,ic_count,pc_count){
return (function __GT_t26203(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__26202__$2,site_stats__$1,meta26204){return (new clustermap.components.map_report.t26203(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,map__26202__$2,site_stats__$1,meta26204));
});})(map__26202,map__26202__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t26203(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,view_path_fn,map__26202__$1,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__26235 = om.core.get_shared.call(null,owner);var map__26235__$1 = ((cljs.core.seq_QMARK_.call(null,map__26235))?cljs.core.apply.call(null,cljs.core.hash_map,map__26235):map__26235);var view_path_fn = cljs.core.get.call(null,map__26235__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__26235__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__26235__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__26236 = cljs.core._EQ__EQ_;var expr__26237 = type;if(cljs.core.truth_(pred__26236.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__26237)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26236.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__26237)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__26236.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__26237)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
