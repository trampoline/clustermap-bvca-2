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
{var attrs36560 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36560))?sablono.interpreter.attributes(attrs36560):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36560))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36560),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__36569){var map__36582 = p__36569;var map__36582__$1 = ((cljs.core.seq_QMARK_(map__36582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36582):map__36582);var opts = map__36582__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,cljs.core.constant$keyword$878);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36582__$1,cljs.core.constant$keyword$879);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$880,company) : path_fn.call(null,cljs.core.constant$keyword$880,company));if(typeof clustermap.components.full_report.company_list.t36583 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t36583 = (function (company_path,link_fn,path_fn,opts,map__36582,p__36569,owner,company,portfolio_company,meta36584){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__36582 = map__36582;
this.p__36569 = p__36569;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta36584 = meta36584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t36583.cljs$lang$type = true;
clustermap.components.full_report.company_list.t36583.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t36583";
clustermap.components.full_report.company_list.t36583.cljs$lang$ctorPrWriter = ((function (company_path,map__36582,map__36582__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t36583");
});})(company_path,map__36582,map__36582__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36583.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t36583.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__36582,map__36582__$1,opts,path_fn,link_fn){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs36586 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$880,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$880,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36586))?sablono.interpreter.attributes(attrs36586):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36586))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36586)], null))));
})(),(function (){var attrs36587 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$881,cljs.core.constant$keyword$882.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36587))?sablono.interpreter.attributes(attrs36587):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36587))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36587)], null))));
})(),(function (){var attrs36588 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$883,(function (){var G__36593 = self__.company;var G__36593__$1 = (((G__36593 == null))?null:cljs.core.constant$keyword$793.cljs$core$IFn$_invoke$arity$1(G__36593));var G__36593__$2 = (((G__36593__$1 == null))?null:cljs.core.filter(((function (G__36593,G__36593__$1,this__9454__auto____$1,company_path,map__36582,map__36582__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$884.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__36593,G__36593__$1,this__9454__auto____$1,company_path,map__36582,map__36582__$1,opts,path_fn,link_fn))
,G__36593__$1));return G__36593__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36588))?sablono.interpreter.attributes(attrs36588):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36588))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36588)], null))));
})(),(function (){var attrs36589 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$787.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$787.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36589))?sablono.interpreter.attributes(attrs36589):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36589))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$885.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36589),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$885.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs36590 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$886.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36590))?sablono.interpreter.attributes(attrs36590):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36590))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36590)], null))));
})(),(function (){var attrs36591 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$886.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$886.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$805,(2),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36591))?sablono.interpreter.attributes(attrs36591):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36591))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36591)], null))));
})(),(function (){var attrs36592 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$887.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$887.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$807,(0),cljs.core.constant$keyword$757,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs36592))?sablono.interpreter.attributes(attrs36592):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36592))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$885.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36592),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$885.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__36582,map__36582__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__36582,map__36582__$1,opts,path_fn,link_fn){
return (function (_36585){var self__ = this;
var _36585__$1 = this;return self__.meta36584;
});})(company_path,map__36582,map__36582__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t36583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__36582,map__36582__$1,opts,path_fn,link_fn){
return (function (_36585,meta36584__$1){var self__ = this;
var _36585__$1 = this;return (new clustermap.components.full_report.company_list.t36583(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__36582,self__.p__36569,self__.owner,self__.company,self__.portfolio_company,meta36584__$1));
});})(company_path,map__36582,map__36582__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t36583 = ((function (company_path,map__36582,map__36582__$1,opts,path_fn,link_fn){
return (function __GT_t36583(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36582__$2,p__36569__$1,owner__$1,company__$1,portfolio_company__$1,meta36584){return (new clustermap.components.full_report.company_list.t36583(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__36582__$2,p__36569__$1,owner__$1,company__$1,portfolio_company__$1,meta36584));
});})(company_path,map__36582,map__36582__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t36583(company_path,link_fn,path_fn,opts,map__36582__$1,p__36569,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$888);if(typeof clustermap.components.full_report.company_list.t36614 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t36614 = (function (comm,opts,owner,companies,company_list,meta36615){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta36615 = meta36615;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t36614.cljs$lang$type = true;
clustermap.components.full_report.company_list.t36614.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t36614";
clustermap.components.full_report.company_list.t36614.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t36614");
});})(comm))
;
clustermap.components.full_report.company_list.t36614.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t36614.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;var attrs36617 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$889);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs36617))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$808,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs36617], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36617))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36618 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Investor-backed company",cljs.core.constant$keyword$825);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36618))?sablono.interpreter.attributes(attrs36618):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36618))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36618)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs36623 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Revenue",cljs.core.constant$keyword$787);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36623))?sablono.interpreter.attributes(attrs36623):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36623))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36623)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Rev. change",cljs.core.constant$keyword$886))),(function (){var attrs36624 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Employees",cljs.core.constant$keyword$887);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36624))?sablono.interpreter.attributes(attrs36624):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36624))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36624)], null))));
})())),(function (){var attrs36625 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$890.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$868,cljs.core.constant$keyword$891,cljs.core.constant$keyword$871,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36625))?sablono.interpreter.attributes(attrs36625):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36625))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36625)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$889))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36617),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs36626 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Investor-backed company",cljs.core.constant$keyword$825);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36626))?sablono.interpreter.attributes(attrs36626):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36626))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36626)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs36631 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Revenue",cljs.core.constant$keyword$787);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36631))?sablono.interpreter.attributes(attrs36631):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36631))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36631)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Rev. change",cljs.core.constant$keyword$886))),(function (){var attrs36632 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$889,"Employees",cljs.core.constant$keyword$887);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs36632))?sablono.interpreter.attributes(attrs36632):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36632))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36632)], null))));
})())),(function (){var attrs36633 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$890.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$868,cljs.core.constant$keyword$891,cljs.core.constant$keyword$871,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs36633))?sablono.interpreter.attributes(attrs36633):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs36633))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs36633)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$889))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t36614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_36616){var self__ = this;
var _36616__$1 = this;return self__.meta36615;
});})(comm))
;
clustermap.components.full_report.company_list.t36614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_36616,meta36615__$1){var self__ = this;
var _36616__$1 = this;return (new clustermap.components.full_report.company_list.t36614(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta36615__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t36614 = ((function (comm){
return (function __GT_t36614(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta36615){return (new clustermap.components.full_report.company_list.t36614(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta36615));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t36614(comm,opts,owner,companies,company_list,null));
});
