// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__20805){var map__20814 = p__20805;var map__20814__$1 = ((cljs.core.seq_QMARK_.call(null,map__20814))?cljs.core.apply.call(null,cljs.core.hash_map,map__20814):map__20814);var opts = map__20814__$1;var path_fn = cljs.core.get.call(null,map__20814__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__20814__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t20815 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t20815 = (function (company_path,link_fn,path_fn,opts,map__20814,p__20805,owner,investment,meta20816){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__20814 = map__20814;
this.p__20805 = p__20805;
this.owner = owner;
this.investment = investment;
this.meta20816 = meta20816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t20815.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t20815.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t20815";
clustermap.components.full_report.company_site_list.t20815.cljs$lang$ctorPrWriter = ((function (company_path,map__20814,map__20814__$1,opts,path_fn,link_fn){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.full-report.company-site-list/t20815");
});})(company_path,map__20814,map__20814__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t20815.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t20815.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__20814,map__20814__$1,opts,path_fn,link_fn){
return (function (this__13555__auto__){var self__ = this;
var this__13555__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs20818 = new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",-2036426038).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs20818))?sablono.interpreter.attributes.call(null,attrs20818):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20818))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20818)], null))));
})(),(function (){var attrs20819 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",-609404017).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs20819))?sablono.interpreter.attributes.call(null,attrs20819):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20819))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20819)], null))));
})(),(function (){var attrs20820 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",-1841760435).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs20820))?sablono.interpreter.attributes.call(null,attrs20820):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20820))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20820)], null))));
})(),(function (){var attrs20821 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",-523364293).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs20821))?sablono.interpreter.attributes.call(null,attrs20821):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20821))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20821)], null))));
})());
});})(company_path,map__20814,map__20814__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t20815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__20814,map__20814__$1,opts,path_fn,link_fn){
return (function (_20817){var self__ = this;
var _20817__$1 = this;return self__.meta20816;
});})(company_path,map__20814,map__20814__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t20815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__20814,map__20814__$1,opts,path_fn,link_fn){
return (function (_20817,meta20816__$1){var self__ = this;
var _20817__$1 = this;return (new clustermap.components.full_report.company_site_list.t20815(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__20814,self__.p__20805,self__.owner,self__.investment,meta20816__$1));
});})(company_path,map__20814,map__20814__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t20815 = ((function (company_path,map__20814,map__20814__$1,opts,path_fn,link_fn){
return (function __GT_t20815(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__20814__$2,p__20805__$1,owner__$1,investment__$2,meta20816){return (new clustermap.components.full_report.company_site_list.t20815(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__20814__$2,p__20805__$1,owner__$1,investment__$2,meta20816));
});})(company_path,map__20814,map__20814__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t20815(company_path,link_fn,path_fn,opts,map__20814__$1,p__20805,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_site_list.t20836 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t20836 = (function (comm,opts,owner,investments,company_site_list,meta20837){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta20837 = meta20837;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t20836.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t20836.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t20836";
clustermap.components.full_report.company_site_list.t20836.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.full-report.company-site-list/t20836");
});})(comm))
;
clustermap.components.full_report.company_site_list.t20836.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t20836.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__13555__auto__){var self__ = this;
var this__13555__auto____$1 = this;var attrs20839 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs20839))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs20839)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20839))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs20840 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20840))?sablono.interpreter.attributes.call(null,attrs20840):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20840))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20840)], null))));
})(),(function (){var attrs20841 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20841))?sablono.interpreter.attributes.call(null,attrs20841):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20841))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20841)], null))));
})(),(function (){var attrs20842 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20842))?sablono.interpreter.attributes.call(null,attrs20842):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20842))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20842)], null))));
})(),(function (){var attrs20843 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20843))?sablono.interpreter.attributes.call(null,attrs20843):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20843))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20843)], null))));
})())),(function (){var attrs20844 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs20844))?sablono.interpreter.attributes.call(null,attrs20844):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20844))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20844)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20839),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs20845 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20845))?sablono.interpreter.attributes.call(null,attrs20845):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20845))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20845)], null))));
})(),(function (){var attrs20846 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20846))?sablono.interpreter.attributes.call(null,attrs20846):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20846))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20846)], null))));
})(),(function (){var attrs20847 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20847))?sablono.interpreter.attributes.call(null,attrs20847):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20847))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20847)], null))));
})(),(function (){var attrs20848 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs20848))?sablono.interpreter.attributes.call(null,attrs20848):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20848))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20848)], null))));
})())),(function (){var attrs20849 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs20849))?sablono.interpreter.attributes.call(null,attrs20849):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20849))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20849)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t20836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_20838){var self__ = this;
var _20838__$1 = this;return self__.meta20837;
});})(comm))
;
clustermap.components.full_report.company_site_list.t20836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_20838,meta20837__$1){var self__ = this;
var _20838__$1 = this;return (new clustermap.components.full_report.company_site_list.t20836(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta20837__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t20836 = ((function (comm){
return (function __GT_t20836(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta20837){return (new clustermap.components.full_report.company_site_list.t20836(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta20837));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t20836(comm,opts,owner,investments,company_site_list,null));
});

//# sourceMappingURL=company_site_list.js.map