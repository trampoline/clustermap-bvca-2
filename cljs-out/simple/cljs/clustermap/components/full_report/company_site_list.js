// Compiled by ClojureScript 0.0-2356
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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__13097){var map__13106 = p__13097;var map__13106__$1 = ((cljs.core.seq_QMARK_.call(null,map__13106))?cljs.core.apply.call(null,cljs.core.hash_map,map__13106):map__13106);var opts = map__13106__$1;var path_fn = cljs.core.get.call(null,map__13106__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13106__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t13107 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t13107 = (function (company_path,link_fn,path_fn,opts,map__13106,p__13097,owner,investment,meta13108){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__13106 = map__13106;
this.p__13097 = p__13097;
this.owner = owner;
this.investment = investment;
this.meta13108 = meta13108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t13107.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t13107.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t13107";
clustermap.components.full_report.company_site_list.t13107.cljs$lang$ctorPrWriter = ((function (company_path,map__13106,map__13106__$1,opts,path_fn,link_fn){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.full-report.company-site-list/t13107");
});})(company_path,map__13106,map__13106__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13107.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t13107.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__13106,map__13106__$1,opts,path_fn,link_fn){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs13110 = new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",-2036426038).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13110))?sablono.interpreter.attributes.call(null,attrs13110):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13110))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13110)], null))));
})(),(function (){var attrs13111 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",-609404017).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13111))?sablono.interpreter.attributes.call(null,attrs13111):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13111))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13111)], null))));
})(),(function (){var attrs13112 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",-1841760435).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13112))?sablono.interpreter.attributes.call(null,attrs13112):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13112))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13112)], null))));
})(),(function (){var attrs13113 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",-523364293).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13113))?sablono.interpreter.attributes.call(null,attrs13113):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13113))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13113)], null))));
})());
});})(company_path,map__13106,map__13106__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__13106,map__13106__$1,opts,path_fn,link_fn){
return (function (_13109){var self__ = this;
var _13109__$1 = this;return self__.meta13108;
});})(company_path,map__13106,map__13106__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__13106,map__13106__$1,opts,path_fn,link_fn){
return (function (_13109,meta13108__$1){var self__ = this;
var _13109__$1 = this;return (new clustermap.components.full_report.company_site_list.t13107(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__13106,self__.p__13097,self__.owner,self__.investment,meta13108__$1));
});})(company_path,map__13106,map__13106__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t13107 = ((function (company_path,map__13106,map__13106__$1,opts,path_fn,link_fn){
return (function __GT_t13107(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13106__$2,p__13097__$1,owner__$1,investment__$2,meta13108){return (new clustermap.components.full_report.company_site_list.t13107(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13106__$2,p__13097__$1,owner__$1,investment__$2,meta13108));
});})(company_path,map__13106,map__13106__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t13107(company_path,link_fn,path_fn,opts,map__13106__$1,p__13097,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_site_list.t13128 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t13128 = (function (comm,opts,owner,investments,company_site_list,meta13129){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta13129 = meta13129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t13128.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t13128.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t13128";
clustermap.components.full_report.company_site_list.t13128.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.full-report.company-site-list/t13128");
});})(comm))
;
clustermap.components.full_report.company_site_list.t13128.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t13128.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;var attrs13131 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13131))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs13131)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13131))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13132 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13132))?sablono.interpreter.attributes.call(null,attrs13132):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13132))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13132)], null))));
})(),(function (){var attrs13133 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13133))?sablono.interpreter.attributes.call(null,attrs13133):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13133))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13133)], null))));
})(),(function (){var attrs13134 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13134))?sablono.interpreter.attributes.call(null,attrs13134):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13134))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13134)], null))));
})(),(function (){var attrs13135 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13135))?sablono.interpreter.attributes.call(null,attrs13135):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13135))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13135)], null))));
})())),(function (){var attrs13136 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13136))?sablono.interpreter.attributes.call(null,attrs13136):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13136))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13136)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13131),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13137 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13137))?sablono.interpreter.attributes.call(null,attrs13137):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13137))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13137)], null))));
})(),(function (){var attrs13138 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13138))?sablono.interpreter.attributes.call(null,attrs13138):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13138))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13138)], null))));
})(),(function (){var attrs13139 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13139))?sablono.interpreter.attributes.call(null,attrs13139):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13139))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13139)], null))));
})(),(function (){var attrs13140 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13140))?sablono.interpreter.attributes.call(null,attrs13140):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13140))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13140)], null))));
})())),(function (){var attrs13141 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13141))?sablono.interpreter.attributes.call(null,attrs13141):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13141))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13141)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t13128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_13130){var self__ = this;
var _13130__$1 = this;return self__.meta13129;
});})(comm))
;
clustermap.components.full_report.company_site_list.t13128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_13130,meta13129__$1){var self__ = this;
var _13130__$1 = this;return (new clustermap.components.full_report.company_site_list.t13128(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta13129__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t13128 = ((function (comm){
return (function __GT_t13128(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta13129){return (new clustermap.components.full_report.company_site_list.t13128(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta13129));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t13128(comm,opts,owner,investments,company_site_list,null));
});
