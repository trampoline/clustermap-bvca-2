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
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pc-count","pc-count",1454185306),(function (){var G__51830 = site_stats;var G__51830__$1 = (((G__51830 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",2089870686).cljs$core$IFn$_invoke$arity$1(G__51830));return G__51830__$1;
})(),new cljs.core.Keyword(null,"ic-count","ic-count",850588128),(function (){var G__51831 = site_stats;var G__51831__$1 = (((G__51831 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",-2068624331).cljs$core$IFn$_invoke$arity$1(G__51831));return G__51831__$1;
})(),new cljs.core.Keyword(null,"const-count","const-count",688726846),(function (){var G__51832 = site_stats;var G__51832__$1 = (((G__51832 == null))?null:new cljs.core.Keyword(null,"constituency_count","constituency_count",1998972271).cljs$core$IFn$_invoke$arity$1(G__51832));return G__51832__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm,view_path_fn){var map__51864 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__51864__$1 = ((cljs.core.seq_QMARK_.call(null,map__51864))?cljs.core.apply.call(null,cljs.core.hash_map,map__51864):map__51864);var const_count = cljs.core.get.call(null,map__51864__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__51864__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__51864__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t51865 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t51865 = (function (pc_count,ic_count,const_count,map__51864,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,meta51866){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__51864 = map__51864;
this.view_path_fn = view_path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta51866 = meta51866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t51865.cljs$lang$type = true;
clustermap.components.map_report.t51865.cljs$lang$ctorStr = "clustermap.components.map-report/t51865";
clustermap.components.map_report.t51865.cljs$lang$ctorPrWriter = ((function (map__51864,map__51864__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t51865");
});})(map__51864,map__51864__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51865.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t51865.prototype.om$core$IRender$render$arity$1 = ((function (map__51864,map__51864__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs51870 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51870))?sablono.interpreter.attributes.call(null,attrs51870):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51870))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investor-backed companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51870),React.DOM.small(null,"Investor-backed companies")], null))));
})(),(function (){var attrs51875 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51875))?sablono.interpreter.attributes.call(null,attrs51875):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51875))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Investors")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51875),React.DOM.small(null,"Investors")], null))));
})(),(function (){var attrs51880 = clustermap.formats.number.fnum.call(null,self__.const_count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51880))?sablono.interpreter.attributes.call(null,attrs51880):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51880))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51881 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51881))?sablono.interpreter.attributes.call(null,attrs51881):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51881))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51881)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51880),(function (){var attrs51882 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51882))?sablono.interpreter.attributes.call(null,attrs51882):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51882))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51882)], null))));
})()], null))));
})(),(function (){var attrs51883 = clustermap.formats.money.fmoney.call(null,(function (){var G__51893 = self__.site_stats;var G__51893__$1 = (((G__51893 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__51893));var G__51893__$2 = (((G__51893__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51893__$1));return G__51893__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51883))?sablono.interpreter.attributes.call(null,attrs51883):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51883))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51883),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs51888 = clustermap.formats.number.fnum.call(null,(function (){var G__51894 = self__.site_stats;var G__51894__$1 = (((G__51894 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__51894));var G__51894__$2 = (((G__51894__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51894__$1));return G__51894__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51888))?sablono.interpreter.attributes.call(null,attrs51888):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51888))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51888),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__51864,map__51864__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51864,map__51864__$1,const_count,ic_count,pc_count){
return (function (_51867){var self__ = this;
var _51867__$1 = this;return self__.meta51866;
});})(map__51864,map__51864__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51864,map__51864__$1,const_count,ic_count,pc_count){
return (function (_51867,meta51866__$1){var self__ = this;
var _51867__$1 = this;return (new clustermap.components.map_report.t51865(self__.pc_count,self__.ic_count,self__.const_count,self__.map__51864,self__.view_path_fn,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta51866__$1));
});})(map__51864,map__51864__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t51865 = ((function (map__51864,map__51864__$1,const_count,ic_count,pc_count){
return (function __GT_t51865(pc_count__$1,ic_count__$1,const_count__$1,map__51864__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta51866){return (new clustermap.components.map_report.t51865(pc_count__$1,ic_count__$1,const_count__$1,map__51864__$2,view_path_fn__$1,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta51866));
});})(map__51864,map__51864__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t51865(pc_count,ic_count,const_count,map__51864__$1,view_path_fn,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn,view_path_fn){var map__51920 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__51920__$1 = ((cljs.core.seq_QMARK_.call(null,map__51920))?cljs.core.apply.call(null,cljs.core.hash_map,map__51920):map__51920);var const_count = cljs.core.get.call(null,map__51920__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__51920__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__51920__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t51921 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t51921 = (function (pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__51920,portfolio_company_report,site_stats,meta51922){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.portfolio_company = portfolio_company;
this.ic_count = ic_count;
this.comm = comm;
this.view_path_fn = view_path_fn;
this.map__51920 = map__51920;
this.portfolio_company_report = portfolio_company_report;
this.site_stats = site_stats;
this.meta51922 = meta51922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t51921.cljs$lang$type = true;
clustermap.components.map_report.t51921.cljs$lang$ctorStr = "clustermap.components.map-report/t51921";
clustermap.components.map_report.t51921.cljs$lang$ctorPrWriter = ((function (map__51920,map__51920__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t51921");
});})(map__51920,map__51920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51921.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t51921.prototype.om$core$IRender$render$arity$1 = ((function (map__51920,map__51920__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs51926 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs51926))?sablono.interpreter.attributes.call(null,attrs51926):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51926))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51926)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs51927 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51927))?sablono.interpreter.attributes.call(null,attrs51927):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51927))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51928 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51928))?sablono.interpreter.attributes.call(null,attrs51928):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51928))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51928)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51927),(function (){var attrs51929 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51929))?sablono.interpreter.attributes.call(null,attrs51929):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51929))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51929)], null))));
})()], null))));
})(),(function (){var attrs51930 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51930))?sablono.interpreter.attributes.call(null,attrs51930):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51930))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51931 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51931))?sablono.interpreter.attributes.call(null,attrs51931):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51931))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51931)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51930),(function (){var attrs51932 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51932))?sablono.interpreter.attributes.call(null,attrs51932):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51932))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51932)], null))));
})()], null))));
})(),(function (){var attrs51933 = clustermap.formats.money.fmoney.call(null,(function (){var G__51943 = self__.site_stats;var G__51943__$1 = (((G__51943 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__51943));var G__51943__$2 = (((G__51943__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51943__$1));return G__51943__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51933))?sablono.interpreter.attributes.call(null,attrs51933):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51933))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51933),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs51938 = clustermap.formats.number.fnum.call(null,(function (){var G__51944 = self__.site_stats;var G__51944__$1 = (((G__51944 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__51944));var G__51944__$2 = (((G__51944__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51944__$1));return G__51944__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51938))?sablono.interpreter.attributes.call(null,attrs51938):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51938))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51938),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__51920,map__51920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51921.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51920,map__51920__$1,const_count,ic_count,pc_count){
return (function (_51923){var self__ = this;
var _51923__$1 = this;return self__.meta51922;
});})(map__51920,map__51920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51920,map__51920__$1,const_count,ic_count,pc_count){
return (function (_51923,meta51922__$1){var self__ = this;
var _51923__$1 = this;return (new clustermap.components.map_report.t51921(self__.pc_count,self__.path_fn,self__.const_count,self__.portfolio_company,self__.ic_count,self__.comm,self__.view_path_fn,self__.map__51920,self__.portfolio_company_report,self__.site_stats,meta51922__$1));
});})(map__51920,map__51920__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t51921 = ((function (map__51920,map__51920__$1,const_count,ic_count,pc_count){
return (function __GT_t51921(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__51920__$2,portfolio_company_report__$1,site_stats__$1,meta51922){return (new clustermap.components.map_report.t51921(pc_count__$1,path_fn__$1,const_count__$1,portfolio_company__$1,ic_count__$1,comm__$1,view_path_fn__$1,map__51920__$2,portfolio_company_report__$1,site_stats__$1,meta51922));
});})(map__51920,map__51920__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t51921(pc_count,path_fn,const_count,portfolio_company,ic_count,comm,view_path_fn,map__51920__$1,portfolio_company_report,site_stats,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn,view_path_fn){var map__51970 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__51970__$1 = ((cljs.core.seq_QMARK_.call(null,map__51970))?cljs.core.apply.call(null,cljs.core.hash_map,map__51970):map__51970);var const_count = cljs.core.get.call(null,map__51970__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__51970__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__51970__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t51971 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t51971 = (function (pc_count,path_fn,const_count,investor_company,ic_count,map__51970,comm,investor_company_report,view_path_fn,site_stats,meta51972){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.investor_company = investor_company;
this.ic_count = ic_count;
this.map__51970 = map__51970;
this.comm = comm;
this.investor_company_report = investor_company_report;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta51972 = meta51972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t51971.cljs$lang$type = true;
clustermap.components.map_report.t51971.cljs$lang$ctorStr = "clustermap.components.map-report/t51971";
clustermap.components.map_report.t51971.cljs$lang$ctorPrWriter = ((function (map__51970,map__51970__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t51971");
});})(map__51970,map__51970__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51971.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t51971.prototype.om$core$IRender$render$arity$1 = ((function (map__51970,map__51970__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs51976 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.investor_company);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs51976))?sablono.interpreter.attributes.call(null,attrs51976):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51976))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51976)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs51977 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51977))?sablono.interpreter.attributes.call(null,attrs51977):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51977))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51978 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51978))?sablono.interpreter.attributes.call(null,attrs51978):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51978))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51978)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51977),(function (){var attrs51979 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51979))?sablono.interpreter.attributes.call(null,attrs51979):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51979))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51979)], null))));
})()], null))));
})(),(function (){var attrs51980 = clustermap.formats.number.fnum.call(null,self__.const_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51980))?sablono.interpreter.attributes.call(null,attrs51980):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51980))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs51981 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51981))?sablono.interpreter.attributes.call(null,attrs51981):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51981))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51981)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51980),(function (){var attrs51982 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs51982))?sablono.interpreter.attributes.call(null,attrs51982):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51982))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51982)], null))));
})()], null))));
})(),(function (){var attrs51983 = clustermap.formats.money.fmoney.call(null,(function (){var G__51993 = self__.site_stats;var G__51993__$1 = (((G__51993 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__51993));var G__51993__$2 = (((G__51993__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51993__$1));return G__51993__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51983))?sablono.interpreter.attributes.call(null,attrs51983):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51983))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51983),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs51988 = clustermap.formats.number.fnum.call(null,(function (){var G__51994 = self__.site_stats;var G__51994__$1 = (((G__51994 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__51994));var G__51994__$2 = (((G__51994__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__51994__$1));return G__51994__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51988))?sablono.interpreter.attributes.call(null,attrs51988):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51988))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51988),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__51970,map__51970__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51971.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51970,map__51970__$1,const_count,ic_count,pc_count){
return (function (_51973){var self__ = this;
var _51973__$1 = this;return self__.meta51972;
});})(map__51970,map__51970__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t51971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51970,map__51970__$1,const_count,ic_count,pc_count){
return (function (_51973,meta51972__$1){var self__ = this;
var _51973__$1 = this;return (new clustermap.components.map_report.t51971(self__.pc_count,self__.path_fn,self__.const_count,self__.investor_company,self__.ic_count,self__.map__51970,self__.comm,self__.investor_company_report,self__.view_path_fn,self__.site_stats,meta51972__$1));
});})(map__51970,map__51970__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t51971 = ((function (map__51970,map__51970__$1,const_count,ic_count,pc_count){
return (function __GT_t51971(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__51970__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta51972){return (new clustermap.components.map_report.t51971(pc_count__$1,path_fn__$1,const_count__$1,investor_company__$1,ic_count__$1,map__51970__$2,comm__$1,investor_company_report__$1,view_path_fn__$1,site_stats__$1,meta51972));
});})(map__51970,map__51970__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t51971(pc_count,path_fn,const_count,investor_company,ic_count,map__51970__$1,comm,investor_company_report,view_path_fn,site_stats,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn,view_path_fn){var map__52024 = clustermap.components.map_report.type_counts.call(null,site_stats);var map__52024__$1 = ((cljs.core.seq_QMARK_.call(null,map__52024))?cljs.core.apply.call(null,cljs.core.hash_map,map__52024):map__52024);var const_count = cljs.core.get.call(null,map__52024__$1,new cljs.core.Keyword(null,"const-count","const-count",688726846));var ic_count = cljs.core.get.call(null,map__52024__$1,new cljs.core.Keyword(null,"ic-count","ic-count",850588128));var pc_count = cljs.core.get.call(null,map__52024__$1,new cljs.core.Keyword(null,"pc-count","pc-count",1454185306));if(typeof clustermap.components.map_report.t52025 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t52025 = (function (pc_count,path_fn,const_count,map__52024,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,meta52026){
this.pc_count = pc_count;
this.path_fn = path_fn;
this.const_count = const_count;
this.map__52024 = map__52024;
this.ic_count = ic_count;
this.constituency_report = constituency_report;
this.comm = comm;
this.constituency = constituency;
this.view_path_fn = view_path_fn;
this.site_stats = site_stats;
this.meta52026 = meta52026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t52025.cljs$lang$type = true;
clustermap.components.map_report.t52025.cljs$lang$ctorStr = "clustermap.components.map-report/t52025";
clustermap.components.map_report.t52025.cljs$lang$ctorPrWriter = ((function (map__52024,map__52024__$1,const_count,ic_count,pc_count){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.map-report/t52025");
});})(map__52024,map__52024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t52025.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t52025.prototype.om$core$IRender$render$arity$1 = ((function (map__52024,map__52024__$1,const_count,ic_count,pc_count){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs52030 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(self__.constituency);return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs52030))?sablono.interpreter.attributes.call(null,attrs52030):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52030))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52030),React.DOM.br(null),(cljs.core.truth_((function (){var or__3543__auto__ = new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn))),React.DOM.ul(null,(function (){var attrs52035 = clustermap.formats.number.fnum.call(null,self__.pc_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52035))?sablono.interpreter.attributes.call(null,attrs52035):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52035))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs52036 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52036))?sablono.interpreter.attributes.call(null,attrs52036):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52036))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52036)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52035),(function (){var attrs52037 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Investor-backed company","Investor-backed companies");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52037))?sablono.interpreter.attributes.call(null,attrs52037):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52037))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52037)], null))));
})()], null))));
})(),(function (){var attrs52038 = clustermap.formats.number.fnum.call(null,self__.ic_count);return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52038))?sablono.interpreter.attributes.call(null,attrs52038):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52038))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var attrs52039 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52039))?sablono.interpreter.attributes.call(null,attrs52039):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52039))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52039)], null))));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52038),(function (){var attrs52040 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");return cljs.core.apply.call(null,React.DOM.small,((cljs.core.map_QMARK_.call(null,attrs52040))?sablono.interpreter.attributes.call(null,attrs52040):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52040))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52040)], null))));
})()], null))));
})(),(function (){var attrs52041 = clustermap.formats.money.fmoney.call(null,(function (){var G__52051 = self__.site_stats;var G__52051__$1 = (((G__52051 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",-1778310555).cljs$core$IFn$_invoke$arity$1(G__52051));var G__52051__$2 = (((G__52051__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__52051__$1));return G__52051__$2;
})(),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52041))?sablono.interpreter.attributes.call(null,attrs52041):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52041))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52041),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs52046 = clustermap.formats.number.fnum.call(null,(function (){var G__52052 = self__.site_stats;var G__52052__$1 = (((G__52052 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",-1684257885).cljs$core$IFn$_invoke$arity$1(G__52052));var G__52052__$2 = (((G__52052__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(G__52052__$1));return G__52052__$2;
})(),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52046))?sablono.interpreter.attributes.call(null,attrs52046):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52046))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52046),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm,self__.view_path_fn)));
});})(map__52024,map__52024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t52025.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__52024,map__52024__$1,const_count,ic_count,pc_count){
return (function (_52027){var self__ = this;
var _52027__$1 = this;return self__.meta52026;
});})(map__52024,map__52024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.t52025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__52024,map__52024__$1,const_count,ic_count,pc_count){
return (function (_52027,meta52026__$1){var self__ = this;
var _52027__$1 = this;return (new clustermap.components.map_report.t52025(self__.pc_count,self__.path_fn,self__.const_count,self__.map__52024,self__.ic_count,self__.constituency_report,self__.comm,self__.constituency,self__.view_path_fn,self__.site_stats,meta52026__$1));
});})(map__52024,map__52024__$1,const_count,ic_count,pc_count))
;
clustermap.components.map_report.__GT_t52025 = ((function (map__52024,map__52024__$1,const_count,ic_count,pc_count){
return (function __GT_t52025(pc_count__$1,path_fn__$1,const_count__$1,map__52024__$2,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta52026){return (new clustermap.components.map_report.t52025(pc_count__$1,path_fn__$1,const_count__$1,map__52024__$2,ic_count__$1,constituency_report__$1,comm__$1,constituency__$1,view_path_fn__$1,site_stats__$1,meta52026));
});})(map__52024,map__52024__$1,const_count,ic_count,pc_count))
;
}
return (new clustermap.components.map_report.t52025(pc_count,path_fn,const_count,map__52024__$1,ic_count,constituency_report,comm,constituency,view_path_fn,site_stats,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__52057 = om.core.get_shared.call(null,owner);var map__52057__$1 = ((cljs.core.seq_QMARK_.call(null,map__52057))?cljs.core.apply.call(null,cljs.core.hash_map,map__52057):map__52057);var view_path_fn = cljs.core.get.call(null,map__52057__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__52057__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__52057__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"map","map",1371690461));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"type","type",1174270348)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"value","value",305978217)], null));var site_stats = new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",-1048685843).cljs$core$IFn$_invoke$arity$1(data);var pred__52058 = cljs.core._EQ__EQ_;var expr__52059 = type;if(cljs.core.truth_(pred__52058.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__52059)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__52058.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__52059)))
{return clustermap.components.map_report.investor_company_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{if(cljs.core.truth_(pred__52058.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__52059)))
{return clustermap.components.map_report.constituency_report.call(null,value,site_stats,comm,path_fn__$1,view_path_fn);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,site_stats,comm,view_path_fn);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=map_report.js.map