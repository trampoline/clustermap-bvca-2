// Compiled by ClojureScript 0.0-2261
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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__24034 = site_stats;var G__24034__$1 = (((G__24034 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__24034));return G__24034__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__24035 = site_stats;var G__24035__$1 = (((G__24035 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__24035));return G__24035__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__24036 = site_stats;var G__24036__$1 = (((G__24036 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__24036));return G__24036__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__24068 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24068__$1 = ((cljs.core.seq_QMARK_.call(null,map__24068))?cljs.core.apply.call(null,cljs.core.hash_map,map__24068):map__24068);var const_count = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24069 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24069 = (function (pc_count,ic_count,const_count,map__24068,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta24070){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__24068 = map__24068;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta24070 = meta24070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24069.cljs$lang$type = true;
clustermap.components.map_report.t24069.cljs$lang$ctorStr = "clustermap.components.map-report/t24069";
clustermap.components.map_report.t24069.cljs$lang$ctorPrWriter = ((function (map__24068,map__24068__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24069");
});})(map__24068,map__24068__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24069.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24069.prototype.om$core$IRender$render$arity$1 = ((function (map__24068,map__24068__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs24074 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24074))?sablono.interpreter.attributes.call(null,attrs24074):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24074))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24074),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs24079 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24079))?sablono.interpreter.attributes.call(null,attrs24079):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24079))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24079),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs24084 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24084))?sablono.interpreter.attributes.call(null,attrs24084):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24084))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24085 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24085))?sablono.interpreter.attributes.call(null,attrs24085):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24085))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24085)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24084),(function (){var attrs24086 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24086))?sablono.interpreter.attributes.call(null,attrs24086):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24086))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24086)], null))));
})()], null))));
})(),(function (){var attrs24087 = clustermap.formats.money.fmoney.call(null,(function (){var G__24097 = self__.site_stats;var G__24097__$1 = (((G__24097 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24097));var G__24097__$2 = (((G__24097__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24097__$1));return G__24097__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24087))?sablono.interpreter.attributes.call(null,attrs24087):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24087))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24087),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24092 = clustermap.formats.number.fnum.call(null,(function (){var G__24098 = self__.site_stats;var G__24098__$1 = (((G__24098 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24098));var G__24098__$2 = (((G__24098__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24098__$1));return G__24098__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24092))?sablono.interpreter.attributes.call(null,attrs24092):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24092))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24092),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24068,map__24068__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24068,map__24068__$1,const_count,ic_count,pc_count){
return (function (_24071){var self__ = this;
var _24071__$1 = this;return self__.meta24070;
});})(map__24068,map__24068__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24068,map__24068__$1,const_count,ic_count,pc_count){
return (function (_24071,meta24070__$1){var self__ = this;
var _24071__$1 = this;return (new clustermap.components.map_report.t24069(self__.pc_count,self__.ic_count,self__.const_count,self__.map__24068,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta24070__$1));
});})(map__24068,map__24068__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24069 = ((function (map__24068,map__24068__$1,const_count,ic_count,pc_count){
return (function __GT_t24069(pc_count__$1,ic_count__$1,const_count__$1,map__24068__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta24070){return (new clustermap.components.map_report.t24069(pc_count__$1,ic_count__$1,const_count__$1,map__24068__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta24070));
});})(map__24068,map__24068__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24069(pc_count,ic_count,const_count,map__24068__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__24124 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24124__$1 = ((cljs.core.seq_QMARK_.call(null,map__24124))?cljs.core.apply.call(null,cljs.core.hash_map,map__24124):map__24124);var const_count = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24124__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24125 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24125 = (function (pc_count,path_fn,map__24124,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,meta24126){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.map__24124 = map__24124;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta24126 = meta24126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24125.cljs$lang$type = true;
clustermap.components.map_report.t24125.cljs$lang$ctorStr = "clustermap.components.map-report/t24125";
clustermap.components.map_report.t24125.cljs$lang$ctorPrWriter = ((function (map__24124,map__24124__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24125");
});})(map__24124,map__24124__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24125.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24125.prototype.om$core$IRender$render$arity$1 = ((function (map__24124,map__24124__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs24130 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs24130))?sablono.interpreter.attributes.call(null,attrs24130):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24130))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24130)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs24131 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24131))?sablono.interpreter.attributes.call(null,attrs24131):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24131))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24132 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24132))?sablono.interpreter.attributes.call(null,attrs24132):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24132)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24131),(function (){var attrs24133 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24133))?sablono.interpreter.attributes.call(null,attrs24133):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24133))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24133)], null))));
})()], null))));
})(),(function (){var attrs24134 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24134))?sablono.interpreter.attributes.call(null,attrs24134):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24134))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24135 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24135))?sablono.interpreter.attributes.call(null,attrs24135):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24135))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24135)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24134),(function (){var attrs24136 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24136))?sablono.interpreter.attributes.call(null,attrs24136):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24136))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24136)], null))));
})()], null))));
})(),(function (){var attrs24137 = clustermap.formats.money.fmoney.call(null,(function (){var G__24147 = self__.site_stats;var G__24147__$1 = (((G__24147 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24147));var G__24147__$2 = (((G__24147__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24147__$1));return G__24147__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24137))?sablono.interpreter.attributes.call(null,attrs24137):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24137))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24137),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24142 = clustermap.formats.number.fnum.call(null,(function (){var G__24148 = self__.site_stats;var G__24148__$1 = (((G__24148 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24148));var G__24148__$2 = (((G__24148__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24148__$1));return G__24148__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24142))?sablono.interpreter.attributes.call(null,attrs24142):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24142))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24142),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24124,map__24124__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24125.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24124,map__24124__$1,const_count,ic_count,pc_count){
return (function (_24127){var self__ = this;
var _24127__$1 = this;return self__.meta24126;
});})(map__24124,map__24124__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24124,map__24124__$1,const_count,ic_count,pc_count){
return (function (_24127,meta24126__$1){var self__ = this;
var _24127__$1 = this;return (new clustermap.components.map_report.t24125(self__.pc_count,self__.path_fn,self__.map__24124,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.portfolio_company_report,self__.site_stats,meta24126__$1));
});})(map__24124,map__24124__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24125 = ((function (map__24124,map__24124__$1,const_count,ic_count,pc_count){
return (function __GT_t24125(pc_count__$1,path_fn__$1,map__24124__$2,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta24126){return (new clustermap.components.map_report.t24125(pc_count__$1,path_fn__$1,map__24124__$2,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,portfolio_company_report__$1,site_stats__$1,meta24126));
});})(map__24124,map__24124__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24125(pc_count,path_fn,map__24124__$1,const_count,portfolio_company,ic_count,comm,view_path_fn,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__24174 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24174__$1 = ((cljs.core.seq_QMARK_.call(null,map__24174))?cljs.core.apply.call(null,cljs.core.hash_map,map__24174):map__24174);var const_count = cljs.core.get.call(null,map__24174__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24174__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24174__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24175 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24175 = (function (pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__24174,site_stats,meta24176){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.map__24174 = map__24174;
this.site_stats = site_stats;
this.meta24176 = meta24176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24175.cljs$lang$type = true;
clustermap.components.map_report.t24175.cljs$lang$ctorStr = "clustermap.components.map-report/t24175";
clustermap.components.map_report.t24175.cljs$lang$ctorPrWriter = ((function (map__24174,map__24174__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24175");
});})(map__24174,map__24174__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24175.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24175.prototype.om$core$IRender$render$arity$1 = ((function (map__24174,map__24174__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs24180 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs24180))?sablono.interpreter.attributes.call(null,attrs24180):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24180))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24180)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs24181 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24181))?sablono.interpreter.attributes.call(null,attrs24181):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24181))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24182 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24182))?sablono.interpreter.attributes.call(null,attrs24182):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24182))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24182)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24181),(function (){var attrs24183 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24183))?sablono.interpreter.attributes.call(null,attrs24183):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24183))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24183)], null))));
})()], null))));
})(),(function (){var attrs24184 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24184))?sablono.interpreter.attributes.call(null,attrs24184):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24184))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24185 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24185))?sablono.interpreter.attributes.call(null,attrs24185):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24185))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24185)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24184),(function (){var attrs24186 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24186))?sablono.interpreter.attributes.call(null,attrs24186):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24186))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24186)], null))));
})()], null))));
})(),(function (){var attrs24187 = clustermap.formats.money.fmoney.call(null,(function (){var G__24197 = self__.site_stats;var G__24197__$1 = (((G__24197 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24197));var G__24197__$2 = (((G__24197__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24197__$1));return G__24197__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24187))?sablono.interpreter.attributes.call(null,attrs24187):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24187))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24187),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24192 = clustermap.formats.number.fnum.call(null,(function (){var G__24198 = self__.site_stats;var G__24198__$1 = (((G__24198 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24198));var G__24198__$2 = (((G__24198__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24198__$1));return G__24198__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24192))?sablono.interpreter.attributes.call(null,attrs24192):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24192))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24192),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24174,map__24174__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24175.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24174,map__24174__$1,const_count,ic_count,pc_count){
return (function (_24177){var self__ = this;
var _24177__$1 = this;return self__.meta24176;
});})(map__24174,map__24174__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24174,map__24174__$1,const_count,ic_count,pc_count){
return (function (_24177,meta24176__$1){var self__ = this;
var _24177__$1 = this;return (new clustermap.components.map_report.t24175(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.map__24174,self__.site_stats,meta24176__$1));
});})(map__24174,map__24174__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24175 = ((function (map__24174,map__24174__$1,const_count,ic_count,pc_count){
return (function __GT_t24175(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__24174__$2,site_stats__$1,meta24176){return (new clustermap.components.map_report.t24175(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,comm__$1,investor_company_report__$1,view_path_fn__$1,map__24174__$2,site_stats__$1,meta24176));
});})(map__24174,map__24174__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24175(pc_count,path_fn,const_count,investor_company,ic_count,comm,investor_company_report,view_path_fn,map__24174__$1,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__24228 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__24228__$1 = ((cljs.core.seq_QMARK_.call(null,map__24228))?cljs.core.apply.call(null,cljs.core.hash_map,map__24228):map__24228);var const_count = cljs.core.get.call(null,map__24228__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__24228__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__24228__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t24229 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t24229 = (function (pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__24228,view_path_fn,site_stats,meta24230){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.map__24228 = map__24228;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta24230 = meta24230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t24229.cljs$lang$type = true;
clustermap.components.map_report.t24229.cljs$lang$ctorStr = "clustermap.components.map-report/t24229";
clustermap.components.map_report.t24229.cljs$lang$ctorPrWriter = ((function (map__24228,map__24228__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t24229");
});})(map__24228,map__24228__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24229.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t24229.prototype.om$core$IRender$render$arity$1 = ((function (map__24228,map__24228__$1,const_count,ic_count,pc_count){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs24234 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs24234))?sablono.interpreter.attributes.call(null,attrs24234):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24234))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24234),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs24239 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24239))?sablono.interpreter.attributes.call(null,attrs24239):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24239))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24240 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24240))?sablono.interpreter.attributes.call(null,attrs24240):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24240))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24240)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24239),(function (){var attrs24241 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24241))?sablono.interpreter.attributes.call(null,attrs24241):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24241))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24241)], null))));
})()], null))));
})(),(function (){var attrs24242 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24242))?sablono.interpreter.attributes.call(null,attrs24242):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24242))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs24243 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24243))?sablono.interpreter.attributes.call(null,attrs24243):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24243))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24243)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24242),(function (){var attrs24244 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs24244))?sablono.interpreter.attributes.call(null,attrs24244):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24244))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24244)], null))));
})()], null))));
})(),(function (){var attrs24245 = clustermap.formats.money.fmoney.call(null,(function (){var G__24255 = self__.site_stats;var G__24255__$1 = (((G__24255 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__24255));var G__24255__$2 = (((G__24255__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24255__$1));return G__24255__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24245))?sablono.interpreter.attributes.call(null,attrs24245):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24245))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24245),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs24250 = clustermap.formats.number.fnum.call(null,(function (){var G__24256 = self__.site_stats;var G__24256__$1 = (((G__24256 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__24256));var G__24256__$2 = (((G__24256__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__24256__$1));return G__24256__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs24250))?sablono.interpreter.attributes.call(null,attrs24250):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24250))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24250),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__24228,map__24228__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24228,map__24228__$1,const_count,ic_count,pc_count){
return (function (_24231){var self__ = this;
var _24231__$1 = this;return self__.meta24230;
});})(map__24228,map__24228__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t24229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24228,map__24228__$1,const_count,ic_count,pc_count){
return (function (_24231,meta24230__$1){var self__ = this;
var _24231__$1 = this;return (new clustermap.components.map_report.t24229(self__.pc_count,self__.path_fn,self__.const_count,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.map__24228,self__.view_path_fn,self__.site_stats,meta24230__$1));
});})(map__24228,map__24228__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t24229 = ((function (map__24228,map__24228__$1,const_count,ic_count,pc_count){
return (function __GT_t24229(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__24228__$2,view_path_fn__$1,site_stats__$1,meta24230){return (new clustermap.components.map_report.t24229(pc_count__$1,path_fn__$1,const_count__$1,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,map__24228__$2,view_path_fn__$1,site_stats__$1,meta24230));
});})(map__24228,map__24228__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t24229(pc_count,path_fn,const_count,ic_count,constituency_report,comm,constituency,map__24228__$1,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__24261 = om.core.get_shared.call(null,owner);var map__24261__$1 = ((cljs.core.seq_QMARK_.call(null,map__24261))?cljs.core.apply.call(null,cljs.core.hash_map,map__24261):map__24261);var view_path_fn = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__24261__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__24262 = cljs.core._EQ__EQ_;var expr__24263 = type;if(cljs.core.truth_(pred__24262.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__24263)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__24262.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__24263)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__24262.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__24263)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
