// Compiled by ClojureScript 0.0-2268
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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__13162){var map__13171 = p__13162;var map__13171__$1 = ((cljs.core.seq_QMARK_.call(null,map__13171))?cljs.core.apply.call(null,cljs.core.hash_map,map__13171):map__13171);var opts = map__13171__$1;var path_fn = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13171__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t13172 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t13172 = (function (company_path,link_fn,path_fn,opts,map__13171,p__13162,owner,investment,meta13173){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__13171 = map__13171;
this.p__13162 = p__13162;
this.owner = owner;
this.investment = investment;
this.meta13173 = meta13173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t13172.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t13172.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t13172";
clustermap.components.full_report.company_site_list.t13172.cljs$lang$ctorPrWriter = ((function (company_path,map__13171,map__13171__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.company-site-list/t13172");
});})(company_path,map__13171,map__13171__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13172.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t13172.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__13171,map__13171__$1,opts,path_fn,link_fn){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs13175 = new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",-2036426038).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13175))?sablono.interpreter.attributes.call(null,attrs13175):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13175))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13175)], null))));
})(),(function (){var attrs13176 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",-609404017).cljs$core$IFn$_invoke$arity$1(self__.investment);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13176))?sablono.interpreter.attributes.call(null,attrs13176):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13176))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13176)], null))));
})(),(function (){var attrs13177 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",-1841760435).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13177))?sablono.interpreter.attributes.call(null,attrs13177):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13177))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13177)], null))));
})(),(function (){var attrs13178 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1525822383),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",-523364293).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13178))?sablono.interpreter.attributes.call(null,attrs13178):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13178))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13178)], null))));
})());
});})(company_path,map__13171,map__13171__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__13171,map__13171__$1,opts,path_fn,link_fn){
return (function (_13174){var self__ = this;
var _13174__$1 = this;return self__.meta13173;
});})(company_path,map__13171,map__13171__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.t13172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__13171,map__13171__$1,opts,path_fn,link_fn){
return (function (_13174,meta13173__$1){var self__ = this;
var _13174__$1 = this;return (new clustermap.components.full_report.company_site_list.t13172(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__13171,self__.p__13162,self__.owner,self__.investment,meta13173__$1));
});})(company_path,map__13171,map__13171__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_site_list.__GT_t13172 = ((function (company_path,map__13171,map__13171__$1,opts,path_fn,link_fn){
return (function __GT_t13172(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13171__$2,p__13162__$1,owner__$1,investment__$2,meta13173){return (new clustermap.components.full_report.company_site_list.t13172(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13171__$2,p__13162__$1,owner__$1,investment__$2,meta13173));
});})(company_path,map__13171,map__13171__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_site_list.t13172(company_path,link_fn,path_fn,opts,map__13171__$1,p__13162,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_site_list.t13193 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t13193 = (function (comm,opts,owner,investments,company_site_list,meta13194){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta13194 = meta13194;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t13193.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t13193.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t13193";
clustermap.components.full_report.company_site_list.t13193.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.company-site-list/t13193");
});})(comm))
;
clustermap.components.full_report.company_site_list.t13193.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t13193.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;var attrs13196 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13196))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs13196)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13196))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13197 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13197))?sablono.interpreter.attributes.call(null,attrs13197):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13197))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13197)], null))));
})(),(function (){var attrs13198 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13198))?sablono.interpreter.attributes.call(null,attrs13198):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13198))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13198)], null))));
})(),(function (){var attrs13199 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13199))?sablono.interpreter.attributes.call(null,attrs13199):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13199))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13199)], null))));
})(),(function (){var attrs13200 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13200))?sablono.interpreter.attributes.call(null,attrs13200):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13200))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13200)], null))));
})())),(function (){var attrs13201 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13201))?sablono.interpreter.attributes.call(null,attrs13201):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13201))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13201)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13196),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13202 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",1068537883));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13202))?sablono.interpreter.attributes.call(null,attrs13202):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13202))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13202)], null))));
})(),(function (){var attrs13203 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",1627386767));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13203))?sablono.interpreter.attributes.call(null,attrs13203):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13203))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13203)], null))));
})(),(function (){var attrs13204 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13204))?sablono.interpreter.attributes.call(null,attrs13204):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13204))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13204)], null))));
})(),(function (){var attrs13205 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13205))?sablono.interpreter.attributes.call(null,attrs13205):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13205))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13205)], null))));
})())),(function (){var attrs13206 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"investment_uid","investment_uid",-1904890096),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13206))?sablono.interpreter.attributes.call(null,attrs13206):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13206))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13206)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",1261701637)))], null))));
});})(comm))
;
clustermap.components.full_report.company_site_list.t13193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_13195){var self__ = this;
var _13195__$1 = this;return self__.meta13194;
});})(comm))
;
clustermap.components.full_report.company_site_list.t13193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_13195,meta13194__$1){var self__ = this;
var _13195__$1 = this;return (new clustermap.components.full_report.company_site_list.t13193(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta13194__$1));
});})(comm))
;
clustermap.components.full_report.company_site_list.__GT_t13193 = ((function (comm){
return (function __GT_t13193(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta13194){return (new clustermap.components.full_report.company_site_list.t13193(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta13194));
});})(comm))
;
}
return (new clustermap.components.full_report.company_site_list.t13193(comm,opts,owner,investments,company_site_list,null));
});
