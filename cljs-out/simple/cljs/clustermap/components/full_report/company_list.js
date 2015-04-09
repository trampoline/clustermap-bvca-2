// Compiled by ClojureScript 0.0-2356
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
{var attrs13021 = link_fn.call(null,type,first_obj);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13021))?sablono.interpreter.attributes.call(null,attrs13021):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13021))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13021),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
{return null;

}
}
}
});
/**
* if the value is non-nil and non-zero then format and display the year
* @param {...*} var_args
*/
clustermap.components.full_report.company_list.value_or_default = (function() { 
var value_or_default__delegate = function (value_formatter,value,p__13030){var vec__13033 = p__13030;var map__13034 = cljs.core.nth.call(null,vec__13033,(0),null);var map__13034__$1 = ((cljs.core.seq_QMARK_.call(null,map__13034))?cljs.core.apply.call(null,cljs.core.hash_map,map__13034):map__13034);var default$ = cljs.core.get.call(null,map__13034__$1,new cljs.core.Keyword(null,"default","default",-1987822328));var year = cljs.core.get.call(null,map__13034__$1,new cljs.core.Keyword(null,"year","year",335913393));if(cljs.core.truth_((function (){var and__3619__auto__ = value;if(cljs.core.truth_(and__3619__auto__))
{return cljs.core.not_EQ_.call(null,value,(0));
} else
{return and__3619__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),value_formatter.call(null,value),(cljs.core.truth_(year)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",year,")"], null):null)], null);
} else
{return default$;
}
};
var value_or_default = function (value_formatter,value,var_args){
var p__13030 = null;if (arguments.length > 2) {
  p__13030 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value_or_default__delegate.call(this,value_formatter,value,p__13030);};
value_or_default.cljs$lang$maxFixedArity = 2;
value_or_default.cljs$lang$applyTo = (function (arglist__13035){
var value_formatter = cljs.core.first(arglist__13035);
arglist__13035 = cljs.core.next(arglist__13035);
var value = cljs.core.first(arglist__13035);
var p__13030 = cljs.core.rest(arglist__13035);
return value_or_default__delegate(value_formatter,value,p__13030);
});
value_or_default.cljs$core$IFn$_invoke$arity$variadic = value_or_default__delegate;
return value_or_default;
})()
;
clustermap.components.full_report.company_list.money_or_default = cljs.core.partial.call(null,clustermap.components.full_report.company_list.value_or_default,(function (p1__13036_SHARP_){return clustermap.formats.money.fmoney.call(null,p1__13036_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");
}));
clustermap.components.full_report.company_list.int_or_default = cljs.core.partial.call(null,clustermap.components.full_report.company_list.value_or_default,(function (p1__13037_SHARP_){return clustermap.formats.number.fnum.call(null,p1__13037_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");
}));
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__13038){var map__13048 = p__13038;var map__13048__$1 = ((cljs.core.seq_QMARK_.call(null,map__13048))?cljs.core.apply.call(null,cljs.core.hash_map,map__13048):map__13048);var opts = map__13048__$1;var path_fn = cljs.core.get.call(null,map__13048__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13048__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),company);if(typeof clustermap.components.full_report.company_list.t13049 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t13049 = (function (company_path,link_fn,path_fn,opts,map__13048,p__13038,owner,company,portfolio_company,meta13050){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__13048 = map__13048;
this.p__13038 = p__13038;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta13050 = meta13050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t13049.cljs$lang$type = true;
clustermap.components.full_report.company_list.t13049.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t13049";
clustermap.components.full_report.company_list.t13049.cljs$lang$ctorPrWriter = ((function (company_path,map__13048,map__13048__$1,opts,path_fn,link_fn){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.full-report.company-list/t13049");
});})(company_path,map__13048,map__13048__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t13049.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t13049.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__13048,map__13048__$1,opts,path_fn,link_fn){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs13052 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),self__.company);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13052))?sablono.interpreter.attributes.call(null,attrs13052):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13052))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13052)], null))));
})(),(function (){var attrs13053 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13053))?sablono.interpreter.attributes.call(null,attrs13053):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13053))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13053)], null))));
})(),(function (){var attrs13054 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",1803637324),(function (){var G__13056 = self__.company;var G__13056__$1 = (((G__13056 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708).cljs$core$IFn$_invoke$arity$1(G__13056));var G__13056__$2 = (((G__13056__$1 == null))?null:cljs.core.filter.call(null,((function (G__13056,G__13056__$1,this__10035__auto____$1,company_path,map__13048,map__13048__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__13056,G__13056__$1,this__10035__auto____$1,company_path,map__13048,map__13048__$1,opts,path_fn,link_fn))
,G__13056__$1));return G__13056__$2;
})());return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13054))?sablono.interpreter.attributes.call(null,attrs13054):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13054))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13054)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.full_report.company_list.money_or_default.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company)),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(n/a)"], null)], null)], null))),(function (){var attrs13055 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13055))?sablono.interpreter.attributes.call(null,attrs13055):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13055))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13055)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.full_report.company_list.money_or_default.call(null,(function (){var and__3619__auto__ = new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(self__.company);if(cljs.core.truth_(and__3619__auto__))
{return new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company);
} else
{return and__3619__auto__;
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(n/a)"], null)], null)], null))),sablono.interpreter.interpret.call(null,clustermap.components.full_report.company_list.int_or_default.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company)),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(n/a)"], null)], null)], null))));
});})(company_path,map__13048,map__13048__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t13049.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__13048,map__13048__$1,opts,path_fn,link_fn){
return (function (_13051){var self__ = this;
var _13051__$1 = this;return self__.meta13050;
});})(company_path,map__13048,map__13048__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t13049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__13048,map__13048__$1,opts,path_fn,link_fn){
return (function (_13051,meta13050__$1){var self__ = this;
var _13051__$1 = this;return (new clustermap.components.full_report.company_list.t13049(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__13048,self__.p__13038,self__.owner,self__.company,self__.portfolio_company,meta13050__$1));
});})(company_path,map__13048,map__13048__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t13049 = ((function (company_path,map__13048,map__13048__$1,opts,path_fn,link_fn){
return (function __GT_t13049(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13048__$2,p__13038__$1,owner__$1,company__$1,portfolio_company__$1,meta13050){return (new clustermap.components.full_report.company_list.t13049(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13048__$2,p__13038__$1,owner__$1,company__$1,portfolio_company__$1,meta13050));
});})(company_path,map__13048,map__13048__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t13049(company_path,link_fn,path_fn,opts,map__13048__$1,p__13038,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_list.t13077 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t13077 = (function (comm,opts,owner,companies,company_list,meta13078){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta13078 = meta13078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t13077.cljs$lang$type = true;
clustermap.components.full_report.company_list.t13077.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t13077";
clustermap.components.full_report.company_list.t13077.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4207__auto__,writer__4208__auto__,opt__4209__auto__){return cljs.core._write.call(null,writer__4208__auto__,"clustermap.components.full-report.company-list/t13077");
});})(comm))
;
clustermap.components.full_report.company_list.t13077.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t13077.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__10035__auto__){var self__ = this;
var this__10035__auto____$1 = this;var attrs13080 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13080))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs13080)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13080))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13081 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13081))?sablono.interpreter.attributes.call(null,attrs13081):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13081))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13081)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs13086 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13086))?sablono.interpreter.attributes.call(null,attrs13086):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13086))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13086)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs13087 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13087))?sablono.interpreter.attributes.call(null,attrs13087):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13087))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13087)], null))));
})())),(function (){var attrs13088 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13088))?sablono.interpreter.attributes.call(null,attrs13088):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13088))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13088)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13080),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13089 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13089))?sablono.interpreter.attributes.call(null,attrs13089):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13089))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13089)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs13094 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13094))?sablono.interpreter.attributes.call(null,attrs13094):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13094))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13094)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs13095 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13095))?sablono.interpreter.attributes.call(null,attrs13095):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13095))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13095)], null))));
})())),(function (){var attrs13096 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13096))?sablono.interpreter.attributes.call(null,attrs13096):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13096))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13096)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t13077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_13079){var self__ = this;
var _13079__$1 = this;return self__.meta13078;
});})(comm))
;
clustermap.components.full_report.company_list.t13077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_13079,meta13078__$1){var self__ = this;
var _13079__$1 = this;return (new clustermap.components.full_report.company_list.t13077(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta13078__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t13077 = ((function (comm){
return (function __GT_t13077(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta13078){return (new clustermap.components.full_report.company_list.t13077(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta13078));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t13077(comm,opts,owner,companies,company_list,null));
});
