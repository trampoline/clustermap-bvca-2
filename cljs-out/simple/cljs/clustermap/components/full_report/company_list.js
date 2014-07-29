// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.full_report.company_list');
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs25309 = link_fn.call(null,type,first_obj);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs25309))?sablono.interpreter.attributes.call(null,attrs25309):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25309))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25309),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > (0)))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < (0)))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__25318){var map__25331 = p__25318;var map__25331__$1 = ((cljs.core.seq_QMARK_.call(null,map__25331))?cljs.core.apply.call(null,cljs.core.hash_map,map__25331):map__25331);var opts = map__25331__$1;var path_fn = cljs.core.get.call(null,map__25331__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__25331__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),company);if(typeof clustermap.components.full_report.company_list.t25332 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t25332 = (function (company_path,link_fn,path_fn,opts,map__25331,p__25318,owner,company,portfolio_company,meta25333){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__25331 = map__25331;
this.p__25318 = p__25318;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta25333 = meta25333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t25332.cljs$lang$type = true;
clustermap.components.full_report.company_list.t25332.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t25332";
clustermap.components.full_report.company_list.t25332.cljs$lang$ctorPrWriter = ((function (company_path,map__25331,map__25331__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.company-list/t25332");
});})(company_path,map__25331,map__25331__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t25332.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t25332.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__25331,map__25331__$1,opts,path_fn,link_fn){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs25335 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),self__.company);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs25335))?sablono.interpreter.attributes.call(null,attrs25335):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25335))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25335)], null))));
})(),(function (){var attrs25336 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs25336))?sablono.interpreter.attributes.call(null,attrs25336):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25336))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25336)], null))));
})(),(function (){var attrs25337 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",1803637324),(function (){var G__25342 = self__.company;var G__25342__$1 = (((G__25342 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708).cljs$core$IFn$_invoke$arity$1(G__25342));var G__25342__$2 = (((G__25342__$1 == null))?null:cljs.core.filter.call(null,((function (G__25342,G__25342__$1,this__9490__auto____$1,company_path,map__25331,map__25331__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__25342,G__25342__$1,this__9490__auto____$1,company_path,map__25331,map__25331__$1,opts,path_fn,link_fn))
,G__25342__$1));return G__25342__$2;
})());return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs25337))?sablono.interpreter.attributes.call(null,attrs25337):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25337))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25337)], null))));
})(),(function (){var attrs25338 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs25338))?sablono.interpreter.attributes.call(null,attrs25338):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25338))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25338),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs25339 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs25339))?sablono.interpreter.attributes.call(null,attrs25339):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25339))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25339)], null))));
})(),(function (){var attrs25340 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs25340))?sablono.interpreter.attributes.call(null,attrs25340):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25340))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25340)], null))));
})(),(function (){var attrs25341 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs25341))?sablono.interpreter.attributes.call(null,attrs25341):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25341))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25341),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3543__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__25331,map__25331__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t25332.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__25331,map__25331__$1,opts,path_fn,link_fn){
return (function (_25334){var self__ = this;
var _25334__$1 = this;return self__.meta25333;
});})(company_path,map__25331,map__25331__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t25332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__25331,map__25331__$1,opts,path_fn,link_fn){
return (function (_25334,meta25333__$1){var self__ = this;
var _25334__$1 = this;return (new clustermap.components.full_report.company_list.t25332(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__25331,self__.p__25318,self__.owner,self__.company,self__.portfolio_company,meta25333__$1));
});})(company_path,map__25331,map__25331__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t25332 = ((function (company_path,map__25331,map__25331__$1,opts,path_fn,link_fn){
return (function __GT_t25332(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__25331__$2,p__25318__$1,owner__$1,company__$1,portfolio_company__$1,meta25333){return (new clustermap.components.full_report.company_list.t25332(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__25331__$2,p__25318__$1,owner__$1,company__$1,portfolio_company__$1,meta25333));
});})(company_path,map__25331,map__25331__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t25332(company_path,link_fn,path_fn,opts,map__25331__$1,p__25318,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_list.t25363 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t25363 = (function (comm,opts,owner,companies,company_list,meta25364){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta25364 = meta25364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t25363.cljs$lang$type = true;
clustermap.components.full_report.company_list.t25363.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t25363";
clustermap.components.full_report.company_list.t25363.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.full-report.company-list/t25363");
});})(comm))
;
clustermap.components.full_report.company_list.t25363.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t25363.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;var attrs25366 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs25366))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs25366)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25366))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs25367 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs25367))?sablono.interpreter.attributes.call(null,attrs25367):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25367))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25367)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs25372 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs25372))?sablono.interpreter.attributes.call(null,attrs25372):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25372))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25372)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs25373 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs25373))?sablono.interpreter.attributes.call(null,attrs25373):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25373))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25373)], null))));
})())),(function (){var attrs25374 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs25374))?sablono.interpreter.attributes.call(null,attrs25374):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25374))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25374)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25366),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs25375 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs25375))?sablono.interpreter.attributes.call(null,attrs25375):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25375))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25375)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs25380 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs25380))?sablono.interpreter.attributes.call(null,attrs25380):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25380))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25380)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs25381 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs25381))?sablono.interpreter.attributes.call(null,attrs25381):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25381))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25381)], null))));
})())),(function (){var attrs25382 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs25382))?sablono.interpreter.attributes.call(null,attrs25382):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25382))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25382)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t25363.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_25365){var self__ = this;
var _25365__$1 = this;return self__.meta25364;
});})(comm))
;
clustermap.components.full_report.company_list.t25363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_25365,meta25364__$1){var self__ = this;
var _25365__$1 = this;return (new clustermap.components.full_report.company_list.t25363(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta25364__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t25363 = ((function (comm){
return (function __GT_t25363(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta25364){return (new clustermap.components.full_report.company_list.t25363(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta25364));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t25363(comm,opts,owner,companies,company_list,null));
});
