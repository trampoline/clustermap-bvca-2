// Compiled by ClojureScript 0.0-2261
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs35245 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs35245))?sablono.interpreter.attributes(attrs35245):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35245))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35245),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__35254){var map__35267 = p__35254;var map__35267__$1 = ((cljs.core.seq_QMARK_(map__35267))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35267):map__35267);var opts = map__35267__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,cljs.core.constant$keyword$857);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35267__$1,cljs.core.constant$keyword$858);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$859,company) : path_fn.call(null,cljs.core.constant$keyword$859,company));if(typeof clustermap.components.full_report.company_list.t35268 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t35268 = (function (company_path,link_fn,path_fn,opts,map__35267,p__35254,owner,company,portfolio_company,meta35269){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__35267 = map__35267;
this.p__35254 = p__35254;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta35269 = meta35269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t35268.cljs$lang$type = true;
clustermap.components.full_report.company_list.t35268.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t35268";
clustermap.components.full_report.company_list.t35268.cljs$lang$ctorPrWriter = ((function (company_path,map__35267,map__35267__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t35268");
});})(company_path,map__35267,map__35267__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t35268.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t35268.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__35267,map__35267__$1,opts,path_fn,link_fn){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs35271 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$859,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$859,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35271))?sablono.interpreter.attributes(attrs35271):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35271))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35271)], null))));
})(),(function (){var attrs35272 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$860,cljs.core.constant$keyword$861.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35272))?sablono.interpreter.attributes(attrs35272):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35272))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35272)], null))));
})(),(function (){var attrs35273 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$862,(function (){var G__35278 = self__.company;var G__35278__$1 = (((G__35278 == null))?null:cljs.core.constant$keyword$770.cljs$core$IFn$_invoke$arity$1(G__35278));var G__35278__$2 = (((G__35278__$1 == null))?null:cljs.core.filter(((function (G__35278,G__35278__$1,this__9438__auto____$1,company_path,map__35267,map__35267__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__35278,G__35278__$1,this__9438__auto____$1,company_path,map__35267,map__35267__$1,opts,path_fn,link_fn))
,G__35278__$1));return G__35278__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35273))?sablono.interpreter.attributes(attrs35273):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35273))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35273)], null))));
})(),(function (){var attrs35274 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$764.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$764.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35274))?sablono.interpreter.attributes(attrs35274):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35274))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35274),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs35275 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$865.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35275))?sablono.interpreter.attributes(attrs35275):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35275))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35275)], null))));
})(),(function (){var attrs35276 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$865.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$865.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$782,(2),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35276))?sablono.interpreter.attributes(attrs35276):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35276))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35276)], null))));
})(),(function (){var attrs35277 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$866.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$866.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$784,(0),cljs.core.constant$keyword$737,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs35277))?sablono.interpreter.attributes(attrs35277):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35277))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35277),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__35267,map__35267__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t35268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__35267,map__35267__$1,opts,path_fn,link_fn){
return (function (_35270){var self__ = this;
var _35270__$1 = this;return self__.meta35269;
});})(company_path,map__35267,map__35267__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t35268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__35267,map__35267__$1,opts,path_fn,link_fn){
return (function (_35270,meta35269__$1){var self__ = this;
var _35270__$1 = this;return (new clustermap.components.full_report.company_list.t35268(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__35267,self__.p__35254,self__.owner,self__.company,self__.portfolio_company,meta35269__$1));
});})(company_path,map__35267,map__35267__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t35268 = ((function (company_path,map__35267,map__35267__$1,opts,path_fn,link_fn){
return (function __GT_t35268(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__35267__$2,p__35254__$1,owner__$1,company__$1,portfolio_company__$1,meta35269){return (new clustermap.components.full_report.company_list.t35268(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__35267__$2,p__35254__$1,owner__$1,company__$1,portfolio_company__$1,meta35269));
});})(company_path,map__35267,map__35267__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t35268(company_path,link_fn,path_fn,opts,map__35267__$1,p__35254,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$867);if(typeof clustermap.components.full_report.company_list.t35299 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t35299 = (function (comm,opts,owner,companies,company_list,meta35300){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta35300 = meta35300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t35299.cljs$lang$type = true;
clustermap.components.full_report.company_list.t35299.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t35299";
clustermap.components.full_report.company_list.t35299.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t35299");
});})(comm))
;
clustermap.components.full_report.company_list.t35299.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t35299.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;var attrs35302 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$868);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs35302))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$785,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs35302], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35302))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs35303 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Investor-backed company",cljs.core.constant$keyword$803);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35303))?sablono.interpreter.attributes(attrs35303):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35303))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35303)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs35308 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Revenue",cljs.core.constant$keyword$764);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35308))?sablono.interpreter.attributes(attrs35308):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35308))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35308)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Rev. change",cljs.core.constant$keyword$865))),(function (){var attrs35309 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Employees",cljs.core.constant$keyword$866);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35309))?sablono.interpreter.attributes(attrs35309):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35309))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35309)], null))));
})())),(function (){var attrs35310 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$869.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$847,cljs.core.constant$keyword$870,cljs.core.constant$keyword$850,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs35310))?sablono.interpreter.attributes(attrs35310):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35310))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35310)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$868))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35302),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs35311 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Investor-backed company",cljs.core.constant$keyword$803);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35311))?sablono.interpreter.attributes(attrs35311):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35311))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35311)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs35316 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Revenue",cljs.core.constant$keyword$764);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35316))?sablono.interpreter.attributes(attrs35316):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35316))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35316)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Rev. change",cljs.core.constant$keyword$865))),(function (){var attrs35317 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$868,"Employees",cljs.core.constant$keyword$866);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs35317))?sablono.interpreter.attributes(attrs35317):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35317))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35317)], null))));
})())),(function (){var attrs35318 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$869.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$847,cljs.core.constant$keyword$870,cljs.core.constant$keyword$850,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs35318))?sablono.interpreter.attributes(attrs35318):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35318))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35318)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$868))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t35299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_35301){var self__ = this;
var _35301__$1 = this;return self__.meta35300;
});})(comm))
;
clustermap.components.full_report.company_list.t35299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_35301,meta35300__$1){var self__ = this;
var _35301__$1 = this;return (new clustermap.components.full_report.company_list.t35299(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta35300__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t35299 = ((function (comm){
return (function __GT_t35299(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta35300){return (new clustermap.components.full_report.company_list.t35299(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta35300));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t35299(comm,opts,owner,companies,company_list,null));
});
