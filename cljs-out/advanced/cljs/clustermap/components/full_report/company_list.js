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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs37530 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37530))?sablono.interpreter.attributes(attrs37530):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37530))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.a({"href": owner_path},"\u00A0(more...)")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37530),React.DOM.a({"href": owner_path},"\u00A0(more...)")], null))));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__37539){var map__37552 = p__37539;var map__37552__$1 = ((cljs.core.seq_QMARK_(map__37552))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37552):map__37552);var opts = map__37552__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37552__$1,cljs.core.constant$keyword$893);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37552__$1,cljs.core.constant$keyword$894);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$895,company) : path_fn.call(null,cljs.core.constant$keyword$895,company));if(typeof clustermap.components.full_report.company_list.t37553 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t37553 = (function (company_path,link_fn,path_fn,opts,map__37552,p__37539,owner,company,portfolio_company,meta37554){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__37552 = map__37552;
this.p__37539 = p__37539;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta37554 = meta37554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t37553.cljs$lang$type = true;
clustermap.components.full_report.company_list.t37553.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t37553";
clustermap.components.full_report.company_list.t37553.cljs$lang$ctorPrWriter = ((function (company_path,map__37552,map__37552__$1,opts,path_fn,link_fn){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t37553");
});})(company_path,map__37552,map__37552__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37553.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t37553.prototype.om$core$IRender$render$arity$1 = ((function (company_path,map__37552,map__37552__$1,opts,path_fn,link_fn){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs37556 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$895,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$895,self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37556))?sablono.interpreter.attributes(attrs37556):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37556))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37556)], null))));
})(),(function (){var attrs37557 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$896,cljs.core.constant$keyword$897.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37557))?sablono.interpreter.attributes(attrs37557):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37557))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37557)], null))));
})(),(function (){var attrs37558 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$898,(function (){var G__37563 = self__.company;var G__37563__$1 = (((G__37563 == null))?null:cljs.core.constant$keyword$807.cljs$core$IFn$_invoke$arity$1(G__37563));var G__37563__$2 = (((G__37563__$1 == null))?null:cljs.core.filter(((function (G__37563,G__37563__$1,this__9490__auto____$1,company_path,map__37552,map__37552__$1,opts,path_fn,link_fn){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$899.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__37563,G__37563__$1,this__9490__auto____$1,company_path,map__37552,map__37552__$1,opts,path_fn,link_fn))
,G__37563__$1));return G__37563__$2;
})());return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37558))?sablono.interpreter.attributes(attrs37558):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37558))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37558)], null))));
})(),(function (){var attrs37559 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37559))?sablono.interpreter.attributes(attrs37559):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37559))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37559),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})(),(function (){var attrs37560 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.company));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37560))?sablono.interpreter.attributes(attrs37560):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37560))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37560)], null))));
})(),(function (){var attrs37561 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$901.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$820,(2),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37561))?sablono.interpreter.attributes(attrs37561):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37561))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37561)], null))));
})(),(function (){var attrs37562 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$902.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$902.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$822,(0),cljs.core.constant$keyword$769,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.td,((cljs.core.map_QMARK_(attrs37562))?sablono.interpreter.attributes(attrs37562):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37562))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37562),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3543__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$900.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "no info";
}
})()),")")], null))));
})());
});})(company_path,map__37552,map__37552__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37553.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (company_path,map__37552,map__37552__$1,opts,path_fn,link_fn){
return (function (_37555){var self__ = this;
var _37555__$1 = this;return self__.meta37554;
});})(company_path,map__37552,map__37552__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.t37553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (company_path,map__37552,map__37552__$1,opts,path_fn,link_fn){
return (function (_37555,meta37554__$1){var self__ = this;
var _37555__$1 = this;return (new clustermap.components.full_report.company_list.t37553(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__37552,self__.p__37539,self__.owner,self__.company,self__.portfolio_company,meta37554__$1));
});})(company_path,map__37552,map__37552__$1,opts,path_fn,link_fn))
;
clustermap.components.full_report.company_list.__GT_t37553 = ((function (company_path,map__37552,map__37552__$1,opts,path_fn,link_fn){
return (function __GT_t37553(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37552__$2,p__37539__$1,owner__$1,company__$1,portfolio_company__$1,meta37554){return (new clustermap.components.full_report.company_list.t37553(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__37552__$2,p__37539__$1,owner__$1,company__$1,portfolio_company__$1,meta37554));
});})(company_path,map__37552,map__37552__$1,opts,path_fn,link_fn))
;
}
return (new clustermap.components.full_report.company_list.t37553(company_path,link_fn,path_fn,opts,map__37552__$1,p__37539,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$903);if(typeof clustermap.components.full_report.company_list.t37584 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t37584 = (function (comm,opts,owner,companies,company_list,meta37585){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta37585 = meta37585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t37584.cljs$lang$type = true;
clustermap.components.full_report.company_list.t37584.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t37584";
clustermap.components.full_report.company_list.t37584.cljs$lang$ctorPrWriter = ((function (comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.full-report.company-list/t37584");
});})(comm))
;
clustermap.components.full_report.company_list.t37584.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t37584.prototype.om$core$IRender$render$arity$1 = ((function (comm){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;var attrs37587 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$904);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37587))?sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs37587], 0))):{"className": "full-report-list"}),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37587))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37588 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Investor-backed company",cljs.core.constant$keyword$840);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37588))?sablono.interpreter.attributes(attrs37588):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37588))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37588)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs37593 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Revenue",cljs.core.constant$keyword$803);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37593))?sablono.interpreter.attributes(attrs37593):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37593))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37593)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Rev. change",cljs.core.constant$keyword$901))),(function (){var attrs37594 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Employees",cljs.core.constant$keyword$902);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37594))?sablono.interpreter.attributes(attrs37594):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37594))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37594)], null))));
})())),(function (){var attrs37595 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,cljs.core.constant$keyword$906,cljs.core.constant$keyword$886,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37595))?sablono.interpreter.attributes(attrs37595):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37595))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37595)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$904))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37587),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs37596 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Investor-backed company",cljs.core.constant$keyword$840);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37596))?sablono.interpreter.attributes(attrs37596):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37596))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37596)], null))));
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs37601 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Revenue",cljs.core.constant$keyword$803);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37601))?sablono.interpreter.attributes(attrs37601):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37601))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37601)], null))));
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Rev. change",cljs.core.constant$keyword$901))),(function (){var attrs37602 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$904,"Employees",cljs.core.constant$keyword$902);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.th,((cljs.core.map_QMARK_(attrs37602))?sablono.interpreter.attributes(attrs37602):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37602))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37602)], null))));
})())),(function (){var attrs37603 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$905.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,cljs.core.constant$keyword$906,cljs.core.constant$keyword$886,self__.opts], null));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.tbody,((cljs.core.map_QMARK_(attrs37603))?sablono.interpreter.attributes(attrs37603):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37603))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37603)], null))));
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$904))], null))));
});})(comm))
;
clustermap.components.full_report.company_list.t37584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (comm){
return (function (_37586){var self__ = this;
var _37586__$1 = this;return self__.meta37585;
});})(comm))
;
clustermap.components.full_report.company_list.t37584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (comm){
return (function (_37586,meta37585__$1){var self__ = this;
var _37586__$1 = this;return (new clustermap.components.full_report.company_list.t37584(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta37585__$1));
});})(comm))
;
clustermap.components.full_report.company_list.__GT_t37584 = ((function (comm){
return (function __GT_t37584(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta37585){return (new clustermap.components.full_report.company_list.t37584(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta37585));
});})(comm))
;
}
return (new clustermap.components.full_report.company_list.t37584(comm,opts,owner,companies,company_list,null));
});
