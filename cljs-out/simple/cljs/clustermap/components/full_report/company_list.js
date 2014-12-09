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
{var attrs13026 = link_fn.call(null,type,first_obj);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13026))?sablono.interpreter.attributes.call(null,attrs13026):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13026))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13026),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
var value_or_default__delegate = function (value_formatter,value,p__13035){var vec__13038 = p__13035;var map__13039 = cljs.core.nth.call(null,vec__13038,(0),null);var map__13039__$1 = ((cljs.core.seq_QMARK_.call(null,map__13039))?cljs.core.apply.call(null,cljs.core.hash_map,map__13039):map__13039);var default$ = cljs.core.get.call(null,map__13039__$1,new cljs.core.Keyword(null,"default","default",-1987822328));var year = cljs.core.get.call(null,map__13039__$1,new cljs.core.Keyword(null,"year","year",335913393));if(cljs.core.truth_((function (){var and__3627__auto__ = value;if(cljs.core.truth_(and__3627__auto__))
{return (value > (0));
} else
{return and__3627__auto__;
}
})()))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),value_formatter.call(null,value),(cljs.core.truth_(year)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",year,")"], null):null)], null);
} else
{return default$;
}
};
var value_or_default = function (value_formatter,value,var_args){
var p__13035 = null;if (arguments.length > 2) {
  p__13035 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return value_or_default__delegate.call(this,value_formatter,value,p__13035);};
value_or_default.cljs$lang$maxFixedArity = 2;
value_or_default.cljs$lang$applyTo = (function (arglist__13040){
var value_formatter = cljs.core.first(arglist__13040);
arglist__13040 = cljs.core.next(arglist__13040);
var value = cljs.core.first(arglist__13040);
var p__13035 = cljs.core.rest(arglist__13040);
return value_or_default__delegate(value_formatter,value,p__13035);
});
value_or_default.cljs$core$IFn$_invoke$arity$variadic = value_or_default__delegate;
return value_or_default;
})()
;
clustermap.components.full_report.company_list.money_or_default = cljs.core.partial.call(null,clustermap.components.full_report.company_list.value_or_default,(function (p1__13041_SHARP_){return clustermap.formats.money.fmoney.call(null,p1__13041_SHARP_,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");
}));
clustermap.components.full_report.company_list.int_or_default = cljs.core.partial.call(null,clustermap.components.full_report.company_list.value_or_default,(function (p1__13042_SHARP_){return clustermap.formats.number.fnum.call(null,p1__13042_SHARP_,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");
}));
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__13043){var map__13053 = p__13043;var map__13053__$1 = ((cljs.core.seq_QMARK_.call(null,map__13053))?cljs.core.apply.call(null,cljs.core.hash_map,map__13053):map__13053);var opts = map__13053__$1;var path_fn = cljs.core.get.call(null,map__13053__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var link_fn = cljs.core.get.call(null,map__13053__$1,new cljs.core.Keyword(null,"link-fn","link-fn",-205760857));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),company);if(typeof clustermap.components.full_report.company_list.t13054 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t13054 = (function (company_path,link_fn,path_fn,opts,map__13053,p__13043,owner,company,portfolio_company,meta13055){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__13053 = map__13053;
this.p__13043 = p__13043;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta13055 = meta13055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t13054.cljs$lang$type = true;
clustermap.components.full_report.company_list.t13054.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t13054";
clustermap.components.full_report.company_list.t13054.cljs$lang$ctorPrWriter = ((function (company_path,map__13053,map__13053__$1,opts,path_fn,link_fn){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.full-report.company-list/t13054");
});})(company_path,map__13053,map__13053__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t13054.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t13054.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__13053,map__13053__$1,opts,path_fn,link_fn){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs13057 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),self__.company);return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13057))?sablono.interpreter.attributes.call(null,attrs13057):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13057))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13057)], null))));
})(),(function (){var attrs13058 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13058))?sablono.interpreter.attributes.call(null,attrs13058):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13058))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13058)], null))));
})(),(function (){var attrs13059 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",1803637324),(function (){var G__13061 = self__.company;var G__13061__$1 = (((G__13061 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",1568915708).cljs$core$IFn$_invoke$arity$1(G__13061));var G__13061__$2 = (((G__13061__$1 == null))?null:cljs.core.filter.call(null,((function (G__13061,G__13061__$1,this__10043__auto____$1,company_path,map__13053,map__13053__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",-1037933240).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__13061,G__13061__$1,this__10043__auto____$1,company_path,map__13053,map__13053__$1,opts,path_fn,link_fn))
,G__13061__$1));return G__13061__$2;
})());return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13059))?sablono.interpreter.attributes.call(null,attrs13059):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13059))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13059)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.full_report.company_list.money_or_default.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company)),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(not available)"], null)], null)], null))),(function (){var attrs13060 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.call(null,React.DOM.td,((cljs.core.map_QMARK_.call(null,attrs13060))?sablono.interpreter.attributes.call(null,attrs13060):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13060))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13060)], null))));
})(),sablono.interpreter.interpret.call(null,clustermap.components.full_report.company_list.money_or_default.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null))),sablono.interpreter.interpret.call(null,clustermap.components.full_report.company_list.int_or_default.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"year","year",335913393),clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",-1622918325).cljs$core$IFn$_invoke$arity$1(self__.company)),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null))));
});})(company_path,map__13053,map__13053__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t13054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__13053,map__13053__$1,opts,path_fn,link_fn){
return (function (_13056){var self__ = this;
var _13056__$1 = this;return self__.meta13055;
});})(company_path,map__13053,map__13053__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t13054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__13053,map__13053__$1,opts,path_fn,link_fn){
return (function (_13056,meta13055__$1){var self__ = this;
var _13056__$1 = this;return (new clustermap.components.full_report.company_list.t13054(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__13053,self__.p__13043,self__.owner,self__.company,self__.portfolio_company,meta13055__$1));
});})(company_path,map__13053,map__13053__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t13054 = ((function (company_path,map__13053,map__13053__$1,opts,path_fn,link_fn){
return (function __GT_t13054(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13053__$2,p__13043__$1,owner__$1,company__$1,portfolio_company__$1,meta13055){return (new clustermap.components.full_report.company_list.t13054(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__13053__$2,p__13043__$1,owner__$1,company__$1,portfolio_company__$1,meta13055));
});})(company_path,map__13053,map__13053__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t13054(company_path,link_fn,path_fn,opts,map__13053__$1,p__13043,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.full_report.company_list.t13082 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t13082 = (function (comm,opts,owner,companies,company_list,meta13083){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta13083 = meta13083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t13082.cljs$lang$type = true;
clustermap.components.full_report.company_list.t13082.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t13082";
clustermap.components.full_report.company_list.t13082.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.full-report.company-list/t13082");
});})(comm))
;
clustermap.components.full_report.company_list.t13082.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t13082.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__10043__auto__){var self__ = this;
var this__10043__auto____$1 = this;var attrs13085 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193));return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13085))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs13085)):{"className": "full-report-list"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13085))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13086 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13086))?sablono.interpreter.attributes.call(null,attrs13086):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13086))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13086)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs13091 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13091))?sablono.interpreter.attributes.call(null,attrs13091):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13091))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13091)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs13092 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13092))?sablono.interpreter.attributes.call(null,attrs13092):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13092))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13092)], null))));
})())),(function (){var attrs13093 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13093))?sablono.interpreter.attributes.call(null,attrs13093):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13093))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13093)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13085),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs13094 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1843675177));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13094))?sablono.interpreter.attributes.call(null,attrs13094):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13094))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13094)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs13099 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13099))?sablono.interpreter.attributes.call(null,attrs13099):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13099))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13099)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",470467487)))),(function (){var attrs13100 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",1463423589));return cljs.core.apply.call(null,React.DOM.th,((cljs.core.map_QMARK_.call(null,attrs13100))?sablono.interpreter.attributes.call(null,attrs13100):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13100))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13100)], null))));
})())),(function (){var attrs13101 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",1326822832).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"company_no","company_no",1886326649),new cljs.core.Keyword(null,"opts","opts",155075701),self__.opts], null));return cljs.core.apply.call(null,React.DOM.tbody,((cljs.core.map_QMARK_.call(null,attrs13101))?sablono.interpreter.attributes.call(null,attrs13101):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13101))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13101)], null))));
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",1219799193)))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t13082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_13084){var self__ = this;
var _13084__$1 = this;return self__.meta13083;
});})(comm))
;
clustermap.components.full_report.company_list.t13082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_13084,meta13083__$1){var self__ = this;
var _13084__$1 = this;return (new clustermap.components.full_report.company_list.t13082(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta13083__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t13082 = ((function (comm){
return (function __GT_t13082(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta13083){return (new clustermap.components.full_report.company_list.t13082(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta13083));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t13082(comm,opts,owner,companies,company_list,null));
});
